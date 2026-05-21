"use client";

import { useState } from "react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import type { ServiceConfig } from "@/data/services";

type Props = { process: ServiceConfig["process"] };

export function ProcessTabbed({ process }: Props) {
  const steps = process.steps;
  const [active, setActive] = useState(0);
  const current = steps[active];

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

        <div className="max-w-[1100px] mx-auto">
          <div className="relative mb-10 lg:mb-12">
            <span
              aria-hidden
              className="absolute left-[6%] right-[6%] top-6 h-px bg-hairline"
            />
            <ul className="relative flex justify-between gap-2 sm:gap-4">
              {steps.map((step, i) => {
                const isActive = active === i;
                return (
                  <li key={step.title} className="flex-1">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      className="group w-full flex flex-col items-center gap-3 px-1 py-2 text-center transition-colors cursor-pointer"
                    >
                      <span
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-extrabold text-[13px] tracking-tight tabular-nums transition-all duration-300 ${
                          isActive
                            ? "bg-accent text-white shadow-[0_12px_28px_-12px_rgba(184,31,58,0.6)] ring-2 ring-white"
                            : "bg-white text-ink ring-1 ring-inset ring-ink/15 group-hover:ring-ink/40"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`hidden sm:block text-[10.5px] tracking-[.22em] uppercase font-bold transition-colors ${
                          isActive ? "text-accent" : "text-ink/55 group-hover:text-ink/80"
                        }`}
                      >
                        Étape {i + 1}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative bg-bg rounded-[20px] p-8 lg:p-14 ring-1 ring-inset ring-hairline">
            <div className="text-[10.5px] tracking-[.22em] uppercase font-bold text-accent mb-3">
              Étape {active + 1} sur {steps.length}
            </div>
            <h3 className="text-[24px] lg:text-[32px] font-extrabold text-ink tracking-tight leading-tight mb-4">
              {current.title}
            </h3>
            <p className="text-[15px] lg:text-[17px] text-ink/70 leading-relaxed max-w-[680px]">
              {current.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
