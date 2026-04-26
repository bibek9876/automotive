"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Carousel({ items }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-52%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["-0.6deg", "0.6deg"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[190vh] border-b border-white/8"
    >
      <div className="sticky top-[81px] overflow-hidden pt-2">
        <div className="section-shell pt-8 pb-7 sm:pt-10 sm:pb-8">
          <div className="max-w-3xl">
            <p className="section-label text-[11px] font-semibold">Workshop View</p>
            <h2 className="section-heading mt-4 text-white">
              Our top services, trusted by local drivers for everyday care and major repairs.
            </h2>
          </div>
        </div>

        <motion.div
          style={{ x, rotate }}
          className="flex w-max items-stretch gap-4 px-6 pb-16 sm:px-8"
        >
          {items.map((item, index) => (
            <article
              key={item.title}
              className="glass-panel relative flex w-[68vw] max-w-[370px] shrink-0 flex-col overflow-hidden rounded-[1.6rem] md:w-[31vw] lg:w-[27vw]"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 68vw, (max-width: 1024px) 31vw, 27vw"
                />
              </div>
              <div className="p-3.5 sm:p-4">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/48">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1.5 text-[1.12rem] leading-[1.08] font-semibold tracking-[-0.035em] text-white sm:text-[1.24rem]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-sm text-[0.92rem] leading-5.5 text-[var(--color-copy)]">
                  {item.caption}
                </p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
