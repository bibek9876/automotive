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
 *   gtmContainerId: string;
 *   gaMeasurementId: string;
 *   gscVerificationCode: string;
 * }} SeoPlaceholders
 */

/** @type {SeoPlaceholders} */
export const SEO_PLACEHOLDERS = {
  domain: 'saravmotors.com.au',
  phone: '0452 066 583',
  addressLine1: '3/356 Lower Dandenong Rd',
  postcode: '3195',
  latitude: '-37.983846373932344',
  longitude: '145.106708179243',
  facebookUrl: 'https://www.facebook.com/p/Sarav-Motors-100067355328860/',
  instagramUrl: '',
  googleBusinessUrl: 'https://share.google/BnuYOO0H02Y0bfr1S',
  gtmContainerId: 'GTM-MJFX9NF7',
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

export const SITE_URL = `https://saravmotors.com.au`;

export const DEFAULT_SEO = {
  title: 'Sarav Motors | Reliable Car Service & Repairs in Braeside',
  description:
    'Premium car service, repairs, and roadworthy inspections in Braeside. Honest workmanship, modern workshop, transparent pricing. Book online or call today.',
  keywords: [
    'car service Braeside',
    'mechanic Braeside',
    'car repairs Braeside',
    'logbook service Braeside',
    'auto repair Braeside',
    'roadworthy certificate Braeside',
    'brake repairs Braeside',
    'battery replacement Braeside',
    'mobile battery replacement Braeside',
    'wheel alignment Braeside',
    'tyre service Braeside',
    'pre purchase inspection Braeside',
    'car service Mordialloc',
    'car service Cheltenham',
    'car service Mentone',
    'mechanic Bayside Melbourne',
    'car service Lower Dandenong Road',
    'European car service Braeside',
    'vehicle inspection Braeside',
    'trusted mechanic Braeside',
  ],
  ogImage: {
    url: `https://saravmotors.com.au/og-image.jpg`,
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

/**
 * @param {unknown} value
 * @returns {value is string}
 */
export function hasResolvedValue(value) {
  return typeof value === 'string' && value.trim().length > 0 && !isPlaceholder(value);
}

/**
 * @param {Array<unknown>} values
 * @returns {string[]}
 */
export function getResolvedValues(values) {
  return values.filter(hasResolvedValue);
}
