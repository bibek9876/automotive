const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-accent)]/20 bg-[rgba(5,12,24,0.84)] shadow-[0_10px_40px_rgba(10,28,60,0.28)] backdrop-blur-2xl">
      <nav className="section-shell flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-5">
        <a href="#home" className="flex items-center">
          <div>
            <p className="text-[1.05rem] leading-none font-semibold tracking-[0.34em] text-white">
              SARAV
            </p>
            <p className="mt-1 text-[0.88rem] leading-none font-medium tracking-[0.3em] text-[var(--color-paper)]/78">
              MOTORS
            </p>
          </div>
        </a>

        <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-paper)]/78">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-transparent px-3 py-2.5 transition duration-300 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)]/16 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0452066583"
            className="rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)] px-5 py-2.5 font-semibold text-white transition duration-300 hover:bg-[var(--color-accent-soft)]"
          >
            Call Now
          </a>
        </div>
      </nav>
    </header>
  );
}
