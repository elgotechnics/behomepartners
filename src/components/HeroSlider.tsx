"use client";

import { useEffect, useState } from "react";
import { HeroDarkVariantA, HeroDarkVariantE, HeroDarkVariantF } from "./HeroDarkPreview";

const slides = [
  { id: "variant-1", label: "Variante 1", render: () => <HeroDarkVariantA /> },
  { id: "variant-2", label: "Variante 2", render: () => <HeroDarkVariantF /> },
  { id: "variant-3", label: "Variante 3", render: () => <HeroDarkVariantE /> },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("hero-variant", { detail: { index } }));
  }, [index]);

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

    </div>
  );
}
