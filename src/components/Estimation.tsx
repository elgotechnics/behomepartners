import Image from "next/image";

export function Estimation() {
  return (
    <section id="estimation" className="relative bg-gradient-to-b from-[#1a2845] to-[#0f1b34]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="group relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] gap-10 lg:gap-12 items-center">
            <div>
              <div className="text-[11px] tracking-[.2em] uppercase text-white/80 font-bold mb-5">
                Obtenir une estimation
              </div>
              <h2 className="text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.02] text-white mb-5">
                Estimez votre bien<span className="text-white">.</span>
              </h2>
              <p className="text-[15px] text-white/70 leading-relaxed mb-8 max-w-[480px]">
                Vous souhaitez connaître la juste valeur de votre bien ? Deux
                approches s&apos;offrent à vous, selon le niveau de précision
                recherché.{" "}
                <span className="text-white font-semibold">
                  Gratuit, sans engagement.
                </span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1 — Estimation en ligne */}
                <div className="relative flex flex-col bg-[#243558] rounded-[16px] p-7 ring-1 ring-inset ring-white/20 hover:ring-white/50 transition-all duration-300 hover:-translate-y-0.5">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white mb-4"
                    aria-hidden
                  >
                    <path d="M13 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9V11C2 13.8284 2 15.2426 2.87868 16.1213C3.75736 17 5.17157 17 8 17H16C18.8284 17 20.2426 17 21.1213 16.1213C21.8897 15.3529 21.9862 14.175 21.9983 12" />
                    <path d="M14 21H16M14 21C13.1716 21 12.5 20.3284 12.5 19.5V17L12 17M14 21H10M10 21H8M10 21C10.8284 21 11.5 20.3284 11.5 19.5V17L12 17M12 17V21" />
                    <circle cx="19" cy="6" r="3" />
                  </svg>
                  <h3 className="text-[15px] tracking-[.18em] uppercase font-extrabold text-white mb-5">
                    Estimation en ligne
                  </h3>
                  <ul className="text-[13.5px] text-white/80 space-y-3 mb-7 flex-1">
                    <li>Résultat instantané</li>
                    <li>Simple et rapide</li>
                    <li>Première fourchette de prix</li>
                  </ul>
                  <button
                    type="button"
                    className="w-full inline-flex whitespace-nowrap items-center justify-center gap-2.5 bg-transparent text-white ring-1 ring-inset ring-white/40 rounded-[12px] px-5 py-3.5 text-[11px] font-bold tracking-[.15em] uppercase hover:bg-white hover:text-ink transition-colors"
                  >
                    Commencer
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>

                {/* Card 2 — Estimation par agent (recommandé) */}
                <div className="relative flex flex-col bg-white rounded-[16px] p-7 ring-2 ring-accent shadow-[0_18px_40px_-10px_rgba(237,25,46,0.28)] hover:shadow-[0_24px_50px_-10px_rgba(237,25,46,0.4)] transition-all duration-300 hover:-translate-y-0.5">
                  <div className="absolute -top-3 left-6 bg-accent text-white text-[10px] tracking-[.2em] uppercase font-bold px-3 py-1 rounded-full">
                    Recommandé
                  </div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent mb-4"
                    aria-hidden
                  >
                    <path d="M13 11C13 8.79086 11.2091 7 9 7C6.79086 7 5 8.79086 5 11C5 13.2091 6.79086 15 9 15C11.2091 15 13 13.2091 13 11Z" />
                    <path d="M11.0386 7.55773C11.0131 7.37547 11 7.18927 11 7C11 4.79086 12.7909 3 15 3C17.2091 3 19 4.79086 19 7C19 9.20914 17.2091 11 15 11C14.2554 11 13.5584 10.7966 12.9614 10.4423" />
                    <path d="M15 21C15 17.6863 12.3137 15 9 15C5.68629 15 3 17.6863 3 21" />
                    <path d="M21 17C21 13.6863 18.3137 11 15 11" />
                  </svg>
                  <h3 className="text-[15px] tracking-[.18em] uppercase font-extrabold text-ink mb-5">
                    Estimation par agent
                  </h3>
                  <ul className="text-[13.5px] text-ink/75 space-y-3 mb-7 flex-1">
                    <li>Expertise personnalisée</li>
                    <li>Analyse approfondie</li>
                    <li>Conseils sur mesure</li>
                  </ul>
                  <button
                    type="button"
                    className="w-full inline-flex whitespace-nowrap items-center justify-center gap-2.5 bg-accent text-white rounded-[12px] px-5 py-3.5 text-[11px] font-bold tracking-[.15em] uppercase hover:bg-[#6f1029] transition-colors"
                  >
                    Prendre rendez-vous
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[480px] overflow-hidden rounded-[14px] ring-1 ring-white/10">
                <Image
                  src="/assets/images/agent-portrait.png"
                  alt="Agent Be Home Partners devant l'agence"
                  fill
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
