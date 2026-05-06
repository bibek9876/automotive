// @ts-check

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const easing = /** @type {[number, number, number, number]} */ ([0.22, 1, 0.36, 1]);

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.82, ease: easing, delay },
  }),
};

/**
 * @returns {import('react').ReactElement}
 */
export default function CarCleaning() {
  return (
    <section
      id="cleaning"
      aria-labelledby="cleaning-heading"
      className="border-b border-[var(--color-divider)] py-[var(--section-space)]"
    >
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
            variants={reveal}
          >
            <p className="section-label text-[11px] font-semibold">Car Cleaning</p>
            <h2 id="cleaning-heading" className="section-heading mt-4 text-[var(--color-ink)]">
              Clean presentation with the same premium standard as the workshop.
            </h2>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.08}
            variants={reveal}
            className="section-copy max-w-2xl"
          >
            This section now highlights both workshop and mobile support with sharper, more direct
            imagery that fits the Sarav Motors brand and the services now offered on-site and on
            the road.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.02}
            variants={reveal}
            className="glass-panel overflow-hidden rounded-[2rem]"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/sarav-mobile-battery-replacement.jpeg"
                alt="Sarav Motors technician performing a mobile battery replacement beside a service vehicle"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,22,40,0.02)_0%,rgba(10,22,40,0.2)_52%,rgba(10,22,40,0.72)_100%)]" />
            </div>
            <div className="p-7 sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-ink-muted)]">
                Mobile Support
              </p>
              <h3 className="mt-3 text-[1.8rem] leading-[1.04] font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                Mobile battery replacement with clear branding and fast response.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">
                The wider image now shows the mobile service offer directly, with a stronger
                customer-facing message around rapid support, battery replacement, and callout
                convenience at the client location.
              </p>
            </div>
          </motion.article>

          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.08}
            variants={reveal}
            className="glass-panel overflow-hidden rounded-[2rem]"
          >
            <div className="relative aspect-[4/5] lg:aspect-[5/6]">
              <Image
                src="/images/sarav-workshop-engine-service.jpeg"
                alt="Sarav Motors technician working on an engine inside the workshop"
                width={1402}
                height={1277}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,22,40,0.04)_0%,rgba(10,22,40,0.16)_46%,rgba(10,22,40,0.7)_100%)]" />
            </div>
            <div className="p-7 sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-ink-muted)]">
                Workshop Detail
              </p>
              <h3 className="mt-3 text-[1.5rem] leading-[1.08] font-semibold tracking-[-0.035em] text-[var(--color-ink)]">
                Close-detail workshop imagery that reinforces care and technical focus.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">
                The tighter crop balances the mobile service image and shows a hands-on workshop
                environment, giving the page a more credible mix of field support and mechanical
                precision.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
