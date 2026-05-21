"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/components/ui/use-scroll";
import { useFavorites } from "@/components/listings/useFavorites";

type MegaKey = "vente" | "location" | "services";

type NavLink = {
  label: string;
  href: string;
  mega?: MegaKey;
};

const navLinks: NavLink[] = [
  { label: "À vendre", href: "/a-vendre", mega: "vente" },
  { label: "À louer", href: "/a-louer", mega: "location" },
  { label: "Services", href: "/services", mega: "services" },
  { label: "Agences", href: "/agences" },
  { label: "Réalisations", href: "/references" },
  { label: "Jobs", href: "/jobs" },
  { label: "Contact", href: "/contact" },
];

const HouseTypeIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 11.99V14.5C3 17.8 3 19.45 4.03 20.47C5.05 21.5 6.7 21.5 10 21.5H14C17.3 21.5 18.95 21.5 19.97 20.47C21 19.45 21 17.8 21 14.5V11.99C21 10.31 21 9.47 20.64 8.74C20.29 8.01 19.62 7.5 18.3 6.46L16.3 4.91C14.23 3.3 13.2 2.5 12 2.5C10.8 2.5 9.77 3.3 7.7 4.91L5.7 6.46C4.38 7.5 3.71 8.01 3.36 8.74C3 9.47 3 10.31 3 11.99Z" />
    <path d="M15 21.5V16.5C15 15.09 15 14.38 14.56 13.94C14.12 13.5 13.41 13.5 12 13.5C10.59 13.5 9.88 13.5 9.44 13.94C9 14.38 9 15.09 9 16.5V21.5" />
  </svg>
);

const ApartmentIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 22V5C3 3.5 3.5 3 5 3H13C14.5 3 15 3.5 15 5V22" />
    <path d="M15 9H19C20.5 9 21 9.5 21 11V22" />
    <path d="M2 22H22" />
    <path d="M6.5 8H7.5M6.5 12H7.5M6.5 16H7.5" />
    <path d="M10.5 8H11.5M10.5 12H11.5M10.5 16H11.5" />
    <path d="M17 13H18M17 17H18" />
    <path d="M9 22V18C9 17.5 9.5 17 10 17C10.5 17 11 17.5 11 18V22" />
  </svg>
);

const TerrainIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 6H19V18H5Z" strokeDasharray="2.5 2.5" />
    <circle cx="5" cy="6" r="1.6" fill="currentColor" stroke="none" />
    <circle cx="19" cy="6" r="1.6" fill="currentColor" stroke="none" />
    <circle cx="5" cy="18" r="1.6" fill="currentColor" stroke="none" />
    <circle cx="19" cy="18" r="1.6" fill="currentColor" stroke="none" />
    <path d="M2 21H22" />
  </svg>
);

const BureauIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
    <path d="M14 22V8C14 5.17 14 3.76 13.12 2.88C12.24 2 10.83 2 8 2C5.17 2 3.76 2 2.88 2.88C2 3.76 2 5.17 2 8V16C2 18.83 2 20.24 2.88 21.12C3.76 22 5.17 22 8 22H14Z" />
    <path d="M6.5 11H5.5M10.5 11H9.5M6.5 7H5.5M6.5 15H5.5M10.5 7H9.5M10.5 15H9.5" />
    <path d="M18.5 15H17.5M18.5 11H17.5" />
    <path d="M18 8H14V22H18C19.89 22 20.83 22 21.41 21.41C22 20.83 22 19.89 22 18V12C22 10.11 22 9.17 21.41 8.59C20.83 8 19.89 8 18 8Z" />
  </svg>
);

const CommerceIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M2 10V20C2 20.5 2.5 21 3 21H21C21.5 21 22 20.5 22 20V10" />
    <path d="M2 10L4 4C4 3.5 4.5 3 5 3H19C19.5 3 20 3.5 20 4L22 10" />
    <path d="M2 10H22" />
    <path d="M7 10V8M12 10V8M17 10V8" />
    <path d="M9 21V15C9 14.5 9.5 14 10 14H14C14.5 14 15 14.5 15 15V21" />
  </svg>
);

const IndustrialIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M2 21V11L8 14V11L14 14V8L22 11V21H2Z" />
    <path d="M5 18H7M11 18H13M17 18H19" />
  </svg>
);

const GarageIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 21V9.5L12 4L21 9.5V21" />
    <path d="M6 21V12H18V21" />
    <path d="M6 16H18" />
    <path d="M2 21H22" />
  </svg>
);

const BuildingIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 22V3.5C4 3 4.5 2.5 5 2.5H19C19.5 2.5 20 3 20 3.5V22" />
    <path d="M2 22H22" />
    <path d="M8 7H10M8 11H10M8 15H10" />
    <path d="M14 7H16M14 11H16M14 15H16" />
    <path d="M10 22V18C10 17.5 10.5 17 11 17H13C13.5 17 14 17.5 14 18V22" />
  </svg>
);

const propertyTypesSale = [
  { label: "Maison", slug: "maison", icon: HouseTypeIcon },
  { label: "Appartement", slug: "appartement", icon: ApartmentIcon },
  { label: "Terrain", slug: "terrain", icon: TerrainIcon },
  { label: "Bureau", slug: "bureau", icon: BureauIcon },
  { label: "Commerce", slug: "commerce", icon: CommerceIcon },
  { label: "Industriel", slug: "industriel", icon: IndustrialIcon },
  { label: "Garage / parking", slug: "garage-parking", icon: GarageIcon },
  { label: "Immeuble de rapport", slug: "immeuble-de-rapport", icon: BuildingIcon },
] as const;

const propertyTypesRent = [
  { label: "Maison", slug: "maison", icon: HouseTypeIcon },
  { label: "Appartement", slug: "appartement", icon: ApartmentIcon },
  { label: "Bureau", slug: "bureau", icon: BureauIcon },
  { label: "Commerce", slug: "commerce", icon: CommerceIcon },
] as const;

const HomeIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 11.99V14.5C3 17.8 3 19.45 4.03 20.47C5.05 21.5 6.7 21.5 10 21.5H14C17.3 21.5 18.95 21.5 19.97 20.47C21 19.45 21 17.8 21 14.5V11.99C21 10.31 21 9.47 20.64 8.74C20.29 8.01 19.62 7.5 18.3 6.46L16.3 4.91C14.23 3.3 13.2 2.5 12 2.5C10.8 2.5 9.77 3.3 7.7 4.91L5.7 6.46C4.38 7.5 3.71 8.01 3.36 8.74C3 9.47 3 10.31 3 11.99Z" />
    <path d="M15 21.5V16.5C15 15.09 15 14.38 14.56 13.94C14.12 13.5 13.41 13.5 12 13.5C10.59 13.5 9.88 13.5 9.44 13.94C9 14.38 9 15.09 9 16.5V21.5" />
  </svg>
);

const KeyIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M15.5 14.5C18.81 14.5 21.5 11.81 21.5 8.5C21.5 5.19 18.81 2.5 15.5 2.5C12.19 2.5 9.5 5.19 9.5 8.5C9.5 9.38 9.69 10.22 10.03 10.97L2.5 18.5V21.5H5.5V19.5H7.5V17.5H9.5L13.03 13.97C13.78 14.31 14.62 14.5 15.5 14.5Z" />
    <path d="M17.5 6.5L16.5 7.5" />
  </svg>
);

const OfficeIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
    <path d="M14 22V8C14 5.17 14 3.76 13.12 2.88C12.24 2 10.83 2 8 2C5.17 2 3.76 2 2.88 2.88C2 3.76 2 5.17 2 8V16C2 18.83 2 20.24 2.88 21.12C3.76 22 5.17 22 8 22H14Z" />
    <path d="M6.5 11H5.5M10.5 11H9.5M6.5 7H5.5M6.5 15H5.5M10.5 7H9.5M10.5 15H9.5" />
    <path d="M18.5 15H17.5M18.5 11H17.5" />
    <path d="M18 8H14V22H18C19.89 22 20.83 22 21.41 21.41C22 20.83 22 19.89 22 18V12C22 10.11 22 9.17 21.41 8.59C20.83 8 19.89 8 18 8Z" />
  </svg>
);

const ChartIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 4V14C3 16.83 3 18.24 3.88 19.12C4.76 20 6.17 20 9 20H21" />
    <path d="M6 14L9.25 10.75C9.89 10.11 10.22 9.78 10.59 9.68C10.86 9.6 11.14 9.6 11.41 9.68C11.78 9.78 12.11 10.11 12.75 10.75C13.39 11.39 13.72 11.72 14.09 11.82C14.36 11.9 14.64 11.9 14.91 11.82C15.28 11.72 15.61 11.39 16.25 10.75L20 7" />
  </svg>
);

const PromoIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M14.93 2.91L8.27 6.10C7.76 6.35 7.21 6.41 6.66 6.29C6.29 6.21 6.11 6.16 5.96 6.15C4.14 5.94 3 7.38 3 9.04V9.96C3 11.62 4.14 13.06 5.96 12.85C6.11 12.84 6.29 12.79 6.66 12.71C7.21 12.59 7.76 12.65 8.27 12.90L14.93 16.09C16.45 16.82 17.22 17.19 18.07 16.90C18.92 16.62 19.21 16 19.80 14.78C21.40 11.41 21.40 7.59 19.80 4.22C19.21 3 18.92 2.38 18.07 2.10C17.22 1.81 16.45 2.18 14.93 2.91Z" />
    <path d="M11.46 20.77L9.97 22C6.61 19.33 7.02 18.06 7.02 13H8.15C8.61 15.86 9.70 17.22 11.19 18.20C12.12 18.80 12.31 20.07 11.46 20.77Z" />
    <path d="M7.5 12.5V6.5" />
  </svg>
);

const services = [
  {
    title: "Vente",
    desc: "Vendre votre bien dans les meilleures conditions.",
    href: "/services/vente",
    icon: HomeIcon,
  },
  {
    title: "Location",
    desc: "Trouver un locataire sérieux pour votre bien.",
    href: "/services/location",
    icon: KeyIcon,
  },
  {
    title: "Gestion locative",
    desc: "Confier la gestion complète de votre bien.",
    href: "/services/gestion-locative",
    icon: OfficeIcon,
  },
  {
    title: "Investir",
    desc: "Construire votre patrimoine immobilier.",
    href: "/services/investissement",
    icon: ChartIcon,
  },
  {
    title: "Promotion immobilière",
    desc: "Valoriser et commercialiser votre projet.",
    href: "/services/promotion-immobiliere",
    icon: PromoIcon,
  },
];

const agencies = [
  { city: "Nivelles", address: "Avenue du Centenaire 53 bte 4 · 1400", phone: "+32 67 84 12 84", tel: "+3267841284" },
  { city: "Braine-l'Alleud", address: "Chaussée de Tubize 11 · 1420", phone: "+32 2 385 12 84", tel: "+3223851284" },
];

const estimationOptions = [
  {
    title: "Estimation en ligne",
    desc: "Réponse instantanée.",
    href: "/estimation/en-ligne",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3" />
      </svg>
    ),
  },
  {
    title: "Estimation par un agent",
    desc: "Un expert se déplace chez vous.",
    href: "/estimation/expert",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
    ),
  },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [megaKey, setMegaKey] = React.useState<MegaKey | null>(null);
  const [estimateOpen, setEstimateOpen] = React.useState(false);
  const [phoneOpen, setPhoneOpen] = React.useState(false);
  const [mobileMegaOpen, setMobileMegaOpen] = React.useState<MegaKey | null>(null);
  const [mobileEstimateOpen, setMobileEstimateOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const favorites = useFavorites();
  const favoritesCount = mounted ? favorites.length : 0;
  const phoneRef = React.useRef<HTMLDivElement>(null);
  const mobilePhoneRef = React.useRef<HTMLDivElement>(null);
  const estimateRef = React.useRef<HTMLDivElement>(null);
  const megaCloseTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrolled = useScroll(12);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const openMega = React.useCallback((key: MegaKey) => {
    if (megaCloseTimer.current) {
      clearTimeout(megaCloseTimer.current);
      megaCloseTimer.current = null;
    }
    setMegaKey(key);
  }, []);

  const closeMega = React.useCallback(() => {
    if (megaCloseTimer.current) clearTimeout(megaCloseTimer.current);
    megaCloseTimer.current = setTimeout(() => setMegaKey(null), 120);
  }, []);

  const cancelClose = React.useCallback(() => {
    if (megaCloseTimer.current) {
      clearTimeout(megaCloseTimer.current);
      megaCloseTimer.current = null;
    }
  }, []);

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        phoneOpen &&
        !phoneRef.current?.contains(t) &&
        !mobilePhoneRef.current?.contains(t)
      )
        setPhoneOpen(false);
      if (estimateOpen && !estimateRef.current?.contains(t)) setEstimateOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPhoneOpen(false);
        setEstimateOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", onKey);
    };
  }, [phoneOpen, estimateOpen]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        open ? "p-0 md:p-3" : "p-2 md:p-3",
      )}
    >
      <div
        className={cn(
          "relative w-full max-w-[1480px] mx-auto transition-all duration-300",
          open
            ? "bg-white border-b border-black/[0.06] shadow-[0_4px_24px_-12px_rgba(13,15,42,0.12)] px-4 md:rounded-[20px] md:ring-1 md:ring-black/[0.08] md:border-0 md:shadow-[0_18px_50px_-20px_rgba(13,15,42,0.18)] md:px-8 lg:px-12"
            : cn(
                "rounded-[20px] ring-1 ring-black/[0.08] px-4 md:px-8 lg:px-12",
                scrolled
                  ? "bg-white/85 backdrop-blur-2xl shadow-[0_12px_40px_-16px_rgba(13,15,42,0.22)]"
                  : "bg-white/95 backdrop-blur-xl shadow-[0_18px_50px_-20px_rgba(13,15,42,0.18)]",
              ),
        )}
      >
        <div className="grid grid-cols-[auto_1fr_auto] md:flex h-16 md:h-20 items-center md:gap-6 lg:gap-8">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden justify-self-start inline-flex h-10 w-10 items-center justify-center rounded-md bg-white ring-1 ring-inset ring-hairline text-ink hover:bg-bg transition-colors"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <a
            href="/"
            aria-label="Be Home Partners — accueil"
            className="flex items-center justify-self-center md:justify-self-auto shrink-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logos/horizontal/BeHome_logo_horizontal.svg"
              alt="Be Home Partners"
              className={cn("h-10 w-auto md:transition-all", scrolled ? "md:h-12" : "md:h-14")}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1 ml-auto">
            {navLinks.map((l) => {
              const simpleList: { label: string; href: string; icon: React.ReactNode }[] | null =
                l.mega === "vente"
                  ? propertyTypesSale.map((t) => ({ label: t.label, href: `/a-vendre/${t.slug}`, icon: t.icon }))
                  : l.mega === "location"
                    ? propertyTypesRent.map((t) => ({ label: t.label, href: `/a-louer/${t.slug}`, icon: t.icon }))
                    : l.mega === "services"
                      ? services.map((s) => ({ label: s.title, href: s.href, icon: s.icon }))
                      : null;
              const eyebrowLabel =
                l.mega === "vente"
                  ? "Biens à vendre"
                  : l.mega === "location"
                    ? "Biens à louer"
                    : "Nos services";
              const footerLabel =
                l.mega === "services"
                  ? "Voir tous nos services"
                  : "Voir toute la sélection";
              const footerHref =
                l.mega === "services" ? "/services" : l.href;
              return (
                <div
                  key={l.label}
                  className="relative"
                  onMouseEnter={() => l.mega && openMega(l.mega)}
                  onMouseLeave={() => l.mega && closeMega()}
                >
                  <a
                    href={l.href}
                    className="inline-flex items-center gap-1.5 h-10 px-3 xl:px-3.5 rounded-xl text-[13.5px] xl:text-[15px] 2xl:text-[16px] font-semibold text-ink/80 hover:bg-black/[0.04] hover:text-ink transition-colors whitespace-nowrap"
                  >
                    {l.label}
                    {l.mega && (
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
                        className={cn("transition-transform", megaKey === l.mega && "rotate-180")}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    )}
                  </a>
                  {simpleList && megaKey === l.mega && (
                    <div
                      onMouseEnter={cancelClose}
                      onMouseLeave={closeMega}
                      className="absolute left-0 top-full pt-2 z-50"
                    >
                      <div
                        className="bg-white shadow-[0_24px_60px_-20px_rgba(13,15,42,0.18)] rounded-2xl ring-1 ring-black/[0.06] overflow-hidden"
                        style={{ width: simpleList.length > 6 ? 460 : 260 }}
                      >
                        <div className="px-4 pt-3.5 pb-2">
                          <div className="text-[10px] font-bold tracking-[.22em] uppercase text-ink/45">
                            {eyebrowLabel}
                          </div>
                        </div>
                        <div
                          className={cn(
                            "px-2 pb-2",
                            simpleList.length > 6
                              ? "grid grid-cols-2"
                              : "flex flex-col",
                          )}
                        >
                          {simpleList.map((t) => (
                            <a
                              key={t.href}
                              href={t.href}
                              className="group flex items-center gap-3 px-2.5 py-2 rounded-lg hover:bg-ink/[0.035] transition-colors"
                            >
                              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-bg text-ink/65 shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                                {t.icon}
                              </span>
                              <span className="flex-1 text-[14px] font-semibold text-ink whitespace-nowrap">
                                {t.label}
                              </span>
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden
                                className="text-ink/20 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-accent transition-all duration-200"
                              >
                                <path d="M9 6l6 6-6 6" />
                              </svg>
                            </a>
                          ))}
                        </div>
                        <div className="border-t border-hairline">
                          <a
                            href={footerHref}
                            className="group flex items-center justify-between px-4 py-3 text-[12.5px] font-bold tracking-[.06em] text-accent hover:bg-accent/[0.04] transition-colors"
                          >
                            <span>{footerLabel}</span>
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
                              className="transition-transform group-hover:translate-x-0.5"
                            >
                              <path d="M9 6l6 6-6 6" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2 shrink-0 ml-auto lg:ml-0">
            <a
              href="/favoris"
              aria-label={
                favoritesCount > 0
                  ? `Mes favoris (${favoritesCount})`
                  : "Mes favoris"
              }
              className="relative inline-flex items-center justify-center w-11 h-11 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-ink transition-colors"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill={favoritesCount > 0 ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={favoritesCount > 0 ? "text-accent" : ""}
                aria-hidden
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {favoritesCount > 0 && (
                <span
                  aria-hidden
                  className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-accent text-white text-[10px] font-bold leading-none flex items-center justify-center tabular-nums ring-2 ring-white"
                >
                  {favoritesCount > 99 ? "99+" : favoritesCount}
                </span>
              )}
            </a>

            <span aria-hidden className="w-px h-6 bg-hairline mx-1" />

            <div className="relative" ref={phoneRef}>
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={phoneOpen}
                aria-label="Nous appeler"
                onClick={() => setPhoneOpen((v) => !v)}
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-ink transition-colors"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </button>
              {phoneOpen && (
                <div role="menu" className="absolute right-0 top-full z-[60] mt-2 w-[280px] rounded-2xl border border-black/[0.06] bg-white p-2 shadow-xl">
                  <div className="px-2 py-1.5 text-[10px] tracking-[.2em] uppercase font-bold text-ink/55">Appeler une agence</div>
                  {agencies.map((a) => (
                    <a
                      key={a.tel}
                      href={`tel:${a.tel}`}
                      role="menuitem"
                      onClick={() => setPhoneOpen(false)}
                      className="flex flex-col gap-0.5 rounded-xl px-3 py-2.5 hover:bg-black/[0.04] transition-colors"
                    >
                      <span className="text-sm font-bold text-ink">{a.city}</span>
                      <span className="text-xs text-ink/60">{a.address}</span>
                      <span className="text-sm font-semibold text-accent mt-0.5">{a.phone}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="relative inline-flex rounded-[14px] bg-accent text-white shadow-[0_8px_24px_-8px_rgba(159,30,67,0.6)] hover:brightness-110 transition-[filter]" ref={estimateRef}>
              <a
                href="/estimation"
                className="inline-flex items-center h-11 pl-5 pr-3 text-[13px] font-bold tracking-wide rounded-l-[14px]"
              >
                Estimer mon bien
              </a>
              <button
                type="button"
                onClick={() => setEstimateOpen((v) => !v)}
                aria-haspopup="menu"
                aria-label="Plus d'options d'estimation"
                aria-expanded={estimateOpen}
                className="inline-flex items-center justify-center w-9 h-11 border-l border-white/20 hover:bg-white/10 rounded-r-[14px] transition-colors"
              >
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
                  className={cn("transition-transform", estimateOpen && "rotate-180")}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                role="menu"
                aria-hidden={!estimateOpen}
                className={cn(
                  "absolute right-0 top-full mt-2 w-[300px] rounded-2xl bg-white text-ink ring-1 ring-inset ring-black/[0.08] shadow-2xl p-2 z-50 transition-[opacity,transform] duration-150 ease-out origin-top-right",
                  estimateOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none",
                )}
              >
                {estimationOptions.map((o) => (
                  <a
                    key={o.title}
                    href={o.href}
                    role="menuitem"
                    tabIndex={estimateOpen ? 0 : -1}
                    onClick={() => setEstimateOpen(false)}
                    className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-black/[0.04]"
                  >
                    <span className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0 group-hover:bg-accent group-hover:text-white">
                      {o.icon}
                    </span>
                    <div className="min-w-0">
                      <div className="text-[14px] font-bold">{o.title}</div>
                      <div className="text-[12px] text-ink/60 mt-0.5">{o.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden justify-self-end flex items-center gap-2">
            <a
              href="/favoris"
              aria-label={
                favoritesCount > 0
                  ? `Mes favoris (${favoritesCount})`
                  : "Mes favoris"
              }
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-ink transition-colors"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill={favoritesCount > 0 ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={favoritesCount > 0 ? "text-accent" : ""}
                aria-hidden
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {favoritesCount > 0 && (
                <span
                  aria-hidden
                  className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-1 rounded-full bg-accent text-white text-[9px] font-bold leading-none flex items-center justify-center tabular-nums ring-2 ring-white"
                >
                  {favoritesCount > 99 ? "99+" : favoritesCount}
                </span>
              )}
            </a>
            <div className="relative" ref={mobilePhoneRef}>
            <button
              type="button"
              onClick={() => setPhoneOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={phoneOpen}
              aria-label="Nous appeler"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-ink transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </button>
            {phoneOpen && (
              <div role="menu" className="absolute right-0 top-full z-[60] mt-2 w-[280px] rounded-2xl border border-black/[0.06] bg-white p-2 shadow-xl">
                <div className="px-2 py-1.5 text-[10px] tracking-[.2em] uppercase font-bold text-ink/55">Appeler une agence</div>
                {agencies.map((a) => (
                  <a
                    key={a.tel}
                    href={`tel:${a.tel}`}
                    role="menuitem"
                    onClick={() => setPhoneOpen(false)}
                    className="flex flex-col gap-0.5 rounded-xl px-3 py-2.5 hover:bg-black/[0.04] transition-colors"
                  >
                    <span className="text-sm font-bold text-ink">{a.city}</span>
                    <span className="text-xs text-ink/60">{a.address}</span>
                    <span className="text-sm font-semibold text-accent mt-0.5">{a.phone}</span>
                  </a>
                ))}
              </div>
            )}
            </div>
          </div>
        </div>

      </div>

      <div className={cn("fixed top-16 right-0 bottom-0 left-0 z-50 bg-white md:hidden", open ? "block" : "hidden")}>
        <div className="flex h-full w-full flex-col overflow-y-auto">
          <nav className="flex flex-col px-6 pt-4">
            {navLinks.map((link) => {
              if (!link.mega) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-5 text-[22px] font-extrabold tracking-tight text-ink border-b border-hairline"
                  >
                    <span>{link.label}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="text-ink/35">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </a>
                );
              }
              const isOpen = mobileMegaOpen === link.mega;
              const base = link.mega === "vente" ? "/a-vendre" : link.mega === "location" ? "/a-louer" : null;
              return (
                <div key={link.label} className="border-b border-hairline">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileMegaOpen((cur) =>
                        cur === link.mega ? null : (link.mega as MegaKey),
                      )
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between py-5 text-[22px] font-extrabold tracking-tight text-ink"
                  >
                    <span>{link.label}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                      className={cn("transition-transform text-ink/50", isOpen && "rotate-180")}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {isOpen && link.mega === "services" && (
                    <div className="flex flex-col pb-4 -mt-1">
                      {services.map((s) => (
                        <a
                          key={s.href}
                          href={s.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between py-2.5 pl-3 text-[15px] font-medium text-ink/75 hover:text-ink"
                        >
                          <span>{s.title}</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="text-ink/35">
                            <path d="M9 6l6 6-6 6" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  )}
                  {isOpen && base && (
                    <div className="flex flex-col pb-4 -mt-1">
                      {(link.mega === "vente" ? propertyTypesSale : propertyTypesRent).map((t) => (
                        <a
                          key={t.slug}
                          href={`${base}/${t.slug}`}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 py-2.5 pl-3 text-[15px] font-medium text-ink/75 hover:text-ink"
                        >
                          <span className="text-ink/55">{t.icon}</span>
                          <span className="flex-1">{t.label}</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="text-ink/35">
                            <path d="M9 6l6 6-6 6" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <a
              href="/favoris"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-5 text-[22px] font-extrabold tracking-tight text-ink border-b border-hairline"
            >
              <span className="flex items-center gap-3">
                Favoris
                {favoritesCount > 0 && (
                  <span className="inline-flex items-center justify-center min-w-[24px] h-[24px] px-1.5 rounded-full bg-accent text-white text-[12px] font-bold leading-none tabular-nums">
                    {favoritesCount > 99 ? "99+" : favoritesCount}
                  </span>
                )}
              </span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="text-ink/35">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </a>

            <div className="border-b border-hairline">
              <button
                type="button"
                onClick={() => setMobileEstimateOpen((v) => !v)}
                aria-expanded={mobileEstimateOpen}
                className="flex w-full items-center justify-between py-5 text-[22px] font-extrabold tracking-tight text-accent"
              >
                <span>Estimer mon bien</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className={cn("transition-transform text-accent/60", mobileEstimateOpen && "rotate-180")}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {mobileEstimateOpen && (
                <div className="flex flex-col pb-4 -mt-1">
                  {estimationOptions.map((o) => (
                    <a
                      key={o.title}
                      href={o.href}
                      onClick={() => setOpen(false)}
                      className="flex items-start gap-3 py-3 pl-3"
                    >
                      <span className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                        {o.icon}
                      </span>
                      <div>
                        <div className="text-[15px] font-bold text-ink">{o.title}</div>
                        <div className="text-[13px] text-ink/60">{o.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

        </div>
      </div>
    </header>
  );
}
