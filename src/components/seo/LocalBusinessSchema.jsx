// @ts-check

import {
  BUSINESS,
  DEFAULT_SEO,
  SEO_PLACEHOLDERS,
  SITE_URL,
  getResolvedValues,
} from '@/lib/seo';

/**
 * @returns {import('react').ReactElement}
 */
export default function LocalBusinessSchema() {
  const sameAs = getResolvedValues([
    SEO_PLACEHOLDERS.facebookUrl,
    SEO_PLACEHOLDERS.instagramUrl,
    SEO_PLACEHOLDERS.googleBusinessUrl,
  ]);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: BUSINESS.name,
    image: DEFAULT_SEO.ogImage.url,
    '@id': SITE_URL,
    url: SITE_URL,
    telephone: SEO_PLACEHOLDERS.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SEO_PLACEHOLDERS.addressLine1,
      addressLocality: BUSINESS.locality,
      addressRegion: BUSINESS.region,
      postalCode: SEO_PLACEHOLDERS.postcode,
      addressCountry: BUSINESS.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SEO_PLACEHOLDERS.latitude,
      longitude: SEO_PLACEHOLDERS.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Braeside' },
      { '@type': 'City', name: 'Mentone' },
      { '@type': 'City', name: 'Cheltenham' },
      { '@type': 'City', name: 'Mordialloc' },
    ],
  };

  if (sameAs.length > 0) {
    schema.sameAs = sameAs;
  }

  return (
    <script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
