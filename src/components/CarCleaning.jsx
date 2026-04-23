"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function CarCleaning() {
  return (
    <section
      id="cleaning"
      className="border-b border-white/8 py-[var(--section-space)]"
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
            <p className="section-label text-[11px] font-semibold">
              Car Cleaning
            </p>
            <h2 className="section-heading mt-4 text-white">
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
            Detailing visuals now sit in their own section with sharper image
            treatment and restrained spacing, so the page can showcase vehicle
            care without breaking the minimal service-center feel.
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
                src="/images/car-washing.png"
                alt="Blue car covered in foam during a premium wash"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,10,0.02)_0%,rgba(7,9,10,0.24)_52%,rgba(7,9,10,0.82)_100%)]" />
            </div>
            <div className="p-7 sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/46">
                Exterior Care
              </p>
              <h3 className="mt-3 text-[1.8rem] leading-[1.04] font-semibold tracking-[-0.04em] text-white">
                Foam wash presentation that reinforces a premium handover.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-copy)]">
                Strong automotive branding depends on the finish, not just the
                repair. This section gives the site a cleaner customer-facing
                moment between technical services and the quote form.
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
                src="/images/car-cleaning.png"
                alt="Close-up of wheel cleaning with foam and microfiber mitt"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,10,0.04)_0%,rgba(7,9,10,0.18)_46%,rgba(7,9,10,0.8)_100%)]" />
            </div>
            <div className="p-7 sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/46">
                Wheel Detail
              </p>
              <h3 className="mt-3 text-[1.5rem] leading-[1.08] font-semibold tracking-[-0.035em] text-white">
                Close-detail imagery for wheels, foam, and finishing work.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-copy)]">
                The tighter crop balances the wider wash image and gives the
                page a more editorial layout, which suits the luxury-garage
                direction better than another generic card grid.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
