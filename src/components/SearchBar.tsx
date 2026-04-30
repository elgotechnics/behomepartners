"use client";

import { useState, type SelectHTMLAttributes } from "react";

type Mode = "acheter" | "louer";

const ChevronIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-ink/60"
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
        className="appearance-none w-full pl-5 pr-12 py-4 text-sm font-semibold text-ink bg-transparent focus:outline-none focus:bg-cream cursor-pointer"
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
    <div className="max-w-[440px]">
      <div className="relative inline-flex p-1 mb-3 rounded-[14px] bg-white border border-grid shadow-sm overflow-hidden">
        {(["acheter", "louer"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`relative px-5 py-2 text-xs font-bold tracking-[.15em] uppercase rounded-[12px] transition-all duration-300 ${
              mode === m
                ? "bg-ink text-white shadow-[0_4px_16px_-4px_rgba(15,23,42,0.35)]"
                : "text-ink/70 hover:text-ink"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <form className="relative grid grid-cols-2 rounded-[14px] overflow-hidden bg-white border border-grid shadow-sm">
        <input
          type="text"
          placeholder="Commune ou code postal"
          aria-label="Commune ou code postal"
          className="px-5 py-4 text-sm font-semibold text-ink placeholder:text-ink/40 border-b border-r border-grid focus:outline-none focus:bg-cream"
          suppressHydrationWarning
        />
        <SelectField
          aria-label="Type de bien"
          defaultValue=""
          className="border-b border-grid"
        >
          <option value="" disabled>
            Type de bien
          </option>
          <option value="maison">Maison</option>
          <option value="appartement">Appartement</option>
          <option value="terrain">Terrain</option>
        </SelectField>
        <SelectField
          aria-label="Nombre de chambres"
          defaultValue=""
          className="border-b border-r border-grid"
        >
          <option value="" disabled>
            Nombre de chambres
          </option>
          <option value="1">1 chambre</option>
          <option value="2">2 chambres</option>
          <option value="3">3 chambres</option>
          <option value="4">4 chambres</option>
          <option value="5+">5 chambres et +</option>
        </SelectField>
        <SelectField
          aria-label="Budget"
          defaultValue=""
          className="border-b border-grid"
        >
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
          className="col-span-2 bg-accent text-white px-5 py-4 font-bold text-sm tracking-[.1em] uppercase text-center hover:opacity-90 transition-opacity"
        >
          Rechercher →
        </button>
      </form>
    </div>
  );
}
