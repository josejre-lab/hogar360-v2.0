/*
  Optional Google Analytics loader for Hogar360.
  It stays inactive until a genuine public Google Analytics Measurement ID is supplied in site.ts.
  No contact-form fields or personal identifiers are sent through the event layer.
*/
import { useLayoutEffect } from "react";
import { GOOGLE_ANALYTICS_MEASUREMENT_ID } from "@/lib/site";

export default function GoogleAnalytics() {
  useLayoutEffect(() => {
    const measurementId = GOOGLE_ANALYTICS_MEASUREMENT_ID.trim();
    if (!measurementId || typeof window === "undefined") return;

    window.__HOGAR360_GA_MEASUREMENT_ID__ = measurementId;
    window.dataLayer = window.dataLayer ?? [];
    window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { anonymize_ip: true, send_page_view: false });

    const existingScript = document.querySelector(`script[data-hogar360-ga="${measurementId}"]`);
    if (existingScript) return;
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    script.dataset.hogar360Ga = measurementId;
    document.head.appendChild(script);
  }, []);

  return null;
}
