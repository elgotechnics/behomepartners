"use client";

import { type ReactNode } from "react";

type Service = {
  title: string;
  description: string;
  cta: string;
  icon: ReactNode;
};

const HomeIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 11.99V14.5C3 17.8 3 19.45 4.03 20.47C5.05 21.5 6.7 21.5 10 21.5H14C17.3 21.5 18.95 21.5 19.97 20.47C21 19.45 21 17.8 21 14.5V11.99C21 10.31 21 9.47 20.64 8.74C20.29 8.01 19.62 7.5 18.3 6.46L16.3 4.91C14.23 3.3 13.2 2.5 12 2.5C10.8 2.5 9.77 3.3 7.7 4.91L5.7 6.46C4.38 7.5 3.71 8.01 3.36 8.74C3 9.47 3 10.31 3 11.99Z" />
    <path d="M15 21.5V16.5C15 15.09 15 14.38 14.56 13.94C14.12 13.5 13.41 13.5 12 13.5C10.59 13.5 9.88 13.5 9.44 13.94C9 14.38 9 15.09 9 16.5V21.5" />
  </svg>
);

const KeyIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M15.5 14.5C18.81 14.5 21.5 11.81 21.5 8.5C21.5 5.19 18.81 2.5 15.5 2.5C12.19 2.5 9.5 5.19 9.5 8.5C9.5 9.38 9.69 10.22 10.03 10.97L2.5 18.5V21.5H5.5V19.5H7.5V17.5H9.5L13.03 13.97C13.78 14.31 14.62 14.5 15.5 14.5Z" />
    <path d="M17.5 6.5L16.5 7.5" />
  </svg>
);

const CalcIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden>
    <path d="M3 10H21" />
    <path d="M15 6L17 6" />
    <path d="M21 13V11C21 6.76 21 4.64 19.68 3.32C18.36 2 16.24 2 12 2C7.76 2 5.64 2 4.32 3.32C3 4.64 3 6.76 3 11V13C3 17.24 3 19.36 4.32 20.68C5.64 22 7.76 22 12 22C16.24 22 18.36 22 19.68 20.68C21 19.36 21 17.24 21 13Z" />
    <path d="M7 14H7.5M11.7 14H12.3M16.5 14H17" strokeLinecap="round" />
    <path d="M7 18H7.5M11.7 18H12.3M16.5 18H17" strokeLinecap="round" />
  </svg>
);

const OfficeIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
    <path d="M14 22V8C14 5.17 14 3.76 13.12 2.88C12.24 2 10.83 2 8 2C5.17 2 3.76 2 2.88 2.88C2 3.76 2 5.17 2 8V16C2 18.83 2 20.24 2.88 21.12C3.76 22 5.17 22 8 22H14Z" />
    <path d="M6.5 11H5.5M10.5 11H9.5M6.5 7H5.5M6.5 15H5.5M10.5 7H9.5M10.5 15H9.5" />
    <path d="M18.5 15H17.5M18.5 11H17.5" />
    <path d="M18 8H14V22H18C19.89 22 20.83 22 21.41 21.41C22 20.83 22 19.89 22 18V12C22 10.11 22 9.17 21.41 8.59C20.83 8 19.89 8 18 8Z" />
  </svg>
);

const ChartIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 4V14C3 16.83 3 18.24 3.88 19.12C4.76 20 6.17 20 9 20H21" />
    <path d="M6 14L9.25 10.75C9.89 10.11 10.22 9.78 10.59 9.68C10.86 9.6 11.14 9.6 11.41 9.68C11.78 9.78 12.11 10.11 12.75 10.75C13.39 11.39 13.72 11.72 14.09 11.82C14.36 11.9 14.64 11.9 14.91 11.82C15.28 11.72 15.61 11.39 16.25 10.75L20 7" />
  </svg>
);

const PromoIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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

const visuals = [
  "from-[#1a2845] via-[#324063] to-[#8b1538]",
  "from-[#8b1538] via-[#a32b4b] to-[#1a2845]",
  "from-[#324063] via-[#4a5a82] to-[#c9a876]",
  "from-[#1a2845] to-[#0f1828]",
  "from-[#8b1538] via-[#6b1029] to-[#1a2845]",
  "from-[#c9a876] via-[#8b1538] to-[#1a2845]",
];

export function ServicesOptionSpotlight() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s) => (
        <article
          key={s.title}
          className="group relative overflow-hidden flex flex-col p-8 bg-paper border border-hairline rounded-[18px] transition-all duration-500 hover:bg-ink hover:border-ink hover:shadow-[0_24px_60px_-20px_rgba(26,40,69,0.45)] cursor-pointer"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(139,21,56,0.55),transparent_60%)]"
          />
          <div className="relative">
            <div className="w-14 h-14 bg-accent text-white flex items-center justify-center mb-6 rounded-[12px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              {s.icon}
            </div>
            <h3 className="font-extrabold text-xl text-ink group-hover:text-white mb-3 transition-colors duration-500">
              {s.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink/70 group-hover:text-white/75 transition-colors duration-500">
              {s.description}
            </p>
            <div className="flex items-center gap-2 mt-6 text-[12px] font-bold tracking-[.12em] uppercase text-accent group-hover:text-white transition-colors duration-500">
              {s.cta}
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ServicesOptionEditorial() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s, i) => (
        <article
          key={s.title}
          className="group flex flex-col bg-paper rounded-[18px] overflow-hidden shadow-[0_2px_20px_-10px_rgba(26,40,69,0.15)] hover:shadow-[0_24px_50px_-20px_rgba(26,40,69,0.35)] transition-shadow duration-500"
        >
          <div
            className={`relative h-44 bg-gradient-to-br ${visuals[i]} overflow-hidden`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]" />
            <div className="absolute top-5 left-5 right-5 flex items-start justify-between text-white">
              <div className="text-[10px] tracking-[.25em] uppercase font-bold opacity-80">
                Service · 0{i + 1}
              </div>
              <div className="w-12 h-12 backdrop-blur-md bg-white/15 border border-white/25 flex items-center justify-center rounded-[10px]">
                {s.icon}
              </div>
            </div>
            <div className="absolute bottom-5 left-5 text-white">
              <div className="text-2xl font-extrabold tracking-tight">
                {s.title}
              </div>
            </div>
          </div>
          <div className="p-7 flex flex-col flex-1">
            <p className="text-sm leading-relaxed text-ink/75 flex-1">
              {s.description}
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold tracking-[.12em] uppercase text-ink group-hover:text-accent transition-colors"
            >
              {s.cta}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ServicesOptionAsymmetric() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s, i) => (
        <article
          key={s.title}
          className="group relative overflow-hidden flex flex-col p-9 bg-cream border border-hairline rounded-[18px] hover:border-ink/30 transition-colors duration-500"
        >
          <div
            aria-hidden
            className="absolute -top-6 -right-2 text-[140px] font-black leading-none text-ink/[0.06] select-none transition-all duration-500 group-hover:text-accent/15 group-hover:-translate-y-1"
          >
            {String(i + 1).padStart(2, "0")}
          </div>
          <div className="relative flex flex-col flex-1">
            <div className="w-12 h-12 border border-ink/30 text-ink flex items-center justify-center mb-7 rounded-full">
              {s.icon}
            </div>
            <div className="text-[10px] tracking-[.25em] uppercase text-accent font-bold mb-3">
              Catégorie · {s.title.split(" ")[0]}
            </div>
            <h3 className="font-extrabold text-2xl text-ink mb-3 leading-tight">
              <span className="italic font-serif text-accent">
                {s.title.charAt(0)}
              </span>
              {s.title.slice(1)}
            </h3>
            <p className="text-sm leading-relaxed text-ink/70 flex-1">
              {s.description}
            </p>
            <a
              href="#"
              className="mt-7 inline-flex items-center gap-2 text-[12px] font-bold tracking-[.15em] uppercase text-ink"
            >
              <span className="border-b border-ink/40 pb-0.5 group-hover:border-accent group-hover:text-accent transition-colors">
                {s.cta}
              </span>
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ServicesOptionHybrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 pt-8">
      {services.map((s) => (
        <article
          key={s.title}
          className="group relative flex flex-col bg-paper border border-hairline rounded-[18px] px-7 pt-12 pb-7 overflow-hidden transition-all duration-500 hover:border-accent/40 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-25px_rgba(26,40,69,0.35)]"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(139,21,56,0.08),transparent_55%)]"
          />
          <div className="absolute -top-7 left-7 w-14 h-14 bg-accent text-white flex items-center justify-center rounded-[14px] shadow-[0_10px_30px_-10px_rgba(139,21,56,0.6)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_18px_40px_-10px_rgba(139,21,56,0.7)]">
            {s.icon}
          </div>
          <div className="relative flex flex-col flex-1">
            <h3 className="font-extrabold text-[19px] text-ink mb-2.5 mt-2 tracking-tight">
              {s.title}
            </h3>
            <p className="text-[13.5px] leading-relaxed text-ink/70 flex-1">
              {s.description}
            </p>
            <a
              href="#"
              className="mt-7 inline-flex items-center gap-3 text-[12px] font-bold tracking-[.15em] uppercase text-ink/80 group-hover:text-accent transition-colors self-start"
            >
              <span className="w-8 h-px bg-ink/30 group-hover:bg-accent group-hover:w-14 transition-all duration-500" />
              {s.cta}
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ServicesOptionMinimal() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
      {services.map((s, i) => (
        <article key={s.title} className="group flex flex-col">
          <div className="h-px w-10 bg-accent mb-7 transition-all duration-500 group-hover:w-20" />
          <div className="flex items-start justify-between mb-6">
            <div className="text-ink/80">{s.icon}</div>
            <div className="text-[11px] tracking-[.2em] uppercase text-ink/30 font-bold">
              0{i + 1}
            </div>
          </div>
          <h3 className="font-extrabold text-[22px] text-ink mb-3 tracking-tight leading-tight">
            {s.title}
          </h3>
          <p className="text-[14px] leading-relaxed text-ink/65 max-w-[340px]">
            {s.description}
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold tracking-[.15em] uppercase text-ink/80 hover:text-accent self-start transition-colors"
          >
            {s.cta}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </article>
      ))}
    </div>
  );
}

export function ServicesOptionGlass() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 pt-8">
      {services.map((s) => (
        <article
          key={s.title}
          className="group relative flex flex-col bg-paper border border-hairline rounded-[18px] px-7 pt-12 pb-7 hover:border-accent/60 hover:shadow-[0_18px_40px_-20px_rgba(139,21,56,0.35)] transition-all duration-500"
        >
          <div className="absolute -top-7 left-7 w-14 h-14 bg-accent text-white flex items-center justify-center rounded-[14px] shadow-[0_10px_30px_-10px_rgba(139,21,56,0.6)] transition-transform duration-500 group-hover:-translate-y-1">
            {s.icon}
          </div>
          <h3 className="font-extrabold text-lg text-ink mb-2.5 mt-2">
            {s.title}
          </h3>
          <p className="text-[13px] leading-relaxed text-ink/70 flex-1">
            {s.description}
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold tracking-[.12em] uppercase text-ink/80 group-hover:text-accent transition-colors self-start"
          >
            <span className="w-8 h-px bg-ink/30 group-hover:bg-accent group-hover:w-12 transition-all duration-500" />
            {s.cta}
          </a>
        </article>
      ))}
    </div>
  );
}
