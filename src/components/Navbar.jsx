const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(7,9,10,0.78)] backdrop-blur-2xl">
      <nav className="section-shell flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-5">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-sm font-semibold text-white">
            SM
          </span>
          <div>
            <p className="text-[11px] uppercase tracking-[0.38em] text-white/56">
              Sarav Motors
            </p>
            <p className="text-sm text-white/88">Auto Repair Center</p>
          </div>
        </a>

        <div className="flex flex-wrap items-center gap-2 text-sm text-white/68">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2.5 transition duration-300 hover:bg-white/[0.05] hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0452066583"
            className="rounded-full border border-white/10 bg-white px-5 py-2.5 font-semibold text-black transition duration-300 hover:bg-[var(--color-paper)]"
          >
            Call Now
          </a>
        </div>
      </nav>
    </header>
  );
}
