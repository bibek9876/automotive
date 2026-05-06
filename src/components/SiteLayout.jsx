// @ts-check

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

/**
 * Main site layout wrapper.
 *
 * @param {{ children: import('react').ReactNode }} props
 * @returns {import('react').ReactElement}
 */
export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-[var(--color-navy)] text-[var(--color-ink)]">
      <Navbar />

      <main className="section-stack" id="main-content">
        {children}
      </main>

      <Footer />
    </div>
  );
}