"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { ServiceCard } from "@/components/ServiceCard";
import { HOME_SERVICES } from "@/data/services-home";

export function Services() {
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
    const step = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-ink overflow-hidden">
      <div className="pt-20 lg:pt-28 pb-20 lg:pb-28">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10 mb-12 lg:mb-16">
          <div className="flex items-start justify-between gap-6">
            <div>
              <SectionEyebrow index="02" tone="dark" className="mb-3">
                Nos services
              </SectionEyebrow>
              <h2 className="text-3xl lg:text-[38px] font-extrabold leading-[1.1] tracking-tight mb-3 text-white text-balance">
                Un accompagnement complet
              </h2>
              <p className="text-sm text-white/65 max-w-[600px]">
                De l&apos;estimation à la signature, nos experts vous accompagnent à
                chaque étape avec un suivi personnalisé, exigeant et tourné
                vers la qualité.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Précédent"
                disabled={atStart}
                className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-inset ring-white/20 flex items-center justify-center text-white shadow-lg hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Suivant"
                disabled={atEnd}
                className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-inset ring-white/20 flex items-center justify-center text-white shadow-lg hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            style={{
              paddingLeft: "max(1.5rem, calc((100vw - 1480px) / 2 + 2.5rem))",
              paddingRight: "1.5rem",
              scrollPaddingLeft: "max(1.5rem, calc((100vw - 1480px) / 2 + 2.5rem))",
            }}
            className="flex gap-6 overflow-x-auto pt-3 pb-4 -my-1 snap-x scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {HOME_SERVICES.map((s) => (
              <ServiceCard key={s.id} service={s} carousel />
            ))}
          </div>

          <div className="sm:hidden flex items-center justify-center gap-3 mt-8 px-6">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Précédent"
              disabled={atStart}
              className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-inset ring-white/20 flex items-center justify-center text-white shadow-lg hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Suivant"
              disabled={atEnd}
              className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-inset ring-white/20 flex items-center justify-center text-white shadow-lg hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-10">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-[14px] h-11 px-7 text-[11px] font-bold tracking-[.15em] uppercase text-white ring-2 ring-inset ring-white/40 hover:bg-white hover:text-accent hover:ring-white transition-colors"
            >
              Voir tous nos services
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
