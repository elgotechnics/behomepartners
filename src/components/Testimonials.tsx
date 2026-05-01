import Image from "next/image";

export function Testimonials() {
  return (
    <section className="bg-bg">
      <div className="max-w-[1280px] mx-auto px-6 pt-16 lg:pt-20 pb-12 lg:pb-14">
        <div className="flex flex-wrap justify-between items-end gap-8 mb-8">
          <div>
            <div className="text-[11px] tracking-[.2em] uppercase text-accent font-bold mb-2">
              Ils nous font confiance
            </div>
            <h2 className="text-3xl lg:text-[38px] font-extrabold leading-[1.1] tracking-tight">
              Ce que nos clients disent de nous
            </h2>
          </div>
          <div className="flex gap-3.5 shrink-0">
            <button
              type="button"
              aria-label="Précédent"
              className="w-11 h-11 rounded-[14px] bg-grid text-ink font-bold flex items-center justify-center hover:bg-hairline transition-colors"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Suivant"
              className="w-11 h-11 rounded-[14px] bg-ink text-white font-bold flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              →
            </button>
          </div>
        </div>

        <div className="bg-paper border border-hairline grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] rounded-[14px] overflow-hidden">
          <div className="relative min-h-[400px] lg:min-h-[480px]">
            <Image
              src="/assets/images/testimonial-house.jpg"
              alt="Maison vendue à Nivelles"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute top-6 left-6 bg-accent text-white px-3.5 py-2.5 text-[11px] font-bold tracking-[.15em] uppercase rounded-[14px]">
              Vendu en 3 semaines
            </span>
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 px-5 py-3.5 border border-hairline rounded-[14px]">
              <div className="text-[11px] text-muted uppercase tracking-wider font-bold mb-1">
                Maison · Nivelles
              </div>
              <div className="text-[15px] font-extrabold text-ink">
                Vendue au prix demandé · 4 chambres · 180 m²
              </div>
            </div>
          </div>

          <div className="p-10 lg:p-12 flex flex-col">
            <div className="text-accent text-2xl tracking-[.15em] mb-8 font-bold">
              ★★★★★
            </div>
            <p className="text-xl text-ink leading-relaxed italic flex-1 tracking-tight">
              «&nbsp;Vendu en 3 semaines au prix demandé. Équipe disponible et
              réactive du premier appel jusqu&apos;à la signature. Une vraie
              écoute, pas du blabla commercial.&nbsp;»
            </p>
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-grid">
              <div>
                <div className="font-extrabold text-[15px] text-ink">
                  Ludovic P.
                </div>
                <div className="text-[11px] text-muted mt-0.5 tracking-wider uppercase">
                  Avis publié sur RealAdvice
                </div>
              </div>
              <div className="flex gap-1.5">
                <span className="w-6 h-0.5 bg-accent" />
                <span className="w-6 h-0.5 bg-grid" />
                <span className="w-6 h-0.5 bg-grid" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-6 flex-wrap text-xs text-muted tracking-wider">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/google.svg"
              alt="Google"
              width={20}
              height={20}
              className="block"
            />
            <Image
              src="/assets/icons/facebook.svg"
              alt="Facebook"
              width={20}
              height={20}
              className="block"
            />
            <Image
              src="/assets/icons/realadvice.png"
              alt="RealAdvice"
              width={20}
              height={20}
              className="block"
            />
          </div>
          <span className="text-accent font-bold tracking-[.15em]">★★★★★</span>
          <strong className="text-ink">4,6/5</strong>
          <span>· 579 avis cumulés sur Google, Facebook et RealAdvice</span>
        </div>
      </div>
    </section>
  );
}
