// @ts-check

import NotFoundPage from '@/pages/404';
import ServerErrorPage from '@/pages/500';

/**
 * @param {{ statusCode?: number }} props
 * @returns {import('react').ReactElement}
 */
export default function ErrorPage({ statusCode = 500 }) {
  if (statusCode === 404) {
    return <NotFoundPage />;
  }

  return <ServerErrorPage />;
}

/**
 * @param {{ res?: { statusCode?: number }; err?: { statusCode?: number } }} context
 * @returns {Promise<{ statusCode: number }>}
 */
ErrorPage.getInitialProps = async ({ res, err }) => {
  return {
    statusCode: res?.statusCode ?? err?.statusCode ?? 500,
  };
};
