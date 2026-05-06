// @ts-check

/**
 * @returns {import('react').ReactElement}
 */
export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="border-t border-[var(--color-divider)] bg-[var(--color-navy-surface)]"
    >
      <div className="section-shell flex flex-col gap-6 py-10 text-sm text-[var(--color-ink-muted)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[1.02rem] font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
            Sarav Motors
          </p>
          <p className="mt-2 max-w-lg leading-7">
            Premium automotive servicing and repairs in Braeside, Victoria.
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">
            Designed by NxtDesigns
          </p>
        </div>
        <div className="space-y-2 text-sm sm:text-right">
          <a href="tel:0452066583" className="block font-semibold text-[var(--color-brand-light)]">
            0452066583
          </a>
          <a
            href="mailto:saravmotors@gmail.com"
            className="block font-semibold text-[var(--color-brand-light)]"
          >
            saravmotors@gmail.com
          </a>
          <p>3/356 Lower Dandenong Rd, Braeside VIC 3195, Australia</p>
          <p>ABN 48 694 343 354</p>
          <p>&copy; {new Date().getFullYear()} Sarav Motors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
