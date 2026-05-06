// @ts-check

import { fetchWithRetry } from '@/lib/fetch-with-retry';
import { reportError } from '@/lib/monitoring';
import { quoteSchema } from '@/lib/quote-schema';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const WORKSHOP_EMAIL = 'saravmotors@gmail.com';
const requestStore = new Map();

/**
 * @param {string} key
 * @returns {{ count: number; resetAt: number }}
 */
function getRateLimitBucket(key) {
  const now = Date.now();
  const existing = requestStore.get(key);

  if (!existing || existing.resetAt < now) {
    const nextBucket = { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };
    requestStore.set(key, nextBucket);
    return nextBucket;
  }

  return existing;
}

/**
 * @param {import('next').NextApiRequest} request
 * @returns {string}
 */
function getClientKey(request) {
  const forwardedFor = request.headers['x-forwarded-for'];
  if (typeof forwardedFor === 'string' && forwardedFor.length > 0) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown';
  }

  return request.socket.remoteAddress || 'unknown';
}

/**
 * @param {import('next').NextApiRequest} request
 * @param {import('next').NextApiResponse} response
 * @returns {Promise<void>}
 */
export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    response.status(405).json({ message: 'Method not allowed.' });
    return;
  }

  const clientKey = getClientKey(request);
  const bucket = getRateLimitBucket(clientKey);
  bucket.count += 1;

  if (bucket.count > RATE_LIMIT_MAX_REQUESTS) {
    response.status(429).json({
      message: 'Too many quote requests. Please wait a few minutes and try again.',
    });
    return;
  }

  const parsed = quoteSchema.safeParse(request.body);

  if (!parsed.success) {
    response.status(400).json({
      message: 'Please correct the highlighted fields.',
      fieldErrors: parsed.error.flatten().fieldErrors,
    });
    return;
  }

  const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY } =
    process.env;

  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    response.status(503).json({
      message: 'Quote sending is not configured yet. Please call the workshop directly.',
    });
    return;
  }

  try {
    const emailResponse = await fetchWithRetry('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        accessToken: EMAILJS_PRIVATE_KEY,
        template_params: {
          to_email: WORKSHOP_EMAIL,
          reply_to: parsed.data.email,
          name: parsed.data.name,
          phone: parsed.data.phone,
          email: parsed.data.email,
          service: parsed.data.service,
          car_model: parsed.data.car_model,
          message: parsed.data.message,
        },
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      throw new Error(`EmailJS request failed: ${emailResponse.status} ${errorText}`);
    }

    response.status(200).json({
      message: 'Your quote request has been sent. We will be in touch shortly.',
    });
  } catch (error) {
    reportError(error, {
      source: 'api.quote',
      extra: {
        emailConfigured: Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY),
      },
    });

    response.status(502).json({
      message: 'We could not send your request right now. Please try again or call 0452066583.',
    });
  }
}
