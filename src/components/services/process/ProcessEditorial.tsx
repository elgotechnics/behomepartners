import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import type { ServiceConfig } from "@/data/services";

type Props = { process: ServiceConfig["process"] };

export function ProcessEditorial({ process }: Props) {
  const steps = process.steps;

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

        <ol className="max-w-[920px] mx-auto">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="group grid grid-cols-[auto_1fr] gap-6 lg:gap-12 items-start py-8 lg:py-10 border-t border-hairline last:border-b"
            >
              <span className="font-extrabold text-[44px] lg:text-[68px] leading-none tracking-tight text-ink/15 tabular-nums transition-colors duration-300 group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-1 lg:pt-3">
                <div className="text-[10.5px] tracking-[.22em] uppercase font-bold text-accent mb-2.5">
                  Étape {i + 1}
                </div>
                <h3 className="text-[20px] lg:text-[26px] font-extrabold text-ink tracking-tight leading-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-[14.5px] lg:text-[15.5px] text-ink/70 leading-relaxed max-w-[640px]">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
