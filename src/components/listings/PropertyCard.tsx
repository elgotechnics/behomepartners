"use client";

import Image from "next/image";
import { formatPrice, pebColors, type Listing } from "@/data/listings";
import { useFavorite } from "./useFavorites";

export type CardMode = "vente" | "location";

const CAROUSEL_WRAPPER =
  "snap-start flex-shrink-0 w-[calc(100vw-3rem)] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] xl:w-[calc((100%-72px)/4)] min-w-[280px] max-w-[460px] sm:max-w-none";
const GRID_WRAPPER = "w-full";

const BASE_WRAPPER =
  "group relative bg-gradient-to-b from-white to-paper border border-hairline rounded-[14px] overflow-hidden ring-1 ring-inset ring-white/80 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-20px_rgba(15,23,42,0.25)] hover:border-ink/15 cursor-pointer";

export function PropertyCard({
  listing,
  mode = "vente",
  layout = "grid",
}: {
  listing: Listing;
  mode?: CardMode;
  layout?: "grid" | "carousel";
}) {
  const price = mode === "vente" ? listing.salePrice : listing.monthlyRent;

  type FeatureItem = { icon: React.ReactNode; label: string };
  const extraFeatures: FeatureItem[] = listing.features
    .map<FeatureItem | null>((f) => {
      if (/garage/i.test(f)) return { icon: <GarageIcon />, label: "Garage" };
      if (/parking/i.test(f))
        return { icon: <ParkingIcon />, label: "Parking" };
      if (/jardin/i.test(f)) return { icon: <GardenIcon />, label: "Jardin" };
      if (/terrasse/i.test(f))
        return { icon: <TerraceIcon />, label: "Terrasse" };
      if (/balcon/i.test(f)) return { icon: <BalconyIcon />, label: "Balcon" };
      return null;
    })
    .filter((x): x is FeatureItem => x !== null)
    .slice(0, 2);

  const coreFeatures: { icon: React.ReactNode; label: string }[] = [
    { icon: <SurfaceIcon />, label: `${listing.surface} m²` },
    { icon: <BedIcon />, label: `${listing.bedrooms} ch.` },
    { icon: <BathIcon />, label: `${listing.bathrooms} sdb` },
    ...extraFeatures,
  ];

  const wrapper = `${BASE_WRAPPER} ${
    layout === "carousel" ? CAROUSEL_WRAPPER : GRID_WRAPPER
  }`;

  const cover =
    listing.images && listing.images.length > 0
      ? listing.images[0]
      : listing.image;
  const altBase = `${listing.imageAlt} ${
    mode === "vente" ? "à vendre" : "à louer"
  }`;

  return (
    <article data-card className={wrapper}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={cover}
          alt={altBase}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <PebBadge rating={listing.peb} />
        </div>
        <FavoriteButton id={listing.id} mode={mode} />
      </div>

      <div
        className={
          layout === "carousel"
            ? "px-4 pt-4 pb-3.5 lg:px-5 lg:pt-5 lg:pb-4 xl:px-4 xl:pt-4 xl:pb-3.5"
            : "px-4 pt-4 pb-3.5 lg:px-5 lg:pt-5 lg:pb-4"
        }
      >
        <h3 className="sr-only">
          {listing.type} à {listing.city} {formatPrice(price)}
        </h3>
        <div
          className={
            layout === "carousel"
              ? "flex items-start justify-between gap-3 mb-3 lg:mb-4 xl:mb-3"
              : "flex items-start justify-between gap-3 mb-3 lg:mb-4"
          }
        >
          <div className="min-w-0">
            <p
              className={
                layout === "carousel"
                  ? "text-[18px] lg:text-[22px] xl:text-[18px] font-extrabold tracking-tight text-ink leading-tight"
                  : "text-[18px] lg:text-[22px] font-extrabold tracking-tight text-ink leading-tight"
              }
            >
              {listing.type}
            </p>
            <p
              className={
                layout === "carousel"
                  ? "text-[14px] lg:text-[15px] xl:text-[13px] text-muted leading-snug mt-1"
                  : "text-[14px] lg:text-[15px] text-muted leading-snug mt-1"
              }
            >
              {listing.city}
              {listing.postalCode && <span> · {listing.postalCode}</span>}
            </p>
          </div>
          <p
            className={
              layout === "carousel"
                ? "text-[22px] lg:text-[26px] xl:text-[20px] font-extrabold tracking-tight text-accent leading-tight whitespace-nowrap"
                : "text-[22px] lg:text-[26px] font-extrabold tracking-tight text-accent leading-tight whitespace-nowrap"
            }
          >
            {formatPrice(price)}
            {mode === "location" && (
              <span
                className={
                  layout === "carousel"
                    ? "text-[13px] lg:text-[14px] xl:text-[12px] font-semibold text-muted ml-1"
                    : "text-[13px] lg:text-[14px] font-semibold text-muted ml-1"
                }
              >
                /mois
              </span>
            )}
          </p>
        </div>
        <div
          className={
            layout === "carousel"
              ? "grid grid-cols-5 items-center text-[13px] lg:text-[14px] xl:text-[11.5px] font-medium text-ink/80 border-t border-grid pt-2.5 lg:pt-3 xl:pt-2.5"
              : "grid grid-cols-5 items-center text-[13px] lg:text-[14px] font-medium text-ink/80 border-t border-grid pt-2.5 lg:pt-3"
          }
        >
          {coreFeatures.map((f, i) => (
            <span
              key={i}
              className={
                layout === "carousel"
                  ? "flex items-center gap-1 lg:gap-1.5 xl:gap-1 whitespace-nowrap"
                  : "flex items-center gap-1 lg:gap-1.5 whitespace-nowrap"
              }
            >
              <span
                className={
                  layout === "carousel" ? "text-accent xl:[&_svg]:w-[13px] xl:[&_svg]:h-[13px]" : "text-accent"
                }
              >
                {f.icon}
              </span>
              <span>{f.label}</span>
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ─── Favorite button (LocalStorage backed) ─── */

function FavoriteButton({ id, mode }: { id: string; mode: CardMode }) {
  const { active, toggle } = useFavorite(id, mode);
  return (
    <button
      type="button"
      aria-label={active ? "Retirer des favoris" : "Ajouter aux favoris"}
      aria-pressed={active}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle();
      }}
      data-listing-id={id}
      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-[0_4px_12px_-2px_rgba(15,23,42,0.25)] hover:bg-white transition-colors"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={active ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-colors duration-200 ${
          active ? "text-accent" : "text-ink"
        }`}
        aria-hidden
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
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

/* ─── Icons ─── */

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

function ParkingIcon() {
  return (
    <svg {...iconBase}>
      <path d="M22 6H2C2 5.06812 2 4.60218 2.15224 4.23463C2.35523 3.74458 2.74458 3.35523 3.23463 3.15224C3.60218 3 4.06812 3 5 3H19C19.9319 3 20.3978 3 20.7654 3.15224C21.2554 3.35523 21.6448 3.74458 21.8478 4.23463C22 4.60218 22 5.06812 22 6Z" />
      <path d="M22 6V21M2 6V21" />
      <path d="M16 19V21M8 19V21" />
      <path d="M7.5 14L7.74254 13.0299C8.10632 11.5747 8.28821 10.8472 8.83073 10.4236C9.37325 10 10.1232 10 11.6231 10H12.3769C13.8768 10 14.6267 10 15.1693 10.4236C15.7118 10.8472 15.8937 11.5747 16.2575 13.0299L16.5 14" />
      <path d="M17 14H7C6.44772 14 6 14.4477 6 15V18C6 18.5523 6.44772 19 7 19H17C17.5523 19 18 18.5523 18 18V15C18 14.4477 17.5523 14 17 14Z" />
      <path d="M8.5 16.49V16.5" />
      <path d="M15.5 16.49V16.5" />
    </svg>
  );
}

function GarageIcon() {
  return (
    <svg {...iconBase}>
      <path d="M3 21V9.5L12 4L21 9.5V21" />
      <path d="M6 21V12H18V21" />
      <path d="M6 16H18" />
      <path d="M2 21H22" />
    </svg>
  );
}

function GardenIcon() {
  return (
    <svg {...iconBase}>
      <path d="M14.5 11.5C14.5 11.5 12 13.5 12 17" />
      <path d="M10.063 9.06301C11.3123 7.8137 11.3123 5.78815 10.063 4.53884C8.17794 2.65376 4.03078 3.03078 4.03078 3.03078C4.03078 3.03078 3.65376 7.17794 5.53884 9.06301C6.78815 10.3123 8.8137 10.3123 10.063 9.06301Z" />
      <path d="M14.8031 11.1969C15.874 12.2677 17.6102 12.2677 18.681 11.1969C20.2968 9.58109 19.9736 6.02638 19.9736 6.02638C19.9736 6.02638 16.4189 5.70322 14.8031 7.319C13.7323 8.38985 13.7323 10.126 14.8031 11.1969Z" />
      <path d="M10 9.5C10 9.5 12 12 12 16.9993" />
      <path d="M21 21C18.8012 18.5471 15.5841 17 12 17C8.41592 17 5.19883 18.5471 3 21" />
    </svg>
  );
}

function TerraceIcon() {
  return (
    <svg {...iconBase}>
      <path d="M3 11C3 7 7 4 12 4C17 4 21 7 21 11" />
      <path d="M3 11H21" />
      <path d="M12 4V22" />
      <path d="M9 22H15" />
    </svg>
  );
}

function BalconyIcon() {
  return (
    <svg {...iconBase}>
      <path d="M5 4V13" />
      <path d="M19 4V13" />
      <path d="M5 4H19" />
      <path d="M2 13H22" />
      <path d="M2 19H22" />
      <path d="M6 13V19" />
      <path d="M10 13V19" />
      <path d="M14 13V19" />
      <path d="M18 13V19" />
    </svg>
  );
}

