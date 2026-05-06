// @ts-check

import Link from 'next/link';

import SiteLayout from '@/components/SiteLayout';
import SeoHead from '@/components/seo/SeoHead';

/**
 * @returns {import('react').ReactElement}
 */
export default function ServerErrorPage() {
  return (
    <>
      <SeoHead
        title="Something Went Wrong in Braeside | Sarav Motors"
        description="A temporary site error occurred. Return to Sarav Motors for car service, workshop details, or direct contact information in Braeside."
        path="/500"
        robots="noindex,nofollow"
      />
      <SiteLayout>
        <section className="py-[var(--section-space)]">
          <div className="section-shell">
            <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
              <p className="section-label text-[11px] font-semibold">500</p>
              <h1 className="section-heading mt-4 text-[var(--color-ink)]">
                Something went wrong on this page
              </h1>
              <p className="section-copy mt-6">
                The site hit a temporary problem. Please try again or use the links below to
                continue browsing.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition duration-300 hover:bg-[var(--color-brand-hover)]"
                >
                  Go home
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
