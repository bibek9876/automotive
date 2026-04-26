"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const hotspots = [
  {
    id: "log-book",
    title: "Log Book Service",
    description:
      "Scheduled servicing aligned with manufacturer intervals to protect reliability and warranty expectations.",
    anchor: { x: 17, y: 28 },
    trigger: { x: 6, y: 12, align: "left" },
  },
  {
    id: "mechanical",
    title: "Mechanical Repairs",
    description:
      "Diagnostics and repair work for day-to-day drivability, wear items, and workshop-critical faults.",
    anchor: { x: 41, y: 40 },
    trigger: { x: 24, y: 18, align: "left" },
  },
  {
    id: "brakes",
    title: "Brakes",
    description:
      "Pad, rotor, and braking system inspection and replacement focused on safe, predictable stopping.",
    anchor: { x: 22, y: 77 },
    trigger: { x: 7, y: 86, align: "left" },
  },
  {
    id: "clutch",
    title: "Clutch / Transmission",
    description:
      "Driveline servicing and replacement work to restore smooth power delivery and gear response.",
    anchor: { x: 54, y: 64 },
    trigger: { x: 74, y: 84, align: "right" },
  },
  {
    id: "tyres",
    title: "Tyres & Wheels",
    description:
      "Tyre fitting, balancing, wheel care, and replacement support for stable road feel and grip.",
    anchor: { x: 79, y: 78 },
    trigger: { x: 93, y: 88, align: "right" },
  },
  {
    id: "inspection",
    title: "Pre Purchase Inspection",
    description:
      "Independent inspection reporting to help buyers understand condition before committing to a vehicle.",
    anchor: { x: 78, y: 26 },
    trigger: { x: 94, y: 12, align: "right" },
  },
  {
    id: "battery",
    title: "Battery Replacement",
    description:
      "Battery testing and replacement to keep starting performance dependable across daily use.",
    anchor: { x: 50, y: 29 },
    trigger: { x: 76, y: 8, align: "right" },
  },
  {
    id: "alignment",
    title: "Wheel Alignment",
    description:
      "Alignment correction for cleaner steering feel, better tracking, and improved tyre life.",
    anchor: { x: 83, y: 57 },
    trigger: { x: 95, y: 56, align: "right" },
  },
  {
    id: "roadside",
    title: "Roadside Assistance",
    description:
      "Practical support when the vehicle is immobilised and immediate help matters more than process.",
    anchor: { x: 49, y: 86 },
    trigger: { x: 33, y: 95, align: "left" },
  },
];

const lineDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
      opacity: { duration: 0.2, delay },
    },
  }),
};

function getPath(hotspot) {
  const { anchor, trigger } = hotspot;
  const elbowX = trigger.align === "left" ? trigger.x + 10 : trigger.x - 10;
  const elbowY = anchor.y;
  const endX = trigger.align === "left" ? trigger.x + 1.7 : trigger.x - 1.7;
  const endY = trigger.y;
  return `M ${anchor.x} ${anchor.y} L ${elbowX} ${elbowY} L ${endX} ${endY}`;
}

export default function Services() {
  const [activeId, setActiveId] = useState(hotspots[0].id);
  const panelRefs = useRef({});

  useEffect(() => {
    if (!activeId) {
      return;
    }

    function handlePointerDown(event) {
      const activePanel = panelRefs.current[activeId];
      if (!activePanel) {
        return;
      }

      if (activePanel.contains(event.target)) {
        return;
      }

      setActiveId("");
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [activeId]);

  return (
    <section
      id="services"
      className="border-b border-white/8 py-[var(--section-space)]"
    >
      <div className="section-shell">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="section-heading text-[24px] font-semibold">OUR SERVICES</p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="relative hidden overflow-visible bg-black/25 lg:block">
          <div className="relative left-1/2 aspect-[16/9] w-screen -translate-x-1/2">
            <Image
              src="/images/mercedes-benz.png"
              alt="Top-down red Mercedes used as an interactive services map"
              fill
              priority={false}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,10,0.16)_0%,rgba(7,9,10,0.12)_100%)]" />

            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <defs>
                <marker
                  id="service-arrow"
                  markerWidth="4"
                  markerHeight="4"
                  refX="3"
                  refY="2"
                  orient="auto"
                >
                  <path d="M0,0 L4,2 L0,4 Z" fill="rgba(255,255,255,0.75)" />
                </marker>
              </defs>
              {hotspots.map((hotspot, index) => (
                <motion.path
                  key={hotspot.id}
                  d={getPath(hotspot)}
                  variants={lineDraw}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={0.08 + index * 0.03}
                  stroke="rgba(255,255,255,0.65)"
                  strokeWidth="0.25"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  markerEnd="url(#service-arrow)"
                />
              ))}
            </svg>

            {hotspots.map((hotspot) => {
              const isActive = activeId === hotspot.id;
              return (
                <div key={hotspot.id}>
                  <AnimatePresence>
                    {isActive ? (
                      <motion.div
                        id={`service-panel-${hotspot.id}`}
                        ref={(element) => {
                          if (element) {
                            panelRefs.current[hotspot.id] = element;
                          } else {
                            delete panelRefs.current[hotspot.id];
                          }
                        }}
                        initial={{ opacity: 0, scale: 0.88 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.92 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className={`absolute z-20 ${
                          hotspot.trigger.align === "left"
                            ? "-translate-y-1/2 origin-left"
                            : "-translate-x-full -translate-y-1/2 origin-right"
                        }`}
                        style={{
                          left: `${hotspot.trigger.x}%`,
                          top: `${hotspot.trigger.y}%`,
                        }}
                      >
                        <button
                          type="button"
                          aria-expanded="true"
                          aria-controls={`service-panel-${hotspot.id}`}
                          onClick={() => setActiveId("")}
                          className="flex w-[17rem] items-start gap-3 rounded-[1.3rem] border border-white/14 bg-[rgba(255,255,255,0.94)] p-3.5 text-left text-black shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-[1.35rem] leading-none text-white">
                            +
                          </span>
                          <span id={`service-panel-${hotspot.id}`} className="block">
                            <span className="block text-[11px] uppercase tracking-[0.24em] text-black/45">
                              Service Point
                            </span>
                            <span className="mt-1.5 block text-[1.02rem] leading-[1.15] font-semibold tracking-[-0.03em]">
                              {hotspot.title}
                            </span>
                            <span className="mt-2 block text-sm leading-6 text-black/72">
                              {hotspot.description}
                            </span>
                          </span>
                        </button>
                      </motion.div>
                    ) : (
                      <motion.button
                        type="button"
                        aria-expanded="false"
                        aria-controls={`service-panel-${hotspot.id}`}
                        onClick={() => setActiveId(hotspot.id)}
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/8 bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition duration-300 hover:scale-[1.04]"
                        style={{
                          left: `${hotspot.trigger.x}%`,
                          top: `${hotspot.trigger.y}%`,
                        }}
                      >
                        <span className="block translate-y-[-1px] text-[1.35rem] leading-none">+</span>
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        <div className="section-shell lg:hidden">
          <div className="grid gap-3">
            {hotspots.map((hotspot) => {
              const isActive = activeId === hotspot.id;
              return (
                <div
                  key={hotspot.id}
                  className="rounded-[1.25rem] border border-white/8 bg-white/[0.03]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveId((current) =>
                        current === hotspot.id ? "" : hotspot.id,
                      )
                    }
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-white"
                  >
                    <span className="font-semibold tracking-[-0.02em]">
                      {hotspot.title}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[1.35rem] leading-none text-black">
                      +
                    </span>
                  </button>
                  <AnimatePresence>
                    {isActive ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 pb-4 text-sm leading-7 text-[var(--color-copy)]">
                          {hotspot.description}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
