/*
  Hogar360 page SEO: assigns unique titles, descriptions, canonical URLs, social cards, and JSON-LD for each client-rendered route.
  This keeps on-page language, metadata, and structured data aligned for people, search engines, and AI answer systems.
*/
import { useEffect, useMemo } from "react";
import { trackEvent } from "@/lib/analytics";
import { absoluteUrl, siteConfig } from "@/lib/site";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  structuredData?: Record<string, unknown>;
  type?: "website" | "article";
};

const setMeta = (attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
};

export default function Seo({ title, description, path, image = siteConfig.defaultImage, structuredData, type = "website" }: SeoProps) {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const jsonLd = useMemo(() => JSON.stringify(structuredData ?? {}), [structuredData]);

  useEffect(() => {
    document.documentElement.lang = siteConfig.language;
    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMeta("property", "og:type", type);
    setMeta("property", "og:locale", siteConfig.locale);
    setMeta("property", "og:site_name", siteConfig.name);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", imageUrl);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let schema = document.getElementById("hogar360-structured-data") as HTMLScriptElement | null;
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "hogar360-structured-data";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.text = jsonLd;

    trackEvent("page_view", { page_path: path, page_type: type });
  }, [canonicalUrl, description, imageUrl, jsonLd, path, title, type]);

  return null;
}
