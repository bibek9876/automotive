// @ts-check

'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

import { reportError } from '@/lib/monitoring';
import { quoteSchema } from '@/lib/quote-schema';

const easing = /** @type {[number, number, number, number]} */ ([0.22, 1, 0.36, 1]);

/**
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} headingLevel
 * @param {string} headingId
 * @param {string} text
 * @returns {import('react').ReactElement}
 */
function renderHeading(headingLevel, headingId, text) {
  switch (headingLevel) {
    case 'h1':
      return (
        <h1 id={headingId} className="section-heading mt-4 text-[var(--color-ink)]">
          {text}
        </h1>
      );
    case 'h3':
      return (
        <h3 id={headingId} className="section-heading mt-4 text-[var(--color-ink)]">
          {text}
        </h3>
      );
    case 'h4':
      return (
        <h4 id={headingId} className="section-heading mt-4 text-[var(--color-ink)]">
          {text}
        </h4>
      );
    case 'h5':
      return (
        <h5 id={headingId} className="section-heading mt-4 text-[var(--color-ink)]">
          {text}
        </h5>
      );
    case 'h6':
      return (
        <h6 id={headingId} className="section-heading mt-4 text-[var(--color-ink)]">
          {text}
        </h6>
      );
    case 'h2':
    default:
      return (
        <h2 id={headingId} className="section-heading mt-4 text-[var(--color-ink)]">
          {text}
        </h2>
      );
  }
}

/**
 * @param {{
 *   services: { title: string }[];
 *   headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
 *   headingId?: string;
 * }} props
 * @returns {import('react').ReactElement}
 */
export default function QuoteForm({ services, headingLevel = 'h2', headingId = 'quote-heading' }) {
  const formRef = useRef(/** @type {HTMLFormElement | null} */ (null));
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [fieldErrors, setFieldErrors] = useState(
    /** @type {Record<string, string | undefined>} */ ({})
  );

  /**
   * @param {Record<string, string[] | undefined>} errors
   * @returns {Record<string, string | undefined>}
   */
  function normalizeFieldErrors(errors) {
    return {
      name: errors.name?.[0],
      phone: errors.phone?.[0],
      email: errors.email?.[0],
      service: errors.service?.[0],
      car_model: errors.car_model?.[0],
      message: errors.message?.[0],
      website: errors.website?.[0],
    };
  }

  /**
   * @param {import('react').FormEvent<HTMLFormElement>} event
   * @returns {Promise<void>}
   */
  async function handleSubmit(event) {
    event.preventDefault();

    const form = formRef.current;
    if (!form) {
      return;
    }

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const parsed = quoteSchema.safeParse(payload);

    if (!parsed.success) {
      setFieldErrors(normalizeFieldErrors(parsed.error.flatten().fieldErrors));
      setStatus({
        type: 'error',
        message: 'Please correct the highlighted fields before sending.',
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: '', message: '' });
    setFieldErrors({});

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsed.data),
      });

      /** @type {{ message?: string; fieldErrors?: Record<string, string[] | undefined> }} */
      const result = await response.json();

      if (!response.ok) {
        if (result.fieldErrors) {
          setFieldErrors(normalizeFieldErrors(result.fieldErrors));
        }

        setStatus({
          type: 'error',
          message:
            typeof result.message === 'string'
              ? result.message
              : 'We could not send your request right now. Please try again shortly.',
        });
        return;
      }

      form.reset();
      setStatus({
        type: 'success',
        message:
          typeof result.message === 'string'
            ? result.message
            : 'Your quote request has been sent. We will be in touch shortly.',
      });
    } catch (error) {
      reportError(error, { source: 'QuoteForm.handleSubmit' });
      setStatus({
        type: 'error',
        message: 'We could not send your request right now. Please try again or call 0452066583.',
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="quote"
      aria-labelledby={headingId}
      className="border-b border-[var(--color-divider)] py-[var(--section-space)]"
    >
      <div className="section-shell grid gap-12 lg:grid-cols-[0.86fr_1.14fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.82, ease: easing }}
        >
          <p className="section-label text-[11px] font-semibold">Get A Quote</p>
          {renderHeading(
            headingLevel,
            headingId,
            'Send the details once. Get a practical response without chasing.'
          )}
          <div className="mt-10 space-y-4 text-sm text-[var(--color-ink-soft)]">
            <div className="glass-panel rounded-[1.6rem] p-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-ink-muted)]">
                Phone
              </p>
              <a
                href="tel:0452066583"
                className="mt-3 block text-[1.25rem] font-semibold tracking-[-0.02em] text-[var(--color-brand-light)]"
              >
                0452066583
              </a>
            </div>
            <div className="glass-panel rounded-[1.6rem] p-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-ink-muted)]">
                Location
              </p>
              <p className="mt-3 text-[1.12rem] leading-8 font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
                3/356 Lower Dandenong Rd, Braeside VIC 3195, Australia
              </p>
            </div>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.82, ease: easing, delay: 0.05 }}
          className="glass-panel rounded-[2rem] p-6 sm:p-9"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              error={fieldErrors.name}
              required
            />
            <Field
              id="phone"
              label="Phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              error={fieldErrors.phone}
              required
            />
            <Field
              id="email"
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              error={fieldErrors.email}
              required
            />
            <div className="space-y-2">
              <label htmlFor="service" className="text-sm text-[var(--color-ink-soft)]">
                Service
              </label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                aria-describedby={fieldErrors.service ? 'service-error' : undefined}
                aria-invalid={Boolean(fieldErrors.service)}
                className="w-full rounded-2xl border border-[var(--color-ink-muted)] bg-[var(--color-surface-overlay)] px-4 py-3.5 text-sm text-[var(--color-ink)] outline-none transition duration-300 placeholder:text-[var(--color-ink-muted)] focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]"
              >
                <option value="" disabled className="bg-[var(--color-navy-surface)]">
                  Select a service
                </option>
                {services.map((service) => (
                  <option
                    key={service.title}
                    value={service.title}
                    className="bg-[var(--color-navy-surface)]"
                  >
                    {service.title}
                  </option>
                ))}
              </select>
              {fieldErrors.service ? (
                <p id="service-error" className="text-sm text-[var(--color-state-danger)]">
                  {fieldErrors.service}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-5">
            <Field
              id="car_model"
              label="Car Model"
              name="car_model"
              autoComplete="off"
              error={fieldErrors.car_model}
              required
            />
          </div>

          <div className="mt-5 space-y-2">
            <label htmlFor="message" className="text-sm text-[var(--color-ink-soft)]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Tell us what your vehicle needs, any symptoms, and your preferred timing."
              aria-describedby={fieldErrors.message ? 'message-error' : undefined}
              aria-invalid={Boolean(fieldErrors.message)}
              className="w-full rounded-[1.5rem] border border-[var(--color-ink-muted)] bg-[var(--color-surface-overlay)] px-4 py-3.5 text-sm leading-7 text-[var(--color-ink)] outline-none transition duration-300 placeholder:text-[var(--color-ink-muted)] focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]"
            />
            {fieldErrors.message ? (
              <p id="message-error" className="text-sm text-[var(--color-state-danger)]">
                {fieldErrors.message}
              </p>
            ) : null}
          </div>

          <div className="sr-only" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition duration-300 hover:bg-[var(--color-brand-hover)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? 'Sending...' : 'Request Quote'}
            </button>
            <p className="text-sm text-[var(--color-ink-muted)]">
              Required fields are validated before submission.
            </p>
          </div>

          {status.message ? (
            <p
              className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
                status.type === 'success'
                  ? 'border-[var(--color-state-success)] bg-[rgba(16,185,129,0.12)] text-[var(--color-ink-soft)]'
                  : 'border-[var(--color-state-danger)] bg-[rgba(239,68,68,0.12)] text-[var(--color-state-danger)]'
              }`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}

/**
 * @param {{
 *   id: string;
 *   label: string;
 *   name: string;
 *   type?: string;
 *   autoComplete?: string;
 *   required?: boolean;
 *   error?: string;
 * }} props
 * @returns {import('react').ReactElement}
 */
function Field({ id, label, name, type = 'text', autoComplete, required = false, error }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm text-[var(--color-ink-soft)]">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={Boolean(error)}
        className="w-full rounded-2xl border border-[var(--color-ink-muted)] bg-[var(--color-surface-overlay)] px-4 py-3.5 text-sm text-[var(--color-ink)] outline-none transition duration-300 placeholder:text-[var(--color-ink-muted)] focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]"
      />
      {error ? (
        <p id={`${id}-error`} className="text-sm text-[var(--color-state-danger)]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
