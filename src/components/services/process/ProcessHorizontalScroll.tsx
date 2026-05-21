"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import type { ServiceConfig } from "@/data/services";

type Props = { process: ServiceConfig["process"] };

export function ProcessHorizontalScroll({ process }: Props) {
  const steps = process.steps;
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      setAtStart(track.scrollLeft <= 8);
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 8);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : 360;
    track.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-bg overflow-hidden">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-end mb-10 lg:mb-12">
          <div className="max-w-[640px]">
            {process.eyebrow ? (
              <SectionEyebrow tone="light">{process.eyebrow}</SectionEyebrow>
            ) : null}
            <h2 className="mt-5 text-3xl lg:text-[40px] font-extrabold tracking-tight leading-[1.08] text-ink">
              {process.title}
            </h2>
            {process.description ? (
              <p className="mt-5 text-base text-ink/70 leading-relaxed">
                {process.description}
              </p>
            ) : null}
          </div>

          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Précédent"
              disabled={atStart}
              className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white ring-1 ring-inset ring-hairline flex items-center justify-center text-ink shadow-sm hover:ring-ink/20 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft size={18} strokeWidth={2.2} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Suivant"
              disabled={atEnd}
              className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-ink text-white flex items-center justify-center shadow-md hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight size={18} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto pt-3 pb-4 -my-1 snap-x scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {steps.map((step, i) => (
            <article
              key={step.title}
              data-card
              className="group snap-start flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[340px] bg-white rounded-[18px] p-6 lg:p-7 ring-1 ring-inset ring-hairline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-22px_rgba(26,40,69,0.22)] hover:ring-ink/15"
            >
              <div className="flex items-baseline justify-between mb-5">
                <span className="font-extrabold text-[52px] leading-none tracking-tight text-ink/15 tabular-nums transition-colors duration-300 group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[10.5px] tracking-[.22em] uppercase font-bold text-ink/45">
                  Étape {i + 1}
                </span>
              </div>
              <h3 className="text-[18px] font-extrabold text-ink tracking-tight leading-tight mb-2.5">
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
