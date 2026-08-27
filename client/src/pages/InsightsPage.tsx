/*
  Hogar360 Insights index: an editorial, Niero-inspired card grid for practical real-estate media education.
  Deep navy, generous white space, restrained teal labels, and real source-aware content build credibility.
*/
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { insightArticles } from "@/lib/insights";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#1b2423]">
      <SiteHeader active="insights" />
      <main>
        <section className="border-b border-[#1b2423]/10 bg-[#101b27] text-white"><div className="container py-20 sm:py-28"><p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8ce3d6]">Hogar360 · Insights</p><h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-6xl lg:text-8xl">Ideas para presentar propiedades con más claridad.</h1><p className="mt-7 max-w-2xl text-base leading-relaxed text-white/60">Guías sencillas sobre recorridos 3D, experiencias inmobiliarias y los cambios que ya se ven en otros mercados.</p></div></section>
        <section className="container py-20 lg:py-28"><div className="flex flex-col justify-between gap-6 border-b border-[#1b2423]/15 pb-8 sm:flex-row sm:items-end"><div><p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#008f86]">Lecturas seleccionadas</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Para agentes que quieren presentar diferente.</h2></div><p className="max-w-xs text-sm leading-relaxed text-[#1b2423]/55">Contenido práctico. Sin promesas de ventas garantizadas.</p></div>
          <div className="mt-12 grid gap-x-5 gap-y-12 md:grid-cols-2 lg:grid-cols-3">{insightArticles.map((article) => <Link key={article.slug} href={`/insights/${article.slug}`} className="group block"><article><div className="aspect-[1.45/1] overflow-hidden bg-[#d9d7cf]"><img src={article.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="mt-5 flex items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.17em] text-[#008f86]"><span>{article.category}</span><ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div><h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.035em] transition-colors group-hover:text-[#008f86]">{article.title}</h3><p className="mt-3 text-sm leading-relaxed text-[#1b2423]/60">{article.summary}</p></article></Link>)}</div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
