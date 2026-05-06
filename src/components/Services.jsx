// @ts-check

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
