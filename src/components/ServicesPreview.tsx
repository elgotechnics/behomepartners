"use client";

import Image from "next/image";
import { useState } from "react";

type Service = {
  title: string;
  short: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
};

const services: Service[] = [
  {
    title: "Vente",
    short: "Valoriser et vendre votre bien",
    description:
      "Mise en marché stratégique, mise en valeur professionnelle et négociation menée à votre rythme.",
    cta: "Découvrir",
    href: "/services/vente",
    image: "/assets/images/listing-maison-1.jpg",
    imageAlt: "Maison vendue par Be Home Partners",
  },
  {
    title: "Location",
    short: "Trouver le bon locataire",
    description:
      "Sélection rigoureuse, baux conformes et suivi de A à Z pour des relations sereines.",
    cta: "Découvrir",
    href: "/services/location",
    image: "/assets/images/listing-maison-2.webp",
    imageAlt: "Bien à louer",
  },
  {
    title: "Estimation",
    short: "Connaître la juste valeur",
    description:
      "Analyse pointue du marché local et du bien, avec une fourchette argumentée et transparente.",
    cta: "Estimer",
    href: "/services/estimation",
    image: "/assets/images/agent-portrait.png",
    imageAlt: "Agent Be Home Partners en consultation d'estimation",
  },
  {
    title: "Gestion locative",
    short: "Déléguer en toute sérénité",
    description:
      "Encaissements, états des lieux, sinistres, indexations — un seul interlocuteur, zéro stress.",
    cta: "En savoir plus",
    href: "/services/gestion-locative",
    image: "/assets/images/agence-interior.png",
    imageAlt: "Bureau Be Home Partners",
  },
  {
    title: "Investir",
    short: "Construire un patrimoine",
    description:
      "Sourcing de biens à fort rendement, étude de rentabilité et accompagnement long terme.",
    cta: "Explorer",
    href: "/services/investir",
    image: "/assets/images/listing-maison-3.jpg",
    imageAlt: "Bien d'investissement",
  },
  {
    title: "Marketing immobilier",
    short: "Mettre votre bien en lumière",
    description:
      "Photos pro, vidéos drone, home-staging virtuel — chaque bien mérite son moment d'exception.",
    cta: "Voir nos médias",
    href: "/services/marketing-immobilier",
    image: "/assets/images/listing-maison-4.webp",
    imageAlt: "Bien mis en valeur",
  },
];

const ArrowRight = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="transition-transform duration-300 group-hover:translate-x-1"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* ─────────── Variante A · Premium image cards (Engel & Völkers) ─────────── */
export function ServicesVariantA() {
  return (
    <section className="bg-bg">
      <div className="max-w-[1280px] xl:max-w-[1480px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-end mb-12">
          <div>
            <div className="text-[11px] tracking-[.2em] uppercase text-accent font-bold mb-3">
              Nos services
            </div>
            <h2 className="text-3xl lg:text-[38px] font-extrabold leading-[1.1] tracking-tight text-ink">
              Six expertises pour un seul partenaire.
            </h2>
          </div>
          <p className="text-[15px] text-muted max-w-[420px] leading-relaxed">
            Que vous achetiez, vendiez, louiez ou investissiez —
            une équipe, un suivi humain et personnalisé, à chaque étape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="group block bg-white rounded-[14px] overflow-hidden ring-1 ring-inset ring-hairline shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-[0_24px_50px_-20px_rgba(15,23,42,0.25)] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 lg:p-7">
                <h3 className="text-[22px] font-extrabold tracking-tight text-ink mb-1.5">
                  {s.title}
                </h3>
                <p className="text-[13px] text-muted mb-5 leading-relaxed">
                  {s.short}
                </p>
                <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[.15em] uppercase text-accent">
                  {s.cta}
                  <ArrowRight />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Variante B · Asymmetric bento editorial ─────────── */
export function ServicesVariantB() {
  const [hero, ...rest] = services;
  return (
    <section className="bg-bg">
      <div className="max-w-[1280px] xl:max-w-[1480px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-[680px] mx-auto mb-12 lg:mb-14">
          <div className="text-[11px] tracking-[.2em] uppercase text-accent font-bold mb-3">
            Nos services
          </div>
          <h2 className="text-3xl lg:text-[38px] font-extrabold leading-[1.1] tracking-tight text-ink">
            Un{" "}
            <span
              className="italic font-light text-ink/90"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              partenaire complet
            </span>{" "}
            pour vos projets.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          <a
            href={hero.href}
            className="group relative lg:col-span-2 lg:row-span-2 rounded-[14px] overflow-hidden min-h-[420px] lg:min-h-[600px]"
          >
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
            <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-white text-[10px] tracking-[.2em] uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Notre métier
            </div>
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 text-white">
              <h3 className="text-[28px] lg:text-[42px] font-extrabold tracking-tight leading-[1.05] mb-3">
                {hero.title}.
              </h3>
              <p className="text-[14px] lg:text-[15px] text-white/85 leading-relaxed max-w-[480px] mb-5">
                {hero.description}
              </p>
              <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[.15em] uppercase text-white">
                {hero.cta}
                <ArrowRight />
              </span>
            </div>
          </a>

          {rest.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="group relative rounded-[14px] overflow-hidden bg-white ring-1 ring-inset ring-hairline hover:ring-ink/20 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[18px] font-extrabold tracking-tight text-ink mb-1">
                  {s.title}
                </h3>
                <p className="text-[12.5px] text-muted leading-relaxed mb-3">
                  {s.short}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[.15em] uppercase text-accent">
                  {s.cta}
                  <ArrowRight />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Variante C · Split editorial · numbered list + image reveal ─────────── */
export function ServicesVariantC() {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-ink relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-[1280px] xl:max-w-[1480px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="mb-10 lg:mb-0">
          <div className="text-[11px] tracking-[.2em] uppercase text-accent font-bold mb-3">
            Nos services
          </div>
          <h2 className="text-3xl lg:text-[42px] font-extrabold leading-[1.05] tracking-tight text-white mb-5">
            L&apos;immobilier,{" "}
            <span
              className="italic font-light text-white/85"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              à 360°
            </span>
            .
          </h2>
          <p className="text-[15px] text-white/65 max-w-[440px] leading-relaxed lg:mb-10">
            Six expertises connectées, opérées par les mêmes équipes —
            pour un parcours fluide à toutes les étapes de votre projet.
          </p>
        </div>

        {/* ── Desktop : split éditorial liste + image sticky ── */}
        <div className="hidden lg:grid grid-cols-[1fr_1.05fr] gap-16">
          <div>
            <ul className="border-t border-white/10">
              {services.map((s, i) => {
                const isActive = i === active;
                return (
                  <li key={s.title} className="border-b border-white/10">
                    <a
                      href={s.href}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className="group flex items-center gap-5 py-6 transition-colors"
                    >
                      <span
                        className={`text-[12px] font-bold tracking-[.2em] tabular-nums transition-colors ${
                          isActive ? "text-accent" : "text-white/40"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-[26px] font-extrabold tracking-tight flex-1 transition-all ${
                          isActive
                            ? "text-white translate-x-1"
                            : "text-white/55 group-hover:text-white/85"
                        }`}
                      >
                        {s.title}
                      </span>
                      <span
                        className={`text-white transition-all ${
                          isActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-2"
                        }`}
                      >
                        <ArrowRight />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative sticky top-24 self-start">
            <div className="relative aspect-[5/6] rounded-[14px] overflow-hidden ring-1 ring-inset ring-white/10">
              {services.map((s, i) => (
                <Image
                  key={s.title}
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="600px"
                  className={`object-cover transition-opacity duration-700 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                  priority={i === 0}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="text-[10px] tracking-[.2em] uppercase text-white/65 font-bold mb-2">
                  {String(active + 1).padStart(2, "0")} ·{" "}
                  {services[active].title}
                </div>
                <p className="text-[17px] leading-relaxed mb-5 max-w-[420px]">
                  {services[active].description}
                </p>
                <a
                  href={services[active].href}
                  className="inline-flex items-center gap-2 bg-white text-ink px-5 py-3 rounded-[12px] text-[11px] font-bold tracking-[.15em] uppercase hover:bg-white/90 transition-colors"
                >
                  {services[active].cta}
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile : cartes empilées self-contained ── */}
        <div className="lg:hidden flex flex-col gap-5">
          {services.map((s, i) => (
            <a
              key={s.title}
              href={s.href}
              className="group relative block rounded-[14px] overflow-hidden ring-1 ring-inset ring-white/10"
            >
              <div className="relative aspect-[5/4]">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-inset ring-white/20 text-white text-[10px] tracking-[.2em] uppercase font-bold">
                  {String(i + 1).padStart(2, "0")} · {s.title}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[14px] leading-relaxed mb-4">
                    {s.short}
                  </p>
                  <span className="inline-flex items-center gap-2 bg-white text-ink px-4 py-2.5 rounded-[12px] text-[11px] font-bold tracking-[.15em] uppercase">
                    {s.cta}
                    <ArrowRight />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
