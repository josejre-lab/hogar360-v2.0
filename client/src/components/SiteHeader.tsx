/*
  Hogar360 shared chrome: compact editorial navigation with a 360-view brand mark.
  The component preserves the premium real-estate media tone across all routes.
*/
import { Menu } from "lucide-react";
import { Link } from "wouter";
import BrandMark from "@/components/BrandMark";
import { trackEvent } from "@/lib/analytics";

type SiteHeaderProps = {
  active?: "inicio" | "casos" | "servicios" | "insights" | "contacto";
};

const navItem = (active: boolean) =>
  `transition-colors hover:text-[#008f86] ${active ? "text-[#008f86]" : "text-[#1b2423]/58"}`;

export default function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1b2423]/10 bg-[#f7f6f2]/92 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4 sm:py-5">
        <Link href="/" className="flex items-center gap-3 text-sm text-[#1b2423]" aria-label="Hogar360, inicio">
          <BrandMark />
          <span className="flex items-baseline font-bold tracking-[-0.055em]"><span className="text-[13px] tracking-[0.02em]">HOGAR</span><span className="ml-0.5 text-base text-[#008f86]">360</span></span>
        </Link>
        <nav className="hidden items-center gap-5 text-[10px] font-bold uppercase tracking-[0.16em] sm:flex">
          <Link href="/" className={navItem(active === "inicio")}>Inicio</Link>
          <Link href="/casos/vista-linda" className={navItem(active === "casos")}>Casos</Link>
          <a href="/#servicios" className={navItem(active === "servicios")}>Servicios</a>
          <Link href="/insights" className={navItem(active === "insights")}>Insights</Link>
          <Link onClick={() => trackEvent("header_quote_click", { location: "desktop_header" })} href="/contacto" className={`rounded-full border px-4 py-2 ${active === "contacto" ? "border-[#008f86] bg-[#008f86] text-white" : "border-[#1b2423]/18 text-[#1b2423] hover:border-[#008f86] hover:bg-[#008f86] hover:text-white"}`}>Cotizar</Link>
        </nav>
        <Link onClick={() => trackEvent("header_quote_click", { location: "mobile_header" })} href="/contacto" className="grid h-9 w-9 place-items-center rounded-full border border-[#1b2423]/15 text-[#1b2423] sm:hidden" aria-label="Solicitar cotización">
          <Menu className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}
