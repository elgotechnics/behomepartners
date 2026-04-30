"use client";

import { useState, type SelectHTMLAttributes } from "react";

type Mode = "acheter" | "louer";

const ChevronIcon = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/50"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

function SelectField({
  className = "",
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className={`relative ${className}`}>
      <select
        {...props}
        className="appearance-none w-full pl-4 pr-10 py-3 text-[13px] font-medium text-ink bg-transparent focus:outline-none cursor-pointer rounded-[10px] hover:bg-ink/[0.03] focus:bg-ink/[0.04] transition-colors"
      >
        {children}
      </select>
      {ChevronIcon}
    </div>
  );
}

export function SearchBar() {
  const [mode, setMode] = useState<Mode>("acheter");

  return (
    <div className="max-w-[520px]">
      <div className="relative inline-flex p-1 mb-3 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-inset ring-white/15">
        {(["acheter", "louer"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`relative px-5 py-1.5 text-[11px] font-bold tracking-[.18em] uppercase rounded-full transition-all duration-300 ${
              mode === m
                ? "bg-white text-ink ring-1 ring-inset ring-ink/10 shadow-[0_4px_14px_-4px_rgba(0,0,0,0.35)]"
                : "text-white/50 hover:text-white/85"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <form className="relative grid grid-cols-2 rounded-[16px] overflow-hidden bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] p-1.5 gap-1">
        <input
          type="text"
          placeholder="Commune ou code postal"
          aria-label="Commune ou code postal"
          className="px-4 py-3 text-[13px] font-medium text-ink placeholder:text-ink/50 bg-transparent rounded-[10px] hover:bg-ink/[0.03] focus:bg-ink/[0.04] focus:outline-none transition-colors"
          suppressHydrationWarning
        />
        <SelectField aria-label="Type de bien" defaultValue="">
          <option value="" disabled>
            Type de bien
          </option>
          <option value="maison">Maison</option>
          <option value="appartement">Appartement</option>
          <option value="terrain">Terrain</option>
        </SelectField>
        <SelectField aria-label="Nombre de chambres" defaultValue="">
          <option value="" disabled>
            Nombre de chambres
          </option>
          <option value="1">1 chambre</option>
          <option value="2">2 chambres</option>
          <option value="3">3 chambres</option>
          <option value="4">4 chambres</option>
          <option value="5+">5 chambres et +</option>
        </SelectField>
        <SelectField aria-label="Budget" defaultValue="">
          <option value="" disabled>
            Budget
          </option>
          <option value="200000">Jusqu&apos;à 200 000 €</option>
          <option value="400000">Jusqu&apos;à 400 000 €</option>
          <option value="600000">Jusqu&apos;à 600 000 €</option>
          <option value="1000000">Jusqu&apos;à 1 000 000 €</option>
        </SelectField>
        <button
          type="submit"
          className="col-span-2 mt-1 inline-flex items-center justify-center gap-2 bg-accent hover:bg-[#6f1029] text-white px-5 py-3 rounded-[10px] font-bold text-[12px] tracking-[.18em] uppercase transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          Rechercher
        </button>
      </form>
    </div>
  );
}
