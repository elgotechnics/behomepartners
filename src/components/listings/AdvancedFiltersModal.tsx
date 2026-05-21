"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { DualRangeSlider, type Bounds } from "./DualRangeSlider";
import {
  CONDITION_LABELS,
  FACADE_OPTIONS,
  OCCUPANCY_LABELS,
  ORIENTATION_OPTIONS,
  PEB_RATINGS,
  RELIEF_LABELS,
  type Filters,
} from "./filters";
import {
  pebColors,
  type Occupancy,
  type Orientation,
  type PebRating,
  type PropertyCondition,
  type Relief,
} from "@/data/listings";
import type { AdvancedSection, FilterConfig } from "./filterConfig";

export function AdvancedFiltersModal({
  open,
  onClose,
  filters,
  onFiltersChange,
  resultCount,
  config,
  mode,
}: {
  open: boolean;
  onClose: () => void;
  filters: Filters;
  onFiltersChange: (f: Filters) => void;
  resultCount: number;
  config: FilterConfig;
  mode: "vente" | "location";
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  const togglePeb = (p: PebRating) => {
    if (filters.peb.includes(p))
      onFiltersChange({ ...filters, peb: filters.peb.filter((x) => x !== p) });
    else onFiltersChange({ ...filters, peb: [...filters.peb, p] });
  };

  const toggleFeature = (label: string) => {
    if (filters.features.includes(label))
      onFiltersChange({
        ...filters,
        features: filters.features.filter((x) => x !== label),
      });
    else
      onFiltersChange({ ...filters, features: [...filters.features, label] });
  };

  const toggleFacade = (n: number) => {
    if (filters.facades.includes(n))
      onFiltersChange({
        ...filters,
        facades: filters.facades.filter((x) => x !== n),
      });
    else onFiltersChange({ ...filters, facades: [...filters.facades, n] });
  };

  const toggleCondition = (c: PropertyCondition) => {
    if (filters.conditions.includes(c))
      onFiltersChange({
        ...filters,
        conditions: filters.conditions.filter((x) => x !== c),
      });
    else
      onFiltersChange({ ...filters, conditions: [...filters.conditions, c] });
  };

  const toggleOrientation = (o: Orientation) => {
    if (filters.orientations.includes(o))
      onFiltersChange({
        ...filters,
        orientations: filters.orientations.filter((x) => x !== o),
      });
    else
      onFiltersChange({
        ...filters,
        orientations: [...filters.orientations, o],
      });
  };

  const toggleRelief = (r: Relief) => {
    if (filters.reliefs.includes(r))
      onFiltersChange({
        ...filters,
        reliefs: filters.reliefs.filter((x) => x !== r),
      });
    else onFiltersChange({ ...filters, reliefs: [...filters.reliefs, r] });
  };

  const toggleOccupancy = (o: Occupancy) => {
    if (filters.occupancies.includes(o))
      onFiltersChange({
        ...filters,
        occupancies: filters.occupancies.filter((x) => x !== o),
      });
    else
      onFiltersChange({
        ...filters,
        occupancies: [...filters.occupancies, o],
      });
  };

  const reset = () =>
    onFiltersChange({
      ...filters,
      surfaceMin: null,
      surfaceMax: null,
      landSurfaceMin: null,
      landSurfaceMax: null,
      floorMin: null,
      floorMax: null,
      unitsMin: null,
      unitsMax: null,
      facades: [],
      conditions: [],
      chargesMax: null,
      furnished: null,
      availableImmediately: null,
      ceilingHeightMin: null,
      electricalPowerMin: null,
      rentalIncomeMin: null,
      grossYieldMin: null,
      cadastralIncomeMax: null,
      frontageMin: null,
      frontageMax: null,
      depthMin: null,
      depthMax: null,
      orientations: [],
      reliefs: [],
      occupancies: [],
      peb: [],
      features: [],
    });

  const has = (key: AdvancedSection) => config.advanced.includes(key);
  const surfaceTitle = config.surfaceLabel ?? "Surface habitable";

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Filtres avancés"
      className="fixed inset-0 z-50 flex justify-end"
    >
      <button
        type="button"
        aria-label="Fermer"
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm animate-[fade-in_180ms_ease-out]"
      />
      <div className="relative w-full max-w-[480px] h-screen bg-white shadow-[0_40px_80px_-20px_rgba(15,23,42,0.35)] flex flex-col animate-[slide-in-right_240ms_cubic-bezier(0.16,1,0.3,1)]">
        <header className="flex items-center justify-between px-6 py-4 border-b border-hairline">
          <div>
            <h2 className="text-[17px] font-extrabold text-ink tracking-tight">
              Filtres avancés
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="grid place-items-center w-9 h-9 rounded-full bg-bg hover:bg-ink/[0.07] transition-colors text-ink"
          >
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
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </header>

        <div className="overflow-y-auto px-6 py-6 space-y-8">
          {(has("surface") ||
            has("landSurface") ||
            has("frontage") ||
            has("depth")) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
                  {has("surface") && (
                    <RangeSection
                      title={surfaceTitle}
                      unit="m²"
                      min={filters.surfaceMin}
                      max={filters.surfaceMax}
                      onChange={(surfaceMin, surfaceMax) =>
                        onFiltersChange({ ...filters, surfaceMin, surfaceMax })
                      }
                      bounds={{ min: 0, max: 500, step: 5 }}
                    />
                  )}
                  {has("landSurface") && (
                    <RangeSection
                      title="Surface du terrain"
                      unit="m²"
                      min={filters.landSurfaceMin}
                      max={filters.landSurfaceMax}
                      onChange={(landSurfaceMin, landSurfaceMax) =>
                        onFiltersChange({
                          ...filters,
                          landSurfaceMin,
                          landSurfaceMax,
                        })
                      }
                      bounds={{ min: 0, max: 5000, step: 50 }}
                    />
                  )}
                  {has("frontage") && (
                    <RangeSection
                      title="Largeur de façade"
                      unit="m"
                      min={filters.frontageMin}
                      max={filters.frontageMax}
                      onChange={(frontageMin, frontageMax) =>
                        onFiltersChange({
                          ...filters,
                          frontageMin,
                          frontageMax,
                        })
                      }
                      bounds={{ min: 0, max: 50, step: 1 }}
                    />
                  )}
                  {has("depth") && (
                    <RangeSection
                      title="Profondeur"
                      unit="m"
                      min={filters.depthMin}
                      max={filters.depthMax}
                      onChange={(depthMin, depthMax) =>
                        onFiltersChange({ ...filters, depthMin, depthMax })
                      }
                      bounds={{ min: 0, max: 100, step: 1 }}
                    />
                  )}
            </div>
          )}

          {(has("floor") || has("units")) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
              {has("floor") && (
                <SelectRangeSection
                  title="Étage"
                  min={filters.floorMin}
                  max={filters.floorMax}
                  onChange={(floorMin, floorMax) =>
                    onFiltersChange({ ...filters, floorMin, floorMax })
                  }
                  bounds={{ min: 0, max: 20, step: 1 }}
                />
              )}
              {has("units") && (
                <SelectRangeSection
                  title="Nombre d'unités"
                  min={filters.unitsMin}
                  max={filters.unitsMax}
                  onChange={(unitsMin, unitsMax) =>
                    onFiltersChange({ ...filters, unitsMin, unitsMax })
                  }
                  bounds={{ min: 1, max: 50, step: 1 }}
                />
              )}
            </div>
          )}

          {(has("ceilingHeight") ||
            has("electricalPower") ||
            has("rentalIncome") ||
            has("grossYield") ||
            has("cadastralIncome") ||
            has("charges")) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
              {has("ceilingHeight") && (
                <MinOnlySection
                  title="Hauteur sous plafond"
                  unit="m"
                  value={filters.ceilingHeightMin}
                  onChange={(ceilingHeightMin) =>
                    onFiltersChange({ ...filters, ceilingHeightMin })
                  }
                />
              )}
              {has("electricalPower") && (
                <MinOnlySection
                  title="Puissance électrique"
                  unit="kW"
                  value={filters.electricalPowerMin}
                  onChange={(electricalPowerMin) =>
                    onFiltersChange({ ...filters, electricalPowerMin })
                  }
                />
              )}
              {has("rentalIncome") && (
                <MinOnlySection
                  title="Revenu locatif min."
                  unit="€/mois"
                  value={filters.rentalIncomeMin}
                  onChange={(rentalIncomeMin) =>
                    onFiltersChange({ ...filters, rentalIncomeMin })
                  }
                />
              )}
              {has("grossYield") && (
                <MinOnlySection
                  title="Rendement brut min."
                  unit="%"
                  value={filters.grossYieldMin}
                  onChange={(grossYieldMin) =>
                    onFiltersChange({ ...filters, grossYieldMin })
                  }
                />
              )}
              {has("cadastralIncome") && (
                <MaxOnlySection
                  title="Revenu cadastral max"
                  unit="€"
                  value={filters.cadastralIncomeMax}
                  onChange={(cadastralIncomeMax) =>
                    onFiltersChange({ ...filters, cadastralIncomeMax })
                  }
                />
              )}
              {has("charges") && (
                <MaxOnlySection
                  title={
                    mode === "location" ? "Charges max (€/mois)" : "Charges max"
                  }
                  unit="€"
                  value={filters.chargesMax}
                  onChange={(chargesMax) =>
                    onFiltersChange({ ...filters, chargesMax })
                  }
                />
              )}
            </div>
          )}

          {has("occupancy") && (
            <section>
              <SectionTitle>Occupation</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(OCCUPANCY_LABELS) as Occupancy[]).map((o) => (
                  <Chip
                    key={o}
                    label={OCCUPANCY_LABELS[o]}
                    selected={filters.occupancies.includes(o)}
                    onClick={() => toggleOccupancy(o)}
                  />
                ))}
              </div>
            </section>
          )}

          {has("orientation") && (
            <section>
              <SectionTitle>Orientation</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {ORIENTATION_OPTIONS.map((o) => (
                  <Chip
                    key={o}
                    label={o}
                    selected={filters.orientations.includes(o)}
                    onClick={() => toggleOrientation(o)}
                  />
                ))}
              </div>
            </section>
          )}

          {has("relief") && (
            <section>
              <SectionTitle>Relief</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(RELIEF_LABELS) as Relief[]).map((r) => (
                  <Chip
                    key={r}
                    label={RELIEF_LABELS[r]}
                    selected={filters.reliefs.includes(r)}
                    onClick={() => toggleRelief(r)}
                  />
                ))}
              </div>
            </section>
          )}

          {has("facades") && (
            <section>
              <SectionTitle>Nombre de façades</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {FACADE_OPTIONS.map((n) => (
                  <Chip
                    key={n}
                    label={`${n} façades`}
                    selected={filters.facades.includes(n)}
                    onClick={() => toggleFacade(n)}
                  />
                ))}
              </div>
            </section>
          )}

          {has("condition") && (
            <section>
              <SectionTitle>État du bien</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(CONDITION_LABELS) as PropertyCondition[]).map(
                  (c) => (
                    <Chip
                      key={c}
                      label={CONDITION_LABELS[c]}
                      selected={filters.conditions.includes(c)}
                      onClick={() => toggleCondition(c)}
                    />
                  ),
                )}
              </div>
            </section>
          )}

          {has("availability") && (
            <section>
              <SectionTitle>Disponibilité</SectionTitle>
              <div className="flex flex-wrap gap-2">
                <Chip
                  label="Disponible immédiatement"
                  selected={filters.availableImmediately === true}
                  onClick={() =>
                    onFiltersChange({
                      ...filters,
                      availableImmediately:
                        filters.availableImmediately === true ? null : true,
                    })
                  }
                />
              </div>
            </section>
          )}


          {has("furnished") && mode === "location" && (
            <section>
              <SectionTitle>Meublé</SectionTitle>
              <div className="flex flex-wrap gap-2">
                <Chip
                  label="Indifférent"
                  selected={filters.furnished == null}
                  onClick={() =>
                    onFiltersChange({ ...filters, furnished: null })
                  }
                />
                <Chip
                  label="Meublé"
                  selected={filters.furnished === true}
                  onClick={() =>
                    onFiltersChange({ ...filters, furnished: true })
                  }
                />
                <Chip
                  label="Non meublé"
                  selected={filters.furnished === false}
                  onClick={() =>
                    onFiltersChange({ ...filters, furnished: false })
                  }
                />
              </div>
            </section>
          )}

          {has("peb") && (
            <section>
              <SectionTitle>Performance énergétique (PEB)</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {PEB_RATINGS.map((p) => {
                  const selected = filters.peb.includes(p);
                  return (
                    <button
                      key={p}
                      type="button"
                      onClick={() => togglePeb(p)}
                      aria-pressed={selected}
                      className={`relative inline-flex items-center justify-center w-11 h-11 rounded-[10px] text-[14px] font-extrabold tracking-tight text-white transition-all ${
                        selected
                          ? "scale-105 shadow-[0_6px_16px_-4px_rgba(15,23,42,0.35)] ring-2 ring-ink ring-offset-2"
                          : "opacity-70 hover:opacity-100"
                      }`}
                      style={{ backgroundColor: pebColors[p] }}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>
            </section>
          )}

          {has("features") && config.features.length > 0 && (
            <section>
              <SectionTitle>Caractéristiques</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {config.features.map((f) => {
                  const selected = filters.features.includes(f.label);
                  return (
                    <button
                      key={f.key}
                      type="button"
                      onClick={() => toggleFeature(f.label)}
                      className={`inline-flex items-center gap-2 h-10 px-4 rounded-full text-[13px] font-semibold transition-all ${
                        selected
                          ? "bg-ink text-white"
                          : "bg-bg text-ink ring-1 ring-inset ring-hairline hover:ring-ink/30"
                      }`}
                    >
                      {selected && (
                        <svg
                          width="13"
                          height="13"
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
                      {f.label}
                    </button>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        <footer className="flex items-center justify-between gap-3 px-6 py-4 border-t border-hairline">
          <button
            type="button"
            onClick={reset}
            className="text-[12.5px] font-bold tracking-[.18em] uppercase text-ink/55 hover:text-accent transition-colors"
          >
            Réinitialiser
          </button>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center h-11 px-6 rounded-full bg-ink text-white text-[13px] font-bold tracking-[.15em] uppercase hover:opacity-90 transition-opacity"
          >
            Voir {resultCount} bien{resultCount > 1 ? "s" : ""}
          </button>
        </footer>
      </div>
    </div>,
    document.body,
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[11px] font-bold tracking-[.18em] uppercase text-ink mb-3">
      {children}
    </h3>
  );
}

function RangeSection({
  title,
  unit,
  min,
  max,
  onChange,
  bounds,
}: {
  title: string;
  unit: string;
  min: number | null;
  max: number | null;
  onChange: (min: number | null, max: number | null) => void;
  bounds?: Bounds;
}) {
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      {bounds && (
        <DualRangeSlider
          bounds={bounds}
          min={min}
          max={max}
          onChange={onChange}
          ariaLabelMin={`${title} minimum`}
          ariaLabelMax={`${title} maximum`}
        />
      )}
      <div className="grid grid-cols-2 gap-3">
        <NumericField
          label="Min"
          value={min}
          unit={unit}
          onChange={(v) => onChange(v, max)}
        />
        <NumericField
          label="Max"
          value={max}
          unit={unit}
          onChange={(v) => onChange(min, v)}
        />
      </div>
    </section>
  );
}

function MinOnlySection({
  title,
  unit,
  value,
  onChange,
}: {
  title: string;
  unit: string;
  value: number | null;
  onChange: (v: number | null) => void;
}) {
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <NumericField label="Min" value={value} unit={unit} onChange={onChange} />
    </section>
  );
}

function MaxOnlySection({
  title,
  unit,
  value,
  onChange,
}: {
  title: string;
  unit: string;
  value: number | null;
  onChange: (v: number | null) => void;
}) {
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <NumericField label="Max" value={value} unit={unit} onChange={onChange} />
    </section>
  );
}

function SelectRangeSection({
  title,
  min,
  max,
  onChange,
  bounds,
  unit = "",
}: {
  title: string;
  min: number | null;
  max: number | null;
  onChange: (min: number | null, max: number | null) => void;
  bounds: Bounds;
  unit?: string;
}) {
  const options: number[] = [];
  for (let v = bounds.min; v <= bounds.max; v += bounds.step) options.push(v);
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <div className="grid grid-cols-2 gap-3">
        <SelectField
          label="Min"
          value={min}
          options={options}
          unit={unit}
          onChange={(v) => onChange(v, max)}
        />
        <SelectField
          label="Max"
          value={max}
          options={options}
          unit={unit}
          onChange={(v) => onChange(min, v)}
        />
      </div>
    </section>
  );
}

function SelectField({
  label,
  value,
  options,
  unit,
  onChange,
}: {
  label: string;
  value: number | null;
  options: number[];
  unit: string;
  onChange: (v: number | null) => void;
}) {
  return (
    <label className="block">
      <span className="block text-[10.5px] font-bold tracking-[.18em] uppercase text-ink/75 mb-1.5">
        {label}
      </span>
      <div className="relative">
        <select
          value={value == null ? "" : value}
          onChange={(e) => {
            const v = e.target.value;
            onChange(v === "" ? null : Number(v));
          }}
          className="w-full h-11 pl-3 pr-9 text-[14px] rounded-md bg-bg ring-1 ring-inset ring-hairline focus:ring-ink/40 focus:bg-white outline-none transition-all tabular-nums appearance-none cursor-pointer"
        >
          <option value="">—</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o.toLocaleString("fr-BE")}
              {unit ? ` ${unit}` : ""}
            </option>
          ))}
        </select>
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/50 pointer-events-none"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </label>
  );
}

function NumericField({
  label,
  value,
  unit,
  onChange,
}: {
  label: string;
  value: number | null;
  unit: string;
  onChange: (v: number | null) => void;
}) {
  return (
    <label className="block">
      <span className="block text-[10.5px] font-bold tracking-[.18em] uppercase text-ink/75 mb-1.5">
        {label}
      </span>
      <div className="relative">
        <input
          type="text"
          inputMode="numeric"
          value={value == null ? "" : value.toLocaleString("fr-BE")}
          onChange={(e) => {
            const raw = e.target.value.replace(/[^\d]/g, "");
            onChange(raw === "" ? null : Number(raw));
          }}
          placeholder="—"
          className="w-full h-11 px-3 pr-12 text-[14px] rounded-md bg-bg ring-1 ring-inset ring-hairline focus:ring-ink/40 focus:bg-white outline-none transition-all tabular-nums"
        />
        {unit && (
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[12px] text-ink/55">
            {unit}
          </span>
        )}
      </div>
    </label>
  );
}

function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 h-10 px-4 rounded-full text-[13px] font-semibold transition-all ${
        selected
          ? "bg-ink text-white"
          : "bg-bg text-ink ring-1 ring-inset ring-hairline hover:ring-ink/30"
      }`}
    >
      {label}
    </button>
  );
}
