// @ts-check

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const easing = /** @type {[number, number, number, number]} */ ([0.22, 1, 0.36, 1]);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easing, delay },
  }),
};

/**
 * @returns {import('react').ReactElement}
 */
export default function Hero() {
  const trustSignals = [
    { label: '4.9 Google Rating', icon: '\u2605' },
    { label: '10+ Years in Braeside', icon: '\u2022' },
    { label: 'Logbook Service Approved', icon: '\u2022' },
  ];

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden border-b border-[var(--color-divider)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/braeside-car-service-hero.webp"
          alt="Vehicle receiving premium finishing work inside the Sarav Motors workshop in Braeside"
          width={1400}
          height={933}
          priority
          className="absolute inset-0 h-full w-full object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,22,40,0.85)_0%,rgba(10,22,40,0.4)_60%,rgba(10,22,40,0.1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,22,40,0.16)_0%,rgba(10,22,40,0.08)_24%,rgba(10,22,40,0.42)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(37,99,235,0.18),transparent_20%)]" />
      </div>

      <div className="section-shell relative flex min-h-[calc(100vh-89px)] items-center py-16 sm:py-20">
        <div className="max-w-[48rem]">
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.05}
            variants={fadeUp}
            className="section-label mb-7 text-[11px] font-semibold"
          >
            Premium Automotive Service In Braeside
          </motion.p>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.08}
            variants={fadeUp}
            className="max-w-2xl text-sm font-medium tracking-[0.08em] text-[var(--color-ink-soft)] uppercase"
          >
            Reliable Automotive Care You Can Trust
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.12}
            variants={fadeUp}
            id="hero-heading"
            className="max-w-4xl text-[2.1rem] leading-[1.06] font-semibold tracking-[-0.05em] text-[var(--color-ink)] sm:text-[3.1rem] lg:text-[5.1rem]"
          >
            Reliable Car Service & Repairs in Braeside
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.24}
            variants={fadeUp}
            className="mt-7 max-w-2xl text-[1.03rem] leading-8 text-[var(--color-ink-soft)] sm:text-lg"
          >
            Honest servicing, repairs, and inspections backed by clear communication, modern
            workshop standards, and a premium finish from the first call to handover.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.34}
            variants={fadeUp}
            className="mt-11 flex flex-col gap-4 md:flex-row"
          >
            <a
              href="#quote"
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition duration-300 hover:bg-[var(--color-brand-hover)] md:w-auto"
            >
              Get a Quote
            </a>
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center rounded-full border border-[var(--color-ink-soft)] bg-transparent px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition duration-300 hover:bg-[var(--color-hover-overlay)] md:w-auto"
            >
              View Services
            </a>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.42}
            variants={fadeUp}
            className="mt-7 flex max-w-3xl flex-wrap items-center gap-x-3 gap-y-2 text-[14px] leading-6 text-[var(--color-ink-soft)]"
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
