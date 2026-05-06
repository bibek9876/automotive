// @ts-check

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const easing = /** @type {[number, number, number, number]} */ ([0.22, 1, 0.36, 1]);

/**
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} headingLevel
 * @param {string} headingId
 * @param {string} text
 * @returns {import('react').ReactElement}
 */
function renderHeading(headingLevel, headingId, text) {
  switch (headingLevel) {
    case 'h1':
      return (
        <h1 id={headingId} className="section-heading mt-4 text-[var(--color-ink)]">
          {text}
        </h1>
      );
    case 'h3':
      return (
        <h3 id={headingId} className="section-heading mt-4 text-[var(--color-ink)]">
          {text}
        </h3>
      );
    case 'h4':
      return (
        <h4 id={headingId} className="section-heading mt-4 text-[var(--color-ink)]">
          {text}
        </h4>
      );
    case 'h5':
      return (
        <h5 id={headingId} className="section-heading mt-4 text-[var(--color-ink)]">
          {text}
        </h5>
      );
    case 'h6':
      return (
        <h6 id={headingId} className="section-heading mt-4 text-[var(--color-ink)]">
          {text}
        </h6>
      );
    case 'h2':
    default:
      return (
        <h2 id={headingId} className="section-heading mt-4 text-[var(--color-ink)]">
          {text}
        </h2>
      );
  }
}

/**
 * @param {{ headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; headingId?: string }} props
 * @returns {import('react').ReactElement}
 */
export default function About({ headingLevel = 'h2', headingId = 'about-heading' }) {
  return (
    <section
      id="about"
      aria-labelledby={headingId}
      className="border-b border-[var(--color-divider)] py-[var(--section-space)]"
    >
      <div className="section-shell grid gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: easing }}
          className="relative overflow-hidden rounded-[2.1rem] border border-[var(--color-navy-border)] bg-[var(--color-navy-surface)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.24),transparent_46%)]" />
          <Image
            src="/images/braeside-workshop-handshake.webp"
            alt="Customer greeting a technician inside the Sarav Motors workshop in Braeside"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: easing, delay: 0.06 }}
        >
          <p className="section-label text-[11px] font-semibold">About</p>
          {renderHeading(
            headingLevel,
            headingId,
            'A local workshop built around trust, detail, and disciplined work.'
          )}
          <div className="section-copy mt-8 space-y-6">
            <p>
              Sarav Motors supports drivers with premium everyday servicing, major repair work, and
              honest vehicle inspections. The approach is simple: diagnose properly, explain
              clearly, and deliver work that feels considered from start to finish.
            </p>
            <p>
              From log book servicing through to tyres, brakes, batteries, and transmission work,
              the workshop is designed to feel calm, precise, and dependable rather than rushed or
              transactional.
            </p>
          </div>

          <div className="mt-11 grid gap-4 sm:grid-cols-2">
            <div className="glass-panel rounded-[1.6rem] p-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-ink-muted)]">
                Workshop Focus
              </p>
              <p className="mt-4 text-[1.1rem] leading-7 font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
                Quality maintenance and repair coverage without unnecessary complexity.
              </p>
            </div>
            <div className="glass-panel rounded-[1.6rem] p-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-ink-muted)]">
                Customer Experience
              </p>
              <p className="mt-4 text-[1.1rem] leading-7 font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
                Straight communication, premium presentation, and practical advice.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
