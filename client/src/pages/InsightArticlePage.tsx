/*
Hogar360 Insight article: a focused long-form reading layout that cites sources and returns readers to the service.
Editorial clarity and credible, carefully limited claims are prioritized over sales language.
*/
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Link, useRoute } from "wouter";
import { getInsightArticle } from "@/lib/insights";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Seo from "@/components/Seo";
import { articleStructuredData } from "@/lib/seo";

export default function InsightArticlePage() {
  const [, params] = useRoute("/insights/:slug");
  const article = getInsightArticle(params?.slug ?? "");

  if (!article) return <div className="min-h-screen bg-[#fdfbf7]"><Seo title="Artículo no encontrado | Hogar360" description="El artículo solicitado no está disponible." path="/404" /><SiteHeader /><main className="container py-28"><p className="text-sm text-[#1b2423]/60">No encontramos este artículo.</p><Link href="/insights" className="mt-5 inline-flex text-sm font-semibold text-[#008f86]">Volver a Insights</Link></main><SiteFooter /></div>;

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#1b2423]">
      <Seo title={`${article.title} | Hogar360 Insights`} description={article.summary} path={`/insights/${article.slug}`} image={article.image} structuredData={articleStructuredData(article)} type="article" />
      <SiteHeader active="insights" />
      <main>
        <article>
          <header className="container grid gap-10 py-16 lg:grid-cols-[0.7fr_1.3fr] lg:py-24"><div><Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-[#008f86] transition-colors hover:text-[#006e68]"><ArrowLeft className="h-4 w-4" /> Insights</Link><p className="mt-10 text-[11px] font-bold uppercase tracking-[0.22em] text-[#008f86]">{article.category}</p></div><div><h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">{article.title}</h1><p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#1b2423]/65">{article.summary}</p></div></header>
          <div className="container"><img src={article.image} alt="" className="aspect-[2.1/1] w-full object-cover" /></div>
          <div className="container grid gap-12 py-16 lg:grid-cols-[0.32fr_0.68fr] lg:py-24"><aside className="border-t border-[#1b2423]/15 pt-5"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1b2423]/45">Perspectiva Hogar360</p><p className="mt-4 text-sm leading-relaxed text-[#1b2423]/60">Información práctica para profesionales inmobiliarios en Santiago y alrededores.</p></aside><div className="max-w-2xl"><p className="text-xl leading-relaxed text-[#1b2423]/78">{article.introduction}</p>{article.sections.map((section) => <section key={section.heading} className="mt-12"><h2 className="text-3xl font-semibold tracking-[-0.04em]">{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5 text-base leading-[1.75] text-[#1b2423]/70">{paragraph}</p>)}</section>)}
            <section className="mt-14 border-t border-[#1b2423]/15 pt-8"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#008f86]">Fuentes</p><ul className="mt-5 space-y-3">{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-start gap-2 text-sm leading-relaxed text-[#1b2423]/65 transition-colors hover:text-[#008f86]"><ExternalLink className="mt-0.5 h-4 w-4 shrink-0" />{source.label}</a></li>)}</ul></section>
          </div></div>
        </article>
        <section className="bg-[#101b27] text-white"><div className="container flex flex-col justify-between gap-8 py-16 sm:flex-row sm:items-end"><div className="max-w-xl"><p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8ce3d6]">Hogar360 para tu próxima propiedad</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em]">Convierte la información en una experiencia más clara.</h2></div><Link href="/contacto" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#8ce3d6] px-6 py-3 text-sm font-bold text-[#1b2423] transition hover:-translate-y-0.5 hover:bg-white">Cotizar por WhatsApp <ArrowUpRight className="h-4 w-4" /></Link></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
