// @ts-check

import Script from 'next/script';

import { getCanonicalUrl } from '@/lib/seo';

/**
 * @param {{ items: { name: string; path: string }[] }} props
 * @returns {import('react').ReactElement}
 */
export default function BreadcrumbSchema({ items }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };

  return (
    <Script
      id={`breadcrumb-schema-${items.map((item) => item.path).join('-')}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
