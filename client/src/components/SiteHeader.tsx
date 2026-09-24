/*
Hogar360 shared chrome: compact editorial navigation with a 360-view brand mark.
The component preserves the premium real-estate media tone across all routes.
*/
import { ChevronDown, Menu } from "lucide-react";
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
    label: "Vista Linda",
    description: "Residencia · Caso de estudio",
    href: "/casos/vista-linda",
    external: false,
  },
  {
    label: "Altos de Gurabo",
    description: "Apartamento modelo · CityMax Santiago",
    href: "https://my.matterport.com/show/?m=ZgZLTpzSFmF",
    external: true,
  },
];

export default function SiteHeader({ active }: SiteHeaderProps) {
  const [portfolioOpen, setPortfolioOpen] = useState(false);
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

  return (
    <header className="sticky top-0 z-50 border-b border-[#1b2423]/10 bg-[#fdfbf7]/92 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4 sm:py-5">
        <Link href="/" className="flex items-center gap-3 text-sm text-[#1b2423]" aria-label="Hogar360, inicio">
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
              className={`flex items-center gap-1 ${navItem(active === "casos" || portfolioOpen)}`}
            >
              Portafolio
              <ChevronDown className={`h-3 w-3 transition-transform ${portfolioOpen ? "rotate-180" : ""}`} />
            </button>
            {portfolioOpen && (
              <div
                role="menu"
                className="absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 rounded-2xl border border-[#1b2423]/10 bg-[#fdfbf7] p-2 normal-case tracking-normal shadow-[0_20px_45px_-15px_rgba(27,36,35,0.25)]"
              >
                {PORTFOLIO_ITEMS.map((item) =>
                  item.external ? (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      role="menuitem"
                      onClick={() => setPortfolioOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-[#1b2423]/5"
                    >
                      <span className="block text-xs font-bold text-[#1b2423]">{item.label}</span>
                      <span className="mt-0.5 block text-[11px] font-normal text-[#1b2423]/55">{item.description}</span>
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setPortfolioOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-[#1b2423]/5"
                    >
                      <span className="block text-xs font-bold text-[#1b2423]">{item.label}</span>
                      <span className="mt-0.5 block text-[11px] font-normal text-[#1b2423]/55">{item.description}</span>
                    </Link>
                  )
                )}
              </div>
            )}
          </div>
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
