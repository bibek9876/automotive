// @ts-check

import { SITE_URL } from '@/lib/seo';

/**
 * @returns {string}
 */
function buildSitemapXml() {
  const lastModified = new Date().toISOString();
  const routes = [
    { path: '/', changeFrequency: 'monthly', priority: '1.0' },
    { path: '/services', changeFrequency: 'monthly', priority: '0.9' },
    { path: '/about', changeFrequency: 'yearly', priority: '0.5' },
    { path: '/contact', changeFrequency: 'yearly', priority: '0.7' },
  ];

  const urls = routes
    .map(({ path, changeFrequency, priority }) => {
      const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
      return `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;
}

/**
 * @param {{ res: import('http').ServerResponse }} context
 * @returns {Promise<{ props: {} }>}
 */
export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/xml');
  res.write(buildSitemapXml());
  res.end();

  return { props: {} };
}

/**
 * @returns {null}
 */
export default function Sitemap() {
  return null;
}
