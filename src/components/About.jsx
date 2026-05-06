// @ts-check
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const easing = /** @type {[number, number, number, number]} */ ([0.22, 1, 0.36, 1]);

const headingClasses = 'section-heading mt-4 text-[var(--color-ink)]';

/**
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} Tag
 * @param {string} id
 * @param {string} children
 * @returns {import('react').ReactElement}
 */
function SectionHeading(Tag, id, children) {
  return (
    <Tag id={id} className={headingClasses}>
      {children}
    </Tag>
  );
}

/**
 * @param {{
 * headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
 * headingId?: string;
 * }} props
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
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: easing }}
          className="relative overflow-hidden rounded-[2.1rem] border border-[var(--color-navy-border)] bg-[var(--color-navy-surface)] shadow-xl"
        >
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.22),transparent_46%)]" />

          <Image
            src="/images/braeside-workshop-handshake.webp"
            alt="Customer greeting a technician inside the Sarav Motors workshop in Braeside"
            width={1200}
            height={800}
            priority={false}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: easing, delay: 0.06 }}
        >
          <p className="section-label text-[11px] font-semibold">About Sarav Motors</p>

          {SectionHeading(
            headingLevel,
            headingId,
            'A trusted local workshop focused on quality, honesty, and reliable workmanship.'
          )}

          <div className="section-copy mt-8 space-y-6">
            <p>
              Sarav Motors provides dependable vehicle servicing, mechanical repairs, inspections,
              tyres, brakes, batteries, and transmission support. Every job is approached with care,
              accurate diagnostics, and clear communication.
            </p>

            <p>
              Our focus is to make vehicle maintenance simple and stress-free. Whether it is routine
              logbook servicing or a more complex repair, customers can expect practical advice,
              transparent service, and workmanship completed to a high standard.
            </p>
          </div>

          <div className="mt-11 grid gap-4 sm:grid-cols-2">
            <div className="glass-panel rounded-[1.6rem] p-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-ink-muted)]">
                Workshop Focus
              </p>

              <p className="mt-4 text-[1.1rem] leading-7 font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
                Professional servicing and repairs delivered with accuracy, care, and attention to
                detail.
              </p>
            </div>

            <div className="glass-panel rounded-[1.6rem] p-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-ink-muted)]">
                Customer Experience
              </p>

              <p className="mt-4 text-[1.1rem] leading-7 font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
                Honest communication, practical recommendations, and a smooth experience from
                booking to completion.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}