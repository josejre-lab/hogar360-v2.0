/*
  Hogar360 shared footer: quiet utility navigation anchored in deep navy.
  It reinforces the branded 360-view identity without inventing social channels.
*/
import { Link } from "wouter";
import BrandMark from "@/components/BrandMark";

export default function SiteFooter() {
  return (
    <footer className="bg-[#101b27] text-[#d8e2de]/60">
      <div className="container grid gap-10 py-12 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 text-sm text-white">
            <BrandMark inverted />
            <span className="flex items-baseline font-bold tracking-[-0.055em]"><span className="text-[13px] tracking-[0.02em]">HOGAR</span><span className="ml-0.5 text-base text-[#8ce3d6]">360</span></span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">Visualización inmobiliaria para que cada propiedad se presente con más claridad desde el primer clic.</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-[10px] font-bold uppercase tracking-[0.16em]">
          <Link href="/" className="transition-colors hover:text-[#8ce3d6]">Inicio</Link>
          <Link href="/casos/vista-linda" className="transition-colors hover:text-[#8ce3d6]">Caso Vista Linda</Link>
          <a href="/#servicios" className="transition-colors hover:text-[#8ce3d6]">Servicios</a>
          <Link href="/insights" className="transition-colors hover:text-[#8ce3d6]">Insights</Link>
          <Link href="/contacto" className="text-[#8ce3d6] transition-colors hover:text-white">Cotizar</Link>
        </div>
      </div>
      <div className="border-t border-white/10"><div className="container py-5 text-[10px] font-medium uppercase tracking-[0.12em] text-white/35">© 2026 Hogar360 · Santiago, República Dominicana</div></div>
    </footer>
  );
}
