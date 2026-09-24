/*
Hogar360 shared chrome: compact editorial navigation with a 360-view brand mark.
The component preserves the premium real-estate media tone across all routes.
*/
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import BrandMark from "@/components/BrandMark";
import { trackEvent } from "@/lib/analytics";

type SiteHeaderProps = {
  active?: "inicio" | "casos" | "servicios" | "insights" | "contacto";
};

const navItem = (active: boolean) =>
  `transition-colors hover:text-[#008f86] ${active ? "text-[#008f86]" : "text-[#1b2423]/58"}`;

const PORTFOLIO_ITEMS = [
  {
    label: "Altos de Gurabo",
    description: "Apartamento modelo Â· CityMax Santiago",
    href: "https://my.matterport.com/show/?m=aEbrCb8PmZT",
    external: true,
  },
  {
    label: "Vista Linda",
    description: "Residencia Â· Caso de estudio",
    href: "/casos/vista-linda",
    external: false,
  },
];

function PortfolioLink({ item, onSelect, className }: { item: (typeof PORTFOLIO_ITEMS)[number]; onSelect: () => void; className: string }) {
  const body = (
    <>
      <span className="block text-xs font-bold text-[#1b2423]">{item.label}</span>
      <span className="mt-0.5 block text-[11px] font-normal text-[#1b2423]/55">{item.description}</span>
    </>
  );
  return item.external ? (
    <a href={item.href} target="_blank" rel="noreferrer" role="menuitem" onClick={onSelect} className={className}>
      {body}
    </a>
  ) : (
    <Link href={item.href} role="menuitem" onClick={onSelect} className={className}>
      {body}
    </Link>
  );
}

export default function SiteHeader({ active }: SiteHeaderProps) {
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!portfolioOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (portfolioRef.current && !portfolioRef.current.contains(event.target as Node)) {
        setPortfolioOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPortfolioOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [portfolioOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);
  const mobileLink = (isActive: boolean) =>
    `block border-b border-[#1b2423]/8 py-4 text-[11px] font-bold uppercase tracking-[0.16em] ${isActive ? "text-[#008f86]" : "text-[#1b2423]"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#1b2423]/10 bg-[#fdfbf7]/92 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4 sm:py-5">
        <Link href="/" onClick={closeMobile} className="flex items-center gap-3 text-sm text-[#1b2423]" aria-label="Hogar360, inicio">
          <BrandMark />
          <span className="flex items-baseline font-bold tracking-[-0.055em]"><span className="text-[13px] tracking-[0.02em]">HOGAR</span><span className="ml-0.5 text-base text-[#008f86]">360</span></span>
        </Link>
        <nav className="hidden items-center gap-5 text-[10px] font-bold uppercase tracking-[0.16em] sm:flex">
          <Link href="/" className={navItem(active === "inicio")}>Inicio</Link>
          <div className="relative" ref={portfolioRef}>
            <button
              type="button"
              onClick={() => setPortfolioOpen((open) => !open)}
              aria-expanded={portfolioOpen}
              aria-haspopup="menu"
              className={`flex items-center gap-1 uppercase tracking-[0.16em] ${navItem(active === "casos" || portfolioOpen)}`}
            >
              Portafolio
              <ChevronDown className={`h-3 w-3 transition-transform ${portfolioOpen ? "rotate-180" : ""}`} />
            </button>
            {portfolioOpen && (
              <div
                role="menu"
                className="absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 rounded-2xl border border-[#1b2423]/10 bg-[#fdfbf7] p-2 normal-case tracking-normal shadow-[0_20px_45px_-15px_rgba(27,36,35,0.25)]"
              >
                {PORTFOLIO_ITEMS.map((item) => (
                  <PortfolioLink
                    key={item.href}
                    item={item}
                    onSelect={() => setPortfolioOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-[#1b2423]/5"
                  />
                ))}
              </div>
            )}
          </div>
          <a href="/#servicios" className={navItem(active === "servicios")}>Servicios</a>
          <Link href="/insights" className={navItem(active === "insights")}>Insights</Link>
          <Link onClick={() => trackEvent("header_quote_click", { location: "desktop_header" })} href="/contacto" className={`rounded-full border px-4 py-2 ${active === "contacto" ? "border-[#008f86] bg-[#008f86] text-white" : "border-[#1b2423]/18 text-[#1b2423] hover:border-[#008f86] hover:bg-[#008f86] hover:text-white"}`}>Cotizar</Link>
        </nav>
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Cerrar menÃº" : "Abrir menÃº"}
          className="grid h-9 w-9 place-items-center rounded-full border border-[#1b2423]/15 text-[#1b2423] sm:hidden"
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-[#1b2423]/10 bg-[#fdfbf7] sm:hidden">
          <nav className="container pb-8 pt-2">
            <Link href="/" onClick={closeMobile} className={mobileLink(active === "inicio")}>Inicio</Link>

            <div className="border-b border-[#1b2423]/8 py-4">
              <p className={`text-[11px] font-bold uppercase tracking-[0.16em] ${active === "casos" ? "text-[#008f86]" : "text-[#1b2423]"}`}>Portafolio</p>
              <div className="mt-3 grid gap-1">
                {PORTFOLIO_ITEMS.map((item) => (
                  <PortfolioLink
                    key={item.href}
                    item={item}
                    onSelect={closeMobile}
                    className="block rounded-xl bg-[#1b2423]/[0.03] px-3 py-3 text-left"
                  />
                ))}
              </div>
            </div>

            <a href="/#servicios" onClick={closeMobile} className={mobileLink(active === "servicios")}>Servicios</a>
            <Link href="/insights" onClick={closeMobile} className={mobileLink(active === "insights")}>Insights</Link>

            <Link
              href="/contacto"
              onClick={() => {
                trackEvent("header_quote_click", { location: "mobile_menu" });
                closeMobile();
              }}
              className="mt-6 flex items-center justify-center rounded-full bg-[#1b2423] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white"
            >
              Cotizar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
