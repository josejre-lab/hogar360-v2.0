/*
  Hogar360 contact route: minimalist agent-facing inquiry page.
  Conversion is deliberately short and routes qualified inquiries directly to WhatsApp.
*/
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const yourWhatsApp = "+1 (849) 863‑1101";

export default function ContactPage() {
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
    openWhatsApp(`Hola, me interesa en los servicios de Hogar360.\n\nNombre: ${formData.nombre}\nCorreo: ${formData.email}\nPropiedad: ${formData.propiedad}`);
    toast.success("Abriendo WhatsApp...");
  };

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#1b2423]">
      <SiteHeader active="contacto" />
      <main>
        <section className="container grid gap-12 py-20 lg:grid-cols-[0.78fr_1.22fr] lg:py-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#008f86]">Cotiza tu próxima propiedad</p>
            <h1 className="mt-5 max-w-xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-6xl">Una mejor presentación empieza con una conversación.</h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-[#1b2423]/60">Cuéntanos qué propiedad quieres presentar. Te responderemos directamente por WhatsApp con una propuesta clara y adecuada para tu caso.</p>
            <button onClick={() => openWhatsApp("Hola, quiero cotizar una experiencia Hogar360 para una propiedad.")} className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#008f86] transition-colors hover:text-[#006e68]">
              <MessageCircle className="h-4 w-4" /> Cotizar por WhatsApp
            </button>
          </div>

          <form onSubmit={handleSubmit} className="border-t border-[#1b2423]/15 pt-8 lg:pt-0 lg:border-t-0 lg:border-l lg:pl-12">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="text-sm font-semibold">Tu nombre<Input placeholder="Tu nombre" value={formData.nombre} onChange={(event) => setFormData({ ...formData, nombre: event.target.value })} className="mt-3 h-12 rounded-none border-0 border-b border-[#1b2423]/20 bg-transparent px-0 shadow-none focus-visible:border-[#008f86] focus-visible:ring-0" /></label>
              <label className="text-sm font-semibold">Correo electrónico<Input type="email" placeholder="tu@email.com" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} className="mt-3 h-12 rounded-none border-0 border-b border-[#1b2423]/20 bg-transparent px-0 shadow-none focus-visible:border-[#008f86] focus-visible:ring-0" /></label>
            </div>
            <label className="mt-8 block text-sm font-semibold">Tipo de propiedad y ubicación<Textarea placeholder="Ej: Apartamento de 2 habitaciones en Santiago" value={formData.propiedad} onChange={(event) => setFormData({ ...formData, propiedad: event.target.value })} className="mt-3 min-h-32 resize-none rounded-none border-0 border-b border-[#1b2423]/20 bg-transparent px-0 shadow-none focus-visible:border-[#008f86] focus-visible:ring-0" /></label>
            <Button type="submit" className="mt-9 rounded-full bg-[#1b2423] px-7 py-6 font-semibold text-white hover:bg-[#008f86]">Solicitar propuesta <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
          </form>
        </section>
        <section className="border-t border-[#1b2423]/10 bg-[#eeece5]"><div className="container py-8 text-sm leading-relaxed text-[#1b2423]/60">Hogar360 trabaja con agentes inmobiliarios y proyectos en Santiago y zonas cercanas.</div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
