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
    width="16"
    height="16"
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

type Mode = "acheter" | "louer";

function ModeToggle({
  mode,
  setMode,
  variant = "light",
}: {
  mode: Mode;
  setMode: (m: Mode) => void;
  variant?: "light" | "dark";
}) {
  const base =
    variant === "dark"
      ? "bg-white/10 border-white/20"
      : "bg-white border-hairline";
  const inactive =
    variant === "dark" ? "text-white/60 hover:text-white" : "text-ink/60 hover:text-ink";
  return (
    <div className={`inline-flex ${base} border p-1 rounded-full`}>
      {(["acheter", "louer"] as const).map((m) => (
        <button
          key={m}
          type="button"
          onClick={() => setMode(m)}
          className={`px-5 py-2 text-[11px] font-bold tracking-[.18em] uppercase rounded-full transition-colors ${
            mode === m ? "bg-accent text-white" : inactive
          }`}
        >
          {m}
        </button>
      ))}
    </div>
  );
}

/* =====================================================================
 * HERO A — Compact & Confident
 * Texte plus serré, image paysage 4/3, search bar horizontal pleine
 * largeur ancré sous le contenu. Aucune zone vide.
 * ===================================================================*/
export function HeroVariantA() {
  const [mode, setMode] = useState<Mode>("acheter");

  return (
    <section className="bg-paper">
      <div className="max-w-[1280px] mx-auto px-6 pt-10 lg:pt-14 pb-8 lg:pb-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent text-[11px] font-bold tracking-[.2em] uppercase px-3 py-1.5 mb-5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Agence immobilière depuis 2010
          </span>

          <h1 className="text-4xl lg:text-[52px] font-extrabold leading-[1.05] tracking-tight text-ink mb-4">
            L&apos;immobilier qui<br />
            <span className="text-accent">vous ressemble.</span>
          </h1>

          <p className="text-base lg:text-lg text-ink/70 max-w-[520px] mb-6">
            Be Home Partners — agence de proximité spécialisée dans la vente,
            la location et l&apos;estimation. Une approche humaine, transparente
            et 100% sur-mesure.
          </p>

          <div className="flex items-center gap-6 text-sm text-ink/70 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-accent">★★★★★</span>
              <span className="font-extrabold text-ink">4,6/5</span>
              <span className="text-muted">· 579 avis</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-hairline" />
            <div className="hidden sm:block">
              <span className="font-extrabold text-ink">+2&nbsp;000</span> biens vendus
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] border border-hairline">
            <Image
              src="/assets/images/agence-interior.webp"
              alt="Intérieur de l'agence"
              fill
              sizes="(max-width: 1024px) 100vw, 580px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-white border border-hairline rounded-[14px] px-5 py-3 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)] hidden sm:block">
            <div className="text-[10px] tracking-[.2em] uppercase text-muted font-bold mb-1">
              Cette semaine
            </div>
            <div className="text-sm font-extrabold text-ink">
              12 biens nouvellement à vendre
            </div>
          </div>
        </div>
      </div>

      {/* Search bar horizontal pleine largeur, sticky look */}
      <div className="max-w-[1280px] mx-auto px-6 pb-14">
        <div className="bg-white border border-hairline rounded-[18px] p-2 lg:p-3 shadow-[0_18px_50px_-22px_rgba(26,40,69,0.18)]">
          <div className="flex items-center gap-2 mb-2 px-2 pt-1">
            <ModeToggle mode={mode} setMode={setMode} />
            <div className="ml-auto text-xs text-muted hidden sm:block">
              Plus de 850 annonces actives
            </div>
          </div>
          <form className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr_auto] gap-1">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/50">
                {PinIcon}
              </span>
              <input
                type="text"
                placeholder="Commune ou code postal"
                aria-label="Commune ou code postal"
                className="w-full pl-11 pr-4 py-3.5 text-sm font-semibold text-ink placeholder:text-ink/40 bg-cream rounded-[12px] focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
            </div>
            <select
              aria-label="Type de bien"
              defaultValue=""
              className="px-4 py-3.5 text-sm font-semibold text-ink bg-cream rounded-[12px] focus:outline-none focus:ring-2 focus:ring-accent/30 cursor-pointer"
            >
              <option value="" disabled>Type de bien</option>
              <option>Maison</option>
              <option>Appartement</option>
              <option>Terrain</option>
            </select>
            <select
              aria-label="Chambres"
              defaultValue=""
              className="px-4 py-3.5 text-sm font-semibold text-ink bg-cream rounded-[12px] focus:outline-none focus:ring-2 focus:ring-accent/30 cursor-pointer"
            >
              <option value="" disabled>Chambres</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
            <select
              aria-label="Budget max"
              defaultValue=""
              className="px-4 py-3.5 text-sm font-semibold text-ink bg-cream rounded-[12px] focus:outline-none focus:ring-2 focus:ring-accent/30 cursor-pointer"
            >
              <option value="" disabled>Budget max</option>
              <option>200 000 €</option>
              <option>400 000 €</option>
              <option>600 000 €</option>
              <option>1 000 000 €</option>
            </select>
            <button
              type="submit"
              className="bg-accent text-white px-6 py-3.5 font-bold text-sm tracking-[.1em] uppercase rounded-[12px] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              {SearchIcon}
              <span>Rechercher</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
 * HERO B — Immersive fullscreen
 * Image en background, dégradé sombre, texte blanc, search bar flottant
 * en carte blanche style Airbnb.
 * ===================================================================*/
export function HeroVariantB() {
  const [mode, setMode] = useState<Mode>("acheter");

  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/listing-maison-1.jpg"
          alt="Belle propriété sélectionnée par Be Home Partners"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 pt-20 lg:pt-28 pb-32 lg:pb-40 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center min-h-[640px]">
        <div>
          <span className="inline-flex items-center gap-2 border border-white/30 bg-white/5 backdrop-blur text-white text-[11px] font-bold tracking-[.2em] uppercase px-3 py-1.5 mb-6 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Be Home Partners · Depuis 2010
          </span>

          <h1 className="text-4xl lg:text-[64px] font-extrabold leading-[1.02] tracking-tight mb-5 max-w-[680px]">
            Trouvez le bien<br />
            qui change tout.
          </h1>

          <p className="text-lg text-white/80 max-w-[520px] mb-8">
            Agence indépendante de proximité — vente, location, estimation et
            gestion locative. 15 ans d&apos;expérience, +2&nbsp;000 biens vendus,
            une approche humaine et transparente.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-white">★★★★★</span>
              <span className="font-extrabold">4,6/5</span>
              <span className="text-white/70">579 avis Google</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating search card overlapping bottom */}
      <div className="relative max-w-[1180px] mx-auto px-6 -mt-20 pb-16">
        <div className="bg-white text-ink rounded-[20px] p-5 lg:p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] border border-white/40">
          <div className="flex items-center justify-between mb-4">
            <ModeToggle mode={mode} setMode={setMode} />
            <div className="text-xs text-muted hidden sm:block">
              Recherche instantanée parmi 850+ annonces
            </div>
          </div>
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_auto] gap-3 lg:gap-0 lg:divide-x lg:divide-grid">
            <label className="flex flex-col px-1 lg:px-5">
              <span className="text-[10px] tracking-[.2em] uppercase font-bold text-muted mb-1">
                Localisation
              </span>
              <input
                type="text"
                placeholder="Ville, code postal, quartier…"
                className="bg-transparent text-sm font-semibold text-ink placeholder:text-ink/40 focus:outline-none"
              />
            </label>
            <label className="flex flex-col px-1 lg:px-5">
              <span className="text-[10px] tracking-[.2em] uppercase font-bold text-muted mb-1">
                Type de bien
              </span>
              <select
                defaultValue=""
                className="bg-transparent text-sm font-semibold text-ink focus:outline-none cursor-pointer"
              >
                <option value="" disabled>Tous les types</option>
                <option>Maison</option>
                <option>Appartement</option>
                <option>Terrain</option>
              </select>
            </label>
            <label className="flex flex-col px-1 lg:px-5">
              <span className="text-[10px] tracking-[.2em] uppercase font-bold text-muted mb-1">
                Budget
              </span>
              <select
                defaultValue=""
                className="bg-transparent text-sm font-semibold text-ink focus:outline-none cursor-pointer"
              >
                <option value="" disabled>Sélectionnez</option>
                <option>Jusqu&apos;à 200 000 €</option>
                <option>Jusqu&apos;à 400 000 €</option>
                <option>Jusqu&apos;à 600 000 €</option>
                <option>Jusqu&apos;à 1 000 000 €</option>
              </select>
            </label>
            <button
              type="submit"
              className="bg-accent text-white px-7 py-4 font-bold text-sm tracking-[.1em] uppercase rounded-[14px] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              {SearchIcon}
              <span>Chercher</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
 * HERO C — Editorial split
 * Layout asymétrique éditorial. Grand titre, paragraphe à gauche, image
 * verticale à droite. Search bar comme barre détachée style command-bar.
 * ===================================================================*/
export function HeroVariantC() {
  const [mode, setMode] = useState<Mode>("acheter");

  return (
    <section className="bg-cream">
      <div className="max-w-[1320px] mx-auto px-6 pt-12 lg:pt-16 pb-10">
        {/* Top bar : tag + meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-hairline">
          <span className="text-[11px] tracking-[.25em] uppercase text-ink font-bold">
            Be Home Partners — N°{" "}1 sur la région
          </span>
          <div className="flex items-center gap-6 text-xs text-ink/70">
            <span><strong className="text-ink">15 ans</strong> d&apos;expertise</span>
            <span><strong className="text-ink">2 000+</strong> biens vendus</span>
            <span><strong className="text-ink">4,6/5</strong> sur 579 avis</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Headline */}
          <div className="lg:col-span-7">
            <h1 className="text-5xl lg:text-[88px] font-extrabold leading-[0.95] tracking-tight text-ink mb-6">
              Acheter.<br />
              Vendre.<br />
              <span className="text-accent italic font-serif">Vivre mieux.</span>
            </h1>
          </div>

          {/* Description + image */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <p className="text-base lg:text-lg text-ink/75 leading-relaxed">
              Agence immobilière indépendante fondée en 2010, Be Home Partners
              accompagne particuliers et investisseurs sur l&apos;ensemble du
              parcours immobilier — vente, location, estimation, gestion. Une
              équipe experte, des outils modernes, une promesse de transparence.
            </p>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] border border-hairline">
              <Image
                src="/assets/images/listing-maison-2.webp"
                alt="Bien sélectionné par Be Home Partners"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search "command-bar" — pleine largeur sur fond ink */}
      <div className="bg-ink">
        <div className="max-w-[1320px] mx-auto px-6 py-6 lg:py-7">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
            <div className="flex items-center gap-3">
              <ModeToggle mode={mode} setMode={setMode} variant="dark" />
            </div>

            <div className="hidden lg:block w-px h-8 bg-white/15" />

            <form className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_auto] gap-2">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">
                  {PinIcon}
                </span>
                <input
                  type="text"
                  placeholder="Où cherchez-vous ?"
                  aria-label="Localisation"
                  className="w-full pl-11 pr-4 py-3 text-sm font-semibold text-white placeholder:text-white/50 bg-white/5 border border-white/15 rounded-[12px] focus:outline-none focus:bg-white/10 focus:border-white/30"
                />
              </div>
              <select
                aria-label="Type"
                defaultValue=""
                className="px-4 py-3 text-sm font-semibold text-white bg-white/5 border border-white/15 rounded-[12px] focus:outline-none focus:bg-white/10 cursor-pointer"
              >
                <option value="" disabled className="text-ink">Type de bien</option>
                <option className="text-ink">Maison</option>
                <option className="text-ink">Appartement</option>
                <option className="text-ink">Terrain</option>
              </select>
              <select
                aria-label="Chambres"
                defaultValue=""
                className="px-4 py-3 text-sm font-semibold text-white bg-white/5 border border-white/15 rounded-[12px] focus:outline-none focus:bg-white/10 cursor-pointer"
              >
                <option value="" disabled className="text-ink">Chambres</option>
                <option className="text-ink">1+</option>
                <option className="text-ink">2+</option>
                <option className="text-ink">3+</option>
                <option className="text-ink">4+</option>
              </select>
              <select
                aria-label="Budget"
                defaultValue=""
                className="px-4 py-3 text-sm font-semibold text-white bg-white/5 border border-white/15 rounded-[12px] focus:outline-none focus:bg-white/10 cursor-pointer"
              >
                <option value="" disabled className="text-ink">Budget max</option>
                <option className="text-ink">200 000 €</option>
                <option className="text-ink">400 000 €</option>
                <option className="text-ink">600 000 €</option>
                <option className="text-ink">1 000 000 €</option>
              </select>
              <button
                type="submit"
                className="bg-accent text-white px-6 py-3 font-bold text-sm tracking-[.1em] uppercase rounded-[12px] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                {SearchIcon}
                <span>Rechercher</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
