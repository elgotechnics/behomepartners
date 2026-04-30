"use client";

import { useState } from "react";
import Image from "next/image";
import { SearchBar } from "./SearchBar";

const StarRating = () => (
  <span className="inline-flex items-center gap-2 bg-accent text-white px-3 py-1.5 rounded-sm">
    <span className="relative inline-block text-base tracking-[.1em] leading-none">
      <span className="text-white/30">★★★★★</span>
      <span
        className="absolute inset-0 overflow-hidden text-white"
        style={{ width: "92%" }}
        aria-hidden
      >
        ★★★★★
      </span>
    </span>
    <span className="text-sm font-extrabold">4,6/5</span>
  </span>
);

function MiniSearchBar({ variant = "light" }: { variant?: "light" | "glass" | "ink" }) {
  const wrapperClass =
    variant === "glass"
      ? "bg-white/10 backdrop-blur-xl ring-1 ring-inset ring-white/20"
      : variant === "ink"
        ? "bg-[#0f1b34] ring-1 ring-inset ring-white/10"
        : "bg-white shadow-[0_24px_60px_-15px_rgba(0,0,0,0.5)]";
  const fieldClass =
    variant === "light"
      ? "text-ink/70"
      : "text-white/80 placeholder:text-white/50";
  const dividerClass =
    variant === "light" ? "bg-hairline" : "bg-white/15";

  return (
    <div className={`rounded-[14px] ${wrapperClass} flex items-stretch overflow-hidden`}>
      <div className="hidden md:flex items-center gap-1 p-1.5">
        <button
          type="button"
          className={`px-5 py-2.5 rounded-[10px] text-[11px] font-bold tracking-[.18em] uppercase ${
            variant === "light"
              ? "bg-ink text-white"
              : "bg-white text-ink"
          }`}
        >
          Acheter
        </button>
        <button
          type="button"
          className={`px-5 py-2.5 rounded-[10px] text-[11px] font-bold tracking-[.18em] uppercase ${
            variant === "light" ? "text-ink/60" : "text-white/70"
          }`}
        >
          Louer
        </button>
      </div>
      <div className={`hidden md:block w-px ${dividerClass} my-3`} />
      <div className={`flex-1 grid grid-cols-1 md:grid-cols-3 gap-px ${dividerClass}`}>
        <div className={`px-5 py-3.5 text-[13px] ${fieldClass}`}>Commune ou code postal</div>
        <div className={`px-5 py-3.5 text-[13px] ${fieldClass}`}>Type de bien</div>
        <div className={`px-5 py-3.5 text-[13px] ${fieldClass}`}>Budget</div>
      </div>
      <button
        type="button"
        className="bg-accent text-white px-6 md:px-8 text-[11px] font-bold tracking-[.18em] uppercase whitespace-nowrap hover:bg-[#6f1029] transition-colors"
      >
        Rechercher →
      </button>
    </div>
  );
}

/* ─────────── Variante 1 · Cinematic Vignette ─────────── */
export function HeroDarkVariantA() {
  return (
    <section className="relative bg-ink overflow-hidden lg:min-h-[800px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero-building.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1530] via-[#0a1530]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070d22] via-transparent to-[#070d22]/40" />
      </div>

      <div className="relative w-full px-6 lg:px-12 xl:px-20 2xl:px-28 py-16 lg:py-20 xl:py-28 2xl:py-36">
        <div className="max-w-[720px] xl:max-w-[900px] 2xl:max-w-[1040px]">
          <div className="inline-flex items-center gap-3 mb-5 xl:mb-7">
            <StarRating />
            <span className="text-sm xl:text-base text-white/75">Basé sur 579 avis</span>
          </div>

          <h1 className="text-3xl lg:text-[44px] xl:text-[56px] 2xl:text-[68px] font-extrabold leading-[1.08] tracking-tight text-white mb-4 xl:mb-6">
            Bien plus qu&apos;une agence,{" "}
            <span className="whitespace-nowrap">
              un{" "}
              <span className="relative inline-block">
                <span className="relative z-10">partenaire</span>
                <span className="absolute left-0 bottom-1 h-3 w-full bg-accent/80 -z-0" />
              </span>
              .
            </span>
          </h1>

          <p className="text-lg xl:text-xl 2xl:text-[22px] text-white/85 max-w-[540px] xl:max-w-[640px] 2xl:max-w-[720px] mb-7 xl:mb-10 leading-relaxed">
            Depuis 2010, Be Home Partners vous accompagne dans tous vos projets
            immobiliers avec une approche humaine, transparente et sur-mesure.
          </p>

          <SearchBar />
        </div>
      </div>
    </section>
  );
}

/* ─────────── Variante 3 · Bento Showcase (premium éditorial) ─────────── */
export function HeroDarkVariantE() {
  const [mode, setMode] = useState<"acheter" | "louer">("acheter");
  return (
    <section className="relative bg-[#0a1530] overflow-hidden lg:min-h-[800px] flex items-center">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <span className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 origin-left -rotate-90 text-[10px] tracking-[.5em] uppercase text-white/40 font-semibold pointer-events-none">
        Be Home Partners · Est. 2010
      </span>

      {/* ── Villa en arrière-plan, côté droit ── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[70%] pointer-events-none">
        <Image
          src="/assets/images/hero-villa-transparent.png"
          alt=""
          fill
          priority
          className="object-cover object-right-bottom opacity-95"
          sizes="(max-width: 1024px) 100vw, 70vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1530] via-[#0a1530]/40 to-transparent" />
      </div>

      <div className="relative w-full px-6 lg:px-12 xl:px-20 2xl:px-28 py-16 lg:py-20 xl:py-28 2xl:py-36">
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2.5 mb-5 px-3.5 py-1.5 rounded-full bg-white/5 ring-1 ring-inset ring-white/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-[11px] font-semibold tracking-wide text-white/90">
              12 nouveaux biens cette semaine
            </span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <StarRating />
            <span className="text-sm text-white/75">Basé sur 579 avis</span>
          </div>

          <h1 className="text-4xl lg:text-[60px] xl:text-[68px] font-extrabold leading-[1.04] tracking-tight text-white mb-6">
            Votre partenaire de référence en immobilier.
          </h1>

          <p className="text-lg text-white/70 max-w-[540px] mb-8 leading-relaxed">
            Depuis 2010, Be Home Partners vous accompagne dans tous vos
            projets immobiliers avec une approche humaine, transparente et
            sur-mesure.
          </p>

          <div className="max-w-[720px]">
            <div className="relative inline-flex p-1 mb-3 rounded-[14px] bg-white/[0.06] backdrop-blur-xl ring-1 ring-inset ring-white/10">
              {(["acheter", "louer"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`relative px-5 py-2 text-[12px] font-bold tracking-[.15em] uppercase rounded-[12px] transition-all duration-300 ${
                    mode === m
                      ? "bg-white text-ink shadow-[0_4px_16px_-4px_rgba(0,0,0,0.4)]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            <div className="bg-white/[0.04] backdrop-blur-xl ring-1 ring-inset ring-white/10 rounded-[14px] p-1.5 flex items-stretch gap-1.5 flex-wrap lg:flex-nowrap">
              <div className="relative flex-1 min-w-[140px]">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/45">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Commune"
                  className="w-full pl-8 pr-2 py-2.5 bg-transparent rounded-[10px] text-[12.5px] text-white placeholder:text-white/55 focus:outline-none focus:bg-white/[0.06] transition"
                />
              </div>
              <span className="hidden lg:block w-px bg-white/10" />
              <div className="relative flex-1 min-w-[100px]">
                <select defaultValue="" className="w-full appearance-none pl-3 pr-7 py-2.5 bg-transparent hover:bg-white/[0.06] rounded-[10px] text-[12.5px] text-white focus:outline-none cursor-pointer transition">
                  <option value="" disabled className="bg-[#0f1a3d]">Type</option>
                  <option className="bg-[#0f1a3d]">Maison</option>
                  <option className="bg-[#0f1a3d]">Appartement</option>
                  <option className="bg-[#0f1a3d]">Terrain</option>
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white/45">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
              <span className="hidden lg:block w-px bg-white/10" />
              <div className="relative flex-1 min-w-[100px]">
                <select defaultValue="" className="w-full appearance-none pl-3 pr-7 py-2.5 bg-transparent hover:bg-white/[0.06] rounded-[10px] text-[12.5px] text-white focus:outline-none cursor-pointer transition">
                  <option value="" disabled className="bg-[#0f1a3d]">Chambres</option>
                  <option className="bg-[#0f1a3d]">1</option>
                  <option className="bg-[#0f1a3d]">2</option>
                  <option className="bg-[#0f1a3d]">3</option>
                  <option className="bg-[#0f1a3d]">4</option>
                  <option className="bg-[#0f1a3d]">5+</option>
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white/45">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
              <span className="hidden lg:block w-px bg-white/10" />
              <div className="relative flex-1 min-w-[100px]">
                <select defaultValue="" className="w-full appearance-none pl-3 pr-7 py-2.5 bg-transparent hover:bg-white/[0.06] rounded-[10px] text-[12.5px] text-white focus:outline-none cursor-pointer transition">
                  <option value="" disabled className="bg-[#0f1a3d]">Budget</option>
                  <option className="bg-[#0f1a3d]">≤ 200k €</option>
                  <option className="bg-[#0f1a3d]">≤ 400k €</option>
                  <option className="bg-[#0f1a3d]">≤ 600k €</option>
                  <option className="bg-[#0f1a3d]">≤ 1M €</option>
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white/45">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
              <button
                type="button"
                aria-label="Rechercher"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-[#6f1029] text-white px-4 py-2.5 rounded-[10px] text-[11px] font-bold tracking-[.16em] uppercase transition-colors whitespace-nowrap"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
                <span className="hidden xl:inline">Rechercher</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Variante 3 · Immersive centered (villa + voile bleu) ─────────── */
export function HeroDarkVariantF() {
  const [mode, setMode] = useState<"acheter" | "louer">("acheter");
  return (
    <section className="relative overflow-hidden lg:min-h-[800px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero-villa-pool.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a1530]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d22]/60 via-[#0a1530]/40 to-[#070d22]/85" />
      </div>

      <div className="relative w-full px-6 lg:px-12 xl:px-20 2xl:px-28 py-16 lg:py-20 xl:py-28 2xl:py-36 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-3 mb-6">
          <StarRating />
          <span className="text-sm xl:text-base text-white/80">Basé sur 579 avis</span>
        </div>

        <h1 className="text-3xl lg:text-[44px] xl:text-[56px] 2xl:text-[68px] font-extrabold leading-[1.08] tracking-tight text-white mb-5 xl:mb-7 max-w-[920px]">
          Bien plus qu&apos;une agence,{" "}
          <span className="whitespace-nowrap">
            un{" "}
            <span className="relative inline-block">
              <span className="relative z-10">partenaire</span>
              <span className="absolute left-0 bottom-1 h-3 w-full bg-accent/80 -z-0" />
            </span>
            .
          </span>
        </h1>

        <p className="text-lg xl:text-xl text-white/85 max-w-[640px] mb-10 leading-relaxed">
          Depuis 2010, Be Home Partners vous accompagne dans tous vos projets
          immobiliers avec une approche humaine, transparente et sur-mesure.
        </p>

        <div className="w-full max-w-[1080px] mt-auto">
          <div className="flex justify-center mb-5">
            <div className="relative inline-flex p-1.5 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-inset ring-white/20">
              {(["acheter", "louer"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`relative px-9 py-3 text-[14px] font-bold tracking-[.2em] uppercase rounded-full transition-all duration-300 ${
                    mode === m
                      ? "bg-white text-ink ring-1 ring-inset ring-ink/10 shadow-[0_6px_18px_-4px_rgba(0,0,0,0.45)]"
                      : "text-white/50 hover:text-white/85"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white/[0.06] backdrop-blur-xl ring-1 ring-inset ring-white/15 rounded-[18px] p-2.5 flex items-stretch gap-2.5 flex-wrap lg:flex-nowrap text-left">
            <div className="relative flex-1 min-w-[180px]">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Commune"
                className="w-full pl-11 pr-3 py-4 bg-transparent rounded-[12px] text-[15px] text-white placeholder:text-white/60 focus:outline-none focus:bg-white/[0.08] transition"
              />
            </div>
            <span className="hidden lg:block w-px bg-white/15" />
            <div className="relative flex-1 min-w-[140px]">
              <select defaultValue="" className="w-full appearance-none pl-4 pr-10 py-4 bg-transparent hover:bg-white/[0.08] rounded-[12px] text-[15px] text-white focus:outline-none cursor-pointer transition">
                <option value="" disabled className="bg-[#0a1530]">Type</option>
                <option className="bg-[#0a1530]">Maison</option>
                <option className="bg-[#0a1530]">Appartement</option>
                <option className="bg-[#0a1530]">Terrain</option>
              </select>
              <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/60">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
            <span className="hidden lg:block w-px bg-white/15" />
            <div className="relative flex-1 min-w-[140px]">
              <select defaultValue="" className="w-full appearance-none pl-4 pr-10 py-4 bg-transparent hover:bg-white/[0.08] rounded-[12px] text-[15px] text-white focus:outline-none cursor-pointer transition">
                <option value="" disabled className="bg-[#0a1530]">Chambres</option>
                <option className="bg-[#0a1530]">1</option>
                <option className="bg-[#0a1530]">2</option>
                <option className="bg-[#0a1530]">3</option>
                <option className="bg-[#0a1530]">4</option>
                <option className="bg-[#0a1530]">5+</option>
              </select>
              <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/60">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
            <span className="hidden lg:block w-px bg-white/15" />
            <div className="relative flex-1 min-w-[140px]">
              <select defaultValue="" className="w-full appearance-none pl-4 pr-10 py-4 bg-transparent hover:bg-white/[0.08] rounded-[12px] text-[15px] text-white focus:outline-none cursor-pointer transition">
                <option value="" disabled className="bg-[#0a1530]">Budget</option>
                <option className="bg-[#0a1530]">≤ 200k €</option>
                <option className="bg-[#0a1530]">≤ 400k €</option>
                <option className="bg-[#0a1530]">≤ 600k €</option>
                <option className="bg-[#0a1530]">≤ 1M €</option>
              </select>
              <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/60">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
            <button
              type="button"
              aria-label="Rechercher"
              className="inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-[#6f1029] text-white px-7 py-4 rounded-[12px] text-[13px] font-bold tracking-[.18em] uppercase transition-colors whitespace-nowrap"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <span className="hidden xl:inline">Rechercher</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
