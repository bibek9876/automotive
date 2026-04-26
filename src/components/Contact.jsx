"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-[var(--section-space)]">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel rounded-[2rem] p-8"
        >
          <p className="section-label text-[11px] font-semibold">Contact</p>
          <h2 className="section-heading mt-4 text-white">
            Visit the workshop or call directly.
          </h2>
          <div className="mt-8 space-y-7 text-base leading-8 text-[var(--color-copy)]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.26em] text-white/46">
                Phone
              </p>
              <a href="tel:0452066583" className="mt-3 block text-[1.32rem] font-semibold tracking-[-0.02em] text-white">
                0452066583
              </a>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.26em] text-white/46">
                Address
              </p>
              <p className="mt-3 text-[1.06rem] leading-8 text-white">
                3/356 Lower Dandenong Rd, Braeside VIC 3195, Australia
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.03]"
        >
          <iframe
            title="Sarav Motors map"
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
