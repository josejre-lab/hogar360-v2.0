/*
  Hogar360 visual direction: premium real-estate media, inspired by Niero's editorial hierarchy.
  The page sells the outcome for agents: clearer property presentation and informed visits.
  Warm off-white surfaces, deep navy anchors, selective teal, restrained motion, and no generic SaaS language.
*/
import { ArrowRight, ArrowUpRight, Check, MessageCircle, ScanLine } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const backgroundImage = "/manus-storage/hogar360-minimal-architectural-bg_5212f6e5.jpg";

const portfolio = [
  { title: "Presentación exterior", image: "https://framerusercontent.com/images/aojY4A8XMSYIrUdu8XbsXJspTw.jpeg", detail: "Primera impresión" },
  { title: "Galería visual", image: "https://framerusercontent.com/images/Gvg7GhWAVR5QLMouuNf9o8Mw.jpeg", detail: "Detalles y contexto" },
  { title: "Landing informativa", image: "https://framerusercontent.com/images/eQWAYO7xnwJODSGeN4rGiflQLY.jpeg", detail: "Todo en un enlace" },
];

const launchIncludes = [
  "Recorrido 3D profesional",
  "Landing personalizada",
  "Dominio o enlace personalizado",
  "Integración con WhatsApp o formulario del agente",
  "Optimización para celular",
];

const workflow = [
  { number: "01", title: "Coordinamos", copy: "Conocemos la propiedad, ubicamos el objetivo de la presentación y agendamos la visita." },
  { number: "02", title: "Capturamos", copy: "Realizamos el recorrido 3D y reunimos el material visual necesario en la propiedad." },
  { number: "03", title: "Construimos", copy: "Diseñamos una landing clara con información, galería y un recorrido fácil de explorar." },
  { number: "04", title: "Compartes", copy: "Recibes un enlace listo para publicar, enviar por WhatsApp y usar en tu estrategia de venta." },
];

export default function BusinessPage() {
  const yourWhatsApp = "+1 (849) 863‑1101";
  const [formData, setFormData] = useState({ nombre: "", email: "", propiedad: "" });

  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/${yourWhatsApp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formData.nombre || !formData.email || !formData.propiedad) {
      toast.error("Por favor completa los tres campos.");
      return;
    }
    openWhatsApp(`Hola, me interesa el Paquete Lanzamiento de Hogar360.\n\nNombre: ${formData.nombre}\nCorreo: ${formData.email}\nPropiedad: ${formData.propiedad}`);
    setFormData({ nombre: "", email: "", propiedad: "" });
    toast.success("Abriendo WhatsApp...");
  };

  const openLaunchOffer = () => openWhatsApp("Hola, quiero aprovechar el precio de lanzamiento de Hogar360 para una propiedad.");

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#1b2423]">
      <SiteHeader active="inicio" />

      <main>
        <section className="relative overflow-hidden border-b border-[#1b2423]/10">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${backgroundImage}')` }} />
          <div className="absolute inset-0 bg-[#f7f6f2]/79" />
          <div className="spatial-orbit absolute -right-10 top-28 h-64 w-64 opacity-70 before:-left-16 before:-top-12 after:left-7 after:top-0 lg:right-[18%]" />
          <div className="relative container grid min-h-[690px] items-end gap-12 py-20 lg:grid-cols-[1.15fr_0.46fr] lg:items-center lg:py-24">
            <div className="max-w-5xl">
              <p className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#008f86]"><ScanLine className="h-4 w-4" /> Hogar360 · Para agentes inmobiliarios</p>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-6xl lg:text-8xl">Tu próximo comprador puede conocer la propiedad antes de visitarla.</h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#1b2423]/70">Recorridos 3D profesionales + landing personalizada para que tus propiedades destaquen, generen más interés y lleguen a la visita clientes que ya conocen el espacio.</p>
              <p className="mt-5 text-sm font-medium text-[#1b2423]/55">Para agentes inmobiliarios y proyectos en Santiago y alrededores.</p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#como-funciona" className="inline-flex items-center gap-2 rounded-full bg-[#1b2423] px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#008f86] active:scale-[0.97]">Ver cómo funciona <ArrowRight className="h-4 w-4" /></a>
                <Link href="/casos/vista-linda" className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-semibold text-[#1b2423]/75 transition-colors hover:text-[#008f86]">Ver propiedad en 3D <ArrowUpRight className="h-4 w-4" /></Link>
              </div>
            </div>
            <div className="max-w-[270px] justify-self-start border-l border-[#1b2423]/20 pl-6 lg:justify-self-end">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1b2423]/45">Una forma distinta de presentar</p>
              <p className="mt-4 text-xl font-medium leading-snug tracking-tight text-[#1b2423]">Menos preguntas básicas. Más contexto para decidir si vale la pena visitar.</p>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#008f86]"><span className="h-1.5 w-1.5 rounded-full bg-[#008f86]" /> Santiago, República Dominicana</div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#1b2423]/10 bg-[#eeece5]">
          <div className="container grid gap-8 py-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#008f86]">Antes de coordinar la visita</p>
            <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
              <p className="text-sm leading-relaxed text-[#1b2423]/55"><span className="font-semibold text-[#1b2423]">Publicación tradicional</span><br />Fotos → WhatsApp → Preguntas → Visita</p>
              <ArrowRight className="h-5 w-5 text-[#008f86]" />
              <p className="text-sm leading-relaxed text-[#1b2423]/70"><span className="font-semibold text-[#008f86]">Hogar360</span><br />Presentación profesional → Exploración 3D → Interés informado → Visita</p>
            </div>
          </div>
        </section>

        <section id="portafolio" className="container py-20 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.63fr_1.37fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#008f86]">01 · Portafolio</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">Un caso real, pensado para que se entienda mejor.</h2>
            </div>
            <p className="max-w-xl justify-self-end text-base leading-relaxed text-[#1b2423]/60">Vista Linda muestra el formato completo: una experiencia 3D, una galería, información organizada y un enlace que facilita compartir la propiedad con claridad.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {portfolio.map((card) => (
              <Link key={card.title} href="/casos/vista-linda" className="group block">
                <article className="overflow-hidden border border-[#1b2423]/12 bg-white/45 transition duration-300 group-hover:-translate-y-1 group-hover:border-[#008f86]/55">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#d9d7cf]"><img src={card.image} alt={card.title} loading="lazy" className="h-full w-full object-cover saturate-[0.88] sepia-[0.06] transition duration-500 group-hover:scale-105 group-hover:saturate-100" /><div className="absolute left-4 top-4 rounded-full bg-[#f7f6f2]/90 px-2.5 py-1 backdrop-blur"><span className="capture-label">Vista 360</span></div><span className="absolute bottom-3 right-4 text-[10px] font-bold tracking-[0.16em] text-white drop-shadow-md">0{portfolio.indexOf(card) + 1}</span></div>
                  <div className="flex items-end justify-between gap-4 px-5 py-5"><div><p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#008f86]">Caso Vista Linda</p><h3 className="mt-2 font-semibold tracking-tight">{card.title}</h3><p className="mt-1 text-sm text-[#1b2423]/52">{card.detail}</p></div><ArrowUpRight className="mb-1 h-4 w-4 text-[#1b2423]/45 transition-colors group-hover:text-[#008f86]" /></div>
                </article>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-right"><Link href="/casos/vista-linda" className="inline-flex items-center gap-2 text-sm font-semibold text-[#008f86] transition-colors hover:text-[#006e68]">Explorar el caso completo <ArrowRight className="h-4 w-4" /></Link></div>
        </section>

        <section id="como-funciona" className="border-y border-[#1b2423]/10 bg-[#101b27] text-white">
          <div className="container py-20 lg:py-28">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div><p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8ce3d6]">02 · Cómo funciona</p><h2 className="mt-4 max-w-md text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">Dale a tus clientes una experiencia diferente.</h2></div>
              <p className="max-w-xl justify-self-end text-base leading-relaxed text-white/60">Hogar360 convierte una publicación tradicional en una experiencia inmersiva, sin complicar tu proceso ni quitarte control sobre el contacto con tus prospectos.</p>
            </div>
            <div className="mt-14 grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
              {workflow.map((step, index) => <article key={step.number} className={`py-8 ${index < 3 ? "lg:border-r lg:border-white/15 lg:pr-8" : ""} ${index > 0 ? "sm:pl-8" : ""} ${index > 1 ? "lg:pl-8" : ""}`}><p className="flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-[#8ce3d6]"><span className="grid h-5 w-5 place-items-center rounded-full border border-[#8ce3d6]/50 text-[8px]">{step.number}</span>{step.number}</p><h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{step.title}</h3><p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">{step.copy}</p></article>)}
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-[#eeece5]">
          <div className="container py-20 lg:py-28">
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
              <div><p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#008f86]">03 · Precio de lanzamiento</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">Todo para presentar una propiedad de forma profesional.</h2></div>
              <p className="max-w-xl justify-self-end text-base leading-relaxed text-[#1b2423]/60">Una oferta de lanzamiento para que puedas darle a tus clientes una experiencia que no consiguen con una publicación tradicional.</p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="relative overflow-hidden border-2 border-[#008f86] bg-[#f7f6f2] p-8 shadow-[0_22px_70px_rgba(27,36,35,0.09)] sm:p-10"><div className="spatial-orbit pointer-events-none absolute -bottom-20 -right-14 h-48 w-48 opacity-35 before:-left-10 before:-top-12 after:left-10 after:top-0" />
                <div className="absolute right-0 top-0 bg-[#008f86] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white">Precio especial de lanzamiento</div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#008f86]">Paquete Lanzamiento</p>
                <h3 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">3D + Landing</h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#1b2423]/62">Todo lo necesario para presentar una propiedad de forma profesional y darle a tus clientes una experiencia que no consiguen con una publicación tradicional.</p>
                <div className="mt-8 grid gap-5 border-y border-[#1b2423]/12 py-6 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div><p className="text-sm text-[#1b2423]/50">Precio regular <span className="ml-2 font-semibold text-[#1b2423]/55 line-through">RD$14,950</span></p><p className="mt-2 text-5xl font-semibold tracking-[-0.06em] text-[#008f86]">RD$8,950</p></div>
                  <div className="flex gap-2 sm:flex-col sm:items-end"><span className="rounded-full bg-[#1b2423] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white">40% OFF</span><span className="text-sm font-semibold text-[#008f86]">Ahorras RD$6,000</span></div>
                </div>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">{launchIncludes.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-[#1b2423]/72"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#008f86]" />{feature}</li>)}</ul>
                <p className="mt-8 max-w-2xl border-l-2 border-[#008f86] pl-4 text-sm leading-relaxed text-[#1b2423]/60">Este precio es temporal. Aprovecha la tarifa de lanzamiento antes de volver al precio regular de RD$14,950.</p>
                <Button onClick={openLaunchOffer} className="mt-9 w-full rounded-full bg-[#1b2423] py-6 font-semibold text-white transition hover:bg-[#008f86]">Aprovechar precio de lanzamiento <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </article>

              <article className="relative border border-[#1b2423]/12 bg-white/40 p-8 opacity-65 sm:p-10">
                <div className="absolute right-6 top-6 rounded-full border border-[#1b2423]/15 bg-[#f7f6f2] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1b2423]/60">Próximamente</div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1b2423]/45">Expansión de servicio</p>
                <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">Add-on Dron</h3>
                <p className="mt-2 text-sm text-[#1b2423]/50">Fotos aéreas y video vertical</p>
                <p className="mt-8 text-4xl font-semibold tracking-[-0.05em] text-[#1b2423]/45">RD$5,000</p>
                <ul className="mt-8 space-y-4 border-t border-[#1b2423]/12 pt-6">{["Tomas aéreas de propiedad", "Video vertical para redes", "Material optimizado"].map((feature) => <li key={feature} className="flex items-center gap-3 text-sm text-[#1b2423]/45"><Check className="h-4 w-4" />{feature}</li>)}</ul>
              </article>
            </div>
          </div>
        </section>

        <section className="border-y border-[#1b2423]/10 bg-[#f7f6f2]">
          <div className="container py-20 lg:py-28"><div className="flex flex-col justify-between gap-6 border-b border-[#1b2423]/15 pb-8 sm:flex-row sm:items-end"><div><p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#008f86]">04 · Insights</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Pensar mejor cómo se presenta una propiedad.</h2></div><Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-[#008f86] transition-colors hover:text-[#006e68]">Ver todos los artículos <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-10 grid gap-5 md:grid-cols-3">{[{ title: "La visita empieza antes de la visita", category: "Guía", image: "/manus-storage/hogar360-insight-virtual-visit_6482ce3e.jpg", slug: "la-visita-empieza-antes-de-la-visita" }, { title: "Qué está cambiando en otros mercados inmobiliarios", category: "Mercados", image: "/manus-storage/hogar360-insight-global-markets_9c17a113.jpg", slug: "que-esta-cambiando-en-otros-mercados" }, { title: "Cómo preparar una propiedad para un recorrido 3D", category: "Preparación", image: "/manus-storage/hogar360-insight-preparation_63dd8cee.jpg", slug: "como-preparar-una-propiedad-para-un-recorrido-3d" }].map((article, index) => <Link key={article.slug} href={`/insights/${article.slug}`} className="group block"><article><div className="relative aspect-[1.45/1] overflow-hidden bg-[#d9d7cf]"><img src={article.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute bottom-3 right-3 grid h-7 w-7 place-items-center rounded-full border border-white/70 bg-[#101b27]/65 text-[10px] font-bold text-white backdrop-blur">0{index + 1}</span></div><p className="mt-4 text-[10px] font-bold uppercase tracking-[0.17em] text-[#008f86]">{article.category}</p><h3 className="mt-3 text-xl font-semibold leading-tight tracking-[-0.035em] group-hover:text-[#008f86]">{article.title}</h3></article></Link>)}</div></div>
        </section>

        <section id="contacto" className="container py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div><p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#008f86]">04 · Contacto</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Cotiza sin complicarte.</h2><p className="mt-5 max-w-md text-base leading-relaxed text-[#1b2423]/60">Puedes escribirnos directamente por WhatsApp o dejarnos lo esencial de tu propiedad. Te respondemos con una propuesta clara.</p><button type="button" onClick={() => openWhatsApp("Hola, quiero cotizar una experiencia Hogar360 para una propiedad.")} className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#008f86] px-5 py-3 text-sm font-semibold text-[#008f86] transition-colors hover:bg-[#008f86] hover:text-white"><MessageCircle className="h-4 w-4" />Cotizar por WhatsApp</button></div>
            <form onSubmit={handleSubmit} className="border-t border-[#1b2423]/15 pt-8 lg:border-l lg:pl-12 lg:pt-0">
              <div className="grid gap-6 sm:grid-cols-2"><label className="text-sm font-semibold">Tu nombre<Input placeholder="Tu nombre" value={formData.nombre} onChange={(event) => setFormData({ ...formData, nombre: event.target.value })} className="mt-3 h-12 rounded-none border-0 border-b border-[#1b2423]/20 bg-transparent px-0 shadow-none focus-visible:border-[#008f86] focus-visible:ring-0" /></label><label className="text-sm font-semibold">Correo electrónico<Input type="email" placeholder="tu@email.com" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} className="mt-3 h-12 rounded-none border-0 border-b border-[#1b2423]/20 bg-transparent px-0 shadow-none focus-visible:border-[#008f86] focus-visible:ring-0" /></label></div>
              <label className="mt-8 block text-sm font-semibold">Tipo de propiedad y ubicación<Textarea placeholder="Ej: Apartamento de 2 habitaciones en Santiago" value={formData.propiedad} onChange={(event) => setFormData({ ...formData, propiedad: event.target.value })} className="mt-3 min-h-28 resize-none rounded-none border-0 border-b border-[#1b2423]/20 bg-transparent px-0 shadow-none focus-visible:border-[#008f86] focus-visible:ring-0" /></label>
              <Button type="submit" className="mt-8 rounded-full bg-[#1b2423] px-7 py-6 font-semibold text-white transition hover:bg-[#008f86]">Solicitar propuesta <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
