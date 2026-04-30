"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { listings, formatPrice, pebColors, type Listing } from "@/data/listings";

type Tab = "vente" | "location";

export function Listings() {
  const [tab, setTab] = useState<Tab>("vente");
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);

  const visible = listings;

  const scroll = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  const goToPage = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>("[data-card]");
    const card = cards[i];
    const first = cards[0];
    if (!card || !first) return;
    track.scrollTo({ left: card.offsetLeft - first.offsetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const cards = track.querySelectorAll<HTMLElement>("[data-card]");
      if (!cards.length) return;
      const cardW = cards[0].offsetWidth + 24;
      const visibleCount = Math.max(1, Math.round(track.clientWidth / cardW));
      const total = Math.max(1, cards.length - visibleCount + 1);
      setPageCount(total);
      const origin = cards[0].offsetLeft;
      let nearest = 0;
      let minDist = Infinity;
      cards.forEach((c, i) => {
        const dist = Math.abs(c.offsetLeft - origin - track.scrollLeft);
        if (dist < minDist) {
          minDist = dist;
          nearest = i;
        }
      });
      setPage(Math.min(nearest, total - 1));
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(track);
    return () => {
      track.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [visible.length]);

  return (
    <section id="listings" className="bg-bg">
      <div className="max-w-[1280px] mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end mb-8">
          <div>
            <div className="text-[11px] tracking-[.2em] uppercase text-accent font-bold mb-2">
              Notre sélection
            </div>
            <h2 className="text-3xl lg:text-[38px] font-extrabold leading-[1.1] tracking-tight mb-3">
              Nos biens du moment
            </h2>
            <p className="text-muted text-[15px] max-w-[520px]">
              Une sélection de biens soigneusement choisis pour vous accompagner
              dans votre projet immobilier.
            </p>
          </div>

          <div className="relative inline-flex justify-self-start p-1 rounded-[14px] bg-white border border-grid shadow-sm overflow-hidden">
            {(["vente", "location"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`relative px-5 py-2.5 text-[13px] font-bold tracking-wider uppercase rounded-[12px] transition-all duration-300 ${
                  tab === t
                    ? "bg-ink text-white shadow-[0_4px_16px_-4px_rgba(15,23,42,0.35)]"
                    : "text-ink/60 hover:text-ink"
                }`}
              >
                {t === "vente" ? "À vendre" : "À louer"}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Précédent"
            className="flex absolute left-2 lg:-left-5 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-12 lg:h-12 rounded-[14px] bg-white border border-hairline items-center justify-center font-bold text-muted shadow-md z-10 hover:text-ink transition-colors"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Suivant"
            className="flex absolute right-2 lg:-right-5 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-12 lg:h-12 rounded-[14px] bg-ink text-white items-center justify-center font-bold shadow-lg z-10 hover:opacity-90 transition-opacity"
          >
            →
          </button>

          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto pt-3 pb-8 -my-1 px-1 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {visible.map((l) => (
              <ListingCard key={l.id} listing={l} mode={tab} />
            ))}
          </div>
        </div>

        <div
          className="flex gap-2 justify-center items-center mt-8"
          role="tablist"
          aria-label="Pagination des biens"
        >
          {Array.from({ length: pageCount }).map((_, i) => {
            const active = i === page;
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Aller à la page ${i + 1}`}
                onClick={() => goToPage(i)}
                className={`group relative h-1.5 rounded-full transition-all duration-500 ease-out ${
                  active
                    ? "w-10 bg-accent"
                    : "w-1.5 bg-ink/15 hover:w-3 hover:bg-ink/35"
                }`}
              >
                {active && (
                  <span className="absolute inset-0 rounded-full bg-accent/30 blur-md -z-10" />
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-8 px-12 pt-10 pb-9 text-center relative overflow-hidden">
          <p className="text-[17px] text-ink max-w-[620px] mx-auto mb-6 leading-relaxed">
            Découvrez l&apos;ensemble de nos biens disponibles à la vente et à
            la location partout en Belgique.
          </p>

          <div className="flex gap-4 justify-center flex-wrap relative">
            <a
              href="#listings"
              className="bg-accent text-white px-8 py-4 inline-flex items-center gap-3.5 font-semibold text-xs tracking-[.2em] uppercase rounded-[14px] hover:opacity-90 transition-opacity"
            >
              <span>Biens à vendre</span>
              <span className="text-base">→</span>
            </a>
            <a
              href="#listings"
              className="bg-transparent text-accent border border-accent px-8 py-[15px] inline-flex items-center gap-3.5 font-semibold text-xs tracking-[.2em] uppercase rounded-[14px] hover:bg-accent hover:text-white transition-colors"
            >
              <span>Biens à louer</span>
              <span className="text-base">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ListingCard({
  listing,
  mode,
}: {
  listing: Listing;
  mode: Tab;
}) {
  const price =
    mode === "vente" ? listing.salePrice : listing.monthlyRent;

  const coreFeatures: { icon: React.ReactNode; label: string }[] = [
    { icon: <SurfaceIcon />, label: `${listing.surface} m²` },
    { icon: <BedIcon />, label: `${listing.bedrooms} ch.` },
    { icon: <BathIcon />, label: `${listing.bathrooms} sdb` },
    ...listing.features.map((f) => ({
      icon: <FeatureIcon name={f} />,
      label: f,
    })),
  ];

  return (
    <article
      data-card
      className="group relative snap-start flex-shrink-0 w-[calc((100%-48px)/3)] min-w-[300px] bg-gradient-to-b from-white to-paper border border-hairline rounded-[14px] overflow-hidden ring-1 ring-inset ring-white/80 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-20px_rgba(15,23,42,0.25)] hover:border-ink/15 cursor-pointer"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={listing.image}
          alt={`${listing.imageAlt} — ${mode === "vente" ? "à vendre" : "à louer"}`}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
        />
        <span className="absolute top-3 left-3 bg-accent text-white px-3 py-1.5 font-bold text-[11px] tracking-[.15em] uppercase rounded-sm">
          {listing.type}
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-2.5 mb-1">
          <h3 className="text-xl font-extrabold tracking-tight text-ink">
            {formatPrice(price)}
            {mode === "location" && (
              <span className="text-[13px] font-semibold text-muted ml-1">
                /mois
              </span>
            )}
          </h3>
          <PebBadge rating={listing.peb} />
        </div>
        <div className="text-[13px] text-muted mb-3">
          {listing.city}
          {listing.postalCode && ` · ${listing.postalCode}`}
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-grid pt-3 text-[13px] font-medium text-ink/80">
          {coreFeatures.map((f, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <span className="text-accent">{f.icon}</span>
              <span>{f.label}</span>
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

const iconBase = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function SurfaceIcon() {
  return (
    <svg {...iconBase}>
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

function BedIcon() {
  return (
    <svg {...iconBase}>
      <path d="M22 17.5H2" />
      <path d="M22 21V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V21" />
      <path d="M11 12V10.2134C11 9.83272 10.9428 9.70541 10.6497 9.55538C10.0395 9.24292 9.29865 9 8.5 9C7.70135 9 6.96055 9.24292 6.35025 9.55538C6.05721 9.70541 6 9.83272 6 10.2134L6 12" />
      <path d="M18 12V10.2134C18 9.83272 17.9428 9.70541 17.6497 9.55538C17.0395 9.24292 16.2987 9 15.5 9C14.7013 9 13.9605 9.24292 13.3503 9.55538C13.0572 9.70541 13 9.83272 13 10.2134L13 12" />
      <path d="M21 12V7.36057C21 6.66893 21 6.32311 20.8079 5.99653C20.6157 5.66995 20.342 5.50091 19.7944 5.16283C17.5869 3.79978 14.8993 3 12 3C9.10067 3 6.41314 3.79978 4.20558 5.16283C3.65804 5.50091 3.38427 5.66995 3.19213 5.99653C3 6.32311 3 6.66893 3 7.36057V12" />
    </svg>
  );
}

function BathIcon() {
  return (
    <svg {...iconBase} strokeLinejoin={undefined}>
      <path d="M6 20L5 21M18 20L19 21" />
      <path d="M3 12V13C3 16.2998 3 17.9497 4.02513 18.9749C5.05025 20 6.70017 20 10 20H14C17.2998 20 18.9497 20 19.9749 18.9749C21 17.9497 21 16.2998 21 13V12" />
      <path d="M2 12H22" />
      <path d="M4 12V5.5234C4 4.12977 5.12977 3 6.5234 3C7.64166 3 8.62654 3.73598 8.94339 4.80841L9 5" />
      <path d="M8 6L10.5 4" />
    </svg>
  );
}

function GardenIcon() {
  return (
    <svg {...iconBase}>
      <path d="M14.5 10.5C14.5 10.5 12 12.5 12 15" />
      <path d="M6 15H18" />
      <path d="M7 15L7.50938 18.5657C7.7433 20.2031 7.86026 21.0218 8.42419 21.5109C8.98812 22 9.81514 22 11.4692 22H12.5308C14.1849 22 15.0119 22 15.5758 21.5109C16.1397 21.0218 16.2567 20.2031 16.4906 18.5657L17 15" />
      <path d="M10.063 8.06301C11.3123 6.8137 11.3123 4.78815 10.063 3.53884C8.17794 1.65376 4.03078 2.03078 4.03078 2.03078C4.03078 2.03078 3.65376 6.17794 5.53884 8.06301C6.78815 9.31233 8.8137 9.31233 10.063 8.06301Z" />
      <path d="M14.8031 10.1969C15.874 11.2677 17.6102 11.2677 18.681 10.1969C20.2968 8.58109 19.9736 5.02638 19.9736 5.02638C19.9736 5.02638 16.4189 4.70322 14.8031 6.319C13.7323 7.38985 13.7323 9.12602 14.8031 10.1969Z" />
      <path d="M10 8.5C10 8.5 12 11 12 14.9993" />
    </svg>
  );
}

function GarageIcon() {
  return (
    <svg {...iconBase}>
      <path d="M9.7812 3.09766L5.6718 5.89369C4.3639 6.78359 3.70995 7.22854 3.35498 7.90548C3 8.58242 3 9.38456 3 10.9888V17.9176C3 19.8421 3 20.8043 3.58579 21.4021C4.17157 22 5.11438 22 7 22H17C18.8856 22 19.8284 22 20.4142 21.4021C21 20.8043 21 19.8421 21 17.9176V10.9888C21 9.38456 21 8.58242 20.645 7.90548C20.29 7.22854 19.6361 6.78359 18.3282 5.89369L14.2188 3.09766C13.1433 2.36589 12.6056 2 12 2C11.3944 2 10.8567 2.36589 9.7812 3.09766Z" />
      <path d="M7 22V17C7 15.1144 7 14.1716 7.58579 13.5858C8.17157 13 9.11438 13 11 13H13C14.8856 13 15.8284 13 16.4142 13.5858C17 14.1716 17 15.1144 17 17V22" />
      <path d="M7 16H17" />
      <path d="M7 19H17" />
      <path d="M12.125 7H12M12.25 7C12.25 7.13807 12.1381 7.25 12 7.25C11.8619 7.25 11.75 7.13807 11.75 7C11.75 6.86193 11.8619 6.75 12 6.75C12.1381 6.75 12.25 6.86193 12.25 7Z" />
    </svg>
  );
}

function TerraceIcon() {
  return (
    <svg {...iconBase} strokeLinecap={undefined} strokeLinejoin={undefined}>
      <ellipse cx="12" cy="6.5" rx="10" ry="3" />
      <path d="M12 20.5C12.8284 20.5 13.5898 20.2551 14.1904 19.8455C14.4774 19.6498 14.5909 19.242 14.4189 18.9153C14.0734 18.2595 13.3308 17.5 12 17.5C10.6692 17.5 9.92656 18.2595 9.58115 18.9153C9.40905 19.242 9.52257 19.6498 9.8096 19.8455C10.4102 20.2551 11.1716 20.5 12 20.5Z" />
      <path d="M12 17.5V9.5" />
    </svg>
  );
}

function OfficeIcon() {
  return (
    <svg {...iconBase}>
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="M8 4v16M16 4v16M4 12h16" />
    </svg>
  );
}

function DotIcon() {
  return (
    <svg {...iconBase}>
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const n = name.toLowerCase();
  if (n.includes("jardin")) return <GardenIcon />;
  if (n.includes("garage")) return <GarageIcon />;
  if (n.includes("terrasse") || n.includes("balcon")) return <TerraceIcon />;
  if (n.includes("bureau")) return <OfficeIcon />;
  return <DotIcon />;
}

function PebBadge({ rating }: { rating: keyof typeof pebColors }) {
  return (
    <span
      className="inline-flex items-stretch text-[10px] font-extrabold leading-tight tracking-wider"
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%)",
      }}
    >
      <span className="bg-ink text-white px-2.5 py-[3px]">PEB</span>
      <span
        className="text-white px-3.5 py-[3px] pr-3.5"
        style={{ background: pebColors[rating] }}
      >
        {rating}
      </span>
    </span>
  );
}
