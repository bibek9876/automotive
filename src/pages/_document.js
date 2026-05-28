// @ts-check

import { Head, Html, Main, NextScript } from 'next/document';

import { SEO_PLACEHOLDERS, hasResolvedValue } from '@/lib/seo';

const GTM_CONTAINER_ID = SEO_PLACEHOLDERS.gtmContainerId;
const shouldRenderTagManagerFallback = hasResolvedValue(GTM_CONTAINER_ID);

/**
 * @returns {import('react').ReactElement}
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" as="image" href="/images/braeside-car-service-hero.webp" />
      </Head>
      <body>
        {shouldRenderTagManagerFallback ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
              title="Google Tag Manager"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        ) : null}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
