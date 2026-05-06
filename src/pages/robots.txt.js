// @ts-check

import { SITE_URL } from '@/lib/seo';

/**
 * @returns {string}
 */
function buildRobotsTxt() {
  return `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

/**
 * @param {{ res: import('http').ServerResponse }} context
 * @returns {Promise<{ props: {} }>}
 */
export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain');
  res.write(buildRobotsTxt());
  res.end();

  return { props: {} };
}

/**
 * @returns {null}
 */
export default function Robots() {
  return null;
}
