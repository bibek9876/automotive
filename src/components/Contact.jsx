// @ts-check

'use client';

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
export default function Contact({ headingLevel = 'h2', headingId = 'contact-heading' }) {
  return (
    <section id="contact" aria-labelledby={headingId} className="py-[var(--section-space)]">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.82, ease: easing }}
          className="glass-panel rounded-[2rem] p-8"
        >
          <p className="section-label text-[11px] font-semibold">Contact</p>
          {renderHeading(headingLevel, headingId, 'Visit the workshop or call directly.')}
          <div className="mt-8 space-y-7 text-base leading-8 text-[var(--color-ink-soft)]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-ink-muted)]">
                Phone
              </p>
              <a
                href="tel:0452066583"
                className="mt-3 block text-[1.32rem] font-semibold tracking-[-0.02em] text-[var(--color-brand-light)]"
              >
                0452066583
              </a>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-ink-muted)]">
                Address
              </p>
              <p className="mt-3 text-[1.06rem] leading-8 text-[var(--color-ink)]">
                3/356 Lower Dandenong Rd, Braeside VIC 3195, Australia
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.82, ease: easing, delay: 0.05 }}
          className="overflow-hidden rounded-[2rem] border border-[var(--color-navy-border)] bg-[var(--color-navy-surface)]"
        >
          <iframe
            title="Map showing the Sarav Motors workshop location in Braeside"
            src="https://www.google.com/maps?q=3%2F356%20Lower%20Dandenong%20Rd%2C%20Braeside%20VIC%203195%2C%20Australia&z=15&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
