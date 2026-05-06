// @ts-check
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const easing = /** @type {[number, number, number, number]} */ ([0.22, 1, 0.36, 1]);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easing, delay },
  }),
};

const trustSignals = [
  { label: '4.9 Google Rating', icon: '★' },
  { label: '10+ Years Experience', icon: '•' },
  { label: 'Logbook Service Approved', icon: '•' },
];

/**
 * @returns {import('react').ReactElement}
 */
export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden border-b border-[var(--color-divider)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/braeside-car-service-hero.webp"
          alt="Vehicle being serviced inside the Sarav Motors workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,22,40,0.92)] via-[rgba(10,22,40,0.55)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,22,40,0.68)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.18),transparent_26%)]" />
      </div>

      <div className="section-shell relative flex min-h-[calc(100vh-89px)] items-center py-16 sm:py-20">
        <div className="max-w-[48rem]">
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.05}
            variants={fadeUp}
            className="section-label mb-6 text-[11px] font-semibold"
          >
            Premium Automotive Service · Braeside
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.08}
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-ink-soft)]"
          >
            Reliable Automotive Care You Can Trust
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial="hidden"
            animate="visible"
            custom={0.12}
            variants={fadeUp}
            className="mt-3 max-w-4xl text-[2.2rem] leading-[1.05] font-semibold tracking-[-0.05em] text-[var(--color-ink)] sm:text-[3.2rem] lg:text-[5rem]"
          >
            Car Servicing, Repairs & Mobile Battery Support
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.22}
            variants={fadeUp}
            className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-[var(--color-ink-soft)] sm:text-lg"
          >
            Professional servicing, mechanical repairs, inspections, and mobile battery replacement
            delivered with honest advice, accurate diagnostics, and quality workmanship.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-brand-hover)]"
            >
              Get a Quote
            </a>

            <a
              href="tel:+61452066583"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-ink-soft)] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-hover-overlay)]"
            >
              Call 0452 066 583
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[var(--color-ink-soft)]"
          >
            {trustSignals.map((signal, index) => (
              <div key={signal.label} className="flex items-center gap-3">
                <span className="text-[var(--color-gold)]" aria-hidden="true">
                  {signal.icon}
                </span>
                <span>{signal.label}</span>

                {index < trustSignals.length - 1 ? (
                  <span
                    className="hidden h-4 w-px bg-[var(--color-divider-strong)] sm:block"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}