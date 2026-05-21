"use client";

import { useEffect, useRef, useState } from "react";
import { listings } from "@/data/listings";
import { CTAButton } from "@/components/ui/cta-button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { PropertyCard } from "@/components/listings/PropertyCard";

type Tab = "vente" | "location";

export function Listings() {
  const [tab, setTab] = useState<Tab>("vente");
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);

  const visible = listings;

  const scroll = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  const goToPage = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>("[data-card]");
    const card = cards[i];
    const first = cards[0];
    if (!card || !first) return;
    track.scrollTo({ left: card.offsetLeft - first.offsetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const cards = track.querySelectorAll<HTMLElement>("[data-card]");
      if (!cards.length) return;
      const cardW = cards[0].offsetWidth + 24;
      const visibleCount = Math.max(1, Math.round(track.clientWidth / cardW));
      const total = Math.max(1, cards.length - visibleCount + 1);
      setPageCount(total);
      const origin = cards[0].offsetLeft;
      let nearest = 0;
      let minDist = Infinity;
      cards.forEach((c, i) => {
        const dist = Math.abs(c.offsetLeft - origin - track.scrollLeft);
        if (dist < minDist) {
          minDist = dist;
          nearest = i;
        }
      });
      setPage(Math.min(nearest, total - 1));
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(track);
    return () => {
      track.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [visible.length]);

  return (
    <section id="listings" className="bg-bg">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end mb-8">
          <div>
            <SectionEyebrow index="01" tone="light" className="mb-3">
              Notre sélection
            </SectionEyebrow>
            <h2 className="text-3xl lg:text-[38px] font-extrabold leading-[1.1] tracking-tight mb-3">
              Nos biens du moment
            </h2>
            <p className="text-muted text-[15px] max-w-[520px]">
              Une sélection de biens soigneusement choisis pour vous accompagner
              dans votre projet immobilier.
            </p>
          </div>

          <div className="relative inline-flex justify-self-center lg:justify-self-start p-1.5 rounded-[14px] bg-black/[0.07] ring-1 ring-inset ring-black/10">
            {(["vente", "location"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`relative px-7 py-2.5 text-[13px] font-bold tracking-[.2em] uppercase rounded-[12px] transition-all duration-300 ${
                  tab === t
                    ? "bg-white text-ink shadow-[0_4px_16px_-4px_rgba(13,15,42,0.12)]"
                    : "text-ink/55 hover:text-ink"
                }`}
              >
                {t === "vente" ? "Acheter" : "Louer"}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Précédent"
            className="flex absolute left-3 lg:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full lg:rounded-[14px] bg-ink/85 lg:bg-white backdrop-blur-md ring-1 ring-inset ring-white/15 lg:ring-0 lg:border lg:border-hairline items-center justify-center text-white lg:text-muted shadow-lg lg:shadow-md z-10 hover:bg-ink lg:hover:bg-white lg:hover:text-ink transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Suivant"
            className="flex absolute right-3 lg:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full lg:rounded-[14px] bg-ink/85 lg:bg-ink backdrop-blur-md ring-1 ring-inset ring-white/15 lg:ring-0 items-center justify-center text-white shadow-lg z-10 hover:bg-ink hover:opacity-100 lg:hover:opacity-90 transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto pt-3 pb-8 -my-1 px-1 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {visible.map((l) => (
              <PropertyCard key={l.id} listing={l} mode={tab} layout="carousel" />
            ))}
          </div>
        </div>

        <div className="px-6 md:px-12 pt-2 md:pt-6 pb-9 text-center relative overflow-hidden">
          <p className="text-[17px] text-ink max-w-[620px] mx-auto mb-6 leading-relaxed">
            Découvrez tous nos biens à vendre et à louer en Brabant wallon et
            ses environs.
          </p>

          <div className="flex gap-4 justify-center flex-wrap relative">
            <CTAButton href="/a-vendre" variant="primary">
              Biens à vendre
            </CTAButton>
            <CTAButton href="/a-louer" variant="outline">
              Biens à louer
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
