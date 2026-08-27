/*
  Hogar360 conversion measurement: sends only event names and non-identifying placement labels.
  The site never sends contact-form values, phone numbers, email addresses, or other personal data to analytics.
*/
type EventData = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[][];
    umami?: { track: (eventName: string, eventData?: EventData) => void };
    gtag?: (...args: unknown[]) => void;
    __HOGAR360_GA_MEASUREMENT_ID__?: string;
  }
}

export function trackEvent(eventName: string, eventData?: EventData) {
  if (typeof window === "undefined") return;
  window.umami?.track(eventName, eventData);
  if (window.gtag && window.__HOGAR360_GA_MEASUREMENT_ID__) {
    window.gtag("event", eventName, eventData);
  }
}
