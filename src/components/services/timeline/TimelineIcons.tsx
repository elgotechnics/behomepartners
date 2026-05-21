import type { ReactNode } from "react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import type { ServiceConfig } from "@/data/services";

type Props = {
  process: ServiceConfig["process"];
  icons: ReactNode[];
};

export function TimelineIcons({ process, icons }: Props) {
  const steps = process.steps;

  return (
    <section className="bg-bg">
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

        <ol className="max-w-[820px] mx-auto">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <li
                key={step.title}
                className="group flex items-stretch gap-5 sm:gap-7"
              >
                <div className="flex flex-col items-center shrink-0">
                  <span className="relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-[14px] bg-accent text-white shadow-[0_14px_30px_-12px_rgba(184,31,58,0.55)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                    {icons[i % icons.length]}
                  </span>
                  {!isLast ? (
                    <span
                      aria-hidden
                      className="flex-1 w-px bg-gradient-to-b from-accent/40 via-accent/15 to-ink/10 mt-3 min-h-[24px]"
                    />
                  ) : null}
                </div>
                <div
                  className={`pt-1.5 ${isLast ? "pb-0" : "pb-10 lg:pb-12"} max-w-[640px]`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10.5px] tracking-[.22em] uppercase font-bold text-accent tabular-nums">
                      Étape {String(i + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden className="h-px w-8 bg-accent/30" />
                  </div>
                  <h3 className="text-[18px] lg:text-[20px] font-extrabold text-ink tracking-tight leading-tight mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-[14.5px] lg:text-[15px] text-ink/70 leading-relaxed">
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
