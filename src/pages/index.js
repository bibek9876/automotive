// @ts-check

import dynamic from 'next/dynamic';

import About from '@/components/About';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import SiteLayout from '@/components/SiteLayout';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import SeoHead from '@/components/seo/SeoHead';
import { galleryItems, services } from '@/data/siteContent';

const Carousel = dynamic(() => import('@/components/Carousel'));
const CarCleaning = dynamic(() => import('@/components/CarCleaning'));
const QuoteForm = dynamic(() => import('@/components/QuoteForm'));
const Contact = dynamic(() => import('@/components/Contact'));

/**
 * @returns {import('react').ReactElement}
 */
export default function HomePage() {
  return (
    <>
      <SeoHead
        title="Reliable Car Service & Repairs in Braeside | Sarav Motors"
        description="Sarav Motors provides logbook servicing, repairs, brake work, inspections and workshop care for Braeside drivers across the wider Bayside region."
        path="/"
      />
      <LocalBusinessSchema />

      <SiteLayout>
        <Hero />
        <Services />
        <About />
        <Carousel items={galleryItems} />
        <CarCleaning />
        <QuoteForm services={services} />
        <Contact />
      </SiteLayout>
    </>
  );
}
