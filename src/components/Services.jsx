// @ts-check

'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    title: 'Log Book Service',
    description:
      'Scheduled servicing aligned with manufacturer intervals to help protect reliability and warranty expectations.',
  },
  {
    title: 'Mechanical Repairs',
    description:
      'Diagnostics and repair work for everyday drivability issues, wear items, and workshop-critical faults.',
  },
  {
    title: 'Brakes',
    description:
      'Brake inspections, pad and rotor replacement, and servicing focused on safe, predictable stopping.',
  },
  {
    title: 'Clutch / Transmission',
    description:
      'Driveline servicing and repair work to restore smooth gear changes and consistent power delivery.',
  },
  {
    title: 'Tyres & Wheels',
    description:
      'Tyre fitting, balancing, wheel care, and replacement support for road feel, grip, and stability.',
  },
  {
    title: 'Pre Purchase Inspection',
    description:
      'Independent inspection reporting to give buyers a clearer picture of a vehicle before committing.',
  },
  {
    title: 'Battery Replacement',
    description:
      'Battery testing and replacement to keep starting performance dependable across daily use.',
  },
  {
    title: 'Wheel Alignment',
    description:
      'Alignment correction for cleaner steering response, better tracking, and improved tyre life.',
  },
  {
    title: 'Roadside Assistance',
    description: 'Practical support when a vehicle is immobilised and immediate help matters most.',
  },
];

const mobileService = {
  title: 'Mobile Battery Replacement & Vehicle Servicing',
  summary:
    'On-site battery replacement, jump-start support, and practical vehicle servicing delivered at your location.',
  details: [
    'On-site battery testing and replacement',
    'Emergency jump-start assistance',
    'Battery health diagnostics',
    'Basic vehicle servicing and inspections',
    'Convenient, location-based support',
  ],
};

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
export default function Services({ headingLevel = 'h2', headingId = 'services-heading' }) {
  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false);
  const mobileServiceRef = useRef(/** @type {HTMLDivElement | null} */ (null));

  useEffect(() => {
    if (!isMobileServiceOpen) {
      return undefined;
    }

    /**
     * @param {MouseEvent} event
     */
    function handlePointerDown(event) {
      if (!mobileServiceRef.current?.contains(/** @type {Node} */ (event.target))) {
        setIsMobileServiceOpen(false);
      }
    }

    /**
     * @param {KeyboardEvent} event
     */
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsMobileServiceOpen(false);
      }
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileServiceOpen]);

  return (
    <section
      id="services"
      aria-labelledby={headingId}
      className="border-b border-[var(--color-divider)] py-[var(--section-space)]"
    >
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-label text-[11px] font-semibold">Services</p>
          {renderHeading(
            headingLevel,
            headingId,
            'Straightforward workshop services, clearly listed.'
          )}
          <p className="section-copy mt-6">
            The workshop covers essential servicing, repair, and inspection work without the
            interactive map treatment. This section keeps the offer simple and easier to scan.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {services.map((service) => (
            <span
              key={service.title}
              className="rounded-full border border-[var(--color-divider)] bg-[var(--color-surface-overlay)] px-4 py-2 text-sm text-[var(--color-ink-soft)]"
            >
              {service.title}
            </span>
          ))}
          <div className="relative" ref={mobileServiceRef}>
            <button
              type="button"
              aria-expanded={isMobileServiceOpen}
              aria-controls="mobile-service-dropdown"
              onClick={() => setIsMobileServiceOpen((current) => !current)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition duration-300 ${
                isMobileServiceOpen
                  ? 'border-[var(--color-brand)] bg-[var(--color-brand)] text-[var(--color-ink)]'
                  : 'border-[var(--color-divider)] bg-[var(--color-surface-overlay)] text-[var(--color-ink-soft)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand-light)]'
              }`}
            >
              {mobileService.title}
            </button>

            {isMobileServiceOpen ? (
              <div
                id="mobile-service-dropdown"
                className="absolute left-0 z-20 mt-3 w-[min(28rem,calc(100vw-2rem))] rounded-[1.6rem] border border-[var(--color-divider)] bg-[rgba(7,16,31,0.96)] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">
                  Mobile Support
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">
                  {mobileService.summary}
                </p>
                <div className="mt-4 grid gap-2">
                  {mobileService.details.map((detail) => (
                    <p
                      key={detail}
                      className="rounded-[1rem] border border-[var(--color-divider)] bg-[var(--color-surface-overlay)] px-3 py-2 text-sm text-[var(--color-ink-soft)]"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="glass-panel rounded-[1.6rem] p-6">
              <p className="text-[1.1rem] leading-7 font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
                {service.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
