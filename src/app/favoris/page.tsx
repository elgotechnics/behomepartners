"use client";

import { useEffect, useMemo, useState } from "react";
import { Heart } from "lucide-react";
import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/ui/cta-button";
import { listings, type Listing } from "@/data/listings";
import { PropertyCard } from "@/components/listings/PropertyCard";
import {
  useFavorites,
  type FavoriteMode,
} from "@/components/listings/useFavorites";

type Group = {
  mode: FavoriteMode;
  label: string;
  items: Listing[];
};

type TabKey = "all" | FavoriteMode;

export default function FavorisPage() {
  const [mounted, setMounted] = useState(false);
  const favorites = useFavorites();
  const [tab, setTab] = useState<TabKey>("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  const groups = useMemo<Group[]>(() => {
    if (!mounted) return [];
    const byId = new Map(listings.map((l) => [l.id, l]));
    const sale: Listing[] = [];
    const rent: Listing[] = [];
    for (const fav of favorites) {
      const listing = byId.get(fav.id);
      if (!listing) continue;
      if (fav.mode === "vente") sale.push(listing);
      else rent.push(listing);
    }
    return [
      { mode: "vente", label: "À vendre", items: sale },
      { mode: "location", label: "À louer", items: rent },
    ];
  }, [favorites, mounted]);

  const counts = useMemo(() => {
    const sale = groups.find((g) => g.mode === "vente")?.items.length ?? 0;
    const rent = groups.find((g) => g.mode === "location")?.items.length ?? 0;
    return { sale, rent, total: sale + rent };
  }, [groups]);

  const visibleGroups =
    tab === "all" ? groups : groups.filter((g) => g.mode === tab);

  return (
    <>
      <Header />
      <main className="flex-1 bg-bg pt-16 md:pt-20">
        <section className="bg-bg">
          <div className="max-w-[1480px] mx-auto px-6 lg:px-10 pt-12 lg:pt-16 pb-6 lg:pb-8">
            <div className="inline-flex items-center gap-2.5 rounded-md bg-accent/10 ring-1 ring-inset ring-accent/15 px-3 py-1.5">
              <Heart
                size={13}
                strokeWidth={2.4}
                fill="currentColor"
                className="text-accent"
              />
              <span className="text-[10.5px] tracking-[.22em] uppercase font-semibold leading-none text-accent">
                Mes biens
              </span>
            </div>
            <h1 className="mt-5 text-3xl lg:text-[42px] font-extrabold tracking-tight leading-[1.05] text-ink text-balance">
              Mes favoris<span className="text-accent">.</span>
            </h1>
            {mounted && counts.total > 0 ? (
              <p className="mt-4 text-base text-ink/65 leading-relaxed">
                Vous avez {counts.total} bien{counts.total > 1 ? "s" : ""}{" "}
                sauvegardé{counts.total > 1 ? "s" : ""}.
              </p>
            ) : null}
          </div>
        </section>

        <section className="bg-bg">
          <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-8 lg:py-12 pb-20 lg:pb-28">
            {!mounted ? (
              <FavoritesSkeleton />
            ) : counts.total === 0 ? (
              <EmptyState />
            ) : (
              <>
                <FavoritesTabs
                  tab={tab}
                  onTabChange={setTab}
                  counts={counts}
                />
                <div className="space-y-12 lg:space-y-16">
                  {visibleGroups.map((group) => (
                    <FavoriteGroup
                      key={group.mode}
                      group={group}
                      showHeading={tab === "all"}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FavoritesTabs({
  tab,
  onTabChange,
  counts,
}: {
  tab: TabKey;
  onTabChange: (t: TabKey) => void;
  counts: { sale: number; rent: number; total: number };
}) {
  const tabs: { key: TabKey; label: string; count: number }[] = [
    { key: "all", label: "Tout", count: counts.total },
    { key: "vente", label: "À vendre", count: counts.sale },
    { key: "location", label: "À louer", count: counts.rent },
  ];
  return (
    <div
      role="tablist"
      aria-label="Filtrer les favoris"
      className="flex flex-wrap gap-2 mb-8 lg:mb-10"
    >
      {tabs.map((t) => {
        const active = tab === t.key;
        return (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onTabChange(t.key)}
            className={`inline-flex items-center gap-2 h-10 px-4 rounded-full text-[13px] font-semibold transition-all ${
              active
                ? "bg-ink text-white"
                : "bg-white text-ink hover:bg-ink/[0.06]"
            }`}
          >
            <span>{t.label}</span>
            <span
              className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[11px] tabular-nums ${
                active ? "bg-white/20 text-white" : "bg-accent/10 text-accent"
              }`}
            >
              {t.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function FavoriteGroup({
  group,
  showHeading,
}: {
  group: Group;
  showHeading: boolean;
}) {
  const { items, label, mode } = group;
  if (items.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-[14px] text-ink/65 leading-relaxed">
          Aucun favori {label.toLowerCase()} pour le moment.
        </p>
      </div>
    );
  }
  return (
    <div>
      {showHeading && (
        <div className="flex items-center gap-3 mb-5 lg:mb-6">
          <h2 className="text-xl lg:text-2xl font-extrabold tracking-tight text-ink">
            {label}
          </h2>
          <span className="inline-flex items-center h-6 px-2.5 rounded-full bg-accent/10 text-accent text-[12px] font-semibold tabular-nums">
            {items.length}
          </span>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {items.map((l) => (
          <PropertyCard
            key={`${mode}-${l.id}`}
            listing={l}
            mode={mode}
            layout="grid"
          />
        ))}
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="py-16 lg:py-24 text-center max-w-[480px] mx-auto">
      <div className="mx-auto w-20 h-20 grid place-items-center rounded-full bg-accent/10 ring-1 ring-inset ring-accent/15 text-accent mb-7">
        <Heart size={32} strokeWidth={1.8} />
      </div>
      <h2 className="text-2xl lg:text-[28px] font-extrabold text-ink tracking-tight leading-[1.15] mb-3 text-balance">
        Aucun favori pour le moment
      </h2>
      <p className="text-[15px] text-ink/65 mb-9 leading-relaxed">
        Cliquez sur le cœur d&apos;un bien pour le sauvegarder ici et le
        retrouver plus tard.
      </p>
      <div className="flex justify-center">
        <CTAButton href="/a-vendre" variant="primary">
          Découvrir nos biens
        </CTAButton>
      </div>
    </div>
  );
}

function FavoritesSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          aria-hidden
          className="rounded-[14px] bg-white/70 ring-1 ring-inset ring-hairline overflow-hidden"
        >
          <div className="aspect-[4/3] bg-grid animate-pulse" />
          <div className="p-4 space-y-3">
            <div className="h-5 w-1/2 bg-grid rounded animate-pulse" />
            <div className="h-3 w-1/3 bg-grid rounded animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}
