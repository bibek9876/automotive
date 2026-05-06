// @ts-check

import QuoteForm from '@/components/QuoteForm';
import Services from '@/components/Services';
import SiteLayout from '@/components/SiteLayout';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import SeoHead from '@/components/seo/SeoHead';
import { services } from '@/data/siteContent';

/**
 * @returns {import('react').ReactElement}
 */
export default function ServicesPage() {
  return (
    <>
      <SeoHead
        title="Car Services & Repairs in Braeside, Victoria | Sarav Motors"
        description="Explore logbook servicing, diagnostics, brake repairs, wheel alignment, batteries and inspections from Sarav Motors in Braeside, Victoria today."
        path="/services"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
      />

      <SiteLayout>
        <Services headingLevel="h1" />
        <QuoteForm services={services} />
      </SiteLayout>
    </>
  );
}
