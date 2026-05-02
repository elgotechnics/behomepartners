"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/components/ui/use-scroll";

type NavLink = {
  label: string;
  href: string;
  hasMega?: boolean;
};

const navLinks: NavLink[] = [
  { label: "À vendre", href: "#listings" },
  { label: "À louer", href: "#listings" },
  { label: "Services", href: "#services", hasMega: true },
  { label: "À propos", href: "#about" },
  { label: "Jobs", href: "/jobs" },
  { label: "Contact", href: "#contact" },
];

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

const CalcIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden>
    <path d="M3 10H21" />
    <path d="M15 6L17 6" />
    <path d="M21 13V11C21 6.76 21 4.64 19.68 3.32C18.36 2 16.24 2 12 2C7.76 2 5.64 2 4.32 3.32C3 4.64 3 6.76 3 11V13C3 17.24 3 19.36 4.32 20.68C5.64 22 7.76 22 12 22C16.24 22 18.36 22 19.68 20.68C21 19.36 21 17.24 21 13Z" />
    <path d="M7 14H7.5M11.7 14H12.3M16.5 14H17" strokeLinecap="round" />
    <path d="M7 18H7.5M11.7 18H12.3M16.5 18H17" strokeLinecap="round" />
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
    desc: "Mettre en valeur, négocier, conclure.",
    href: "/services/vente",
    icon: HomeIcon,
  },
  {
    title: "Location",
    desc: "Trouver le locataire idéal, sereinement.",
    href: "/services/location",
    icon: KeyIcon,
  },
  {
    title: "Estimation",
    desc: "Connaître la juste valeur de votre bien.",
    href: "/services/estimation",
    badge: "Gratuit",
    icon: CalcIcon,
  },
  {
    title: "Gestion locative",
    desc: "Déléguer, encaisser, dormir tranquille.",
    href: "/services/gestion-locative",
    icon: OfficeIcon,
  },
  {
    title: "Investir",
    desc: "Construire votre patrimoine immobilier.",
    href: "/services/investir",
    icon: ChartIcon,
  },
  {
    title: "Marketing immobilier",
    desc: "Photo, vidéo, mise en récit du bien.",
    href: "/services/marketing-immobilier",
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
    href: "/estimation/agent",
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
  const [megaOpen, setMegaOpen] = React.useState(false);
  const [estimateOpen, setEstimateOpen] = React.useState(false);
  const [phoneOpen, setPhoneOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const [mobileEstimateOpen, setMobileEstimateOpen] = React.useState(false);
  const phoneRef = React.useRef<HTMLDivElement>(null);
  const mobilePhoneRef = React.useRef<HTMLDivElement>(null);
  const estimateRef = React.useRef<HTMLDivElement>(null);
  const megaCloseTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrolled = useScroll(12);
  const [heroIndex, setHeroIndex] = React.useState(0);

  React.useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ index: number }>).detail;
      if (detail && typeof detail.index === "number") setHeroIndex(detail.index);
    };
    window.addEventListener("hero-variant", handler);
    return () => window.removeEventListener("hero-variant", handler);
  }, []);

  const barMode = heroIndex !== 0;

  const openMega = React.useCallback(() => {
    if (megaCloseTimer.current) {
      clearTimeout(megaCloseTimer.current);
      megaCloseTimer.current = null;
    }
    setMegaOpen(true);
  }, []);

  const closeMega = React.useCallback(() => {
    if (megaCloseTimer.current) clearTimeout(megaCloseTimer.current);
    megaCloseTimer.current = setTimeout(() => setMegaOpen(false), 120);
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
        barMode ? "" : open ? "p-0 md:p-3" : "p-2 md:p-3",
      )}
    >
      <div
        className={cn(
          "relative w-full transition-all duration-300",
          barMode
            ? "bg-white/90 backdrop-blur-2xl border-b border-black/[0.06] shadow-[0_4px_24px_-12px_rgba(13,15,42,0.12)] px-4 md:px-10 lg:px-16 xl:px-24 2xl:px-32"
            : open
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
            {navLinks.map((l) => (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => l.hasMega && openMega()}
                onMouseLeave={() => l.hasMega && closeMega()}
              >
                <a
                  href={l.href}
                  className="inline-flex items-center gap-1.5 h-10 px-3 xl:px-3.5 rounded-xl text-[13.5px] xl:text-[15px] 2xl:text-[16px] font-semibold text-ink/80 hover:bg-black/[0.04] hover:text-ink transition-colors whitespace-nowrap"
                >
                  {l.label}
                  {l.hasMega && (
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
                      className={cn("transition-transform", megaOpen && "rotate-180")}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </a>
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 shrink-0 ml-auto lg:ml-0">
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

            <div className="relative inline-flex rounded-[14px] bg-accent text-white shadow-[0_8px_24px_-8px_rgba(159,30,67,0.6)] hover:shadow-[0_12px_32px_-8px_rgba(159,30,67,0.7)] transition-shadow" ref={estimateRef}>
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
              {estimateOpen && (
                <div role="menu" className="absolute right-0 top-full mt-2 w-[300px] rounded-2xl bg-white text-ink ring-1 ring-inset ring-black/[0.08] shadow-2xl p-2 z-50">
                  {estimationOptions.map((o) => (
                    <a
                      key={o.href}
                      href={o.href}
                      role="menuitem"
                      onClick={() => setEstimateOpen(false)}
                      className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-black/[0.04] transition-colors"
                    >
                      <span className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                        {o.icon}
                      </span>
                      <div className="min-w-0">
                        <div className="text-[14px] font-bold">{o.title}</div>
                        <div className="text-[12px] text-ink/60 mt-0.5">{o.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden justify-self-end relative" ref={mobilePhoneRef}>
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

        {megaOpen && (
          <div
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
            className={cn(
              "absolute left-0 right-0 top-full bg-transparent",
              barMode ? "" : "pt-2 px-2 md:px-3",
            )}
          >
            <div
              className={cn(
                "bg-white shadow-[0_24px_60px_-20px_rgba(13,15,42,0.18)] w-full px-6 lg:px-16 xl:px-24 2xl:px-32 py-10",
                barMode ? "border-y border-black/[0.06]" : "rounded-[20px] ring-1 ring-black/[0.08]",
              )}
            >
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-3">
                  <div className="text-[10px] tracking-[.25em] uppercase text-accent font-bold mb-3">Nos services</div>
                  <div className="text-[26px] font-extrabold leading-[1.1] tracking-tight text-ink mb-2">
                    Six expertises<br />au service de votre projet.
                  </div>
                  <p className="text-[13px] text-ink/60 leading-relaxed">
                    Du premier conseil à la signature, choisissez les services dont vous avez besoin.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-9 grid grid-cols-2 lg:grid-cols-3 gap-2">
                  {services.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="group relative flex items-start gap-4 p-4 rounded-2xl hover:bg-ink/[0.03] transition-colors duration-200"
                    >
                      <span className="inline-flex items-center justify-center text-ink/70 shrink-0 mt-0.5 group-hover:text-accent transition-colors duration-200">
                        {s.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[15px] font-bold text-ink">{s.title}</span>
                          {s.badge && (
                            <span className="text-[10px] font-bold tracking-wider uppercase text-accent">
                              · {s.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-[12.5px] text-ink/55 mt-1 leading-snug">{s.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={cn("fixed top-16 right-0 bottom-0 left-0 z-50 bg-white md:hidden", open ? "block" : "hidden")}>
        <div className="flex h-full w-full flex-col overflow-y-auto">
          <nav className="flex flex-col px-6 pt-4">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div key={link.label} className="border-b border-hairline">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-expanded={mobileServicesOpen}
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
                      className={cn("transition-transform text-ink/50", mobileServicesOpen && "rotate-180")}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
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
                </div>
              ) : (
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
              ),
            )}

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
                      key={o.href}
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
