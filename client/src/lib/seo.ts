/*
Hogar360 SEO models: structured data describes the real service, its local coverage, and published educational content.
The data deliberately avoids fabricated ratings, physical addresses, hours, guarantees, or client claims.
*/
import { absoluteUrl, siteConfig, SITE_URL } from "@/lib/site";
import type { InsightArticle } from "@/lib/insights";

const serviceSchema = {
  "@type": "Service",
  "@id": `${SITE_URL}/#recorridos-3d`,
  name: "Recorridos 3D y landing pages inmobiliarias",
  serviceType: "Visualización inmobiliaria y recorridos virtuales 3D",
  description: "Recorridos 3D profesionales y landing pages personalizadas para presentar propiedades con claridad antes de una visita presencial.",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [
    { "@type": "City", name: "Santiago de los Caballeros" },
    { "@type": "Country", name: "República Dominicana" },
  ],
  offers: {
    "@type": "Offer",
    name: "Paquete Lanzamiento 3D + Landing",
    price: "8950",
    priceCurrency: "DOP",
    availability: "https://schema.org/InStock",
    url: absoluteUrl("/#servicios"),
  },
};

export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: SITE_URL,
      logo: absoluteUrl("/images/brand/logo.png"),
      image: absoluteUrl(siteConfig.defaultImage),
      description: siteConfig.description,
      telephone: siteConfig.telephone,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.telephone,
        contactType: "sales",
        availableLanguage: ["es"],
      },
      areaServed: serviceSchema.areaServed,
      knowsAbout: ["recorridos 3D", "tours virtuales inmobiliarios", "landing pages inmobiliarias", "visualización de propiedades"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: siteConfig.name,
      inLanguage: siteConfig.language,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    serviceSchema,
  ],
};

export const caseStudyStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/casos/vista-linda#webpage"),
      url: absoluteUrl("/casos/vista-linda"),
      name: "Caso Vista Linda | Hogar360",
      description: "Caso de estudio de una experiencia de propiedad que reúne recorrido 3D, galería e información organizada.",
      inLanguage: siteConfig.language,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: serviceSchema,
      primaryImageOfPage: absoluteUrl("/images/property/vista-linda-hero.jpg"),
    },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Casos", item: absoluteUrl("/casos/vista-linda") }, { "@type": "ListItem", position: 3, name: "Vista Linda", item: absoluteUrl("/casos/vista-linda") }] },
  ],
};

export const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": absoluteUrl("/contacto#webpage"),
  url: absoluteUrl("/contacto"),
  name: "Cotiza un recorrido 3D para tu propiedad | Hogar360",
  inLanguage: siteConfig.language,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: serviceSchema,
};

export const insightsStructuredData = (articles: InsightArticle[]) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": absoluteUrl("/insights#webpage"),
  url: absoluteUrl("/insights"),
  name: "Insights sobre recorridos 3D y real estate | Hogar360",
  description: "Guías para agentes inmobiliarios sobre recorridos 3D, presentación de propiedades y experiencias inmobiliarias digitales.",
  inLanguage: siteConfig.language,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  hasPart: articles.map((article) => ({ "@type": "Article", headline: article.title, url: absoluteUrl(`/insights/${article.slug}`) })),
});

export const articleStructuredData = (article: InsightArticle) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": absoluteUrl(`/insights/${article.slug}#article`),
      mainEntityOfPage: absoluteUrl(`/insights/${article.slug}`),
      headline: article.title,
      description: article.summary,
      image: [absoluteUrl(article.image)],
      datePublished: article.datePublished,
      dateModified: article.datePublished,
      inLanguage: siteConfig.language,
      author: { "@type": "Organization", name: siteConfig.name, url: SITE_URL },
      publisher: { "@id": `${SITE_URL}/#organization` },
      about: ["recorridos 3D", "tours virtuales inmobiliarios", "marketing inmobiliario"],
    },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Insights", item: absoluteUrl("/insights") }, { "@type": "ListItem", position: 3, name: article.title, item: absoluteUrl(`/insights/${article.slug}`) }] },
  ],
});
