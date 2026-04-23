"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-white/8"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/main-banner.png"
          alt="Premium black vehicle being hand cleaned inside a workshop"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,8,9,0.88)_0%,rgba(6,8,9,0.58)_42%,rgba(6,8,9,0.76)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,9,0.32)_0%,rgba(6,8,9,0.14)_24%,rgba(6,8,9,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(255,255,255,0.08),transparent_18%)]" />
      </div>

      <div className="section-shell relative flex min-h-[calc(100vh-89px)] items-center py-16 sm:py-20">
        <div className="max-w-[56rem]">
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.05}
            variants={fadeUp}
            className="section-label mb-7 text-[11px] font-semibold"
          >
            Premium Automotive Service In Braeside
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.12}
            variants={fadeUp}
            className="text-balance max-w-5xl text-[3.3rem] leading-[0.9] font-semibold tracking-[-0.055em] text-white sm:text-[4.5rem] lg:text-[6.8rem]"
          >
            Reliable Automotive Care You Can Trust
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.24}
            variants={fadeUp}
            className="mt-7 max-w-2xl text-[1.03rem] leading-8 text-white/82 sm:text-lg"
          >
            Sarav Motors Auto Repair Center delivers disciplined servicing,
            repairs, and inspections with clear communication, modern workshop
            standards, and a premium finish from the first call to handover.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.34}
            variants={fadeUp}
            className="mt-11 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:bg-[var(--color-paper)]"
            >
              Get a Quote
            </a>
            <a
              href="tel:0452066583"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-white/24 hover:bg-white/[0.07]"
            >
              Call Now
            </a>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.42}
            variants={fadeUp}
            className="mt-16 grid gap-4 border-t border-white/10 pt-8 text-sm text-white/78 sm:grid-cols-3"
          >
            <div className="rounded-[1.6rem] border border-white/10 bg-black/22 px-5 py-5 backdrop-blur-md">
              <p className="text-[1.7rem] font-semibold tracking-[-0.04em] text-white">9 Services</p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                Core maintenance and repair coverage
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-black/22 px-5 py-5 backdrop-blur-md">
              <p className="text-[1.7rem] font-semibold tracking-[-0.04em] text-white">Braeside VIC</p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                Local workshop with premium presentation
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-black/22 px-5 py-5 backdrop-blur-md">
              <p className="text-[1.7rem] font-semibold tracking-[-0.04em] text-white">Fast Quotes</p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                Direct phone support and online enquiries
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
