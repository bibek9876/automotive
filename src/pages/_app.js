// @ts-check

import Script from 'next/script';
import { useEffect } from 'react';

import ErrorBoundary from '@/components/ErrorBoundary';
import SeoHead from '@/components/seo/SeoHead';
import '@/app/globals.css';
import { reportError } from '@/lib/monitoring';
import { SEO_PLACEHOLDERS, hasResolvedValue, isPlaceholder } from '@/lib/seo';

const GTM_CONTAINER_ID = SEO_PLACEHOLDERS.gtmContainerId;
const GA_MEASUREMENT_ID = SEO_PLACEHOLDERS.gaMeasurementId;
const shouldLoadTagManager = hasResolvedValue(GTM_CONTAINER_ID);
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
      {shouldLoadTagManager ? (
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');
          `}
        </Script>
      ) : null}
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
