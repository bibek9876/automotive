// @ts-check

/**
 * @typedef {{
 *   title: string;
 *   description: string;
 *   icon: string;
 * }} Service
 */

/**
 * @typedef {{
 *   src: string;
 *   alt: string;
 *   width: number;
 *   height: number;
 *   title: string;
 *   caption: string;
 * }} GalleryItem
 */

/** @type {Service[]} */
export const services = [
  {
    title: 'Log Book Service',
    description:
      'Manufacturer-aligned servicing that protects performance, reliability, and warranty expectations.',
    icon: 'book',
  },
  {
    title: 'Mechanical Repairs',
    description:
      'Clear diagnostics and dependable repair work for daily drivers, family cars, and fleet vehicles.',
    icon: 'wrench',
  },
  {
    title: 'Brakes',
    description:
      'Brake pad, rotor, and system inspections focused on control, safety, and confident stopping.',
    icon: 'brake',
  },
  {
    title: 'Clutch / Transmission Replacement',
    description:
      'Targeted driveline repairs and replacement work to restore smooth gear changes and response.',
    icon: 'gear',
  },
  {
    title: 'Tyres & Wheels',
    description:
      'Tyre supply, fitting, balancing, and wheel care tailored for stable road feel and even wear.',
    icon: 'wheel',
  },
  {
    title: 'Pre Purchase Inspection',
    description:
      'Independent inspections with practical reporting so you know what you are buying before you commit.',
    icon: 'search',
  },
  {
    title: 'Battery Replacement',
    description:
      'Fast battery testing and replacement to keep starting performance reliable in every season.',
    icon: 'battery',
  },
  {
    title: 'Wheel Alignment',
    description:
      'Precision alignment to improve handling, tyre life, and steering confidence on Australian roads.',
    icon: 'align',
  },
  {
    title: 'Roadside Assistance',
    description:
      'Prompt support when your vehicle leaves you stranded and you need practical help without delay.',
    icon: 'roadside',
  },
];

/** @type {GalleryItem[]} */
export const galleryItems = [
  {
    src: '/images/braeside-diagnostics.webp',
    alt: 'Mechanic inspecting a vehicle in the Sarav Motors workshop in Braeside',
    width: 1100,
    height: 734,
    title: 'Precision Diagnostics',
    caption: 'Measured, methodical inspection before any work begins.',
  },
  {
    src: '/images/braeside-clean-workshop.webp',
    alt: 'Clean service bays inside the Sarav Motors workshop in Braeside',
    width: 1200,
    height: 800,
    title: 'Workshop Standards',
    caption: 'Clean bays, disciplined processes, and premium presentation.',
  },
  {
    src: '/images/braeside-brake-suspension.webp',
    alt: 'Brake and suspension components serviced at Sarav Motors in Braeside',
    width: 1200,
    height: 800,
    title: 'Brake And Suspension',
    caption: 'Safety-critical systems serviced with care and consistency.',
  },
  {
    src: '/images/braeside-performance-maintenance.webp',
    alt: 'Performance maintenance work underway at the Sarav Motors workshop in Braeside',
    width: 1100,
    height: 880,
    title: 'Performance Maintenance',
    caption: 'Mechanical work focused on reliability and sharp response.',
  },
];
