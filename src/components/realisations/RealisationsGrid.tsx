"use client";

import { useMemo, useState } from "react";
import {
  ChevronDown,
  Home as HomeIcon,
  MapPin,
  RotateCcw,
  Search,
} from "lucide-react";
import {
  REALISATION_PROPERTY_TYPES,
  realisations,
  type RealisationPropertyType,
  type RealisationStatus,
} from "@/data/realisations";
import { PropertyCardRealisation } from "./PropertyCardRealisation";

type StatusFilter = "all" | RealisationStatus;
type TypeFilter = "all" | RealisationPropertyType;
type CityFilter = "all" | string;

const STATUS_TABS: {
  value: StatusFilter;
  label: string;
}[] = [
  { value: "all", label: "Tous" },
  { value: "sold", label: "Vendus" },
  { value: "rented", label: "Loués" },
];

export function RealisationsGrid() {
  const [status, setStatus] = useState<StatusFilter>("all");
  const [type, setType] = useState<TypeFilter>("all");
  const [typeOpen, setTypeOpen] = useState(false);
  const [city, setCity] = useState<CityFilter>("all");
  const [cityOpen, setCityOpen] = useState(false);

  const cities = useMemo(
    () =>
      Array.from(new Set(realisations.map((r) => r.city))).sort((a, b) =>
        a.localeCompare(b, "fr"),
      ),
    [],
  );

  /** Comptage live par statut (toutes les autres filtres appliqués) */
  const statusCounts = useMemo(() => {
    const filterRest = (s: StatusFilter) =>
      realisations.filter((r) => {
        if (s !== "all" && r.status !== s) return false;
        if (type !== "all" && r.propertyType !== type) return false;
        if (city !== "all" && r.city !== city) return false;
        return true;
      }).length;
    return {
      all: filterRest("all"),
      sold: filterRest("sold"),
      rented: filterRest("rented"),
    };
  }, [type, city]);

  /** Comptage live par type */
  const typeCounts = useMemo(() => {
    const counts: Record<TypeFilter, number> = {
      all: 0,
      Maison: 0,
      Appartement: 0,
      Terrain: 0,
      Commerce: 0,
      Bureau: 0,
    };
    realisations.forEach((r) => {
      if (status !== "all" && r.status !== status) return;
      if (city !== "all" && r.city !== city) return;
      counts.all += 1;
      counts[r.propertyType] += 1;
    });
    return counts;
  }, [status, city]);

  const filtered = useMemo(() => {
    return realisations.filter((r) => {
      if (status !== "all" && r.status !== status) return false;
      if (type !== "all" && r.propertyType !== type) return false;
      if (city !== "all" && r.city !== city) return false;
      return true;
    });
  }, [status, type, city]);

  const hasActiveFilter = status !== "all" || type !== "all" || city !== "all";
  const cityLabel = city === "all" ? "Toutes les communes" : city;
  const typeLabel = type === "all" ? "Tous les types" : type;

  const resetAll = () => {
    setStatus("all");
    setType("all");
    setCity("all");
  };

  return (
    <div>
      {/* COMMAND BAR de filtres — deux blocs séparés */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Bloc gauche : statuts */}
        <div className="bg-white rounded-full shadow-[0_18px_40px_-28px_rgba(15,23,42,0.18)] p-1.5 lg:p-2 flex items-center gap-1.5 max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {STATUS_TABS.map((tab) => {
            const isActive = status === tab.value;
            const count = statusCounts[tab.value];
            return (
              <FilterPill
                key={tab.value}
                label={tab.label}
                count={count}
                active={isActive}
                onClick={() => setStatus(tab.value)}
              />
            );
          })}
        </div>

        {/* Bloc droite : reset + type + commune */}
        <div className="bg-white rounded-full shadow-[0_18px_40px_-28px_rgba(15,23,42,0.18)] p-1.5 lg:p-2 shrink-0 flex items-center gap-1">
          {hasActiveFilter && (
            <button
              type="button"
              onClick={resetAll}
              aria-label="Réinitialiser les filtres"
              title="Réinitialiser"
              className="inline-flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full text-ink/55 hover:text-accent hover:bg-accent/[0.06] transition-colors"
            >
              <RotateCcw size={14} strokeWidth={2.2} />
            </button>
          )}

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setTypeOpen((v) => !v);
                setCityOpen(false);
              }}
              aria-expanded={typeOpen}
              aria-haspopup="listbox"
              className={`inline-flex items-center gap-1.5 lg:gap-2 h-8 lg:h-10 pl-3 pr-2.5 lg:pl-3.5 lg:pr-3 rounded-full text-[12.5px] lg:text-[14px] font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${
                type !== "all"
                  ? "bg-ink text-white"
                  : "bg-bg text-ink hover:bg-ink/[0.06]"
              }`}
            >
              <HomeIcon
                size={13}
                strokeWidth={2}
                className={type !== "all" ? "text-white" : "text-accent"}
              />
              <span>{typeLabel}</span>
              <ChevronDown
                size={12}
                strokeWidth={2.4}
                className={`transition-transform ${typeOpen ? "rotate-180" : ""}`}
              />
            </button>
            {typeOpen && (
              <>
                <button
                  type="button"
                  aria-hidden
                  tabIndex={-1}
                  onClick={() => setTypeOpen(false)}
                  className="fixed inset-0 z-10 cursor-default"
                />
                <ul
                  role="listbox"
                  className="absolute z-20 top-[calc(100%+8px)] right-0 min-w-[220px] max-h-[300px] overflow-y-auto bg-white ring-1 ring-inset ring-hairline rounded-[14px] shadow-[0_24px_60px_-24px_rgba(15,23,42,0.25)] py-1.5"
                >
                  <DropdownOption
                    label="Tous les types"
                    selected={type === "all"}
                    onClick={() => {
                      setType("all");
                      setTypeOpen(false);
                    }}
                  />
                  <li aria-hidden className="my-1 mx-3 h-px bg-hairline" />
                  {REALISATION_PROPERTY_TYPES.map((t) => {
                    const count = typeCounts[t];
                    const disabled = count === 0 && type !== t;
                    return (
                      <DropdownOption
                        key={t}
                        label={t}
                        selected={type === t}
                        disabled={disabled}
                        onClick={() => {
                          if (disabled) return;
                          setType(t);
                          setTypeOpen(false);
                        }}
                      />
                    );
                  })}
                </ul>
              </>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setCityOpen((v) => !v);
                setTypeOpen(false);
              }}
              aria-expanded={cityOpen}
              aria-haspopup="listbox"
              className={`inline-flex items-center gap-1.5 lg:gap-2 h-8 lg:h-10 pl-3 pr-2.5 lg:pl-3.5 lg:pr-3 rounded-full text-[12.5px] lg:text-[14px] font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${
                city !== "all"
                  ? "bg-ink text-white"
                  : "bg-bg text-ink hover:bg-ink/[0.06]"
              }`}
            >
              <MapPin
                size={13}
                strokeWidth={2}
                className={city !== "all" ? "text-white" : "text-accent"}
              />
              <span>{cityLabel}</span>
              <ChevronDown
                size={12}
                strokeWidth={2.4}
                className={`transition-transform ${cityOpen ? "rotate-180" : ""}`}
              />
            </button>
            {cityOpen && (
              <>
                <button
                  type="button"
                  aria-hidden
                  tabIndex={-1}
                  onClick={() => setCityOpen(false)}
                  className="fixed inset-0 z-10 cursor-default"
                />
                <ul
                  role="listbox"
                  className="absolute z-20 top-[calc(100%+8px)] right-0 min-w-[240px] max-h-[300px] overflow-y-auto bg-white ring-1 ring-inset ring-hairline rounded-[14px] shadow-[0_24px_60px_-24px_rgba(15,23,42,0.25)] py-1.5"
                >
                  <DropdownOption
                    label="Toutes les communes"
                    selected={city === "all"}
                    onClick={() => {
                      setCity("all");
                      setCityOpen(false);
                    }}
                  />
                  <li aria-hidden className="my-1 mx-3 h-px bg-hairline" />
                  {cities.map((c) => (
                    <DropdownOption
                      key={c}
                      label={c}
                      selected={city === c}
                      onClick={() => {
                        setCity(c);
                        setCityOpen(false);
                      }}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Grille */}
      {filtered.length === 0 ? (
        <div className="mt-12 py-20 text-center">
          <div className="mx-auto w-14 h-14 grid place-items-center rounded-full bg-accent/10 text-accent mb-5">
            <Search size={22} strokeWidth={1.7} />
          </div>
          <h3 className="text-[18px] font-extrabold text-ink tracking-tight mb-2">
            Aucune réalisation ne correspond
          </h3>
          <p className="text-[14.5px] text-ink/65 max-w-[420px] mx-auto leading-relaxed">
            Essayez d&apos;élargir votre sélection pour découvrir d&apos;autres
            réalisations.
          </p>
          <button
            type="button"
            onClick={resetAll}
            className="mt-6 inline-flex items-center gap-2 h-11 px-6 rounded-full bg-ink text-white text-[12px] font-bold tracking-[.15em] uppercase hover:bg-ink-deep transition-colors"
          >
            <RotateCcw size={13} strokeWidth={2.4} />
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((item) => (
            <PropertyCardRealisation key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Sous-composants ─── */

function FilterPill({
  label,
  active,
  count,
  disabled,
  onClick,
}: {
  label: string;
  active: boolean;
  count: number;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      disabled={disabled}
      onClick={onClick}
      className={`shrink-0 inline-flex items-center gap-1.5 lg:gap-2 h-8 lg:h-10 px-3 lg:px-4 rounded-full text-[12px] lg:text-[14px] font-semibold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${
        active
          ? "bg-ink text-white"
          : disabled
            ? "text-ink/30 cursor-not-allowed"
            : "text-ink/70 hover:text-ink hover:bg-bg"
      }`}
    >
      <span>{label}</span>
      <span
        className={`inline-flex items-center justify-center min-w-[18px] h-[18px] lg:min-w-[20px] lg:h-[20px] px-1 rounded-full text-[10px] lg:text-[11px] font-bold tabular-nums transition-colors ${
          active
            ? "bg-white/20 text-white"
            : disabled
              ? "text-ink/30"
              : "bg-ink/[0.06] text-ink/60"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

function DropdownOption({
  label,
  selected,
  disabled,
  onClick,
}: {
  label: string;
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        role="option"
        aria-selected={selected}
        disabled={disabled}
        onClick={onClick}
        className={`w-full flex items-center justify-between gap-3 text-left px-4 py-2.5 text-[14px] transition-colors ${
          selected
            ? "bg-accent/10 text-accent font-bold"
            : disabled
              ? "text-ink/30 cursor-not-allowed"
              : "text-ink hover:bg-ink/[0.04]"
        }`}
      >
        <span>{label}</span>
        {selected && (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
      </button>
    </li>
  );
}
