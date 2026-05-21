"use client";

export type Bounds = { min: number; max: number; step: number };

export function DualRangeSlider({
  bounds,
  min,
  max,
  onChange,
  ariaLabelMin = "Minimum",
  ariaLabelMax = "Maximum",
}: {
  bounds: Bounds;
  min: number | null;
  max: number | null;
  onChange: (min: number | null, max: number | null) => void;
  ariaLabelMin?: string;
  ariaLabelMax?: string;
}) {
  const lo = min ?? bounds.min;
  const hi = max ?? bounds.max;
  const range = bounds.max - bounds.min;
  const loPct = range > 0 ? ((lo - bounds.min) / range) * 100 : 0;
  const hiPct = range > 0 ? ((hi - bounds.min) / range) * 100 : 100;
  const clamp = (v: number) => Math.min(bounds.max, Math.max(bounds.min, v));

  return (
    <div className="px-1 pt-1 pb-2">
      <div className="relative h-6 flex items-center">
        <div className="absolute left-0 right-0 h-1 rounded-full bg-hairline" />
        <div
          className="absolute h-1 rounded-full bg-accent"
          style={{ left: `${loPct}%`, right: `${100 - hiPct}%` }}
        />
        <input
          type="range"
          min={bounds.min}
          max={bounds.max}
          step={bounds.step}
          value={lo}
          onChange={(e) => {
            const v = clamp(Number(e.target.value));
            const nextLo = Math.min(v, hi);
            onChange(nextLo === bounds.min ? null : nextLo, max);
          }}
          aria-label={ariaLabelMin}
          className="range-thumb absolute inset-0 w-full bg-transparent appearance-none pointer-events-none"
        />
        <input
          type="range"
          min={bounds.min}
          max={bounds.max}
          step={bounds.step}
          value={hi}
          onChange={(e) => {
            const v = clamp(Number(e.target.value));
            const nextHi = Math.max(v, lo);
            onChange(min, nextHi === bounds.max ? null : nextHi);
          }}
          aria-label={ariaLabelMax}
          className="range-thumb absolute inset-0 w-full bg-transparent appearance-none pointer-events-none"
        />
      </div>
      <style jsx>{`
        .range-thumb {
          -webkit-appearance: none;
          appearance: none;
        }
        .range-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: #fff;
          border: 2px solid var(--color-accent, #9c1c2c);
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.18);
          cursor: pointer;
          pointer-events: auto;
        }
        .range-thumb::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: #fff;
          border: 2px solid var(--color-accent, #9c1c2c);
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.18);
          cursor: pointer;
          pointer-events: auto;
        }
        .range-thumb::-webkit-slider-runnable-track {
          background: transparent;
        }
        .range-thumb::-moz-range-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
}
