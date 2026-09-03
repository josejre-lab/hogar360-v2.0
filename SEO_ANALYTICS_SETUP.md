# Hogar360 SEO and Analytics Setup

## What is Already Implemented

The website includes unique page titles and descriptions, Spanish-language metadata, canonical URLs, social-sharing previews, `robots.txt`, `sitemap.xml`, and JSON-LD structured data for the organization, service, case study, blog index, and articles. It also tracks non-identifying high-intent events: WhatsApp quote clicks, contact form submissions, launch-offer clicks, and case-study/gallery interactions.

## Connect Google Analytics 4

1. Create a Google Analytics property at https://analytics.google.com/ and add a **Web** data stream for the final public website domain.
2. Copy the public **Measurement ID**, which begins with `G-`.
3. Send the Measurement ID to the site maintainer. It is a public identifier, not an API secret. Add it to `GOOGLE_ANALYTICS_MEASUREMENT_ID` in `client/src/lib/site.ts`.
4. Publish the website, visit it once, and use GA4 **Realtime** to confirm that a visit appears.
5. In GA4, mark the most relevant event as a key event/conversion. Recommended: `whatsapp_quote_click` and `contact_form_submit`.

Do not add contact form values, names, phone numbers, or email addresses to analytics events. Google Analytics policies prohibit sending personally identifiable information.

## Submit the Website to Google Search Console

1. Go to https://search.google.com/search-console and add the final production domain as a property.
2. Verify domain ownership with the method Google offers. A custom domain is preferable before completing this step because the current Manus URL may change if a custom domain is added later.
3. Submit `/sitemap.xml` in the **Sitemaps** report.
4. Use **URL Inspection** to request indexing of the homepage, case study, and Insights index.
5. Monitor the **Performance** report monthly for impressions, clicks, queries, and average position; review **Pages** for crawl or indexing issues.

## Critical Update When a Custom Domain Is Connected

The public URL is `https://hogar360rd.com` (updated from the original Manus preview URL, `https://hogar3d-kvab2cnh.manus.space`, once the custom domain went live). The canonical value lives in `client/src/lib/site.ts`; it is also mirrored statically in `client/index.html`, `client/public/robots.txt`, and `client/public/sitemap.xml` for share-preview scrapers and crawlers that don't execute JS. If the domain ever changes again, update all four and resubmit the sitemap in Search Console.
