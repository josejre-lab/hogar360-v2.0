/*
  Hogar360 visual direction: minimalist editorial case study.
  Warm off-white surfaces, charcoal type, restrained teal accents,
  generous whitespace, thin rules, and calm architectural imagery.
*/
import { ArrowUpRight, ChevronRight, MessageCircle, Play, ScanLine, X } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Seo from "@/components/Seo";
import { trackEvent } from "@/lib/analytics";
import { caseStudyStructuredData } from "@/lib/seo";

const backgroundImage = "/manus-storage/hogar360-minimal-architectural-bg_5212f6e5.jpg";

const galleryPhotos = [
  { src: "/manus-storage/vista-linda-hero_e01d4f82.png", title: "Fachada principal" },
  { src: "https://framerusercontent.com/images/wkTprlsrdB62blXtpLFmyJcM3vQ.jpeg", title: "Vista frontal" },
  { src: "https://framerusercontent.com/images/aojY4A8XMSYIrUdu8XbsXJspTw.jpeg", title: "Vista exterior" },
  { src: "https://framerusercontent.com/images/Gvg7GhWAVR5QLMouuNf9o8Mw.jpeg", title: "Acceso principal" },
  { src: "https://framerusercontent.com/images/eQWAYO7xnwJODSGeN4rGiflQLY.jpeg", title: "Detalle arquitectónico" },
];

const propertyFacts = [
  { value: "03", label: "Habitaciones" },
  { value: "01", label: "Baño" },
  { value: "245m²", label: "Área de referencia" },
];

export default function PropertyPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#1b2423]">
      <Seo title="Vista Linda: caso de estudio de recorrido 3D | Hogar360" description="Descubre cómo Hogar360 reúne recorrido 3D, galería e información de una propiedad en una experiencia clara para agentes inmobiliarios." path="/casos/vista-linda" image="/manus-storage/vista-linda-hero_e01d4f82.png" structuredData={caseStudyStructuredData} />
      <SiteHeader active="casos" />

      <main>
        <section className="relative overflow-hidden border-b border-[#1b2423]/10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
          <div className="absolute inset-0 bg-[#f7f6f2]/78" />
          <div className="spatial-orbit absolute -right-8 top-28 h-56 w-56 opacity-65 before:-left-16 before:-top-12 after:left-7 after:top-0 lg:right-[18%]" />
          <div className="relative container grid min-h-[570px] items-end gap-12 py-20 lg:grid-cols-[1.05fr_0.55fr] lg:items-center lg:py-24">
            <div className="max-w-3xl">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-[#008f86]">Caso de estudio · Vista Linda</p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#1b2423] sm:text-6xl lg:text-7xl">
                Vista Linda: una propiedad presentada como una experiencia.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#1b2423]/65">
                Un caso de estudio de cómo Hogar360 reúne recorrido, galería e información en una presentación digital clara, visual y lista para compartir.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#recorrido" className="inline-flex items-center gap-2 rounded-full bg-[#1b2423] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#008f86]">
                  Ver el proyecto <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link href="/" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-[#1b2423]/70 transition-colors hover:text-[#008f86]">
                  Conocer Hogar360 <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="max-w-xs justify-self-start border-l border-[#1b2423]/20 pl-6 lg:justify-self-end">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1b2423]/45">La intención</p>
              <p className="mt-4 text-xl font-medium leading-snug tracking-tight text-[#1b2423]">
                Que un agente pueda mostrar el potencial de una propiedad antes de la primera visita.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-[#1b2423]/55">Tour 3D · Landing de propiedad · Galería visual</p>
            </div>
          </div>
        </section>

        <section className="border-b border-[#1b2423]/10 bg-[#eeece5]">
          <div className="container grid gap-8 py-12 md:grid-cols-[0.7fr_1.3fr] md:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#008f86]">Qué demuestra este caso</p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#1b2423]/60">Una experiencia diseñada para que un prospecto entienda mejor la propiedad antes de escribir o coordinar una visita.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              <div className="border-l border-[#008f86] pl-4"><span className="capture-label">Punto 01</span><ScanLine className="mt-3 h-4 w-4 text-[#008f86]" /><p className="mt-4 text-sm font-semibold">Exploración 3D</p><p className="mt-2 text-xs leading-relaxed text-[#1b2423]/55">El prospecto recorre los espacios con más contexto.</p></div>
              <div className="border-l border-[#008f86] pl-4"><span className="capture-label">Punto 02</span><ChevronRight className="mt-3 h-4 w-4 text-[#008f86]" /><p className="mt-4 text-sm font-semibold">Información clara</p><p className="mt-2 text-xs leading-relaxed text-[#1b2423]/55">Los detalles relevantes se reúnen en un solo enlace.</p></div>
              <div className="border-l border-[#008f86] pl-4"><span className="capture-label">Punto 03</span><MessageCircle className="mt-3 h-4 w-4 text-[#008f86]" /><p className="mt-4 text-sm font-semibold">Contacto integrado</p><p className="mt-2 text-xs leading-relaxed text-[#1b2423]/55">El formato puede dirigir cada consulta al agente responsable.</p></div>
            </div>
          </div>
        </section>

        <section id="recorrido" className="container py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#008f86]">01 · Recorrido inmersivo</p>
              <h2 className="mt-4 max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">La propiedad empieza a hablar antes de la visita.</h2>
            </div>
            <p className="max-w-xl justify-self-end text-base leading-relaxed text-[#1b2423]/60 lg:pb-1">
              El recorrido 3D es el punto de partida de la experiencia: una forma práctica de ayudar a los prospectos a orientarse, entender los espacios y llegar a una conversación más informada.
            </p>
          </div>

          <div className="mt-12 overflow-hidden border border-[#1b2423]/12 bg-[#101b27] shadow-[0_24px_80px_rgba(27,36,35,0.12)]">
            <div className="flex min-h-[320px] flex-col items-center justify-center px-6 py-16 text-center text-white sm:min-h-[440px]">
              <span className="mb-5 grid h-14 w-14 place-items-center rounded-full border border-white/25 text-[#8ce3d6]"><Play className="ml-1 h-5 w-5" /></span>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8ce3d6]">Recorrido 3D en preparación</p>
              <h3 className="mt-4 max-w-md text-3xl font-semibold tracking-tight">El tour 3D de Vista Linda estará disponible aquí.</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">Este módulo se integrará con el recorrido final para que el visitante pueda explorar la propiedad desde cualquier dispositivo.</p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#1b2423]/10 bg-[#eeece5]">
          <div className="container grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:py-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#008f86]">02 · Video tour</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em]">Una primera visita, en movimiento.</h2>
            </div>
            <div className="overflow-hidden bg-[#101b27] shadow-[0_20px_60px_rgba(27,36,35,0.14)]">
              <video src="/manus-storage/videotour-ai_bd4ebbdd.mp4" controls playsInline preload="metadata" className="aspect-video w-full object-contain" />
            </div>
          </div>
        </section>

        <section className="container py-20 lg:py-28">
          <div className="flex flex-col justify-between gap-6 border-b border-[#1b2423]/15 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#008f86]">03 · Galería</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Detalles que construyen confianza.</h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#1b2423]/55">Una selección de imágenes exteriores para mostrar cómo una propiedad puede sentirse más concreta y memorable.</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
            {galleryPhotos.map((photo, idx) => (
              <button
                key={photo.src}
                onClick={() => { trackEvent("case_gallery_open", { item_number: idx + 1 }); setLightboxImage(photo.src); }}
                aria-label={`Ampliar ${photo.title}`}
                className={`group relative overflow-hidden bg-[#d9d7cf] text-left focus:outline-none focus:ring-2 focus:ring-[#008f86] focus:ring-offset-2 ${idx === 0 ? "col-span-2 row-span-2 min-h-[330px] md:min-h-[520px]" : "aspect-square"}`}
              >
                <img src={photo.src} alt={photo.title} loading="eager" className="h-full w-full object-cover saturate-[0.86] sepia-[0.06] transition duration-500 group-hover:scale-105 group-hover:saturate-100" />
                <span className="absolute left-3 top-3 rounded-full bg-[#f7f6f2]/92 px-2.5 py-1 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100"><span className="capture-label">Vista 360</span></span>
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-4 pt-12 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">{photo.title}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="container border-t border-[#1b2423]/15 py-16 lg:py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {propertyFacts.map((fact) => (
              <div key={fact.label} className="relative border-l border-[#008f86] pl-5"><span className="absolute -left-[3px] top-0 h-1.5 w-1.5 rounded-full bg-[#008f86] shadow-[0_0_0_4px_rgba(0,143,134,0.12)]" />
                <p className="text-3xl font-semibold tracking-[-0.04em] text-[#1b2423]">{fact.value}</p>
                <p className="mt-2 text-sm text-[#1b2423]/55">{fact.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-[#1b2423]/60">
            Vista Linda funciona como una demostración de formato: una experiencia digital que organiza la información, crea contexto visual y facilita que un agente presente mejor su inventario.
          </p>
        </section>

        <section className="bg-[#1b2423] text-white">
          <div className="container flex flex-col justify-between gap-8 py-16 sm:flex-row sm:items-end lg:py-20">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8ce3d6]">El siguiente proyecto puede ser el tuyo</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Dale a tu próxima propiedad una presentación que se entienda mejor.</h2>
            </div>
            <Link onClick={() => trackEvent("case_study_quote_click", { placement: "case_study_cta" })} href="/contacto" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#8ce3d6] px-6 py-3 text-sm font-bold text-[#1b2423] transition-transform hover:-translate-y-0.5 hover:bg-white">
              Cotizar una experiencia similar <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      {lightboxImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101b27]/95 p-4" onClick={() => setLightboxImage(null)}>
          <button onClick={() => setLightboxImage(null)} aria-label="Cerrar imagen" className="absolute right-5 top-5 rounded-full border border-white/20 p-2 text-white/75 transition-colors hover:text-white">
            <X className="h-6 w-6" />
          </button>
          <img src={lightboxImage} alt="Vista ampliada del caso de estudio" onClick={(event) => event.stopPropagation()} className="max-h-[88vh] max-w-[92vw] object-contain" />
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
