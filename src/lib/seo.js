// @ts-check

/**
 * @typedef {{
 *   domain: string;
 *   phone: string;
 *   addressLine1: string;
 *   postcode: string;
 *   latitude: string;
 *   longitude: string;
 *   facebookUrl: string;
 *   instagramUrl: string;
 *   googleBusinessUrl: string;
 *   gaMeasurementId: string;
 *   gscVerificationCode: string;
 * }} SeoPlaceholders
 */

/** @type {SeoPlaceholders} */
export const SEO_PLACEHOLDERS = {
  domain: '{{DOMAIN}}',
  phone: '{{PHONE}}',
  addressLine1: '{{ADDRESS_LINE_1}}',
  postcode: '{{POSTCODE}}',
  latitude: '{{LAT}}',
  longitude: '{{LNG}}',
  facebookUrl: '{{FACEBOOK_URL}}',
  instagramUrl: '{{INSTAGRAM_URL}}',
  googleBusinessUrl: '{{GOOGLE_BUSINESS_URL}}',
  gaMeasurementId: '{{GA_MEASUREMENT_ID}}',
  gscVerificationCode: '{{GSC_VERIFICATION_CODE}}',
};

export const BUSINESS = {
  name: 'Sarav Motors',
  type: 'Auto repair / car service',
  location: 'Braeside, Victoria, Australia',
  locality: 'Braeside',
  region: 'VIC',
  country: 'AU',
  serviceArea: ['Braeside', 'Mentone', 'Cheltenham', 'Mordialloc', 'Bayside region'],
  primaryKeyword: 'car service Braeside',
};

export const SITE_URL = `https://${SEO_PLACEHOLDERS.domain}`;

export const DEFAULT_SEO = {
  title: 'Sarav Motors | Reliable Car Service & Repairs in Braeside',
  description:
    'Premium car service, repairs, and roadworthy inspections in Braeside. Honest workmanship, modern workshop, transparent pricing. Book online or call today.',
  keywords: [
    'car service Braeside',
    'mechanic Braeside',
    'car repairs Braeside',
    'roadworthy Braeside',
    'logbook service Bayside',
  ],
  ogImage: {
    url: `${SITE_URL}/og-image.jpg`,
    width: 1200,
    height: 630,
    alt: 'Sarav Motors workshop in Braeside',
  },
};

/**
 * @param {string} [path="/"]
 * @returns {string}
 */
export function getCanonicalUrl(path = '/') {
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`;
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isPlaceholder(value) {
  return typeof value === 'string' && value.includes('{{');
}
