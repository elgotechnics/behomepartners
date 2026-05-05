"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

type Service = {
  title: string;
  description: string;
  cta: string;
  icon: ReactNode;
};

const HomeIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M3 11.99V14.5C3 17.8 3 19.45 4.03 20.47C5.05 21.5 6.7 21.5 10 21.5H14C17.3 21.5 18.95 21.5 19.97 20.47C21 19.45 21 17.8 21 14.5V11.99C21 10.31 21 9.47 20.64 8.74C20.29 8.01 19.62 7.5 18.3 6.46L16.3 4.91C14.23 3.3 13.2 2.5 12 2.5C10.8 2.5 9.77 3.3 7.7 4.91L5.7 6.46C4.38 7.5 3.71 8.01 3.36 8.74C3 9.47 3 10.31 3 11.99Z" />
    <path d="M15 21.5V16.5C15 15.09 15 14.38 14.56 13.94C14.12 13.5 13.41 13.5 12 13.5C10.59 13.5 9.88 13.5 9.44 13.94C9 14.38 9 15.09 9 16.5V21.5" />
  </svg>
);

const KeyIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M15.5 14.5C18.81 14.5 21.5 11.81 21.5 8.5C21.5 5.19 18.81 2.5 15.5 2.5C12.19 2.5 9.5 5.19 9.5 8.5C9.5 9.38 9.69 10.22 10.03 10.97L2.5 18.5V21.5H5.5V19.5H7.5V17.5H9.5L13.03 13.97C13.78 14.31 14.62 14.5 15.5 14.5Z" />
    <path d="M17.5 6.5L16.5 7.5" />
  </svg>
);

const CalcIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M3 10H21" />
    <path d="M15 6L17 6" />
    <path d="M21 13V11C21 6.76 21 4.64 19.68 3.32C18.36 2 16.24 2 12 2C7.76 2 5.64 2 4.32 3.32C3 4.64 3 6.76 3 11V13C3 17.24 3 19.36 4.32 20.68C5.64 22 7.76 22 12 22C16.24 22 18.36 22 19.68 20.68C21 19.36 21 17.24 21 13Z" />
    <path d="M7 14H7.5M11.7 14H12.3M16.5 14H17" strokeLinecap="round" />
    <path d="M7 18H7.5M11.7 18H12.3M16.5 18H17" strokeLinecap="round" />
  </svg>
);

const OfficeIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    aria-hidden
  >
    <path d="M14 22V8C14 5.17 14 3.76 13.12 2.88C12.24 2 10.83 2 8 2C5.17 2 3.76 2 2.88 2.88C2 3.76 2 5.17 2 8V16C2 18.83 2 20.24 2.88 21.12C3.76 22 5.17 22 8 22H14Z" />
    <path d="M6.5 11H5.5M10.5 11H9.5M6.5 7H5.5M6.5 15H5.5M10.5 7H9.5M10.5 15H9.5" />
    <path d="M18.5 15H17.5M18.5 11H17.5" />
    <path d="M18 8H14V22H18C19.89 22 20.83 22 21.41 21.41C22 20.83 22 19.89 22 18V12C22 10.11 22 9.17 21.41 8.59C20.83 8 19.89 8 18 8Z" />
  </svg>
);

const ChartIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M3 4V14C3 16.83 3 18.24 3.88 19.12C4.76 20 6.17 20 9 20H21" />
    <path d="M6 14L9.25 10.75C9.89 10.11 10.22 9.78 10.59 9.68C10.86 9.6 11.14 9.6 11.41 9.68C11.78 9.78 12.11 10.11 12.75 10.75C13.39 11.39 13.72 11.72 14.09 11.82C14.36 11.9 14.64 11.9 14.91 11.82C15.28 11.72 15.61 11.39 16.25 10.75L20 7" />
  </svg>
);

const PromoIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M14.93 2.91L8.27 6.10C7.76 6.35 7.21 6.41 6.66 6.29C6.29 6.21 6.11 6.16 5.96 6.15C4.14 5.94 3 7.38 3 9.04V9.96C3 11.62 4.14 13.06 5.96 12.85C6.11 12.84 6.29 12.79 6.66 12.71C7.21 12.59 7.76 12.65 8.27 12.90L14.93 16.09C16.45 16.82 17.22 17.19 18.07 16.90C18.92 16.62 19.21 16 19.80 14.78C21.40 11.41 21.40 7.59 19.80 4.22C19.21 3 18.92 2.38 18.07 2.10C17.22 1.81 16.45 2.18 14.93 2.91Z" />
    <path d="M11.46 20.77L9.97 22C6.61 19.33 7.02 18.06 7.02 13H8.15C8.61 15.86 9.70 17.22 11.19 18.20C12.12 18.80 12.31 20.07 11.46 20.77Z" />
    <path d="M7.5 12.5V6.5" />
  </svg>
);

const services: Service[] = [
  {
    title: "Vente",
    description:
      "Mise en vente de votre bien. Accompagnement complet de la mise en marché à la signature de l'acte.",
    cta: "Mettre en vente",
    icon: HomeIcon,
  },
  {
    title: "Location",
    description:
      "Mise en location, recherche de locataires sérieux, sélection rigoureuse, état des lieux et signature du bail.",
    cta: "Mettre en location",
    icon: KeyIcon,
  },
  {
    title: "Estimation",
    description:
      "Évaluation gratuite et précise de votre bien basée sur les ventes réelles du marché local. Sans engagement.",
    cta: "Estimer mon bien",
    icon: CalcIcon,
  },
  {
    title: "Gestion locative",
    description:
      "Gestion complète de votre bien : loyers, suivi technique, relations locataires, déclarations. Vous êtes tranquille.",
    cta: "Confier mon bien",
    icon: OfficeIcon,
  },
  {
    title: "Investir",
    description:
      "Conseils personnalisés pour bâtir votre patrimoine immobilier. Sélection de biens, calcul de rentabilité, stratégie.",
    cta: "Investir avec nous",
    icon: ChartIcon,
  },
  {
    title: "Marketing immobilier",
    description:
      "Photos pro, drone, plans 2D/3D, visites virtuelles, home staging. Pour mettre votre bien en valeur dès le premier regard.",
    cta: "Valoriser mon bien",
    icon: PromoIcon,
  },
];

export function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      setAtStart(track.scrollLeft <= 8);
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 8);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-ink overflow-hidden">
      <div className="pt-20 lg:pt-28 pb-20 lg:pb-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-12 lg:mb-16">
          <div className="flex items-start justify-between gap-6">
            <div>
              <SectionEyebrow index="02" tone="dark" className="mb-3">
                Nos services
              </SectionEyebrow>
              <h2 className="text-3xl lg:text-[38px] font-extrabold leading-[1.1] tracking-tight mb-3 text-white">
                Un accompagnement complet
              </h2>
              <p className="text-sm text-white/65 max-w-[600px]">
                De l&apos;estimation à la signature, nos experts vous accompagnent à
                chaque étape avec une approche professionnelle, humaine et tournée
                vers la qualité.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Précédent"
                disabled={atStart}
                className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-inset ring-white/20 flex items-center justify-center text-white shadow-lg hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Suivant"
                disabled={atEnd}
                className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-inset ring-white/20 flex items-center justify-center text-white shadow-lg hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            style={{
              paddingLeft: "max(1.5rem, calc((100vw - 1280px) / 2 + 2rem))",
              paddingRight: "1.5rem",
              scrollPaddingLeft: "max(1.5rem, calc((100vw - 1280px) / 2 + 2rem))",
            }}
            className="flex gap-6 overflow-x-auto pt-3 pb-4 -my-1 snap-x scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((s) => (
              <article
                key={s.title}
                data-card
                className="group relative snap-start flex-shrink-0 w-[calc(100vw-3rem)] sm:w-[44vw] lg:w-[340px] xl:w-[368px] min-w-[280px] flex flex-col p-6 sm:p-8 bg-gradient-to-b from-white/[0.09] to-white/[0.02] border border-white/20 rounded-[20px] ring-1 ring-inset ring-white/10 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/40 hover:ring-white/20 hover:from-white/[0.14] hover:to-white/[0.05] cursor-pointer"
              >
                <div className="flex flex-col flex-1">
                  <div className="w-14 h-14 bg-accent text-white flex items-center justify-center mb-6 rounded-[12px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {s.icon}
                  </div>
                  <h3 className="font-extrabold text-xl text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/65 flex-1">
                    {s.description}
                  </p>
                  <div className="flex items-center gap-2 mt-6 text-[12px] font-bold tracking-[.15em] uppercase text-white/90 group-hover:text-white transition-colors duration-500">
                    {s.cta}
                    <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="sm:hidden flex items-center justify-center gap-3 mt-8 px-6">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Précédent"
              disabled={atStart}
              className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-inset ring-white/20 flex items-center justify-center text-white shadow-lg hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Suivant"
              disabled={atEnd}
              className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-inset ring-white/20 flex items-center justify-center text-white shadow-lg hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-10">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[12px] font-bold tracking-[.15em] uppercase text-white ring-1 ring-inset ring-white/30 hover:bg-white hover:text-ink hover:ring-white transition-colors"
            >
              Voir tous nos services
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
