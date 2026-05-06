// @ts-check

import { Head, Html, Main, NextScript } from 'next/document';

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
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
