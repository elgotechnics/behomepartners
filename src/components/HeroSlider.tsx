"use client";

import { useState } from "react";
import { HeroDarkVariantA, HeroDarkVariantE, HeroDarkVariantF } from "./HeroDarkPreview";

const slides = [
  { id: "variant-1", label: "Variante 1", render: () => <HeroDarkVariantA /> },
  { id: "variant-2", label: "Variante 2", render: () => <HeroDarkVariantE /> },
  { id: "variant-3", label: "Variante 3", render: () => <HeroDarkVariantF /> },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="relative">
      {slides[index].render()}

      <button
        type="button"
        onClick={prev}
        aria-label="Précédent"
        className="absolute left-3 lg:left-5 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md ring-1 ring-inset ring-white/20 text-white transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Suivant"
        className="absolute right-3 lg:right-5 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md ring-1 ring-inset ring-white/20 text-white transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      <div className="absolute bottom-5 lg:bottom-8 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-inset ring-white/15">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Aller à ${s.label}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-accent" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
