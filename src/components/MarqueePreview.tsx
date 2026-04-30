"use client";

import { useEffect, useRef, useState } from "react";

type Item = { stat: string; label: string };

const items: Item[] = [
  { stat: "15+", label: "Années d'expertise" },
  { stat: "92%", label: "Taux de satisfaction" },
  { stat: "+1000", label: "Biens vendus, loués" },
  { stat: "+579", label: "Témoignages" },
];

/* ---------------------------------------------------------------- */
/* Option 1 — Grille statique éditoriale sur fond ink                */
/* ---------------------------------------------------------------- */
export function MarqueeOptionEditorial() {
  return (
    <section className="bg-ink text-white">
      <div className="max-w-[1480px] mx-auto px-3 sm:px-4 py-14 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-white/10 lg:divide-y-0 lg:divide-x lg:divide-white/10">
          {items.map((it) => (
            <div
              key={it.label}
              className="px-6 py-8 lg:py-4 first:pl-0 last:pr-0 text-center lg:text-left"
            >
              <div className="text-[44px] lg:text-[56px] leading-none font-extrabold tracking-tight">
                {it.stat}
              </div>
              <div className="mt-3 text-[11px] tracking-[.22em] uppercase text-white/60 font-medium">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Option 2 — Count-up animé au scroll, fond ink                     */
/* ---------------------------------------------------------------- */
function CountUp({
  target,
  prefix = "",
  suffix = "",
  duration = 1600,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

export function MarqueeOptionCounters() {
  return (
    <section className="bg-ink text-white">
      <div className="max-w-[1480px] mx-auto px-3 sm:px-4 py-14 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0">
          <Counter prefix="" suffix="+" target={15} label="Années d'expertise" />
          <Counter prefix="" suffix="%" target={92} label="Taux de satisfaction" />
          <Counter prefix="+" suffix="" target={1000} label="Biens vendus, loués" />
          <Counter prefix="+" suffix="" target={579} label="Témoignages" />
        </div>
      </div>
    </section>
  );
}

function Counter({
  target,
  prefix,
  suffix,
  label,
}: {
  target: number;
  prefix: string;
  suffix: string;
  label: string;
}) {
  return (
    <div className="text-center px-4 relative">
      <div className="text-[52px] lg:text-[64px] leading-none font-extrabold tracking-tight">
        <CountUp target={target} prefix={prefix} suffix={suffix} />
      </div>
      <div className="mt-3 mx-auto h-px w-10 bg-white/40" />
      <div className="mt-3 text-[11px] tracking-[.22em] uppercase text-white/70 font-medium">
        {label}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Option 3 — Light premium (fond cream, serif, hairlines)           */
/* ---------------------------------------------------------------- */
export function MarqueeOptionLightPremium() {
  return (
    <section className="bg-cream text-ink">
      <div className="max-w-[1480px] mx-auto px-3 sm:px-4 py-16 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-hairline lg:divide-y-0 lg:divide-x">
          {items.map((it) => (
            <div
              key={it.label}
              className="px-6 py-8 lg:py-4 text-center"
            >
              <div className="text-[48px] lg:text-[60px] leading-none font-extrabold tracking-tight text-accent">
                {it.stat}
              </div>
              <div className="mt-4 text-[11px] tracking-[.22em] uppercase text-ink/60 font-semibold">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Option 4 — Bandeau bordeaux compact (alternative au noir)         */
/* ---------------------------------------------------------------- */
export function MarqueeOptionBordeauxBand() {
  return (
    <section className="bg-accent text-white">
      <div className="max-w-[1480px] mx-auto px-3 sm:px-4 py-10 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6">
          {items.map((it, i) => (
            <div
              key={it.label}
              className={`px-6 text-center lg:text-left ${
                i !== 0 ? "lg:border-l lg:border-white/20" : ""
              }`}
            >
              <div className="flex items-baseline gap-3 justify-center lg:justify-start">
                <span className="text-[40px] lg:text-[48px] leading-none font-extrabold tracking-tight">
                  {it.stat}
                </span>
              </div>
              <div className="mt-2 text-[11px] tracking-[.22em] uppercase text-white/85 font-semibold">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Option 5 — Asymétrique titre + 4 stats (style éditorial magazine) */
/* ---------------------------------------------------------------- */
export function MarqueeOptionAsymmetric() {
  return (
    <section className="bg-paper text-ink">
      <div className="max-w-[1480px] mx-auto px-3 sm:px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-4">
            <div className="text-[11px] tracking-[.22em] uppercase text-accent font-bold mb-3">
              Be Home Partners en chiffres
            </div>
            <h2 className="text-3xl lg:text-[40px] leading-[1.1] tracking-tight font-extrabold">
              Une expertise <span className="text-accent">éprouvée</span> par
              plus d'une décennie d'engagement.
            </h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-0 divide-x divide-hairline">
            {items.map((it) => (
              <div key={it.label} className="px-5 first:pl-0">
                <div className="text-[40px] lg:text-[48px] leading-none font-extrabold tracking-tight">
                  {it.stat}
                </div>
                <div className="mt-2 text-[11px] tracking-[.22em] uppercase text-ink/60 font-semibold">
                  {it.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Option 6 — Ticker très lent (compromis : garde un mvt subtil)     */
/* ---------------------------------------------------------------- */
export function MarqueeOptionSlowTicker() {
  const loop = [...items, ...items, ...items];
  return (
    <section className="bg-ink text-white overflow-hidden py-6 border-y border-white/10">
      <div
        className="flex whitespace-nowrap w-max animate-marquee"
        style={{ animationDuration: "80s" }}
      >
        {loop.map((it, i) => (
          <div
            key={i}
            className="flex items-baseline gap-4 px-10"
          >
            <span className="text-3xl font-extrabold tracking-tight">{it.stat}</span>
            <span className="text-[11px] tracking-[.22em] uppercase text-white/70 font-semibold">
              {it.label}
            </span>
            <span className="ml-6 text-white/30">—</span>
          </div>
        ))}
      </div>
    </section>
  );
}
