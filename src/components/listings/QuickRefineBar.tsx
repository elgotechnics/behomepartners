"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { listings } from "@/data/listings";
import {
  applyFilters,
  SORT_LABELS,
  type Filters,
  type SortKey,
} from "./filters";
import type { TransactionMode } from "./typeSlug";
import type { QuickRefineChip } from "./quickRefine";
import { Popover } from "./Popover";

export function QuickRefineBar({
  chips,
  filters,
  onFiltersChange,
  mode,
  sort,
  onSortChange,
  resultCount,
}: {
  chips: QuickRefineChip[];
  filters: Filters;
  onFiltersChange: (f: Filters) => void;
  mode: TransactionMode;
  sort: SortKey;
  onSortChange: (s: SortKey) => void;
  resultCount: number;
}) {
  const items = useMemo(
    () =>
      chips
        .map((chip) => {
          const active = chip.isActive(filters);
          const next = active ? chip.remove(filters) : chip.apply(filters);
          const count = applyFilters(listings, next, mode).length;
          return { chip, active, count };
        })
        .filter(({ active, count }) => active || count > 0),
    [chips, filters, mode],
  );

  return (
    <div className="bg-gradient-to-b from-bg via-bg to-bg/40">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-4 flex items-center gap-4">
        <div className="flex-1 min-w-0 flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map(({ chip, active, count }) => {
            const disabled = !active && count === 0;
            return (
              <button
                key={chip.key}
                type="button"
                disabled={disabled}
                onClick={() =>
                  onFiltersChange(
                    active ? chip.remove(filters) : chip.apply(filters),
                  )
                }
                aria-pressed={active}
                className={`shrink-0 group inline-flex items-center gap-2 h-10 pl-3 pr-2.5 rounded-full text-[13px] font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 ${
                  active
                    ? "bg-ink text-white shadow-[0_8px_20px_-8px_rgba(15,23,42,0.45)]"
                    : disabled
                      ? "bg-white/50 text-ink/30 ring-1 ring-inset ring-hairline/50 cursor-not-allowed"
                      : "bg-white text-ink ring-1 ring-inset ring-hairline hover:ring-ink/30"
                }`}
              >
                <span
                  aria-hidden
                  className={`shrink-0 transition-colors ${
                    active
                      ? "text-white"
                      : disabled
                        ? "text-ink/30"
                        : "text-accent/85 group-hover:text-accent"
                  }`}
                >
                  {chip.icon}
                </span>
                <span className="whitespace-nowrap">{chip.label}</span>
                {!active && (
                  <span
                    className={`inline-flex items-center justify-center min-w-[22px] h-[22px] px-1.5 rounded-full text-[11px] font-bold tabular-nums ${
                      disabled
                        ? "bg-ink/[0.04] text-ink/30"
                        : "bg-ink/[0.08] text-ink"
                    }`}
                  >
                    {count}
                  </span>
                )}
                {active && (
                  <span
                    aria-hidden
                    className="inline-flex items-center justify-center w-[22px] h-[22px] rounded-full bg-white/15 text-white"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="shrink-0 hidden md:flex items-center gap-4">
          <span
            aria-live="polite"
            className="text-[12.5px] font-semibold text-ink/70 tabular-nums whitespace-nowrap"
          >
            {resultCount === 0
              ? "Aucun bien"
              : `${resultCount} bien${resultCount > 1 ? "s" : ""}`}
          </span>
          <SortDropdown value={sort} onChange={onSortChange} />
        </div>
      </div>
    </div>
  );
}

function SortDropdown({
  value,
  onChange,
}: {
  value: SortKey;
  onChange: (v: SortKey) => void;
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={`Tri : ${SORT_LABELS[value]}`}
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 h-9 px-3 rounded-full text-[12.5px] font-semibold bg-white text-ink ring-1 ring-inset ring-hairline hover:ring-ink/30 transition-all"
      >
        <SortIcon />
        <span className="text-ink/55">Tri</span>
        <span aria-hidden className="text-ink/30">·</span>
        <span className="whitespace-nowrap">{SORT_LABELS[value]}</span>
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
          className={`text-ink/55 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorRef={triggerRef}
        width={220}
        align="end"
      >
        <div className="space-y-0.5">
          {(Object.keys(SORT_LABELS) as SortKey[]).map((k) => {
            const selected = value === k;
            return (
              <button
                key={k}
                type="button"
                onClick={() => {
                  onChange(k);
                  setOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-[14px] transition-colors ${
                  selected
                    ? "bg-accent/10 text-accent font-semibold"
                    : "text-ink hover:bg-ink/[0.04]"
                }`}
              >
                {SORT_LABELS[k]}
              </button>
            );
          })}
        </div>
      </Popover>
    </div>
  );
}

function SortIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 6h18" />
      <path d="M6 12h12" />
      <path d="M9 18h6" />
    </svg>
  );
}
