import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import type { ServiceConfig } from "@/data/services";

type Props = { process: ServiceConfig["process"] };

export function TimelineHorizontalRail({ process }: Props) {
  const steps = process.steps;
  const railInset = `calc(100% / (${steps.length} * 2))`;

  return (
    <section className="bg-white">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto text-center mb-14 lg:mb-20">
          {process.eyebrow ? (
            <div className="flex justify-center mb-4">
              <SectionEyebrow tone="light">{process.eyebrow}</SectionEyebrow>
            </div>
          ) : null}
          <h2 className="text-3xl lg:text-[40px] font-extrabold tracking-tight leading-[1.08] text-ink">
            {process.title}
          </h2>
          {process.description ? (
            <p className="mt-5 text-base text-ink/70 leading-relaxed">
              {process.description}
            </p>
          ) : null}
        </div>

        <ol className="relative max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10 lg:flex lg:items-start lg:gap-x-4 lg:gap-y-0">
          <span
            aria-hidden
            className="hidden lg:block absolute top-[19px] h-[2px] rounded-full bg-gradient-to-r from-accent/30 via-accent/50 to-accent/30"
            style={{ left: railInset, right: railInset }}
          />

          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <li
                key={step.title}
                className="group relative flex items-stretch gap-5 sm:gap-7 lg:flex-1 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
              >
                <div className="flex flex-col items-center shrink-0">
                  <span className="relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white font-extrabold text-[12px] tabular-nums shadow-[0_10px_22px_-8px_rgba(184,31,58,0.55)] ring-4 ring-white transition-transform duration-300 group-hover:scale-110">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {!isLast ? (
                    <span
                      aria-hidden
                      className="lg:hidden flex-1 w-px bg-gradient-to-b from-accent/40 to-transparent mt-2 min-h-[28px]"
                    />
                  ) : null}
                </div>

                <div className="pt-1 lg:pt-7 lg:px-4 lg:max-w-[220px] text-left lg:text-center">
                  <div className="text-[10.5px] tracking-[.22em] uppercase font-bold text-ink/45 mb-2">
                    Étape {i + 1}
                  </div>
                  <h3 className="text-[16px] lg:text-[17px] font-extrabold text-ink tracking-tight leading-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] text-ink/65 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
