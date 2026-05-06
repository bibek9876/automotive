// @ts-check

import Link from 'next/link';

import SiteLayout from '@/components/SiteLayout';
import SeoHead from '@/components/seo/SeoHead';

/**
 * @returns {import('react').ReactElement}
 */
export default function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="Page Not Found in Braeside | Sarav Motors"
        description="The page you requested could not be found. Return to Sarav Motors for car service, repairs, and contact details in Braeside."
        path="/404"
        robots="noindex,nofollow"
      />
      <SiteLayout>
        <section className="py-[var(--section-space)]">
          <div className="section-shell">
            <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
              <p className="section-label text-[11px] font-semibold">404</p>
              <h1 className="section-heading mt-4 text-[var(--color-ink)]">Page not found</h1>
              <p className="section-copy mt-6">
                The page you requested is unavailable. You can head back to the homepage, review the
                workshop services, or contact Sarav Motors directly.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition duration-300 hover:bg-[var(--color-brand-hover)]"
                >
                  Go home
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-ink-soft)] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition duration-300 hover:bg-[var(--color-hover-overlay)]"
                >
                  View services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-ink-soft)] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition duration-300 hover:bg-[var(--color-hover-overlay)]"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
