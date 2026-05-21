import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import type { ServiceConfig } from "@/data/services";

type Props = {
  process: ServiceConfig["process"];
};

export function ServiceProcess({ process }: Props) {
  const steps = process.steps;

  return (
    <section className="bg-white">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr] xl:grid-cols-[minmax(0,480px)_1fr] gap-12 lg:gap-16 xl:gap-20 lg:items-start">
          <div className="text-center lg:text-left max-w-[720px] mx-auto lg:mx-0 lg:sticky lg:top-28 lg:self-start">
            {process.eyebrow ? (
              <div className="flex justify-center lg:justify-start mb-4">
                <SectionEyebrow tone="light">{process.eyebrow}</SectionEyebrow>
              </div>
            ) : null}
            <h2 className="text-3xl lg:text-[40px] font-extrabold tracking-tight leading-[1.08] text-ink text-balance">
              {process.title}
            </h2>
            {process.description ? (
              <p className="mt-5 text-base text-ink/70 leading-relaxed lg:max-w-[420px]">
                {process.description}
              </p>
            ) : null}
          </div>

          <ol className="max-w-[820px] mx-auto lg:mx-0 lg:max-w-none w-full">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1;
              return (
                <li
                  key={step.title}
                  className="group relative pl-14 pb-10 last:pb-0"
                >
                  {!isLast ? (
                    <span
                      aria-hidden
                      className="absolute left-[19px] top-[22px] -bottom-[14px] w-px bg-gradient-to-b from-ink/15 via-ink/10 to-ink/15"
                    />
                  ) : null}
                  <span
                    aria-hidden
                    className="absolute left-[12px] top-[6px] z-10 grid place-items-center w-4 h-4 rounded-full bg-white ring-2 ring-accent transition-all duration-300 group-hover:bg-accent"
                  >
                    <span className="block w-1 h-1 rounded-full bg-accent group-hover:bg-white transition-colors" />
                  </span>
                  <div className="text-[10.5px] tracking-[.22em] uppercase font-bold text-accent mb-2 tabular-nums">
                    Étape {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-[18px] lg:text-[20px] font-extrabold text-ink tracking-tight leading-tight mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-[14.5px] lg:text-[15px] text-ink/70 leading-relaxed max-w-[620px]">
                    {step.body}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
