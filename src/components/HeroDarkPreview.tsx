"use client";

import Image from "next/image";

const StarRating = () => (
  <span className="inline-flex items-center gap-2 bg-accent text-white px-3 py-1.5 rounded-sm">
    <span className="relative inline-block text-base tracking-[.15em] leading-none">
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
        ? "bg-ink-deep ring-1 ring-inset ring-white/10"
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
          className={`px-5 py-2.5 rounded-[12px] text-[11px] font-bold tracking-[.15em] uppercase ${
            variant === "light"
              ? "bg-ink text-white"
              : "bg-white text-ink"
          }`}
        >
          Acheter
        </button>
        <button
          type="button"
          className={`px-5 py-2.5 rounded-[12px] text-[11px] font-bold tracking-[.15em] uppercase ${
            variant === "light" ? "text-ink/60" : "text-white/70"
          }`}
        >
          Louer
        </button>
      </div>
      <div className={`hidden md:block w-px ${dividerClass} my-3`} />
      <div className={`flex-1 grid grid-cols-1 md:grid-cols-3 gap-px ${dividerClass}`}>
        <div className={`px-5 py-3.5 text-[13px] ${fieldClass}`}>Localisation</div>
        <div className={`px-5 py-3.5 text-[13px] ${fieldClass}`}>Type de bien</div>
        <div className={`px-5 py-3.5 text-[13px] ${fieldClass}`}>Budget</div>
      </div>
      <button
        type="button"
        className="bg-accent text-white px-6 md:px-8 text-[11px] font-bold tracking-[.15em] uppercase whitespace-nowrap hover:bg-accent-deep transition-colors"
      >
        Rechercher →
      </button>
    </div>
  );
}

/* ─────────── Variante 1 · Cinematic Vignette ─────────── */
export function HeroDarkVariantA() {
  return (
    <section className="relative bg-ink overflow-hidden min-h-[calc(100dvh-16rem)] md:min-h-[calc(100dvh-17rem)] lg:min-h-[calc(100dvh-13rem)] 2xl:min-h-[calc(100dvh-14rem)] max-h-[1080px] flex items-center">
      <div className="hidden lg:block absolute inset-0">
        <Image
          src="/assets/images/hero-building.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-darker via-ink-darker/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070d22] via-transparent to-[#070d22]/40" />
      </div>

      <div className="relative w-full max-w-[1280px] xl:max-w-[1560px] 2xl:max-w-[1720px] mx-auto px-4 md:px-10 lg:px-16 xl:px-24 2xl:px-32 pt-24 pb-8 lg:pt-28 lg:pb-10 xl:pt-32 xl:pb-16 2xl:pt-40 2xl:pb-20">
        <div className="max-w-[720px] xl:max-w-[900px] 2xl:max-w-[1040px]">
          <div className="inline-flex items-center gap-3 mb-4 xl:mb-6">
            <StarRating />
            <span className="text-sm xl:text-base text-white/75">Basé sur 579 avis</span>
          </div>

          <h1 className="text-3xl lg:text-[38px] xl:text-[56px] 2xl:text-[72px] font-extrabold leading-[1.08] tracking-tight text-white mb-4 xl:mb-6">
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

          <p className="text-[15px] lg:text-base xl:text-xl 2xl:text-[22px] text-white/85 max-w-[500px] xl:max-w-[640px] 2xl:max-w-[720px] mb-6 lg:mb-7 xl:mb-9 leading-relaxed">
            Depuis 2010, Be Home Partners vous accompagne dans tous vos projets
            immobiliers avec une approche humaine, transparente et sur-mesure.
          </p>

          <div className="max-w-[440px] xl:max-w-[500px]">
            <div className="inline-flex items-center gap-1 mb-3 p-1 rounded-[12px] bg-white/[0.04] ring-1 ring-inset ring-white/10">
              <button type="button" className="px-4 py-1.5 rounded-[10px] text-[11px] font-bold tracking-[.15em] uppercase bg-white text-ink">Acheter</button>
              <button type="button" className="px-4 py-1.5 rounded-[10px] text-[11px] font-bold tracking-[.15em] uppercase text-white/70 hover:text-white transition-colors">Louer</button>
            </div>
            <div className="bg-white/[0.04] backdrop-blur-xl ring-1 ring-inset ring-white/10 rounded-[14px] xl:rounded-[16px] p-1.5 xl:p-2 2xl:p-2.5 grid grid-cols-1 lg:grid-cols-2 gap-1.5 xl:gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Localisation"
                  className="w-full px-3 py-2.5 xl:px-4 xl:py-3.5 2xl:px-5 2xl:py-4 bg-white/[0.05] rounded-[12px] text-[12.5px] xl:text-[14px] 2xl:text-[15px] text-white placeholder:text-white focus:outline-none focus:bg-white/[0.09] hover:bg-white/[0.09] transition"
                />
              </div>
              <div className="relative">
                <select defaultValue="" className="w-full appearance-none pl-3 pr-7 py-2.5 xl:pl-4 xl:pr-9 xl:py-3.5 2xl:pl-5 2xl:pr-10 2xl:py-4 bg-white/[0.05] hover:bg-white/[0.09] rounded-[12px] text-[12.5px] xl:text-[14px] 2xl:text-[15px] text-white focus:outline-none cursor-pointer transition">
                  <option value="" disabled className="bg-ink-deep">Type</option>
                  <option className="bg-ink-deep">Maison</option>
                  <option className="bg-ink-deep">Appartement</option>
                  <option className="bg-ink-deep">Terrain</option>
                </select>
                <span className="pointer-events-none absolute right-2 xl:right-3 top-1/2 -translate-y-1/2 text-white/45">
                  <svg className="w-[11px] h-[11px] xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
              <div className="relative">
                <select defaultValue="" className="w-full appearance-none pl-3 pr-7 py-2.5 xl:pl-4 xl:pr-9 xl:py-3.5 2xl:pl-5 2xl:pr-10 2xl:py-4 bg-white/[0.05] hover:bg-white/[0.09] rounded-[12px] text-[12.5px] xl:text-[14px] 2xl:text-[15px] text-white focus:outline-none cursor-pointer transition">
                  <option value="" disabled className="bg-ink-deep">Chambres</option>
                  <option className="bg-ink-deep">1</option>
                  <option className="bg-ink-deep">2</option>
                  <option className="bg-ink-deep">3</option>
                  <option className="bg-ink-deep">4</option>
                  <option className="bg-ink-deep">5+</option>
                </select>
                <span className="pointer-events-none absolute right-2 xl:right-3 top-1/2 -translate-y-1/2 text-white/45">
                  <svg className="w-[11px] h-[11px] xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
              <div className="relative">
                <select defaultValue="" className="w-full appearance-none pl-3 pr-7 py-2.5 xl:pl-4 xl:pr-9 xl:py-3.5 2xl:pl-5 2xl:pr-10 2xl:py-4 bg-white/[0.05] hover:bg-white/[0.09] rounded-[12px] text-[12.5px] xl:text-[14px] 2xl:text-[15px] text-white focus:outline-none cursor-pointer transition">
                  <option value="" disabled className="bg-ink-deep">Budget</option>
                  <option className="bg-ink-deep">≤ 200 000 €</option>
                  <option className="bg-ink-deep">≤ 400 000 €</option>
                  <option className="bg-ink-deep">≤ 600 000 €</option>
                  <option className="bg-ink-deep">≤ 1 000 000 €</option>
                </select>
                <span className="pointer-events-none absolute right-2 xl:right-3 top-1/2 -translate-y-1/2 text-white/45">
                  <svg className="w-[11px] h-[11px] xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
              <button
                type="button"
                aria-label="Rechercher"
                className="col-span-1 lg:col-span-2 mt-0.5 inline-flex items-center justify-center gap-2 xl:gap-2.5 bg-accent hover:bg-accent-deep text-white px-4 py-3 xl:px-6 xl:py-3.5 2xl:px-7 2xl:py-4 rounded-[12px] text-[11px] xl:text-[13px] 2xl:text-[14px] font-bold tracking-[.15em] uppercase transition-colors whitespace-nowrap w-full"
              >
                <svg className="w-3.5 h-3.5 xl:w-[18px] xl:h-[18px] 2xl:w-5 2xl:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Variante 3 · Bento Showcase (premium éditorial) ─────────── */
export function HeroDarkVariantE() {
  return (
    <section className="relative bg-ink-darker overflow-hidden min-h-[calc(100dvh-16rem)] md:min-h-[calc(100dvh-17rem)] lg:min-h-[calc(100dvh-13rem)] 2xl:min-h-[calc(100dvh-14rem)] max-h-[1080px] flex items-center mt-16 md:mt-20">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Villa en arrière-plan, côté droit ── */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-full lg:w-[70%] pointer-events-none">
        <Image
          src="/assets/images/hero-villa-transparent.png"
          alt=""
          fill
          priority
          className="object-cover object-right-bottom opacity-95"
          sizes="(max-width: 1024px) 100vw, 70vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-darker via-ink-darker/40 to-transparent" />
      </div>

      <div className="relative w-full max-w-[1280px] xl:max-w-[1560px] 2xl:max-w-[1720px] mx-auto px-4 md:px-10 lg:px-16 xl:px-24 2xl:px-32 pt-24 pb-8 lg:pt-28 lg:pb-10 xl:pt-32 xl:pb-14 2xl:pt-40 2xl:pb-20">
        <div className="max-w-[720px] xl:max-w-[900px] 2xl:max-w-[1040px]">
          <div className="flex items-center gap-4 mb-5">
            <StarRating />
            <span className="text-sm text-white/75">Basé sur 579 avis</span>
          </div>

          <h1 className="text-3xl lg:text-[34px] xl:text-[44px] 2xl:text-[68px] font-extrabold leading-[1.08] tracking-tight text-white mb-4 xl:mb-5 max-w-[560px] xl:max-w-[680px] 2xl:max-w-[920px]">
            Votre partenaire de référence en immobilier.
          </h1>

          <p className="text-[15px] lg:text-[15px] xl:text-base 2xl:text-[20px] text-white/70 max-w-[460px] xl:max-w-[520px] 2xl:max-w-[640px] mb-5 lg:mb-6 xl:mb-7 leading-relaxed">
            Depuis 2010, Be Home Partners vous accompagne dans tous vos
            projets immobiliers avec une approche humaine, transparente et
            sur-mesure.
          </p>

          <div className="max-w-[640px] xl:max-w-[680px] 2xl:max-w-[1040px]">
            <div className="inline-flex items-center gap-1 mb-3 p-1 rounded-[12px] bg-white/[0.04] ring-1 ring-inset ring-white/10">
              <button type="button" className="px-4 py-1.5 rounded-[10px] text-[11px] font-bold tracking-[.15em] uppercase bg-white text-ink">Acheter</button>
              <button type="button" className="px-4 py-1.5 rounded-[10px] text-[11px] font-bold tracking-[.15em] uppercase text-white/70 hover:text-white transition-colors">Louer</button>
            </div>
            <div className="max-w-[440px] xl:max-w-[500px] bg-white/[0.04] backdrop-blur-xl ring-1 ring-inset ring-white/10 rounded-[14px] xl:rounded-[16px] p-1.5 xl:p-2 2xl:p-2.5 grid grid-cols-1 lg:grid-cols-2 gap-1.5 xl:gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Localisation"
                  className="w-full px-3 py-2.5 xl:px-4 xl:py-3.5 2xl:px-5 2xl:py-4 bg-white/[0.05] rounded-[12px] text-[12.5px] xl:text-[14px] 2xl:text-[15px] text-white placeholder:text-white focus:outline-none focus:bg-white/[0.09] hover:bg-white/[0.09] transition"
                />
              </div>
              <div className="relative">
                <select defaultValue="" className="w-full appearance-none pl-3 pr-7 py-2.5 xl:pl-4 xl:pr-9 xl:py-3.5 2xl:pl-5 2xl:pr-10 2xl:py-4 bg-white/[0.05] hover:bg-white/[0.09] rounded-[12px] text-[12.5px] xl:text-[14px] 2xl:text-[15px] text-white focus:outline-none cursor-pointer transition">
                  <option value="" disabled className="bg-ink-deep">Type</option>
                  <option className="bg-ink-deep">Maison</option>
                  <option className="bg-ink-deep">Appartement</option>
                  <option className="bg-ink-deep">Terrain</option>
                </select>
                <span className="pointer-events-none absolute right-2 xl:right-3 top-1/2 -translate-y-1/2 text-white/45">
                  <svg className="w-[11px] h-[11px] xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
              <div className="relative">
                <select defaultValue="" className="w-full appearance-none pl-3 pr-7 py-2.5 xl:pl-4 xl:pr-9 xl:py-3.5 2xl:pl-5 2xl:pr-10 2xl:py-4 bg-white/[0.05] hover:bg-white/[0.09] rounded-[12px] text-[12.5px] xl:text-[14px] 2xl:text-[15px] text-white focus:outline-none cursor-pointer transition">
                  <option value="" disabled className="bg-ink-deep">Chambres</option>
                  <option className="bg-ink-deep">1</option>
                  <option className="bg-ink-deep">2</option>
                  <option className="bg-ink-deep">3</option>
                  <option className="bg-ink-deep">4</option>
                  <option className="bg-ink-deep">5+</option>
                </select>
                <span className="pointer-events-none absolute right-2 xl:right-3 top-1/2 -translate-y-1/2 text-white/45">
                  <svg className="w-[11px] h-[11px] xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
              <div className="relative">
                <select defaultValue="" className="w-full appearance-none pl-3 pr-7 py-2.5 xl:pl-4 xl:pr-9 xl:py-3.5 2xl:pl-5 2xl:pr-10 2xl:py-4 bg-white/[0.05] hover:bg-white/[0.09] rounded-[12px] text-[12.5px] xl:text-[14px] 2xl:text-[15px] text-white focus:outline-none cursor-pointer transition">
                  <option value="" disabled className="bg-ink-deep">Budget</option>
                  <option className="bg-ink-deep">≤ 200 000 €</option>
                  <option className="bg-ink-deep">≤ 400 000 €</option>
                  <option className="bg-ink-deep">≤ 600 000 €</option>
                  <option className="bg-ink-deep">≤ 1 000 000 €</option>
                </select>
                <span className="pointer-events-none absolute right-2 xl:right-3 top-1/2 -translate-y-1/2 text-white/45">
                  <svg className="w-[11px] h-[11px] xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
              <button
                type="button"
                aria-label="Rechercher"
                className="col-span-1 lg:col-span-2 mt-0.5 inline-flex items-center justify-center gap-2 xl:gap-2.5 bg-accent hover:bg-accent-deep text-white px-4 py-3 xl:px-6 xl:py-3.5 2xl:px-7 2xl:py-4 rounded-[12px] text-[11px] xl:text-[13px] 2xl:text-[14px] font-bold tracking-[.15em] uppercase transition-colors whitespace-nowrap w-full"
              >
                <svg className="w-3.5 h-3.5 xl:w-[18px] xl:h-[18px] 2xl:w-5 2xl:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
                Rechercher
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
  return (
    <section className="relative bg-ink-darker overflow-hidden min-h-[calc(100dvh-65px)] md:min-h-[calc(100dvh-81px)] max-h-[1080px] flex items-center mt-[65px] md:mt-[81px]">
      <div className="hidden lg:block absolute inset-0">
        <Image
          src="/assets/images/hero-villa-pool.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink-darker/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d22]/60 via-ink-darker/40 to-[#070d22]/85" />
      </div>

      <div className="relative w-full px-6 lg:px-10 xl:px-20 2xl:px-28 pt-24 pb-8 lg:pt-28 lg:pb-10 xl:pt-32 xl:pb-14 2xl:pt-40 2xl:pb-20 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <StarRating />
          <span className="text-sm xl:text-base text-white/80">Basé sur 579 avis</span>
        </div>

        <h1 className="text-3xl lg:text-[36px] xl:text-[56px] 2xl:text-[76px] font-extrabold leading-[1.08] tracking-tight text-white mb-4 xl:mb-6 max-w-[860px] xl:max-w-[1000px] 2xl:max-w-[1200px]">
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

        <p className="text-[15px] lg:text-base xl:text-lg 2xl:text-xl text-white/85 max-w-[500px] xl:max-w-[640px] 2xl:max-w-[720px] mb-5 lg:mb-6 xl:mb-8 leading-relaxed">
          Depuis 2010, Be Home Partners vous accompagne dans tous vos projets
          immobiliers avec une approche humaine, transparente et sur-mesure.
        </p>

        <div className="w-full max-w-[1080px] mt-auto">
          <div className="bg-white ring-1 ring-inset ring-black/5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)] rounded-[14px] p-2.5 2xl:p-3 flex flex-col lg:flex-row items-stretch gap-2 lg:gap-2.5 text-left">
            <div className="relative flex-1 min-w-[180px]">
              <input
                type="text"
                placeholder="Localisation"
                className="w-full px-4 py-3 2xl:px-5 2xl:py-4 bg-ink/[0.04] hover:bg-ink/[0.07] rounded-[12px] text-[13.5px] 2xl:text-[15px] text-ink placeholder:text-ink/70 focus:outline-none focus:bg-ink/[0.07] transition"
              />
            </div>
            <div className="relative flex-1 min-w-[140px]">
              <select defaultValue="" className="w-full appearance-none pl-4 pr-10 py-3 2xl:pl-5 2xl:py-4 bg-ink/[0.04] hover:bg-ink/[0.07] rounded-[12px] text-[13.5px] 2xl:text-[15px] text-ink focus:outline-none cursor-pointer transition">
                <option value="" disabled>Type</option>
                <option>Maison</option>
                <option>Appartement</option>
                <option>Terrain</option>
              </select>
              <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink/60">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
            <div className="relative flex-1 min-w-[140px]">
              <select defaultValue="" className="w-full appearance-none pl-4 pr-10 py-3 2xl:pl-5 2xl:py-4 bg-ink/[0.04] hover:bg-ink/[0.07] rounded-[12px] text-[13.5px] 2xl:text-[15px] text-ink focus:outline-none cursor-pointer transition">
                <option value="" disabled>Chambres</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
              <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink/60">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
            <div className="relative flex-1 min-w-[140px]">
              <select defaultValue="" className="w-full appearance-none pl-4 pr-10 py-3 2xl:pl-5 2xl:py-4 bg-ink/[0.04] hover:bg-ink/[0.07] rounded-[12px] text-[13.5px] 2xl:text-[15px] text-ink focus:outline-none cursor-pointer transition">
                <option value="" disabled>Budget</option>
                <option>≤ 200 000 €</option>
                <option>≤ 400 000 €</option>
                <option>≤ 600 000 €</option>
                <option>≤ 1 000 000 €</option>
              </select>
              <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink/60">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
            <button
              type="button"
              aria-label="Rechercher"
              className="inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-deep text-white px-5 py-3 2xl:px-7 2xl:py-4 rounded-[12px] text-[12px] 2xl:text-[14px] font-bold tracking-[.15em] uppercase transition-colors whitespace-nowrap w-full lg:w-auto"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <span className="lg:hidden xl:inline">Rechercher</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
