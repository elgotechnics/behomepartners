import Image from "next/image";
import { CTAButton } from "@/components/ui/cta-button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

const ArrowRight = () => (
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
);

const OnlineIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    {...props}
  >
    <path d="M13 3H8C5.17 3 3.76 3 2.88 3.88C2 4.76 2 6.17 2 9V11C2 13.83 2 15.24 2.88 16.12C3.76 17 5.17 17 8 17H16C18.83 17 20.24 17 21.12 16.12C21.89 15.35 21.99 14.18 22 12" />
    <path d="M14 21H10M12 17V21" />
    <circle cx="19" cy="6" r="3" />
  </svg>
);

const AgentIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    {...props}
  >
    <path d="M13 11C13 8.79 11.21 7 9 7C6.79 7 5 8.79 5 11C5 13.21 6.79 15 9 15C11.21 15 13 13.21 13 11Z" />
    <path d="M11.04 7.56C11.01 7.38 11 7.19 11 7C11 4.79 12.79 3 15 3C17.21 3 19 4.79 19 7C19 9.21 17.21 11 15 11C14.26 11 13.56 10.8 12.96 10.44" />
    <path d="M15 21C15 17.69 12.31 15 9 15C5.69 15 3 17.69 3 21" />
    <path d="M21 17C21 13.69 18.31 11 15 11" />
  </svg>
);

/* ─────────── Helpers internes ─────────── */
type SplitTheme = "bordeaux" | "blue";

function EstimationSplitCard({ theme }: { theme: SplitTheme }) {
  const isBordeaux = theme === "bordeaux";
  const cardBg = isBordeaux ? "bg-accent" : "bg-ink";
  const recommendedBadgeBg = "bg-accent";
  const iconAccent = "text-accent";

  return (
    <section className="bg-white">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
          {/* Left: card with 2 options */}
          <div className={`lg:col-span-7 ${cardBg} text-white rounded-[14px] px-7 py-12 lg:px-12 lg:py-14 relative overflow-hidden order-2 lg:order-1`}>
            <div
              aria-hidden
              className="absolute -top-[120px] -left-[120px] w-[420px] h-[420px] rounded-full border border-white/15 pointer-events-none"
            />
            <div
              aria-hidden
              className="absolute -top-[80px] -left-[80px] w-[300px] h-[300px] rounded-full border border-white/10 pointer-events-none"
            />

            <div className="relative">
              <SectionEyebrow index="04" tone="dark" className="mb-4">
                Obtenir une estimation
              </SectionEyebrow>
              <h2 className="text-3xl lg:text-[42px] font-extrabold tracking-tight leading-[1.05] mb-4">
                Estimez votre bien<span className="opacity-60">.</span>
              </h2>
              <p className="text-base leading-relaxed opacity-85 mb-9 max-w-[520px]">
                Deux approches pour connaître la valeur juste de votre bien,
                gratuit et sans engagement.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-4">
                {/* Option 1 — Online (transparent / glass) */}
                <div className="rounded-[14px] bg-white/[0.07] backdrop-blur-md ring-1 ring-inset ring-white/20 p-6 flex flex-col hover:bg-white/[0.10] hover:ring-white/30 transition-colors">
                  <OnlineIcon className="text-white mb-4" />
                  <h3 className="text-[14px] tracking-[.15em] uppercase font-bold mb-3">
                    Estimation en ligne
                  </h3>
                  <ul className="text-[13px] text-white/80 space-y-2 mb-6 flex-1">
                    <li>· Résultat instantané</li>
                    <li>· Simple et rapide</li>
                    <li>· Sans rendez-vous</li>
                  </ul>
                  <CTAButton
                    variant="ghost"
                    size="sm"
                    href="/estimation"
                    className="w-full"
                  >
                    Commencer
                  </CTAButton>
                </div>

                {/* Option 2 — Agent (white solid, recommended) */}
                <div className="relative rounded-[14px] bg-white text-ink p-6 flex flex-col border border-accent/25 ring-1 ring-inset ring-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_14px_36px_-14px_rgba(139,21,56,0.30)]">
                  <div className="absolute -top-3 left-5 bg-accent text-white text-[10px] tracking-[.2em] uppercase font-bold px-3 py-1 rounded-full">
                    Recommandé
                  </div>
                  <AgentIcon className={`${iconAccent} mb-4`} />
                  <h3 className="text-[14px] tracking-[.15em] uppercase font-bold mb-3">
                    Estimation par agent
                  </h3>
                  <ul className="text-[13px] text-ink/75 space-y-2 mb-6 flex-1">
                    <li>· Expertise personnalisée</li>
                    <li>· Analyse approfondie</li>
                    <li>· Conseils sur mesure</li>
                  </ul>
                  <CTAButton
                    variant="primary"
                    size="sm"
                    href="/estimation"
                    className="w-full"
                  >
                    Prendre RDV
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>

          {/* Right: photo agent */}
          <div className="lg:col-span-5 relative rounded-[14px] overflow-hidden aspect-[4/5] lg:aspect-auto order-1 lg:order-2">
            <Image
              src="/assets/images/agent-portrait.png"
              alt="Estimation par un agent Be Home Partners"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function EstimationVariantABlue() {
  return <EstimationSplitCard theme="blue" />;
}
