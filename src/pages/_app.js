// @ts-check

import Script from 'next/script';
import { useEffect } from 'react';

import ErrorBoundary from '@/components/ErrorBoundary';
import SeoHead from '@/components/seo/SeoHead';
import '@/app/globals.css';
import { reportError } from '@/lib/monitoring';
import { SEO_PLACEHOLDERS, isPlaceholder } from '@/lib/seo';

const GA_MEASUREMENT_ID = SEO_PLACEHOLDERS.gaMeasurementId;
const shouldLoadAnalytics = !isPlaceholder(GA_MEASUREMENT_ID);

/**
 * @param {import('next/app').AppProps} props
 * @returns {import('react').ReactElement}
 */
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    /**
     * @param {PromiseRejectionEvent} event
     * @returns {void}
     */
    function handleUnhandledRejection(event) {
      reportError(event.reason, { source: 'window.unhandledrejection' });
    }

    /**
     * @param {ErrorEvent} event
     * @returns {void}
     */
    function handleWindowError(event) {
      reportError(event.error ?? event.message, { source: 'window.error' });
    }

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleWindowError);

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleWindowError);
    };
  }, []);

  return (
    <>
      <SeoHead />
      {shouldLoadAnalytics ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      ) : null}
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
}
