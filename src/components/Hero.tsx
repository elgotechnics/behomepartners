import { SearchBar } from "./SearchBar";

export function Hero() {
  return (
    <section>
      <div className="max-w-[1280px] xl:max-w-[1480px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-8 py-16 lg:py-20 xl:py-28 2xl:py-36">
        <div>
          <div className="inline-flex items-center gap-3 mb-5 xl:mb-7">
            <span className="inline-flex items-center gap-2 bg-accent text-white px-3 py-1.5 xl:px-4 xl:py-2 rounded-sm">
              <span className="relative inline-block text-base xl:text-lg tracking-[.15em] leading-none">
                <span className="text-white/30">★★★★★</span>
                <span
                  className="absolute inset-0 overflow-hidden text-white"
                  style={{ width: "92%" }}
                  aria-hidden
                >
                  ★★★★★
                </span>
              </span>
              <span className="text-sm xl:text-base font-extrabold">4,6/5</span>
            </span>
            <span className="text-sm xl:text-base text-white/75">Basé sur 579 avis</span>
          </div>

          <h1 className="text-4xl lg:text-[56px] xl:text-[72px] 2xl:text-[88px] font-extrabold leading-[1.05] tracking-tight text-white mb-4 xl:mb-6 max-w-[720px] xl:max-w-[900px] 2xl:max-w-[1040px]">
            Votre partenaire de référence en immobilier.
          </h1>

          <p className="text-lg xl:text-xl 2xl:text-[22px] text-white/85 max-w-[540px] xl:max-w-[640px] 2xl:max-w-[720px] mb-7 xl:mb-10 leading-relaxed">
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
