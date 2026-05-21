"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { listings, type ListingType } from "@/data/listings";
import {
  countActive,
  countAdvanced,
  formatCompactPrice,
  type Filters,
} from "./filters";
import { DualRangeSlider } from "./DualRangeSlider";
import { iconForType } from "./typeIcons";
import {
  getFilterConfig,
  priceLabel,
  type MainExtraKey,
} from "./filterConfig";
import { Popover } from "./Popover";
import { AdvancedFiltersModal } from "./AdvancedFiltersModal";

const TYPES_SALE: ListingType[] = [
  "Maison",
  "Appartement",
  "Terrain",
  "Bureau",
  "Commerce",
  "Industriel",
  "Garage / parking",
  "Immeuble de rapport",
];

const TYPES_RENT: ListingType[] = [
  "Maison",
  "Appartement",
  "Bureau",
  "Commerce",
];

export function FiltersBar({
  filters,
  onFiltersChange,
  resultCount,
  mode = "vente",
  fixedType = null,
}: {
  filters: Filters;
  onFiltersChange: (f: Filters) => void;
  resultCount: number;
  mode?: "vente" | "location";
  fixedType?: ListingType | null;
}) {
  const config = useMemo(
    () => getFilterConfig(mode, fixedType),
    [mode, fixedType],
  );
  const priceBounds =
    mode === "vente"
      ? { min: 0, max: 1500000, step: 10000 }
      : { min: 0, max: 5000, step: 50 };
  const localities = useMemo(() => {
    const map = new Map<string, string | undefined>();
    for (const l of listings) {
      if (!map.has(l.city)) map.set(l.city, l.postalCode);
    }
    return Array.from(map.entries())
      .map(([city, postalCode]) => ({ city, postalCode }))
      .sort((a, b) => a.city.localeCompare(b.city, "fr"));
  }, []);

  const active = countActive(filters);
  void active;
  const advancedCount = countAdvanced(filters);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  /* ─── value summaries ─── */
  const citySummary =
    filters.cities.length === 0
      ? "Toutes les communes"
      : filters.cities.length === 1
        ? filters.cities[0]
        : `${filters.cities.length} communes`;
  const budgetActive = filters.priceMin != null || filters.priceMax != null;
  const budgetSummary = budgetActive
    ? `${filters.priceMin != null ? formatCompactPrice(filters.priceMin) : "0"} – ${
        filters.priceMax != null ? formatCompactPrice(filters.priceMax) : "∞"
      }`
    : mode === "vente"
      ? "Tous prix"
      : "Tous loyers";
  const typeSummary = filters.types[0] ?? "Tous types";

  const mainExtraCell = (compact?: boolean) => (
    <MainExtraCell
      mainExtra={config.mainExtra}
      label={config.mainExtraLabel}
      filters={filters}
      onFiltersChange={onFiltersChange}
      compact={compact}
    />
  );

  return (
    <div className="sticky top-16 md:top-20 z-20 bg-bg/85 backdrop-blur-xl border-b border-hairline">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-3.5 md:py-4">
        <div className="flex items-center gap-3">
          {/* DESKTOP: unified capsule */}
          <div className="hidden md:flex items-stretch bg-white rounded-full ring-1 ring-inset ring-hairline shadow-[0_4px_24px_-14px_rgba(15,23,42,0.12)] hover:shadow-[0_8px_32px_-14px_rgba(15,23,42,0.18)] transition-shadow">
            <TypeCellSingle
              value={filters.types[0] ?? null}
              onChange={(t) =>
                onFiltersChange({ ...filters, types: t ? [t] : [] })
              }
              summary={typeSummary}
              mode={mode}
            />
            <CellDivider />
            <CityCell
              localities={localities}
              value={filters.cities}
              onChange={(cities) => onFiltersChange({ ...filters, cities })}
              summary={citySummary}
            />
            <CellDivider />
            <BudgetCell
              min={filters.priceMin}
              max={filters.priceMax}
              bounds={priceBounds}
              onChange={(priceMin, priceMax) =>
                onFiltersChange({ ...filters, priceMin, priceMax })
              }
              active={budgetActive}
              summary={budgetSummary}
              label={priceLabel(mode)}
            />
            <CellDivider />
            {mainExtraCell()}
          </div>

          {/* MOBILE: scrollable pills */}
          <div className="md:hidden flex items-center gap-2 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <TypeCellSingle
              value={filters.types[0] ?? null}
              onChange={(t) =>
                onFiltersChange({ ...filters, types: t ? [t] : [] })
              }
              summary={typeSummary}
              mode={mode}
              compact
            />
            <CityCell
              localities={localities}
              value={filters.cities}
              onChange={(cities) => onFiltersChange({ ...filters, cities })}
              summary={citySummary}
              compact
            />
            <BudgetCell
              min={filters.priceMin}
              max={filters.priceMax}
              bounds={priceBounds}
              onChange={(priceMin, priceMax) =>
                onFiltersChange({ ...filters, priceMin, priceMax })
              }
              active={budgetActive}
              summary={budgetSummary}
              label={priceLabel(mode)}
              compact
            />
            {mainExtraCell(true)}
          </div>

          {/* Right: advanced filters trigger (standalone pill) */}
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            <AdvancedTrigger
              count={advancedCount}
              onClick={() => setAdvancedOpen(true)}
              compact
            />
          </div>
        </div>
      </div>

      <AdvancedFiltersModal
        open={advancedOpen}
        onClose={() => setAdvancedOpen(false)}
        filters={filters}
        onFiltersChange={onFiltersChange}
        resultCount={resultCount}
        config={config}
        mode={mode}
      />
    </div>
  );
}

/* ─────────────── ADVANCED TRIGGER ─────────────── */

function AdvancedTrigger({
  count,
  onClick,
  compact,
}: {
  count: number;
  onClick: () => void;
  compact?: boolean;
}) {
  const active = count > 0;
  if (compact) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label="Filtres avancés"
        className="shrink-0 inline-flex items-center gap-2 h-10 pl-3.5 pr-3.5 rounded-full text-[13px] font-semibold transition-all bg-ink text-white hover:bg-ink-deep shadow-[0_8px_18px_-10px_rgba(15,23,42,0.4)]"
      >
        <SlidersIcon />
        <span>Filtres</span>
        {active && (
          <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-white text-ink text-[10.5px] font-extrabold tabular-nums">
            {count}
          </span>
        )}
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative self-stretch flex items-center gap-2.5 px-5 rounded-full transition-colors ${
        active ? "bg-bg/70" : "hover:bg-bg/50"
      }`}
    >
      <span
        className={`grid place-items-center w-10 h-10 rounded-full transition-colors ${
          active
            ? "bg-accent/10 text-accent"
            : "bg-bg text-ink/70 group-hover:bg-white"
        }`}
      >
        <SlidersIcon />
      </span>
      <span className="flex flex-col items-start">
        <span className="text-[10.5px] font-bold tracking-[.2em] uppercase text-ink/50 leading-none">
          Plus
        </span>
        <span
          className={`mt-1.5 text-[13.5px] font-semibold leading-tight ${
            active ? "text-ink" : "text-ink/60"
          }`}
        >
          Filtres
        </span>
      </span>
      {active && (
        <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-accent text-white text-[10.5px] font-extrabold tabular-nums">
          {count}
        </span>
      )}
    </button>
  );
}

function SlidersIcon() {
  return (
    <svg {...baseIcon} strokeLinejoin="round">
      <path d="M8.85746 12.5061C6.36901 10.6456 4.59564 8.59915 3.62734 7.44867C3.3276 7.09253 3.22938 6.8319 3.17033 6.3728C2.96811 4.8008 2.86701 4.0148 3.32795 3.5074C3.7889 3 4.60404 3 6.23433 3H17.7657C19.396 3 20.2111 3 20.672 3.5074C21.133 4.0148 21.0319 4.8008 20.8297 6.37281C20.7706 6.83191 20.6724 7.09254 20.3726 7.44867C19.403 8.60062 17.6261 10.6507 15.1326 12.5135C14.907 12.6821 14.7583 12.9567 14.7307 13.2614C14.4837 15.992 14.2559 17.4876 14.1141 18.2442C13.8853 19.4657 12.1532 20.2006 11.226 20.8563C10.6741 21.2466 10.0043 20.782 9.93278 20.1778C9.79643 19.0261 9.53961 16.6864 9.25927 13.2614C9.23409 12.9539 9.08486 12.6761 8.85746 12.5061Z" />
    </svg>
  );
}

/* ─────────────── CELL PRIMITIVE ─────────────── */

function CellDivider() {
  return <span aria-hidden className="my-2 w-px bg-hairline" />;
}

function Cell({
  icon,
  label,
  value,
  active,
  open,
  onToggle,
  cellRef,
  compact,
  children,
  minWidthClass,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  active: boolean;
  minWidthClass?: string;
  open: boolean;
  onToggle: () => void;
  cellRef: React.RefObject<HTMLButtonElement | null>;
  compact?: boolean;
  children?: React.ReactNode;
}) {
  if (compact) {
    return (
      <div className="relative shrink-0">
        <button
          ref={cellRef}
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className={`inline-flex items-center gap-2 h-10 pl-3 pr-3.5 rounded-full text-[13px] font-semibold transition-all ${
            active
              ? "bg-ink text-white"
              : "bg-white text-ink ring-1 ring-inset ring-hairline hover:ring-ink/30"
          }`}
        >
          <span
            className={`grid place-items-center w-5 h-5 ${
              active ? "text-white" : "text-ink/55"
            }`}
          >
            {icon}
          </span>
          <span>{label}</span>
          {active && (
            <span className="text-[12px] font-medium text-white/75">
              · {value}
            </span>
          )}
        </button>
        {children}
      </div>
    );
  }

  return (
    <div className={`relative flex-1 min-w-0 ${minWidthClass ?? "md:min-w-[210px]"}`}>
      <button
        ref={cellRef}
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={`group w-full text-left h-full flex items-center gap-2.5 pl-3 pr-5 py-2.5 rounded-full transition-colors ${
          open ? "bg-bg/70" : "hover:bg-bg/50"
        }`}
      >
        <span
          className={`shrink-0 grid place-items-center w-9 h-9 rounded-full transition-colors ${
            active
              ? "bg-accent/10 text-accent"
              : "bg-bg text-ink/70 group-hover:bg-white"
          }`}
        >
          {icon}
        </span>
        <span className="min-w-0">
          <span className="block text-[10.5px] font-bold tracking-[.2em] uppercase text-ink/50 leading-none">
            {label}
          </span>
          <span
            className={`block mt-1.5 text-[13.5px] font-semibold leading-tight truncate ${
              active ? "text-ink" : "text-ink/60"
            }`}
          >
            {value}
          </span>
        </span>
      </button>
      {children}
    </div>
  );
}

/* ─────────────── CITY ─────────────── */

type Locality = { city: string; postalCode?: string };

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function CityCell({
  localities,
  value,
  onChange,
  summary,
  compact,
}: {
  localities: Locality[];
  value: string[];
  onChange: (v: string[]) => void;
  summary: string;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const cellRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggle = (city: string) => {
    if (value.includes(city)) onChange(value.filter((c) => c !== city));
    else onChange([...value, city]);
  };

  const suggestions = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return localities;
    return localities.filter(
      (l) =>
        normalize(l.city).includes(q) ||
        (l.postalCode && l.postalCode.startsWith(q)),
    );
  }, [query, localities]);

  return (
    <Cell
      icon={<PinIcon />}
      label="Localisation"
      value={summary}
      active={value.length > 0}
      open={open}
      onToggle={() => {
        setOpen((v) => !v);
        setTimeout(() => inputRef.current?.focus(), 30);
      }}
      cellRef={cellRef}
      compact={compact}
      minWidthClass="md:min-w-[260px]"
    >
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorRef={cellRef}
        width={360}
      >
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/45" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Commune ou code postal"
            className="w-full h-11 pl-9 pr-3 text-[14px] rounded-md bg-bg ring-1 ring-inset ring-hairline focus:ring-ink/40 focus:bg-white outline-none transition-all"
          />
        </div>

        {value.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {value.map((city) => (
              <Chip key={city} label={city} onRemove={() => toggle(city)} />
            ))}
          </div>
        )}

        <div className="mt-3 max-h-[260px] overflow-y-auto -mx-1 px-1">
          {suggestions.length === 0 ? (
            <p className="px-2 py-3 text-[13px] text-ink/55">
              Aucune commune trouvée.
            </p>
          ) : (
            suggestions.map((l) => {
              const checked = value.includes(l.city);
              return (
                <label
                  key={l.city}
                  className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-ink/[0.04] cursor-pointer"
                >
                  <span
                    className={`inline-flex items-center justify-center w-[18px] h-[18px] rounded-[5px] ring-1 ring-inset transition-all ${
                      checked
                        ? "bg-accent ring-accent"
                        : "bg-white ring-hairline"
                    }`}
                  >
                    {checked && (
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </span>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={() => toggle(l.city)}
                  />
                  <span className="flex-1 text-[14px] text-ink">{l.city}</span>
                  {l.postalCode && (
                    <span className="text-[12px] text-ink/45 tabular-nums">
                      {l.postalCode}
                    </span>
                  )}
                </label>
              );
            })
          )}
        </div>

        {value.length > 0 && (
          <button
            type="button"
            onClick={() => onChange([])}
            className="mt-3 text-[11.5px] font-bold tracking-[.18em] uppercase text-ink/55 hover:text-accent transition-colors"
          >
            Effacer
          </button>
        )}
      </Popover>
    </Cell>
  );
}

function Chip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1.5 pl-2.5 pr-1 py-1 rounded-full bg-ink text-white text-[12px] font-semibold">
      {label}
      <button
        type="button"
        onClick={onRemove}
        aria-label={`Retirer ${label}`}
        className="grid place-items-center w-5 h-5 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
      >
        <svg
          width="9"
          height="9"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </span>
  );
}

/* ─────────────── BUDGET ─────────────── */

function BudgetCell({
  min,
  max,
  bounds,
  onChange,
  active,
  summary,
  label,
  compact,
}: {
  min: number | null;
  max: number | null;
  bounds: { min: number; max: number; step: number };
  onChange: (min: number | null, max: number | null) => void;
  active: boolean;
  summary: string;
  label: string;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const cellRef = useRef<HTMLButtonElement>(null);
  return (
    <Cell
      icon={<EuroIcon />}
      label={label}
      value={summary}
      active={active}
      open={open}
      onToggle={() => setOpen((v) => !v)}
      cellRef={cellRef}
      compact={compact}
      minWidthClass="md:min-w-[260px]"
    >
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorRef={cellRef}
        width={280}
      >
        <DualRangeSlider
          bounds={bounds}
          min={min}
          max={max}
          onChange={onChange}
          ariaLabelMin="Prix minimum"
          ariaLabelMax="Prix maximum"
        />
        <div className="grid grid-cols-2 gap-2 mt-4">
          <PriceField
            label="Min"
            value={min}
            placeholder="…"
            onChange={(v) => onChange(v, max)}
          />
          <PriceField
            label="Max"
            value={max}
            placeholder="…"
            onChange={(v) => onChange(min, v)}
          />
        </div>
      </Popover>
    </Cell>
  );
}

function PriceField({
  label,
  value,
  placeholder = "…",
  onChange,
}: {
  label: string;
  value: number | null;
  placeholder?: string;
  onChange: (v: number | null) => void;
}) {
  return (
    <label className="block">
      <span className="block text-[10.5px] font-bold tracking-[.18em] uppercase text-ink/55 mb-1.5">
        {label}
      </span>
      <PriceInput value={value} onChange={onChange} placeholder={placeholder} />
    </label>
  );
}

function PriceInput({
  value,
  onChange,
  placeholder,
}: {
  value: number | null;
  onChange: (v: number | null) => void;
  placeholder: string;
}) {
  return (
    <div className="relative">
      <input
        type="text"
        inputMode="numeric"
        placeholder={placeholder}
        value={value == null ? "" : value.toLocaleString("fr-BE")}
        onChange={(e) => {
          const raw = e.target.value.replace(/[^\d]/g, "");
          onChange(raw === "" ? null : Number(raw));
        }}
        className="w-full h-11 px-3 pr-7 text-[14px] rounded-md bg-bg ring-1 ring-inset ring-hairline focus:ring-ink/40 focus:bg-white outline-none transition-all tabular-nums"
      />
      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[12px] text-ink/55">
        €
      </span>
    </div>
  );
}

/* ─────────────── TYPE ─────────────── */

function TypeCellSingle({
  value,
  onChange,
  summary,
  mode,
  compact,
}: {
  value: ListingType | null;
  onChange: (v: ListingType | null) => void;
  summary: string;
  mode: "vente" | "location";
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const cellRef = useRef<HTMLButtonElement>(null);
  const types = mode === "vente" ? TYPES_SALE : TYPES_RENT;
  const select = (t: ListingType | null) => {
    onChange(t);
    setOpen(false);
  };
  return (
    <Cell
      icon={<HomeIcon />}
      label="Type"
      value={summary}
      active={value !== null}
      open={open}
      onToggle={() => setOpen((v) => !v)}
      cellRef={cellRef}
      compact={compact}
    >
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorRef={cellRef}
        width={260}
      >
        <div role="radiogroup" aria-label="Type de bien" className="space-y-0.5">
          <TypeOption
            label="Tous les types"
            icon={null}
            selected={value === null}
            onClick={() => select(null)}
          />
          {types.map((t) => (
            <TypeOption
              key={t}
              label={t}
              icon={iconForType(t)}
              selected={value === t}
              onClick={() => select(t)}
            />
          ))}
        </div>
      </Popover>
    </Cell>
  );
}

function TypeOption({
  label,
  icon,
  selected,
  onClick,
}: {
  label: string;
  icon: React.ReactNode | null;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      className={`w-full text-left px-2 py-2 rounded-md text-[14px] transition-colors flex items-center gap-2.5 ${
        selected
          ? "bg-accent/10 text-accent font-semibold"
          : "text-ink hover:bg-ink/[0.04]"
      }`}
    >
      <span
        className={`shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${
          selected
            ? "bg-accent/10 text-accent"
            : "bg-bg text-ink/65"
        }`}
      >
        {icon ?? <AllTypesIcon />}
      </span>
      <span className="flex-1 truncate">{label}</span>
      {selected && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className="text-accent shrink-0"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      )}
    </button>
  );
}

function AllTypesIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

/* ─────────────── MAIN EXTRA (dynamic 4th cell) ─────────────── */

function MainExtraCell({
  mainExtra,
  label,
  filters,
  onFiltersChange,
  compact,
}: {
  mainExtra: MainExtraKey;
  label: string;
  filters: Filters;
  onFiltersChange: (f: Filters) => void;
  compact?: boolean;
}) {
  if (mainExtra === "bedrooms") {
    return (
      <BedroomsCell
        min={filters.bedroomsMin}
        max={filters.bedroomsMax}
        onChange={(bedroomsMin, bedroomsMax) =>
          onFiltersChange({ ...filters, bedroomsMin, bedroomsMax })
        }
        active={
          filters.bedroomsMin != null || filters.bedroomsMax != null
        }
        summary={bedroomSummary(filters.bedroomsMin, filters.bedroomsMax)}
        compact={compact}
      />
    );
  }
  if (mainExtra === "surface") {
    return (
      <NumericRangeCell
        icon={<SurfaceIcon />}
        label={label}
        unit="m²"
        min={filters.surfaceMin}
        max={filters.surfaceMax}
        onChange={(surfaceMin, surfaceMax) =>
          onFiltersChange({ ...filters, surfaceMin, surfaceMax })
        }
        active={filters.surfaceMin != null || filters.surfaceMax != null}
        summary={numericSummary(
          filters.surfaceMin,
          filters.surfaceMax,
          "m²",
          "Toutes surfaces",
        )}
        compact={compact}
        bounds={{ min: 0, max: 500, step: 5 }}
      />
    );
  }
  if (mainExtra === "landSurface") {
    return (
      <NumericRangeCell
        icon={<LandIcon />}
        label={label}
        unit="m²"
        min={filters.landSurfaceMin}
        max={filters.landSurfaceMax}
        onChange={(landSurfaceMin, landSurfaceMax) =>
          onFiltersChange({ ...filters, landSurfaceMin, landSurfaceMax })
        }
        active={
          filters.landSurfaceMin != null || filters.landSurfaceMax != null
        }
        summary={numericSummary(
          filters.landSurfaceMin,
          filters.landSurfaceMax,
          "m²",
          "Tous terrains",
        )}
        compact={compact}
        bounds={{ min: 0, max: 5000, step: 50 }}
      />
    );
  }
  // units → dropdowns (Min / Max) like Chambres
  return (
    <UnitsCell
      min={filters.unitsMin}
      max={filters.unitsMax}
      onChange={(unitsMin, unitsMax) =>
        onFiltersChange({ ...filters, unitsMin, unitsMax })
      }
      active={filters.unitsMin != null || filters.unitsMax != null}
      summary={unitsSummary(filters.unitsMin, filters.unitsMax)}
      label={label}
      compact={compact}
    />
  );
}

function numericSummary(
  min: number | null,
  max: number | null,
  unit: string,
  fallback: string,
): string {
  if (min == null && max == null) return fallback;
  const u = unit ? ` ${unit}` : "";
  if (min == null) return `≤ ${max}${u}`;
  if (max == null) return `≥ ${min}${u}`;
  return `${min} – ${max}${u}`;
}

function NumericRangeCell({
  icon,
  label,
  unit,
  min,
  max,
  onChange,
  active,
  summary,
  compact,
  bounds,
}: {
  icon: React.ReactNode;
  label: string;
  unit: string;
  min: number | null;
  max: number | null;
  onChange: (min: number | null, max: number | null) => void;
  active: boolean;
  summary: string;
  compact?: boolean;
  bounds?: { min: number; max: number; step: number };
}) {
  const [open, setOpen] = useState(false);
  const cellRef = useRef<HTMLButtonElement>(null);
  return (
    <Cell
      icon={icon}
      label={label}
      value={summary}
      active={active}
      open={open}
      onToggle={() => setOpen((v) => !v)}
      cellRef={cellRef}
      compact={compact}
    >
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorRef={cellRef}
        width={320}
      >
        {bounds && (
          <DualRangeSlider
            bounds={bounds}
            min={min}
            max={max}
            onChange={onChange}
            ariaLabelMin={`${label} minimum`}
            ariaLabelMax={`${label} maximum`}
          />
        )}
        <div className={`grid grid-cols-2 gap-2 ${bounds ? "mt-4" : ""}`}>
          <NumericField
            label="Min"
            value={min}
            unit={unit}
            placeholder="…"
            onChange={(v) => onChange(v, max)}
          />
          <NumericField
            label="Max"
            value={max}
            unit={unit}
            placeholder="…"
            onChange={(v) => onChange(min, v)}
          />
        </div>
      </Popover>
    </Cell>
  );
}

function NumericField({
  label,
  value,
  unit,
  placeholder,
  onChange,
}: {
  label: string;
  value: number | null;
  unit: string;
  placeholder: string;
  onChange: (v: number | null) => void;
}) {
  return (
    <label className="block">
      <span className="block text-[10.5px] font-bold tracking-[.18em] uppercase text-ink/55 mb-1.5">
        {label}
      </span>
      <div className="relative">
        <input
          type="text"
          inputMode="numeric"
          placeholder={placeholder}
          value={value == null ? "" : value.toLocaleString("fr-BE")}
          onChange={(e) => {
            const raw = e.target.value.replace(/[^\d]/g, "");
            onChange(raw === "" ? null : Number(raw));
          }}
          className="w-full h-11 px-3 pr-9 text-[14px] rounded-md bg-bg ring-1 ring-inset ring-hairline focus:ring-ink/40 focus:bg-white outline-none transition-all tabular-nums"
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

/* ─────────────── BEDROOMS ─────────────── */

const BEDROOM_BOUNDS = { min: 0, max: 16 };
const UNITS_BOUNDS = { min: 1, max: 50 };

function unitsSummary(min: number | null, max: number | null): string {
  if (min == null && max == null) return "Indifférent";
  if (max == null) return `${min}+ unités`;
  if (min == null) return `≤ ${max} unités`;
  if (min === max) return `${min} unité${min > 1 ? "s" : ""}`;
  return `${min} – ${max} unités`;
}

function UnitsCell({
  min,
  max,
  onChange,
  active,
  summary,
  label,
  compact,
}: {
  min: number | null;
  max: number | null;
  onChange: (min: number | null, max: number | null) => void;
  active: boolean;
  summary: string;
  label: string;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const cellRef = useRef<HTMLButtonElement>(null);

  return (
    <Cell
      icon={<UnitsIcon />}
      label={label}
      value={summary}
      active={active}
      open={open}
      onToggle={() => setOpen((v) => !v)}
      cellRef={cellRef}
      compact={compact}
    >
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorRef={cellRef}
        width={260}
      >
        <div className="grid grid-cols-2 gap-2">
          <BedroomDropdown
            label="Min"
            value={min}
            placeholder="…"
            options={Array.from(
              { length: (max ?? UNITS_BOUNDS.max) - UNITS_BOUNDS.min + 1 },
              (_, i) => UNITS_BOUNDS.min + i,
            )}
            onChange={(v) => onChange(v, max)}
          />
          <BedroomDropdown
            label="Max"
            value={max}
            placeholder="…"
            options={Array.from(
              { length: UNITS_BOUNDS.max - (min ?? UNITS_BOUNDS.min) + 1 },
              (_, i) => (min ?? UNITS_BOUNDS.min) + i,
            )}
            onChange={(v) => onChange(min, v)}
          />
        </div>
      </Popover>
    </Cell>
  );
}

function bedroomLabel(n: number): string {
  return n === 0 ? "Studio" : `${n} ch.`;
}

function bedroomSummary(min: number | null, max: number | null): string {
  if (min == null && max == null) return "Indifférent";
  if (max === 0) return "Studio";
  if (max == null) return `${min}+ ch.`;
  if (min == null) return `≤ ${max} ch.`;
  return `${bedroomLabel(min)} – ${bedroomLabel(max)}`;
}

function BedroomsCell({
  min,
  max,
  onChange,
  active,
  summary,
  compact,
}: {
  min: number | null;
  max: number | null;
  onChange: (min: number | null, max: number | null) => void;
  active: boolean;
  summary: string;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const cellRef = useRef<HTMLButtonElement>(null);

  return (
    <Cell
      icon={<BedIcon />}
      label="Chambres"
      value={summary}
      active={active}
      open={open}
      onToggle={() => setOpen((v) => !v)}
      cellRef={cellRef}
      compact={compact}
    >
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorRef={cellRef}
        width={260}
      >
        <div className="grid grid-cols-2 gap-2">
          <BedroomDropdown
            label="Min"
            value={min}
            placeholder="…"
            options={Array.from(
              { length: (max ?? BEDROOM_BOUNDS.max) - BEDROOM_BOUNDS.min + 1 },
              (_, i) => BEDROOM_BOUNDS.min + i,
            )}
            onChange={(v) => onChange(v === 0 ? null : v, max)}
          />
          <BedroomDropdown
            label="Max"
            value={max}
            placeholder="…"
            options={Array.from(
              { length: BEDROOM_BOUNDS.max - (min ?? BEDROOM_BOUNDS.min) + 1 },
              (_, i) => (min ?? BEDROOM_BOUNDS.min) + i,
            )}
            onChange={(v) => onChange(min, v === BEDROOM_BOUNDS.max ? null : v)}
          />
        </div>
      </Popover>
    </Cell>
  );
}

function BedroomDropdown({
  label,
  value,
  placeholder,
  options,
  onChange,
}: {
  label: string;
  value: number | null;
  placeholder: string;
  options: number[];
  onChange: (v: number) => void;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div>
      <div className="text-[10.5px] font-bold tracking-[.18em] uppercase text-ink/55 mb-1.5">
        {label}
      </div>
      <div ref={wrapRef} className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="listbox"
          className={`w-full h-11 flex items-center justify-between px-3 rounded-md bg-bg ring-1 ring-inset transition-all ${
            open
              ? "ring-ink/40 bg-white"
              : "ring-hairline hover:ring-ink/25"
          }`}
        >
          <span
            className={`text-[14px] font-semibold tabular-nums ${
              value == null ? "text-ink/45" : "text-ink"
            }`}
          >
            {value == null ? placeholder : value}
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className={`text-ink/55 transition-transform ${open ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        {open && (
          <ul
            role="listbox"
            className="absolute top-[calc(100%+4px)] left-0 right-0 z-40 max-h-56 overflow-y-auto rounded-md bg-white ring-1 ring-inset ring-hairline shadow-[0_18px_40px_-20px_rgba(15,23,42,0.25)] py-1"
          >
            {options.map((n) => {
              const selected = value === n;
              return (
                <li key={n}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => {
                      onChange(n);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-[14px] font-semibold tabular-nums transition-colors ${
                      selected
                        ? "bg-accent/10 text-accent"
                        : "text-ink hover:bg-ink/[0.04]"
                    }`}
                  >
                    {n}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

/* ─────────────── ICONS ─────────────── */

const baseIcon = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  "aria-hidden": true,
};

function PinIcon() {
  return (
    <svg {...baseIcon}>
      <path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" />
      <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" />
    </svg>
  );
}

function EuroIcon() {
  return (
    <svg {...baseIcon}>
      <path d="M5 10H13" strokeLinejoin="round" />
      <path d="M5 14H13" strokeLinejoin="round" />
      <path d="M19 17.6076C17.8693 19.6404 15.812 21 13.4615 21C9.89293 21 7 17.866 7 14V10C7 6.13401 9.89293 3 13.4615 3C15.812 3 17.8693 4.35958 19 6.39241" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg {...baseIcon} strokeLinejoin="round">
      <path d="M3 11.9896V14.5C3 17.7998 3 19.4497 4.02513 20.4749C5.05025 21.5 6.70017 21.5 10 21.5H14C17.2998 21.5 18.9497 21.5 19.9749 20.4749C21 19.4497 21 17.7998 21 14.5V11.9896C21 10.3083 21 9.46773 20.6441 8.74005C20.2882 8.01237 19.6247 7.49628 18.2976 6.46411L16.2976 4.90855C14.2331 3.30285 13.2009 2.5 12 2.5C10.7991 2.5 9.76689 3.30285 7.70242 4.90855L5.70241 6.46411C4.37533 7.49628 3.71179 8.01237 3.3559 8.74005C3 9.46773 3 10.3083 3 11.9896Z" />
      <path d="M15.0002 17C14.2007 17.6224 13.1504 18 12.0002 18C10.8499 18 9.79971 17.6224 9.00018 17" />
    </svg>
  );
}

function BedIcon() {
  return (
    <svg {...baseIcon}>
      <path d="M22 17.5H2" strokeLinejoin="round" />
      <path d="M22 21V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V21" strokeLinejoin="round" />
      <path d="M11 12V10.2134C11 9.83272 10.9428 9.70541 10.6497 9.55538C10.0395 9.24292 9.29865 9 8.5 9C7.70135 9 6.96055 9.24292 6.35025 9.55538C6.05721 9.70541 6 9.83272 6 10.2134L6 12" />
      <path d="M18 12V10.2134C18 9.83272 17.9428 9.70541 17.6497 9.55538C17.0395 9.24292 16.2987 9 15.5 9C14.7013 9 13.9605 9.24292 13.3503 9.55538C13.0572 9.70541 13 9.83272 13 10.2134L13 12" />
      <path d="M21 12V7.36057C21 6.66893 21 6.32311 20.8079 5.99653C20.6157 5.66995 20.342 5.50091 19.7944 5.16283C17.5869 3.79978 14.8993 3 12 3C9.10067 3 6.41314 3.79978 4.20558 5.16283C3.65804 5.50091 3.38427 5.66995 3.19213 5.99653C3 6.32311 3 6.66893 3 7.36057V12" />
    </svg>
  );
}

function SurfaceIcon() {
  return (
    <svg {...baseIcon} strokeLinejoin="round">
      <path d="M8.00001 3.09779C8.00001 3.09779 4.03375 2.74194 3.38784 3.38785C2.74192 4.03375 3.09784 8 3.09784 8" />
      <path d="M8.00001 20.9022C8.00001 20.9022 4.03375 21.2581 3.38784 20.6122C2.74192 19.9662 3.09784 16 3.09784 16" />
      <path d="M16 3.09779C16 3.09779 19.9663 2.74194 20.6122 3.38785C21.2581 4.03375 20.9022 8 20.9022 8" />
      <path d="M16 20.9022C16 20.9022 19.9663 21.2581 20.6122 20.6122C21.2581 19.9662 20.9022 16 20.9022 16" />
      <path d="M14.0107 9.99847L20.0625 3.94678" />
      <path d="M9.99696 14.0024L3.63966 20.3807" />
      <path d="M9.99732 10.0024L3.84571 3.85889" />
      <path d="M13.9795 14.0024L20.5279 20.4983" />
    </svg>
  );
}

function LandIcon() {
  return (
    <svg {...baseIcon} strokeLinejoin="round">
      <path d="M8.00001 3.09779C8.00001 3.09779 4.03375 2.74194 3.38784 3.38785C2.74192 4.03375 3.09784 8 3.09784 8" />
      <path d="M8.00001 20.9022C8.00001 20.9022 4.03375 21.2581 3.38784 20.6122C2.74192 19.9662 3.09784 16 3.09784 16" />
      <path d="M16 3.09779C16 3.09779 19.9663 2.74194 20.6122 3.38785C21.2581 4.03375 20.9022 8 20.9022 8" />
      <path d="M16 20.9022C16 20.9022 19.9663 21.2581 20.6122 20.6122C21.2581 19.9662 20.9022 16 20.9022 16" />
      <path d="M14.0107 9.99847L20.0625 3.94678" />
      <path d="M9.99696 14.0024L3.63966 20.3807" />
      <path d="M9.99732 10.0024L3.84571 3.85889" />
      <path d="M13.9795 14.0024L20.5279 20.4983" />
    </svg>
  );
}

function UnitsIcon() {
  return (
    <svg {...baseIcon} strokeLinejoin="round">
      <path d="M3 21V8L12 3L21 8V21" />
      <path d="M9 21V12H15V21" />
      <path d="M3 21H21" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}
