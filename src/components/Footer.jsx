export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black/20">
      <div className="section-shell flex flex-col gap-6 py-10 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[1.02rem] font-semibold tracking-[-0.02em] text-white">
            Sarav Motors
          </p>
          <p className="mt-2 max-w-lg leading-7">
            Premium automotive servicing and repairs in Braeside, Victoria.
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Designed by NxtDesigns
          </p>
        </div>
        <div className="space-y-2 text-sm sm:text-right">
          <a href="tel:0452066583" className="block font-semibold text-white">
            0452066583
          </a>
          <p>3/356 Lower Dandenong Rd, Braeside VIC 3195, Australia</p>
        </div>
      </div>
    </footer>
  );
}
