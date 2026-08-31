/*
  Hogar360 site configuration: the single source of truth for its public URL and contact details.
  When a custom domain or professional phone number is ready, change it here and regenerate sitemap.xml.
*/
export const SITE_URL = "https://hogar3d-kvab2cnh.manus.space";

// Paste a public Google Analytics 4 Measurement ID here after creating a GA4 web data stream, e.g. "G-ABC123DE45".
// Leave blank to keep the optional Google Analytics loader inactive. Built-in page analytics continue to run independently.
export const GOOGLE_ANALYTICS_MEASUREMENT_ID = "";

export const siteConfig = {
  name: "Hogar360",
  legalName: "Hogar360",
  description: "Recorridos 3D profesionales y landing pages inmobiliarias para agentes y proyectos en Santiago, República Dominicana.",
  locale: "es_DO",
  language: "es-DO",
  telephone: "+1 (809) 642-6108",
  whatsappNumber: "18096426108",
  serviceArea: "Santiago de los Caballeros y zonas cercanas, República Dominicana",
  defaultImage: "/manus-storage/hogar360-minimal-architectural-bg_5212f6e5.jpg",
} as const;

export const absoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const whatsappLink = (message: string) => `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
