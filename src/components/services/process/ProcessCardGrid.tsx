import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import type { ServiceConfig } from "@/data/services";

type Props = { process: ServiceConfig["process"] };

export function ProcessCardGrid({ process }: Props) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-[1180px] mx-auto">
          {steps.map((step, i) => (
            <article
              key={step.title}
              className="group relative bg-white rounded-[18px] p-7 lg:p-8 ring-1 ring-inset ring-hairline transition-all duration-300 hover:-translate-y-1 hover:ring-ink/20 hover:shadow-[0_24px_50px_-22px_rgba(26,40,69,0.22)]"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-accent text-white font-extrabold text-[13px] tracking-tight tabular-nums shadow-[0_8px_22px_-10px_rgba(184,31,58,0.6)] transition-transform duration-300 group-hover:scale-105">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[10.5px] tracking-[.22em] uppercase font-bold text-ink/45">
                  Étape {i + 1}
                </span>
              </div>
              <h3 className="text-[18px] lg:text-[19px] font-extrabold text-ink tracking-tight leading-tight mb-2.5">
                {step.title}
              </h3>
              <p className="text-[14px] text-ink/65 leading-relaxed">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
