// @ts-check

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

/**
 * @param {{ children: import('react').ReactNode }} props
 * @returns {import('react').ReactElement}
 */
export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="section-stack bg-[var(--color-navy)] text-[var(--color-ink)]">
        {children}
      </main>
      <Footer />
    </>
  );
}
