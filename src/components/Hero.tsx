import { SearchBar } from "./SearchBar";

export function Hero() {
  return (
    <section>
      <div className="max-w-[1280px] mx-auto px-6 py-16 lg:py-20">
        <div>
          <div className="inline-flex items-center gap-3 mb-5">
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
            <span className="text-sm text-white/75">Basé sur 579 avis</span>
          </div>

          <h1 className="text-4xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-white mb-4 max-w-[720px]">
            Votre partenaire de référence en immobilier.
          </h1>

          <p className="text-lg text-white/85 max-w-[540px] mb-7">
            Depuis 2010, Be Home Partners vous accompagne dans tous vos projets
            immobiliers avec une approche humaine, transparente et sur-mesure.
          </p>

          <SearchBar />
        </div>
      </div>

      <div className="flex justify-center pb-8">
        <div className="w-7 h-11 rounded-full border-2 border-white/70 flex justify-center pt-2">
          <span className="block w-1 h-2.5 rounded-full bg-white/90 animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
