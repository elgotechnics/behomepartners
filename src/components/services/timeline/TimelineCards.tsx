import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import type { ServiceConfig } from "@/data/services";

type Props = { process: ServiceConfig["process"] };

export function TimelineCards({ process }: Props) {
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

        <ol className="max-w-[860px] mx-auto">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <li key={step.title} className="relative">
                <article className="group relative bg-white rounded-[18px] p-7 lg:p-8 pl-20 lg:pl-24 ring-1 ring-inset ring-hairline transition-all duration-300 hover:ring-ink/20 hover:shadow-[0_24px_50px_-22px_rgba(26,40,69,0.18)]">
                  <span className="absolute left-6 lg:left-8 top-7 lg:top-8 inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white font-extrabold text-[13px] tracking-tight tabular-nums shadow-[0_10px_24px_-10px_rgba(184,31,58,0.6)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="text-[10.5px] tracking-[.22em] uppercase font-bold text-ink/45 mb-2">
                    Étape {i + 1}
                  </div>
                  <h3 className="text-[18px] lg:text-[20px] font-extrabold text-ink tracking-tight leading-tight mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-[14px] lg:text-[14.5px] text-ink/65 leading-relaxed">
                    {step.body}
                  </p>
                </article>
                {!isLast ? (
                  <div
                    aria-hidden
                    className="flex justify-start pl-[44px] lg:pl-[52px] py-2"
                  >
                    <div className="flex flex-col items-center gap-[5px]">
                      <span className="block w-[5px] h-[5px] rounded-full bg-accent/40" />
                      <span className="block w-[5px] h-[5px] rounded-full bg-accent/55" />
                      <span className="block w-[5px] h-[5px] rounded-full bg-accent/70" />
                    </div>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
