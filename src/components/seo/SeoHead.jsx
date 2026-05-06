// @ts-check

import Head from 'next/head';

import { DEFAULT_SEO, SEO_PLACEHOLDERS, getCanonicalUrl } from '@/lib/seo';

/**
 * @param {{
 *   title?: string;
 *   description?: string;
 *   path?: string;
 *   keywords?: string[] | string;
 *   image?: { url: string; width: number; height: number; alt: string };
 *   robots?: string;
 * }} props
 * @returns {import('react').ReactElement}
 */
export default function SeoHead({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  path = '/',
  keywords = DEFAULT_SEO.keywords,
  image = DEFAULT_SEO.ogImage,
  robots = 'index,follow',
}) {
  const canonical = getCanonicalUrl(path);
  const keywordContent = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordContent} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content="index,follow,max-image-preview:large" />
      <meta name="google-site-verification" content={SEO_PLACEHOLDERS.gscVerificationCode} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:site_name" content="Sarav Motors" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image.url} />
      <meta property="og:image:width" content={String(image.width)} />
      <meta property="og:image:height" content={String(image.height)} />
      <meta property="og:image:alt" content={image.alt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.url} />
    </Head>
  );
}
