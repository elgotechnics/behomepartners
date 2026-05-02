"use client";
import React from "react";
import Link from "next/link";

/* ============================================================
   Données partagées
   ============================================================ */
const navLinks = [
  { label: "À vendre", href: "#listings" },
  { label: "À louer", href: "#listings" },
  { label: "Services", href: "#services", hasMega: true },
  { label: "À propos", href: "#about" },
  { label: "Jobs", href: "/jobs" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Vente",
    desc: "Mettre en valeur, négocier, conclure.",
    href: "/services/vente",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 12l9-9 9 9" />
        <path d="M5 10v10h14V10" />
      </svg>
    ),
  },
  {
    title: "Location",
    desc: "Trouver le locataire idéal, sereinement.",
    href: "/services/location",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V4h8v3" />
      </svg>
    ),
  },
  {
    title: "Estimation",
    desc: "Connaître la juste valeur de votre bien.",
    href: "/services/estimation",
    badge: "Gratuit",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3v18" />
        <path d="M5 8l7-5 7 5" />
        <path d="M5 16l7 5 7-5" />
      </svg>
    ),
  },
  {
    title: "Gestion locative",
    desc: "Déléguer, encaisser, dormir tranquille.",
    href: "/services/gestion-locative",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Investir",
    desc: "Construire votre patrimoine immobilier.",
    href: "/services/investir",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 17l6-6 4 4 7-7" />
        <path d="M14 8h6v6" />
      </svg>
    ),
  },
  {
    title: "Marketing immobilier",
    desc: "Photo, vidéo, mise en récit du bien.",
    href: "/services/marketing-immobilier",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M2 8l10-5 10 5-10 5L2 8z" />
        <path d="M2 16l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const agencies = [
  { city: "Nivelles", address: "Avenue du Centenaire 53 bte 4 · 1400", phone: "+32 67 84 12 84", tel: "+3267841284" },
  { city: "Braine-l'Alleud", address: "Chaussée de Tubize 11 · 1420", phone: "+32 2 385 12 84", tel: "+3223851284" },
];

const useScrolled = (threshold = 12) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
};

/* ============================================================
   Variante A — "Glass Editorial"
   Bg blanc translucide + backdrop-blur, mega-menu illustré,
   mini-search inline, CTA split.
   ============================================================ */
export function HeaderVariantA() {
  const [megaOpen, setMegaOpen] = React.useState(false);
  const [estimateOpen, setEstimateOpen] = React.useState(false);
  const scrolled = useScrolled();

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-2xl border-b border-black/[0.06] shadow-[0_4px_24px_-12px_rgba(13,15,42,0.12)]"
          : "bg-white/70 backdrop-blur-xl border-b border-white/30"
      }`}
    >
      <div className="mx-auto max-w-[1720px] px-6 lg:px-12 xl:px-20 2xl:px-32">
        <div className="flex h-20 items-center gap-8">
          <Link href="/" aria-label="Be Home Partners" className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logos/horizontal/BeHome_logo_horizontal.svg"
              alt="Be Home Partners"
              className="h-11 w-auto"
            />
          </Link>

          {/* Mini-search inline */}
          <div className="hidden xl:flex items-center gap-2 flex-1 max-w-[460px]">
            <div className="group flex w-full items-center gap-3 rounded-full bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-white focus-within:ring-2 focus-within:ring-accent/30 px-5 h-11 transition-all">
              <svg className="text-ink/60 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <input
                type="text"
                placeholder="Trouver un bien · Nivelles, Waterloo…"
                className="flex-1 bg-transparent text-[14px] text-ink placeholder:text-ink/55 focus:outline-none"
              />
              <kbd className="hidden 2xl:inline-flex items-center justify-center h-6 px-1.5 rounded-md bg-white/80 ring-1 ring-inset ring-black/[0.08] text-[10px] font-bold text-ink/55 tracking-wider">⌘K</kbd>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-1 ml-auto">
            {navLinks.map((l) => (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => l.hasMega && setMegaOpen(true)}
                onMouseLeave={() => l.hasMega && setMegaOpen(false)}
              >
                <Link
                  href={l.href}
                  className="relative inline-flex items-center gap-1.5 h-10 px-3.5 text-[14px] font-semibold text-ink/80 hover:text-ink transition-colors group"
                >
                  {l.label}
                  {l.hasMega && (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={`transition-transform ${megaOpen ? "rotate-180" : ""}`}>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                  <span className="pointer-events-none absolute left-3.5 right-3.5 -bottom-px h-[2px] origin-center scale-x-0 bg-accent group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </nav>

          {/* CTA split-button */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <a
              href="tel:+3267841284"
              aria-label="Appeler"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-ink transition-colors"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </a>
            <div className="relative inline-flex rounded-full bg-accent text-white shadow-[0_8px_24px_-8px_rgba(159,30,67,0.6)] hover:shadow-[0_12px_32px_-8px_rgba(159,30,67,0.7)] transition-shadow">
              <a
                href="#estimation"
                className="inline-flex items-center h-11 px-5 pr-3 text-[13px] font-bold tracking-wide"
              >
                Estimer mon bien
              </a>
              <button
                type="button"
                onClick={() => setEstimateOpen((v) => !v)}
                aria-label="Plus d'options"
                aria-expanded={estimateOpen}
                className="inline-flex items-center justify-center w-9 h-11 border-l border-white/20 hover:bg-white/10 rounded-r-full transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={`transition-transform ${estimateOpen ? "rotate-180" : ""}`}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {estimateOpen && (
                <div className="absolute right-0 top-full mt-2 w-[260px] rounded-2xl bg-white text-ink ring-1 ring-inset ring-black/[0.08] shadow-2xl p-2 z-50">
                  <a href="#estimation" className="block px-4 py-3 rounded-xl hover:bg-black/[0.04] transition-colors">
                    <div className="text-[14px] font-bold">Estimation gratuite</div>
                    <div className="text-[12px] text-ink/60 mt-0.5">Réponse sous 24h, sans engagement.</div>
                  </a>
                  <a href="#estimation-rdv" className="block px-4 py-3 rounded-xl hover:bg-black/[0.04] transition-colors">
                    <div className="text-[14px] font-bold">Visite d'expertise</div>
                    <div className="text-[12px] text-ink/60 mt-0.5">Un agent se déplace chez vous.</div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mega-menu Services */}
        {megaOpen && (
          <div
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
            className="absolute left-0 right-0 top-full bg-white/95 backdrop-blur-2xl border-y border-black/[0.06] shadow-[0_24px_60px_-20px_rgba(13,15,42,0.18)]"
          >
            <div className="mx-auto max-w-[1720px] px-6 lg:px-12 xl:px-20 2xl:px-32 py-10">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-3">
                  <div className="text-[10px] tracking-[.25em] uppercase text-accent font-bold mb-3">Nos services</div>
                  <div className="text-[28px] font-extrabold leading-[1.1] tracking-tight text-ink mb-2">Six expertises<br/>au service de votre projet.</div>
                  <p className="text-[13px] text-ink/60 leading-relaxed">Une équipe pluridisciplinaire qui couvre vente, location, estimation, gestion, investissement et marketing immobilier.</p>
                </div>
                <div className="col-span-12 lg:col-span-9 grid grid-cols-2 lg:grid-cols-3 gap-2">
                  {services.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="group relative flex items-start gap-4 p-4 rounded-2xl hover:bg-black/[0.03] transition-colors"
                    >
                      <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-accent/10 text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                        {s.icon}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[15px] font-bold text-ink">{s.title}</span>
                          {s.badge && <span className="text-[10px] font-bold tracking-wider uppercase bg-accent/10 text-accent px-2 py-0.5 rounded-full">{s.badge}</span>}
                        </div>
                        <div className="text-[12.5px] text-ink/60 mt-0.5 leading-snug">{s.desc}</div>
                      </div>
                      <svg className="absolute top-4 right-4 text-ink/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M5 12h14" />
                        <path d="M13 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ============================================================
   Variante B — "Floating Capsule"
   Header flottant en pill rounded-full sur fond crème,
   ⌘K command, CTA glow.
   ============================================================ */
export function HeaderVariantB() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="bg-[#F7F4EE] pt-5 pb-2 sticky top-0 z-40">
      <div className="mx-auto max-w-[1480px] px-4 lg:px-6">
        <header className="relative">
          <div className="flex items-center gap-3 rounded-full bg-white ring-1 ring-inset ring-black/[0.06] shadow-[0_8px_32px_-12px_rgba(13,15,42,0.18)] pl-3 pr-3 h-16">
            <Link href="/" aria-label="Be Home Partners" className="shrink-0 px-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logos/horizontal/BeHome_logo_horizontal.svg"
                alt="Be Home Partners"
                className="h-9 w-auto"
              />
            </Link>

            <div className="h-7 w-px bg-black/10 hidden md:block" />

            <nav className="hidden lg:flex items-center gap-0.5 flex-1">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="inline-flex items-center gap-1 h-10 px-3.5 rounded-full text-[13.5px] font-semibold text-ink/75 hover:text-ink hover:bg-black/[0.04] transition-colors"
                >
                  {l.label}
                  {l.hasMega && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </Link>
              ))}
            </nav>

            {/* ⌘K command palette trigger */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="hidden md:inline-flex items-center gap-2.5 h-10 px-3 pr-2 rounded-full bg-black/[0.04] hover:bg-black/[0.07] text-ink/70 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <span className="text-[13px] font-medium">Rechercher</span>
              <kbd className="inline-flex items-center justify-center h-6 px-1.5 rounded-md bg-white ring-1 ring-inset ring-black/[0.08] text-[10px] font-bold text-ink/55 tracking-wider">⌘K</kbd>
            </button>

            <div className="hidden md:flex items-center gap-1.5">
              <a
                href="tel:+3267841284"
                aria-label="Appeler"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-ink transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </a>
              <a
                href="#estimation"
                className="relative inline-flex items-center h-10 px-5 rounded-full bg-ink text-white text-[13px] font-bold tracking-wide hover:bg-ink-darker transition-colors overflow-hidden group"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative">Estimer mon bien</span>
                <svg className="relative ml-2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </header>

        {open && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] bg-ink/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <div
              className="w-full max-w-[640px] mx-4 rounded-2xl bg-white shadow-2xl ring-1 ring-inset ring-black/[0.06] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 px-5 h-14 border-b border-black/[0.06]">
                <svg className="text-ink/50" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
                <input
                  autoFocus
                  type="text"
                  placeholder="Rechercher un bien, un service, une page…"
                  className="flex-1 bg-transparent text-[15px] text-ink placeholder:text-ink/45 focus:outline-none"
                />
                <kbd className="text-[11px] text-ink/50 bg-black/[0.04] rounded px-2 py-1 font-mono">esc</kbd>
              </div>
              <div className="p-2">
                <div className="text-[10px] tracking-[.2em] uppercase font-bold text-ink/45 px-3 py-2">Suggestions</div>
                {["Maison · Nivelles", "Appartement · Braine-l'Alleud", "Estimation gratuite", "Nous contacter"].map((s) => (
                  <button key={s} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-black/[0.04] text-[14px] text-ink text-left">
                    <svg className="text-ink/40" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14"/><path d="M13 5l7 7-7 7"/></svg>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   Variante C — "Bandeau Institutionnel"
   Top-strip bordeaux (contact agences) + nav blanche large,
   mega-menu plein largeur avec featured property.
   ============================================================ */
export function HeaderVariantC() {
  const [megaOpen, setMegaOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      {/* Top strip */}
      <div className="bg-ink-darker text-white/90 text-[12px]">
        <div className="mx-auto max-w-[1720px] px-6 lg:px-12 xl:px-20 2xl:px-32">
          <div className="flex items-center justify-between h-9">
            <div className="hidden md:flex items-center gap-5">
              <span className="inline-flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="tracking-wide">Agences ouvertes · Lun–Sam 9h–18h</span>
              </span>
              <span className="text-white/30">·</span>
              <span className="tracking-wide">★ 4,6/5 sur 579 avis</span>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              {agencies.map((a) => (
                <a key={a.tel} href={`tel:${a.tel}`} className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <span className="text-white/55 text-[10px] tracking-[.2em] uppercase font-bold">{a.city}</span>
                  <span className="font-semibold tabular-nums">{a.phone}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-black/[0.06]">
        <div className="mx-auto max-w-[1720px] px-6 lg:px-12 xl:px-20 2xl:px-32">
          <div className="flex items-center h-24 gap-10">
            <Link href="/" aria-label="Be Home Partners" className="shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logos/horizontal/BeHome_logo_horizontal.svg"
                alt="Be Home Partners"
                className="h-14 w-auto"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {navLinks.map((l) => (
                <div
                  key={l.label}
                  className="relative"
                  onMouseEnter={() => l.hasMega && setMegaOpen(true)}
                  onMouseLeave={() => l.hasMega && setMegaOpen(false)}
                >
                  <Link
                    href={l.href}
                    className="relative inline-flex items-center gap-1 h-10 px-4 text-[14px] font-semibold tracking-wide text-ink/85 hover:text-ink uppercase transition-colors"
                  >
                    <span className="text-[13px]">{l.label}</span>
                    {l.hasMega && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={`transition-transform ${megaOpen ? "rotate-180" : ""}`}>
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="#search"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full ring-1 ring-inset ring-black/10 text-ink hover:bg-black/[0.04] transition-colors"
                aria-label="Rechercher"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
              </a>
              <a
                href="#estimation"
                className="inline-flex items-center h-11 px-6 rounded-sm bg-accent text-white text-[12px] font-bold tracking-[.18em] uppercase hover:bg-accent-deep transition-colors"
              >
                Estimer mon bien
              </a>
            </div>
          </div>
        </div>

        {/* Mega-menu plein largeur */}
        {megaOpen && (
          <div
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
            className="absolute left-0 right-0 top-full bg-white border-t border-black/[0.06] shadow-[0_24px_60px_-20px_rgba(13,15,42,0.18)]"
          >
            <div className="mx-auto max-w-[1720px] px-6 lg:px-12 xl:px-20 2xl:px-32 py-12">
              <div className="grid grid-cols-12 gap-10">
                <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-x-8 gap-y-6">
                  {services.map((s) => (
                    <a key={s.href} href={s.href} className="group flex items-start gap-4 border-b border-black/[0.06] pb-5 hover:border-accent/40 transition-colors">
                      <span className="text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform">{s.icon}</span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[16px] font-bold text-ink group-hover:text-accent transition-colors">{s.title}</span>
                          {s.badge && <span className="text-[10px] font-bold tracking-wider uppercase bg-accent/10 text-accent px-2 py-0.5 rounded-full">{s.badge}</span>}
                        </div>
                        <div className="text-[13px] text-ink/60 mt-1">{s.desc}</div>
                      </div>
                      <svg className="text-ink/25 group-hover:text-accent group-hover:translate-x-0.5 transition-all mt-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M5 12h14" />
                        <path d="M13 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
                <div className="col-span-12 lg:col-span-5">
                  <div className="text-[10px] tracking-[.25em] uppercase text-accent font-bold mb-3">À la une</div>
                  <a href="#estimation" className="group block relative rounded-2xl overflow-hidden bg-ink-darker text-white p-7 h-full min-h-[260px]">
                    <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_70%_30%,#9F1E43_0%,transparent_60%)]" />
                    <div className="relative">
                      <div className="text-[10px] tracking-[.25em] uppercase font-bold text-accent mb-2">Service signature</div>
                      <h3 className="text-[26px] font-extrabold leading-[1.1] tracking-tight mb-3">Connaissez la vraie valeur de votre bien.</h3>
                      <p className="text-[13px] text-white/70 leading-relaxed mb-6">Estimation gratuite par un expert, basée sur les transactions réelles de votre quartier. Réponse sous 24h.</p>
                      <div className="inline-flex items-center gap-2 text-[12px] tracking-[.18em] font-bold uppercase text-white group-hover:text-accent transition-colors">
                        Démarrer l'estimation
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="group-hover:translate-x-1 transition-transform">
                          <path d="M5 12h14" />
                          <path d="M13 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
