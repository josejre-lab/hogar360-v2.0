/*
  Hogar360 visual direction: minimalist editorial service studio.
  Warm off-white surfaces, charcoal typography, restrained teal accents,
  generous whitespace, fine rules, and architectural imagery used sparingly.
*/
import { ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import BrandMark from "@/components/BrandMark";

const backgroundImage = "/manus-storage/hogar360-minimal-architectural-bg_5212f6e5.jpg";

const portfolio = [
  { title: "Vista exterior", image: "https://framerusercontent.com/images/aojY4A8XMSYIrUdu8XbsXJspTw.jpeg" },
  { title: "Acceso principal", image: "https://framerusercontent.com/images/Gvg7GhWAVR5QLMouuNf9o8Mw.jpeg" },
  { title: "Detalle arquitectónico", image: "https://framerusercontent.com/images/eQWAYO7xnwJODSGeN4rGiflQLY.jpeg" },
];

export default function BusinessPage() {
  const yourWhatsApp = "+1 (849) 863‑1101";
  const [formData, setFormData] = useState({ nombre: "", email: "", propiedad: "" });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formData.nombre || !formData.email || !formData.propiedad) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    const message = encodeURIComponent(
      `Hola, me interesa en los servicios de Hogar360.\n\nNombre: ${formData.nombre}\nCorreo: ${formData.email}\nPropiedad: ${formData.propiedad}`,
    );
    window.open(`https://wa.me/${yourWhatsApp.replace(/\D/g, "")}?text=${message}`, "_blank");
    setFormData({ nombre: "", email: "", propiedad: "" });
    toast.success("Redirigiendo a WhatsApp...");
  };

  const scrollToContact = () => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#1b2423]">
      <header className="sticky top-0 z-50 border-b border-[#1b2423]/10 bg-[#f7f6f2]/90 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-5">
          <Link href="/hogar360" className="flex items-center gap-3 text-sm font-semibold tracking-tight text-[#1b2423]">
            <BrandMark />
            Hogar360
          </Link>
          <nav className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.16em] text-[#1b2423]/55">
            <a href="#portafolio" className="hidden transition-colors hover:text-[#008f86] sm:inline">Portafolio</a>
            <a href="#servicios" className="hidden transition-colors hover:text-[#008f86] sm:inline">Servicios</a>
            <a href="#contacto" className="text-[#008f86] transition-colors hover:text-[#006e68]">Hablemos</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-[#1b2423]/10">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${backgroundImage}')` }} />
          <div className="absolute inset-0 bg-[#f7f6f2]/76" />
          <div className="relative container grid min-h-[620px] items-end gap-12 py-20 lg:grid-cols-[1fr_0.46fr] lg:items-center lg:py-24">
            <div className="max-w-4xl">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-[#008f86]">Hogar360 · Tours 3D para propiedades</p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-8xl">Haz que una propiedad se entienda antes de visitarla.</h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#1b2423]/65">Creamos recorridos 3D y landing pages que convierten cada inmueble en una experiencia clara, visual y lista para compartir.</p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#contacto" className="inline-flex items-center gap-2 rounded-full bg-[#1b2423] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#008f86]">Presentar mi propiedad <ArrowUpRight className="h-4 w-4" /></a>
                <a href="#portafolio" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-[#1b2423]/70 transition-colors hover:text-[#008f86]">Ver un caso <ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>
            <div className="max-w-xs justify-self-start border-l border-[#1b2423]/20 pl-6 lg:justify-self-end">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1b2423]/45">Para agentes</p>
              <p className="mt-4 text-xl font-medium leading-snug tracking-tight">Menos fricción para explicar. Más contexto para decidir.</p>
              <p className="mt-5 text-sm leading-relaxed text-[#1b2423]/55">Una presentación cuidada puede trabajar por tu propiedad incluso cuando tú no estás en la sala.</p>
            </div>
          </div>
        </section>

        <section id="portafolio" className="container py-20 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#008f86]">01 · Portafolio</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Un caso real, explicado con intención.</h2>
            </div>
            <p className="max-w-xl justify-self-end text-base leading-relaxed text-[#1b2423]/60">Vista Linda es nuestra muestra de trabajo: un formato diseñado para ordenar la información de una propiedad y hacer que el siguiente paso sea más fácil.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {portfolio.map((card) => (
              <Link key={card.title} href="/" className="group block">
                <article className="overflow-hidden border border-[#1b2423]/12 bg-white/45 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden bg-[#d9d7cf]"><img src={card.image} alt={card.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                  <div className="flex items-center justify-between gap-4 px-5 py-5"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#008f86]">Caso Vista Linda</p><h3 className="mt-2 font-semibold tracking-tight">{card.title}</h3></div><ArrowUpRight className="h-4 w-4 text-[#1b2423]/45 transition-colors group-hover:text-[#008f86]" /></div>
                </article>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-right"><Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#008f86] transition-colors hover:text-[#006e68]">Ver el caso completo <ArrowRight className="h-4 w-4" /></Link></div>
        </section>

        <section id="servicios" className="border-y border-[#1b2423]/10 bg-[#eeece5]">
          <div className="container py-20 lg:py-28">
            <div className="mb-12 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#008f86]">02 · Servicios</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Lo esencial para presentar mejor.</h2><p className="mt-5 text-base leading-relaxed text-[#1b2423]/60">Un paquete directo para poner tu próxima propiedad en circulación con una experiencia digital que se siente profesional desde el primer clic.</p></div>
            <div className="grid gap-5 md:grid-cols-2">
              <article className="border-2 border-[#008f86] bg-[#f7f6f2] p-8 shadow-[0_18px_50px_rgba(27,36,35,0.07)] sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008f86]">Disponible</p>
                <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">Paquete Lanzamiento</h3>
                <p className="mt-2 text-sm text-[#1b2423]/55">Tour 3D + Landing</p>
                <p className="mt-8 text-4xl font-semibold tracking-[-0.05em] text-[#008f86]">RD$ 8,950</p>
                <ul className="mt-8 space-y-4 border-t border-[#1b2423]/12 pt-6">{["Tour 3D profesional", "Landing de la propiedad", "Link listo para compartir"].map((feature) => <li key={feature} className="flex items-center gap-3 text-sm text-[#1b2423]/70"><Check className="h-4 w-4 text-[#008f86]" />{feature}</li>)}</ul>
                <Button onClick={scrollToContact} className="mt-9 w-full rounded-full bg-[#1b2423] py-6 font-semibold text-white hover:bg-[#008f86]">Solicitar cotización</Button>
              </article>
              <article className="relative border border-[#1b2423]/12 bg-white/45 p-8 opacity-65 sm:p-10">
                <div className="absolute right-6 top-6 rounded-full border border-[#1b2423]/15 bg-[#f7f6f2] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1b2423]/60">Próximamente</div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1b2423]/45">Próxima etapa</p>
                <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">Add-on Dron</h3>
                <p className="mt-2 text-sm text-[#1b2423]/50">Fotos aéreas</p>
                <p className="mt-8 text-4xl font-semibold tracking-[-0.05em] text-[#1b2423]/45">RD$ 5,000</p>
                <ul className="mt-8 space-y-4 border-t border-[#1b2423]/12 pt-6">{["Tomas aéreas de propiedad", "Video vertical para redes", "Material optimizado"].map((feature) => <li key={feature} className="flex items-center gap-3 text-sm text-[#1b2423]/45"><Check className="h-4 w-4" />{feature}</li>)}</ul>
                <Button disabled className="mt-9 w-full rounded-full bg-[#1b2423]/10 py-6 font-semibold text-[#1b2423]/45">Próximamente</Button>
              </article>
            </div>
          </div>
        </section>

        <section id="contacto" className="container py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#008f86]">03 · Contacto</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Hablemos de tu próxima propiedad.</h2><p className="mt-5 max-w-md text-base leading-relaxed text-[#1b2423]/60">Cuéntanos lo esencial y te contactaremos por WhatsApp con una propuesta clara.</p><div className="mt-10 border-l border-[#008f86] pl-5 text-sm leading-relaxed text-[#1b2423]/55">Respuesta directa · Propuesta personalizada · Link listo para compartir</div></div>
            <form onSubmit={handleSubmit} className="border-t border-[#1b2423]/15 pt-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold">Tu nombre<Input placeholder="Tu nombre" value={formData.nombre} onChange={(event) => setFormData({ ...formData, nombre: event.target.value })} className="mt-2 h-12 rounded-none border-0 border-b border-[#1b2423]/20 bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-[#008f86]" /></label>
                <label className="text-sm font-semibold">Correo electrónico<Input type="email" placeholder="tu@email.com" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} className="mt-2 h-12 rounded-none border-0 border-b border-[#1b2423]/20 bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-[#008f86]" /></label>
              </div>
              <label className="mt-7 block text-sm font-semibold">Tipo de propiedad y ubicación<Textarea placeholder="Ej: Casa de 3 habitaciones en Santiago" value={formData.propiedad} onChange={(event) => setFormData({ ...formData, propiedad: event.target.value })} className="mt-2 min-h-28 resize-none rounded-none border-0 border-b border-[#1b2423]/20 bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-[#008f86]" /></label>
              <div className="mt-8 flex flex-wrap items-center gap-5"><Button type="submit" className="rounded-full bg-[#1b2423] px-7 py-6 font-semibold text-white hover:bg-[#008f86]">Enviar solicitud <ArrowUpRight className="ml-2 h-4 w-4" /></Button><button type="button" onClick={() => { const message = encodeURIComponent("Hola, estoy interesado en los servicios de Hogar360."); window.open(`https://wa.me/${yourWhatsApp.replace(/\D/g, "")}?text=${message}`, "_blank"); }} className="inline-flex items-center gap-2 text-sm font-semibold text-[#008f86] transition-colors hover:text-[#006e68]"><MessageCircle className="h-4 w-4" />Cotizar por WhatsApp</button></div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#101b27] py-8 text-[#cbd4d0]/60"><div className="container flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between"><span>Hogar360 · Tours 3D para propiedades en Santiago, RD</span><span>© 2026 Todos los derechos reservados</span></div></footer>
    </div>
  );
}
