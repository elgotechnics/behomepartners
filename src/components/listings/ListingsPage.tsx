"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/Footer";
import { listings, type ListingType } from "@/data/listings";
import { PropertyCard } from "@/components/listings/PropertyCard";
import { FiltersBar } from "@/components/listings/FiltersBar";
import { Pagination } from "@/components/listings/Pagination";
import { QuickRefineBar } from "@/components/listings/QuickRefineBar";
import { getQuickRefineChips } from "@/components/listings/quickRefine";
import {
  applyFilters,
  applySort,
  EMPTY_FILTERS,
  type Filters,
  type SortKey,
} from "@/components/listings/filters";
import {
  basePathForMode,
  isTypeAllowedForMode,
  urlForTypeAndMode,
  type TransactionMode,
} from "@/components/listings/typeSlug";
import { LISTINGS_PAGE_SIZE } from "@/components/listings/paginate";
import { getFilterConfig } from "@/components/listings/filterConfig";
import type { MainExtraKey } from "@/components/listings/filterConfig";

function isMainExtraFilled(filters: Filters, mainExtra: MainExtraKey): boolean {
  switch (mainExtra) {
    case "bedrooms":
      return filters.bedroomsMin != null || filters.bedroomsMax != null;
    case "surface":
      return filters.surfaceMin != null || filters.surfaceMax != null;
    case "landSurface":
      return (
        filters.landSurfaceMin != null || filters.landSurfaceMax != null
      );
    case "units":
      return filters.unitsMin != null || filters.unitsMax != null;
  }
}

const EMPTY_TYPED_FILTERS: Omit<Filters, "types"> = (() => {
  const { types: _ignored, ...rest } = EMPTY_FILTERS;
  void _ignored;
  return rest;
})();

export function ListingsPage({
  mode,
  fixedType,
  h1,
  subtitle,
  breadcrumb,
  basePath,
  initialPage,
  showSeoText,
}: {
  mode: TransactionMode;
  fixedType: ListingType | null;
  h1: string;
  subtitle: string;
  breadcrumb: { label: string; href?: string }[];
  basePath: string;
  initialPage: number;
  showSeoText: boolean;
}) {
  const router = useRouter();
  const initial = useMemo<Filters>(
    () => ({
      ...EMPTY_TYPED_FILTERS,
      types: fixedType ? [fixedType] : [],
    }),
    [fixedType],
  );
  const [filters, setFilters] = useState<Filters>(initial);
  const [sort, setSort] = useState<SortKey>("recent");
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFilters(initial);
  }, [initial]);

  const handleFiltersChange = (next: Filters) => {
    const currentType = filters.types[0] ?? null;
    const nextType = next.types[0] ?? null;
    if (currentType !== nextType) {
      router.push(urlForTypeAndMode(mode, nextType));
      return;
    }
    setFilters(next);
    if (initialPage !== 1) {
      router.replace(basePath, { scroll: false });
    }
  };

  const results = useMemo(() => {
    const byMode = listings.filter(
      (l) =>
        isTypeAllowedForMode(l.type, mode) &&
        (mode === "vente" ? l.salePrice > 0 : l.monthlyRent > 0),
    );
    const filtered = applyFilters(byMode, filters, mode);
    return applySort(filtered, sort, mode);
  }, [filters, sort, mode]);

  const mainFieldsFilled = useMemo(() => {
    const config = getFilterConfig(mode, fixedType);
    const cityFilled = filters.cities.length > 0;
    const typeFilled = fixedType != null || filters.types.length > 0;
    const budgetFilled =
      filters.priceMin != null || filters.priceMax != null;
    const extraFilled = isMainExtraFilled(filters, config.mainExtra);
    return cityFilled && typeFilled && budgetFilled && extraFilled;
  }, [filters, mode, fixedType]);

  const pageCount = Math.max(1, Math.ceil(results.length / LISTINGS_PAGE_SIZE));
  const page = Math.min(Math.max(initialPage, 1), pageCount);
  const visible = useMemo(
    () =>
      results.slice((page - 1) * LISTINGS_PAGE_SIZE, page * LISTINGS_PAGE_SIZE),
    [results, page],
  );

  useEffect(() => {
    if (initialPage > pageCount) {
      router.replace(basePath, { scroll: false });
    }
  }, [initialPage, pageCount, basePath, router]);

  const previousPage = useRef(initialPage);
  useEffect(() => {
    if (previousPage.current === initialPage) return;
    previousPage.current = initialPage;
    requestAnimationFrame(() => {
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [initialPage]);

  return (
    <>
      <Header />
      <main className="flex-1 bg-bg">
        <section className="relative bg-ink-deep text-white overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-ink via-ink-deep to-ink-darker pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative max-w-[1480px] mx-auto px-6 lg:px-10 pt-[96px] md:pt-[120px] lg:pt-[132px] pb-8 lg:pb-12">
            <nav aria-label="Fil d'Ariane" className="mb-5">
              <ol className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-white/55">
                {breadcrumb.map((b, i) => {
                  const isLast = i === breadcrumb.length - 1;
                  return (
                    <li key={i} className="flex items-center gap-1.5">
                      {i > 0 && (
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                          className="text-white/35"
                        >
                          <path d="M9 6l6 6-6 6" />
                        </svg>
                      )}
                      {b.href && !isLast ? (
                        <a
                          href={b.href}
                          className="hover:text-white transition-colors"
                        >
                          {b.label}
                        </a>
                      ) : (
                        <span className={isLast ? "text-white font-semibold" : ""}>
                          {b.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div>
                <h1 className="text-3xl lg:text-[44px] font-extrabold tracking-tight leading-[1.05] text-white text-balance">
                  {h1}
                  <span className="text-accent">.</span>
                </h1>
                {showSeoText && (
                  <p className="mt-3 text-base text-white/70 leading-relaxed max-w-[640px]">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <FiltersBar
          filters={filters}
          onFiltersChange={handleFiltersChange}
          resultCount={results.length}
          mode={mode}
          fixedType={fixedType}
        />

        <QuickRefineBar
          chips={getQuickRefineChips(mode, fixedType)}
          filters={filters}
          onFiltersChange={handleFiltersChange}
          mode={mode}
          sort={sort}
          onSortChange={setSort}
          resultCount={results.length}
        />

        <section className="bg-bg">
          <div
            ref={gridRef}
            className="max-w-[1480px] mx-auto px-6 lg:px-10 py-8 lg:py-12 scroll-mt-[160px] md:scroll-mt-[180px]"
          >
            {results.length === 0 ? (
              <EmptyState
                onReset={() => {
                  router.push(basePathForMode(mode));
                }}
              />
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                  {visible.map((l) => (
                    <PropertyCard
                      key={l.id}
                      listing={l}
                      mode={mode}
                      layout="grid"
                    />
                  ))}
                </div>
                <Pagination
                  page={page}
                  pageCount={pageCount}
                  basePath={basePath}
                />
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="py-20 text-center">
      <div className="mx-auto w-14 h-14 grid place-items-center rounded-full bg-accent/10 text-accent mb-5">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      </div>
      <h2 className="text-xl font-extrabold text-ink tracking-tight mb-2">
        Aucun bien ne correspond à votre recherche
      </h2>
      <p className="text-[14px] text-ink/65 mb-6 max-w-[420px] mx-auto leading-relaxed">
        Essayez d&apos;élargir vos critères, ou réinitialisez les filtres pour
        voir toute notre sélection.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center h-11 px-6 rounded-full bg-ink text-white text-[13px] font-bold tracking-[.15em] uppercase hover:opacity-90 transition-opacity"
      >
        Réinitialiser
      </button>
    </div>
  );
}
