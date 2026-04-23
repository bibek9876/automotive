"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-white/8 py-[var(--section-space)]"
    >
      <div className="section-shell grid gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.1rem] border border-white/8 bg-white/[0.03]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,94,85,0.28),transparent_46%)]" />
          <Image
            src="/images/handshake.png"
            alt="Customer and technician shaking hands inside a premium automotive workshop"
            width={1536}
            height={1024}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
        >
          <p className="section-label text-[11px] font-semibold">About</p>
          <h2 className="section-heading mt-4 text-white">
            A local workshop built around trust, detail, and disciplined work.
          </h2>
          <div className="section-copy mt-8 space-y-6">
            <p>
              Sarav Motors Auto Repair Center supports drivers with premium
              everyday servicing, major repair work, and honest vehicle
              inspections. The approach is simple: diagnose properly, explain
              clearly, and deliver work that feels considered from start to
              finish.
            </p>
            <p>
              From log book servicing through to tyres, brakes, batteries, and
              transmission work, the workshop is designed to feel calm,
              precise, and dependable rather than rushed or transactional.
            </p>
          </div>

          <div className="mt-11 grid gap-4 sm:grid-cols-2">
            <div className="glass-panel rounded-[1.6rem] p-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-white/52">
                Workshop Focus
              </p>
              <p className="mt-4 text-[1.1rem] leading-7 font-semibold tracking-[-0.02em] text-white">
                Quality maintenance and repair coverage without unnecessary
                complexity.
              </p>
            </div>
            <div className="glass-panel rounded-[1.6rem] p-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-white/52">
                Customer Experience
              </p>
              <p className="mt-4 text-[1.1rem] leading-7 font-semibold tracking-[-0.02em] text-white">
                Straight communication, premium presentation, and practical
                advice.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
