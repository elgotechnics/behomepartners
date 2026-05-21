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
    <span className="text-sm font-bold">4,6/5</span>
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
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/assets/images/agence-bureaux.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center opacity-55"
          sizes="(max-width: 767px) 0px, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070d22] via-transparent to-[#070d22]/40" />
      </div>

      <div className="relative w-full max-w-[1480px] mx-auto px-6 lg:px-10 pt-24 pb-8 lg:pt-28 lg:pb-10 xl:pt-32 xl:pb-16 2xl:pt-40 2xl:pb-20">
        <div className="max-w-[720px] xl:max-w-[900px] 2xl:max-w-[1040px]">
          <div className="inline-flex items-center gap-3 mb-4 xl:mb-6">
            <StarRating />
            <span className="text-sm xl:text-base text-white/75">Basé sur 579 avis</span>
          </div>

          <h1 className="text-3xl lg:text-[38px] xl:text-[56px] 2xl:text-[72px] font-extrabold leading-[1.08] tracking-tight text-white mb-4 xl:mb-6">
            Bien plus qu&apos;une agence,{" "}
            <span className="whitespace-nowrap">un partenaire.</span>
          </h1>

          <p className="text-[15px] lg:text-base xl:text-xl 2xl:text-[22px] text-white/85 max-w-[500px] xl:max-w-[640px] 2xl:max-w-[720px] mb-6 lg:mb-7 xl:mb-9 leading-relaxed">
            Depuis 2010, Be Home Partners vous accompagne dans tous vos projets
            immobiliers avec une approche humaine, transparente et sur-mesure.
          </p>

          <div className="max-w-[440px] xl:max-w-[500px]">
            <div className="inline-flex items-center gap-1 mb-3 p-1 rounded-[12px] bg-white/[0.04] ring-1 ring-inset ring-white/10">
              <button type="button" className="px-4 py-1.5 lg:px-6 lg:py-2.5 rounded-[10px] text-[11px] lg:text-[12.5px] font-bold tracking-[.15em] uppercase bg-white text-ink">Acheter</button>
              <button type="button" className="px-4 py-1.5 lg:px-6 lg:py-2.5 rounded-[10px] text-[11px] lg:text-[12.5px] font-bold tracking-[.15em] uppercase text-white/70 hover:text-white transition-colors">Louer</button>
            </div>
            <div className="bg-white/[0.04] backdrop-blur-xl ring-1 ring-inset ring-white/10 rounded-[14px] xl:rounded-[16px] p-1.5 xl:p-2 2xl:p-2.5 grid grid-cols-2 gap-1.5 xl:gap-2">
              <div className="relative col-span-2">
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
                  <option className="bg-ink-deep">Bureau</option>
                  <option className="bg-ink-deep">Commerce</option>
                  <option className="bg-ink-deep">Industriel</option>
                  <option className="bg-ink-deep">Garage / parking</option>
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
              <div className="col-span-2 grid grid-cols-2 gap-1.5 xl:gap-2">
                <div className="relative">
                  <select defaultValue="" className="w-full appearance-none pl-3 pr-7 py-2.5 xl:pl-4 xl:pr-9 xl:py-3.5 2xl:pl-5 2xl:pr-10 2xl:py-4 bg-white/[0.05] hover:bg-white/[0.09] rounded-[12px] text-[12.5px] xl:text-[14px] 2xl:text-[15px] text-white focus:outline-none cursor-pointer transition">
                    <option value="" disabled className="bg-ink-deep">Budget min</option>
                    <option className="bg-ink-deep">Pas de minimum</option>
                    <option className="bg-ink-deep">100 000 €</option>
                    <option className="bg-ink-deep">200 000 €</option>
                    <option className="bg-ink-deep">300 000 €</option>
                    <option className="bg-ink-deep">400 000 €</option>
                    <option className="bg-ink-deep">500 000 €</option>
                    <option className="bg-ink-deep">600 000 €</option>
                    <option className="bg-ink-deep">800 000 €</option>
                  </select>
                  <span className="pointer-events-none absolute right-2 xl:right-3 top-1/2 -translate-y-1/2 text-white/45">
                    <svg className="w-[11px] h-[11px] xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
                <div className="relative">
                  <select defaultValue="" className="w-full appearance-none pl-3 pr-7 py-2.5 xl:pl-4 xl:pr-9 xl:py-3.5 2xl:pl-5 2xl:pr-10 2xl:py-4 bg-white/[0.05] hover:bg-white/[0.09] rounded-[12px] text-[12.5px] xl:text-[14px] 2xl:text-[15px] text-white focus:outline-none cursor-pointer transition">
                    <option value="" disabled className="bg-ink-deep">Budget max</option>
                    <option className="bg-ink-deep">200 000 €</option>
                    <option className="bg-ink-deep">300 000 €</option>
                    <option className="bg-ink-deep">400 000 €</option>
                    <option className="bg-ink-deep">500 000 €</option>
                    <option className="bg-ink-deep">600 000 €</option>
                    <option className="bg-ink-deep">800 000 €</option>
                    <option className="bg-ink-deep">1 000 000 €</option>
                    <option className="bg-ink-deep">Pas de maximum</option>
                  </select>
                  <span className="pointer-events-none absolute right-2 xl:right-3 top-1/2 -translate-y-1/2 text-white/45">
                    <svg className="w-[11px] h-[11px] xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
              <button
                type="button"
                aria-label="Rechercher"
                className="col-span-2 mt-0.5 inline-flex items-center justify-center gap-2 xl:gap-2.5 bg-accent hover:bg-accent-deep text-white px-4 py-3 xl:px-6 xl:py-3.5 2xl:px-7 2xl:py-4 rounded-[12px] text-[11px] xl:text-[13px] 2xl:text-[14px] font-bold tracking-[.15em] uppercase transition-colors whitespace-nowrap w-full"
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
