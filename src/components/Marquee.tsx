"use client";

import { useEffect, useRef, useState } from "react";

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

const stats = [
  { target: 15, prefix: "", suffix: "+", label: "Années d'expertise" },
  { target: 92, prefix: "", suffix: "%", label: "Taux de satisfaction" },
  { target: 1000, prefix: "+", suffix: "", label: "Biens vendus, loués" },
  { target: 90, prefix: "", suffix: "%", label: "Taux de vente" },
];

export function Marquee() {
  return (
    <section className="bg-ink text-white">
      <h2 className="sr-only">Be Home Partners en chiffres</h2>
      <div className="max-w-[1480px] mx-auto px-3 sm:px-4 py-7 lg:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 text-center ${
                i !== 0 ? "lg:border-l lg:border-white/20" : ""
              }`}
            >
              <div className="text-[30px] lg:text-[36px] leading-none font-extrabold tracking-tight">
                <CountUp
                  target={s.target}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </div>
              <div className="mt-2 text-[11px] tracking-[.2em] uppercase text-white/85 font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
