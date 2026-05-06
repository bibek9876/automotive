# SEO Placeholders

Replace these placeholders before launch. They are intentionally left unresolved so no business data or tracking IDs are invented.

- `{{DOMAIN}}`
  Used in: [src/lib/seo.js](/d:/automotive/src/lib/seo.js)
  Fill with the production domain only, without `https://`.

- `{{PHONE}}`
  Used in: [src/lib/seo.js](/d:/automotive/src/lib/seo.js), [src/components/seo/LocalBusinessSchema.jsx](/d:/automotive/src/components/seo/LocalBusinessSchema.jsx)
  Fill with the primary booking phone number in international or business-preferred format.

- `{{ADDRESS_LINE_1}}`
  Used in: [src/lib/seo.js](/d:/automotive/src/lib/seo.js), [src/components/seo/LocalBusinessSchema.jsx](/d:/automotive/src/components/seo/LocalBusinessSchema.jsx)
  Fill with the street address line for the workshop.

- `{{POSTCODE}}`
  Used in: [src/lib/seo.js](/d:/automotive/src/lib/seo.js), [src/components/seo/LocalBusinessSchema.jsx](/d:/automotive/src/components/seo/LocalBusinessSchema.jsx)
  Fill with the postcode for the workshop address.

- `{{LAT}}`
  Used in: [src/lib/seo.js](/d:/automotive/src/lib/seo.js), [src/components/seo/LocalBusinessSchema.jsx](/d:/automotive/src/components/seo/LocalBusinessSchema.jsx)
  Fill with the latitude for the workshop.

- `{{LNG}}`
  Used in: [src/lib/seo.js](/d:/automotive/src/lib/seo.js), [src/components/seo/LocalBusinessSchema.jsx](/d:/automotive/src/components/seo/LocalBusinessSchema.jsx)
  Fill with the longitude for the workshop.

- `{{FACEBOOK_URL}}`
  Used in: [src/lib/seo.js](/d:/automotive/src/lib/seo.js), [src/components/seo/LocalBusinessSchema.jsx](/d:/automotive/src/components/seo/LocalBusinessSchema.jsx)
  Fill with the canonical Facebook profile URL, or remove the entry if no profile exists.

- `{{INSTAGRAM_URL}}`
  Used in: [src/lib/seo.js](/d:/automotive/src/lib/seo.js), [src/components/seo/LocalBusinessSchema.jsx](/d:/automotive/src/components/seo/LocalBusinessSchema.jsx)
  Fill with the canonical Instagram profile URL, or remove the entry if no profile exists.

- `{{GOOGLE_BUSINESS_URL}}`
  Used in: [src/lib/seo.js](/d:/automotive/src/lib/seo.js), [src/components/seo/LocalBusinessSchema.jsx](/d:/automotive/src/components/seo/LocalBusinessSchema.jsx)
  Fill with the Google Business Profile URL.

- `{{GA_MEASUREMENT_ID}}`
  Used in: [src/lib/seo.js](/d:/automotive/src/lib/seo.js), [src/pages/\_app.js](/d:/automotive/src/pages/_app.js)
  Replace only when consent handling is ready. Analytics scripts stay disabled until this value is no longer a placeholder.

- `{{GSC_VERIFICATION_CODE}}`
  Used in: [src/lib/seo.js](/d:/automotive/src/lib/seo.js), [src/components/seo/SeoHead.jsx](/d:/automotive/src/components/seo/SeoHead.jsx)
  Fill with the Google Search Console verification token.
