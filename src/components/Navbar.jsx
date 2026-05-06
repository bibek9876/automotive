// @ts-check

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/**
 * @returns {import('react').ReactElement}
 */
export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-navy-border)] bg-[rgba(10,22,40,0.86)] shadow-[0_10px_40px_rgba(10,22,40,0.28)] backdrop-blur-2xl">
      <nav
        aria-label="Primary navigation"
        className="section-shell flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-5"
      >
        <Link href="/" aria-label="Sarav Motors home" className="flex items-center gap-3">
          <Image
            src="/favicon.ico"
            alt="Sarav Motors icon"
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-xl object-contain"
          />

          <span className="text-base font-semibold tracking-wide text-[var(--color-ink)]">
            Sarav Motors
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-2 text-sm">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-full border px-3 py-2.5 transition duration-300 ${
                  isActive
                    ? 'border-[var(--color-navy-border)] bg-[var(--color-hover-overlay)] text-[var(--color-brand-light)]'
                    : 'border-transparent text-[var(--color-ink-muted)] hover:border-[var(--color-navy-border)] hover:bg-[var(--color-hover-overlay)] hover:text-[var(--color-brand-light)]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href="tel:+61452066583"
            className="rounded-full border border-[var(--color-brand)] bg-[var(--color-brand)] px-5 py-2.5 font-semibold text-[var(--color-ink)] transition duration-300 hover:bg-[var(--color-brand-hover)]"
          >
            Call Now
          </a>
        </div>
      </nav>
    </header>
  );
}