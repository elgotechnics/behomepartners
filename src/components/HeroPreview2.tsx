"use client";

import Image from "next/image";
import { useState } from "react";

const SearchIcon = (
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
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const PinIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ChevronDown = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

type Mode3 = "acheter" | "louer" | "vendre";

/* =====================================================================
 * HERO 1 — Rolixy style
 * Fullscreen background image. Titre blanc centré. Search bar pill
 * horizontale en bas avec selects Acheter/Louer/Vendre + bouton accent.
 * ===================================================================*/
export function HeroRolixy() {
  return (
    <section className="relative min-h-[680px] lg:min-h-[760px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/listing-maison-1.jpg"
          alt="Be Home Partners — bien sélectionné"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/55" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 pt-20 lg:pt-28 pb-44 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white text-[11px] font-bold tracking-[.2em] uppercase px-4 py-1.5 mb-6 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          Be Home Partners
        </span>

        <h1 className="text-white text-4xl lg:text-[72px] font-extrabold leading-[1.05] tracking-tight max-w-[920px] mb-6">
          Votre partenaire de
          <br className="hidden sm:block" /> référence en immobilier.
        </h1>

        <p className="text-white/85 text-base lg:text-lg max-w-[620px] mb-7">
          Depuis 2010, Be Home Partners vous accompagne dans tous vos projets
          immobiliers avec une approche humaine, transparente et sur-mesure.
        </p>

        <div className="inline-flex items-center gap-2.5 text-white">
          <span className="text-white text-base tracking-[.15em]">★★★★★</span>
          <span className="text-sm font-extrabold">4,6/5</span>
          <span className="text-sm text-white/75">Basé sur 579 avis</span>
        </div>
      </div>

      {/* Pill search bar — flottant en bas */}
      <div className="absolute bottom-8 left-0 right-0 px-6">
        <div className="max-w-[1080px] mx-auto bg-white rounded-full p-2 shadow-[0_30px_70px_-25px_rgba(0,0,0,0.45)] flex items-center">
          <div className="relative flex-1 px-4 lg:px-6">
            <select
              aria-label="Acheter, louer ou vendre"
              defaultValue="acheter"
              className="appearance-none w-full pr-6 py-3 text-sm font-bold text-ink bg-transparent focus:outline-none cursor-pointer"
            >
              <option value="acheter">Acheter</option>
              <option value="louer">Louer</option>
              <option value="vendre">Vendre</option>
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-ink/60">
              {ChevronDown}
            </span>
          </div>

          <div className="w-px h-9 bg-hairline" />

          <div className="relative flex-1 px-4 lg:px-6">
            <select
              aria-label="Type de bien"
              defaultValue=""
              className="appearance-none w-full pr-6 py-3 text-sm font-bold text-ink bg-transparent focus:outline-none cursor-pointer"
            >
              <option value="" disabled>Type de bien</option>
              <option>Maison</option>
              <option>Appartement</option>
              <option>Terrain</option>
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-ink/60">
              {ChevronDown}
            </span>
          </div>

          <div className="hidden md:block w-px h-9 bg-hairline" />

          <div className="hidden md:block relative flex-1 px-4 lg:px-6">
            <select
              aria-label="Budget"
              defaultValue=""
              className="appearance-none w-full pr-6 py-3 text-sm font-bold text-ink bg-transparent focus:outline-none cursor-pointer"
            >
              <option value="" disabled>Budget max</option>
              <option>200 000 €</option>
              <option>400 000 €</option>
              <option>600 000 €</option>
              <option>1 000 000 €</option>
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-ink/60">
              {ChevronDown}
            </span>
          </div>

          <button
            type="submit"
            className="bg-accent text-white px-6 lg:px-8 py-3.5 font-bold text-sm tracking-[.15em] uppercase rounded-full hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            {SearchIcon}
            <span className="hidden sm:inline">Rechercher</span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
 * HERO 2 — Easy way style
 * Carte claire avec text-left + grande image maison à droite, tabs
 * RENT/BUY/SELL souligné, ligne de recherche flottante avec bouton rond.
 * ===================================================================*/
export function HeroEasyWay() {
  const [mode, setMode] = useState<Mode3>("acheter");
  const tabs: { id: Mode3; label: string }[] = [
    { id: "acheter", label: "Acheter" },
    { id: "louer", label: "Louer" },
    { id: "vendre", label: "Vendre" },
  ];

  return (
    <section className="bg-paper">
      <div className="max-w-[1280px] mx-auto px-6 py-16 lg:py-20">
        <div className="bg-cream rounded-[20px] overflow-hidden border border-hairline relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] items-stretch">
            {/* Texte */}
            <div className="px-8 lg:px-14 py-12 lg:py-16">
              <span className="inline-block text-[11px] tracking-[.2em] uppercase text-accent font-bold mb-4">
                Be Home Partners
              </span>
              <h1 className="text-4xl lg:text-[52px] font-extrabold leading-[1.05] tracking-tight text-ink mb-5">
                Votre partenaire de référence en immobilier.
              </h1>
              <p className="text-base lg:text-lg text-ink/70 leading-relaxed max-w-[460px] mb-7">
                Depuis 2010, Be Home Partners vous accompagne dans tous vos
                projets immobiliers avec une approche humaine, transparente et
                sur-mesure.
              </p>

              <div className="inline-flex items-center gap-2.5 mb-2">
                <span className="text-accent text-base tracking-[.15em]">★★★★★</span>
                <span className="text-sm font-extrabold text-ink">4,6/5</span>
                <span className="text-sm text-muted">Basé sur 579 avis</span>
              </div>
            </div>

            {/* Image */}
            <div className="relative min-h-[320px] lg:min-h-[480px]">
              <Image
                src="/assets/images/listing-maison-2.webp"
                alt="Bien sélectionné Be Home Partners"
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Search card flottante — chevauche le bord bas */}
          <div className="px-6 lg:px-14 pb-10 lg:pb-12 -mt-10 lg:-mt-14 relative z-10">
            <div className="bg-white rounded-[20px] border border-hairline shadow-[0_30px_70px_-25px_rgba(26,40,69,0.18)] p-3 lg:p-4">
              {/* Tabs */}
              <div className="flex items-center gap-6 px-3 lg:px-4 pt-2 pb-3 border-b border-hairline">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setMode(t.id)}
                    className={`relative pb-2 text-[11px] font-bold tracking-[.2em] uppercase transition-colors ${
                      mode === t.id ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {t.label}
                    {mode === t.id && (
                      <span className="absolute -bottom-[13px] left-0 right-0 h-[2px] bg-accent" />
                    )}
                  </button>
                ))}
              </div>

              {/* Inputs row + bouton rond */}
              <form className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr_1fr_auto] items-center gap-3 lg:gap-2 px-3 lg:px-4 pt-4 pb-2">
                <label className="flex flex-col">
                  <span className="text-[11px] tracking-[.2em] uppercase font-bold text-ink mb-1 inline-flex items-center gap-1.5">
                    Localisation
                  </span>
                  <span className="text-xs text-muted inline-flex items-center gap-1.5">
                    <span className="text-accent">{PinIcon}</span>
                    <input
                      type="text"
                      placeholder="Choisissez votre ville"
                      className="bg-transparent text-sm font-semibold text-ink placeholder:text-muted focus:outline-none w-full"
                    />
                  </span>
                </label>

                <label className="flex flex-col sm:border-l sm:border-hairline sm:pl-4">
                  <span className="text-[11px] tracking-[.2em] uppercase font-bold text-ink mb-1">
                    Type de bien
                  </span>
                  <select
                    defaultValue=""
                    className="bg-transparent text-sm font-semibold text-muted focus:text-ink focus:outline-none cursor-pointer"
                  >
                    <option value="" disabled>Choisissez le type</option>
                    <option className="text-ink">Maison</option>
                    <option className="text-ink">Appartement</option>
                    <option className="text-ink">Terrain</option>
                  </select>
                </label>

                <label className="flex flex-col sm:border-l sm:border-hairline sm:pl-4">
                  <span className="text-[11px] tracking-[.2em] uppercase font-bold text-ink mb-1">
                    Budget
                  </span>
                  <select
                    defaultValue=""
                    className="bg-transparent text-sm font-semibold text-muted focus:text-ink focus:outline-none cursor-pointer"
                  >
                    <option value="" disabled>Choisissez le budget</option>
                    <option className="text-ink">Jusqu&apos;à 200 000 €</option>
                    <option className="text-ink">Jusqu&apos;à 400 000 €</option>
                    <option className="text-ink">Jusqu&apos;à 600 000 €</option>
                    <option className="text-ink">Jusqu&apos;à 1 000 000 €</option>
                  </select>
                </label>

                <button
                  type="submit"
                  aria-label="Rechercher"
                  className="bg-accent text-white w-12 h-12 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center justify-self-end"
                >
                  {SearchIcon}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
 * HERO 3 — Eastute editorial split
 * Layout 2-col éditorial. Titre XXL gras à gauche, tabs + ligne de
 * recherche avec dates, stats trio, image à droite avec badge orbital.
 * ===================================================================*/
export function HeroEastute() {
  const [mode, setMode] = useState<Mode3>("acheter");
  const tabs: { id: Mode3; label: string }[] = [
    { id: "acheter", label: "Acheter" },
    { id: "louer", label: "Louer" },
  ];

  return (
    <section className="bg-bg">
      <div className="max-w-[1320px] mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
          {/* Col gauche */}
          <div>
            <span className="inline-block text-[11px] tracking-[.2em] uppercase text-ink/70 font-bold mb-6">
              Be Home Partners
            </span>

            <h1 className="text-5xl lg:text-[80px] font-extrabold leading-[0.98] tracking-tight text-ink mb-6">
              Votre partenaire
              <br />
              de référence
              <br />
              en immobilier.
            </h1>

            <p className="text-base lg:text-lg text-ink/65 max-w-[480px] mb-8">
              Depuis 2010, Be Home Partners vous accompagne dans tous vos
              projets immobiliers avec une approche humaine, transparente et
              sur-mesure.
            </p>

            {/* Tabs Acheter / Louer */}
            <div className="flex items-center gap-8 mb-4">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setMode(t.id)}
                  className={`relative pb-2 text-sm font-bold transition-colors ${
                    mode === t.id ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {t.label}
                  {mode === t.id && (
                    <span className="absolute -bottom-px left-0 right-0 h-[3px] bg-ink" />
                  )}
                </button>
              ))}
            </div>

            {/* Search row inputs + bouton carré sombre */}
            <form className="bg-white border border-hairline rounded-[14px] grid grid-cols-1 sm:grid-cols-[1.4fr_1fr_1fr_auto] items-stretch overflow-hidden">
              <label className="flex flex-col px-5 py-3 sm:border-r sm:border-hairline">
                <span className="text-[11px] tracking-[.15em] uppercase font-bold text-muted mb-1">
                  Localisation
                </span>
                <input
                  type="text"
                  placeholder="Ville ou code postal"
                  className="bg-transparent text-sm font-semibold text-ink placeholder:text-muted focus:outline-none"
                />
              </label>
              <label className="flex flex-col px-5 py-3 sm:border-r sm:border-hairline">
                <span className="text-[11px] tracking-[.15em] uppercase font-bold text-muted mb-1">
                  Type
                </span>
                <select
                  defaultValue=""
                  className="bg-transparent text-sm font-semibold text-muted focus:text-ink focus:outline-none cursor-pointer"
                >
                  <option value="" disabled>Tous les types</option>
                  <option className="text-ink">Maison</option>
                  <option className="text-ink">Appartement</option>
                  <option className="text-ink">Terrain</option>
                </select>
              </label>
              <label className="flex flex-col px-5 py-3 sm:border-r sm:border-hairline">
                <span className="text-[11px] tracking-[.15em] uppercase font-bold text-muted mb-1">
                  Budget
                </span>
                <select
                  defaultValue=""
                  className="bg-transparent text-sm font-semibold text-muted focus:text-ink focus:outline-none cursor-pointer"
                >
                  <option value="" disabled>Sélectionner</option>
                  <option className="text-ink">200 000 €</option>
                  <option className="text-ink">400 000 €</option>
                  <option className="text-ink">600 000 €</option>
                  <option className="text-ink">1 000 000 €</option>
                </select>
              </label>
              <button
                type="submit"
                aria-label="Rechercher"
                className="bg-ink text-white px-6 hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                {SearchIcon}
              </button>
            </form>

            {/* Stats trio */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-3xl lg:text-[38px] font-extrabold text-ink leading-none mb-2">
                  2010
                </div>
                <div className="text-xs text-ink/65 leading-tight">
                  Année de
                  <br />
                  fondation
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-[38px] font-extrabold text-ink leading-none mb-2">
                  4,6/5
                </div>
                <div className="text-xs text-ink/65 leading-tight">
                  Note moyenne
                  <br />
                  Google
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-[38px] font-extrabold text-ink leading-none mb-2">
                  579
                </div>
                <div className="text-xs text-ink/65 leading-tight">
                  Avis clients
                  <br />
                  vérifiés
                </div>
              </div>
            </div>
          </div>

          {/* Col droite — image + badge orbital */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] border border-hairline">
              <Image
                src="/assets/images/agence-interior.webp"
                alt="Intérieur de l'agence Be Home Partners"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover"
              />
            </div>

            {/* Badge orbital "Be Home Partners · Depuis 2010" */}
            <div className="absolute -top-6 -left-6 lg:-left-10 w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-white border border-hairline shadow-[0_18px_50px_-15px_rgba(0,0,0,0.18)] flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite]">
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
                  />
                </defs>
                <text fill="var(--color-ink)" fontSize="14" fontWeight="700" letterSpacing="3">
                  <textPath href="#circlePath" startOffset="0">
                    BE HOME PARTNERS · DEPUIS 2010 ·
                  </textPath>
                </text>
              </svg>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-ink)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
