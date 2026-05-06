// @ts-check

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-navy-border)] bg-[rgba(10,22,40,0.84)] shadow-[0_10px_40px_rgba(10,22,40,0.28)] backdrop-blur-2xl">
      <nav
        aria-label="Primary navigation"
        className="section-shell flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-5"
      >
        <Link href="/" className="flex items-center" aria-label="Sarav Motors home">
          <Image
            src="/images/sarav-motors-logo-v2.png"
            alt="Sarav Motors logo"
            width={460}
            height={460}
            className="h-16 w-auto rounded-xl object-contain sm:h-18"
            sizes="(max-width: 640px) 160px, 184px"
            priority
          />
          <span className="sr-only">Sarav Motors</span>
        </Link>

        <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-ink-muted)]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full border px-3 py-2.5 transition duration-300 hover:border-[var(--color-navy-border)] hover:bg-[var(--color-hover-overlay)] hover:text-[var(--color-brand-light)] ${
                router.pathname === link.href
                  ? 'border-[var(--color-navy-border)] text-[var(--color-brand-light)]'
                  : 'border-transparent text-[var(--color-ink-muted)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:0452066583"
            className="rounded-full border border-[var(--color-brand)] bg-[var(--color-brand)] px-5 py-2.5 font-semibold text-[var(--color-ink)] transition duration-300 hover:bg-[var(--color-brand-hover)]"
          >
            Call Now
          </a>
        </div>
      </nav>
    </header>
  );
}
