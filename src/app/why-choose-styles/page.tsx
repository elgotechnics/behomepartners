"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/Footer";

/* ─────────── Icônes (réutilisées de WhyChoose) ─────────── */
const PinIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);
const CalendarIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
    <circle cx="12" cy="15" r="1" />
  </svg>
);
const CameraIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 7h3l2-2h6l2 2h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);
const FileIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M9 13h6M9 17h4" />
  </svg>
);
const VideoIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="6" width="14" height="12" rx="2" />
    <path d="M16 10l6-3v10l-6-3z" />
  </svg>
);
const ShieldIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

type Engagement = {
  title: string;
  body: string;
  icon: ReactNode;
  stat: string;
  statLabel: string;
};

const engagements: Engagement[] = [
  { title: "Agence de proximité", body: "Connaissance fine du Brabant wallon et estimations basées sur les prix réels du marché.", icon: PinIcon, stat: "15", statLabel: "ans dans la région" },
  { title: "Suivi mensuel structuré", body: "Un point chaque mois sur les visites, les retours et la stratégie.", icon: CalendarIcon, stat: "12", statLabel: "points par an" },
  { title: "Reportage photo professionnel", body: "Un photographe dédié pour valoriser votre bien et capter l'attention en ligne.", icon: CameraIcon, stat: "100%", statLabel: "des biens shootés" },
  { title: "Accompagnement administratif", body: "Toutes les démarches gérées de A à Z jusqu'à la signature de l'acte.", icon: FileIcon, stat: "A → Z", statLabel: "démarches gérées" },
  { title: "Marketing 360°", body: "Drone, visites virtuelles, plans 2D/3D et home staging pour tout mettre en valeur.", icon: VideoIcon, stat: "5", statLabel: "formats marketing" },
  { title: "Discrétion garantie", body: "Vente off-market possible, dans un cercle restreint d'acquéreurs qualifiés.", icon: ShieldIcon, stat: "Off", statLabel: "market sur demande" },
];

const PATRON_IMAGE = "/assets/images/patron.webp";

/* ─────────── Étiquette de section ─────────── */
function StyleLabel({ n, name, refs }: { n: number; name: string; refs: string }) {
  return (
    <div className="border-t border-hairline bg-bg">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-8 grid md:grid-cols-[120px_1fr] gap-3 md:gap-8 items-baseline">
        <div className="text-[11px] tabular-nums tracking-[.25em] text-accent font-bold">
          STYLE {String(n).padStart(2, "0")}
        </div>
        <div>
          <div className="text-2xl font-extrabold text-ink tracking-tight">{name}</div>
          <div className="text-[12px] text-ink/55 mt-1">Référence : {refs}</div>
        </div>
      </div>
    </div>
  );
}

/* ─────────── Style 1 · Éditorial numéroté (The Modern House / Mansion Global) ─────────── */
function Style1Editorial() {
  return (
    <section className="bg-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 mb-14">
          <div className="text-[11px] tracking-[.25em] uppercase text-accent font-bold pt-2">
            Notre engagement
          </div>
          <h2 className="text-[44px] lg:text-[64px] font-extrabold tracking-tight leading-[1] text-ink">
            Pourquoi nous confier votre bien.
          </h2>
        </div>

        <div className="border-t border-ink/15">
          {engagements.map((e, i) => (
            <article key={e.title} className="group grid lg:grid-cols-[120px_1fr_2fr] gap-6 lg:gap-10 py-8 lg:py-12 border-b border-ink/15 hover:bg-cream/40 transition-colors px-1 lg:px-2">
              <div className="text-[14px] font-bold tabular-nums tracking-[.25em] text-ink/40 group-hover:text-accent transition-colors">
                {String(i + 1).padStart(2, "0")} / 06
              </div>
              <h3 className="text-[24px] lg:text-[28px] font-extrabold leading-tight tracking-tight text-ink">
                {e.title}
              </h3>
              <p className="text-[15px] lg:text-[16px] text-ink/65 leading-relaxed max-w-[560px]">
                {e.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Style 2 · Photo immersive + accordéon (Aman / Engel & Völkers) ─────────── */
function Style2Accordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-cream">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden bg-ink lg:sticky lg:top-28">
            <Image
              src={PATRON_IMAGE}
              alt="Guillaume, fondateur Be Home Partners"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover object-[40%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-[10px] tracking-[.3em] uppercase font-bold text-white/70 mb-2">
                Le fondateur
              </div>
              <div className="text-[20px] font-extrabold text-white tracking-tight">
                Guillaume, à votre écoute depuis 15 ans.
              </div>
            </div>
          </div>

          <div>
            <div className="text-[11px] tracking-[.25em] uppercase text-accent font-bold mb-3">
              Notre engagement
            </div>
            <h2 className="text-[36px] lg:text-[44px] font-extrabold tracking-tight leading-[1.05] text-ink mb-8">
              Six promesses tenues à chaque mandat.
            </h2>
            <div className="border-t border-ink/15">
              {engagements.map((e, i) => {
                const isOpen = open === i;
                return (
                  <div key={e.title} className="border-b border-ink/15">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 py-5 lg:py-6 text-left group"
                    >
                      <div className="flex items-center gap-5">
                        <span className="text-[12px] font-bold tabular-nums tracking-[.2em] text-ink/40 w-7">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className={`text-[18px] lg:text-[20px] font-extrabold tracking-tight transition-colors ${isOpen ? "text-accent" : "text-ink group-hover:text-accent/80"}`}>
                          {e.title}
                        </span>
                      </div>
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ring-1 ring-ink/20 transition-all ${isOpen ? "bg-accent ring-accent text-white rotate-45" : "text-ink/60"}`}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                    <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <p className="pl-12 pr-8 text-[14.5px] text-ink/65 leading-relaxed max-w-[520px]">
                          {e.body}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Style 3 · Carrousel horizontal premium (Linear × Sotheby's) ─────────── */
function Style3HorizontalScroll() {
  return (
    <section className="bg-ink text-white overflow-hidden">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-4">
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-10 lg:mb-12">
          <div className="max-w-[640px]">
            <div className="text-[11px] tracking-[.25em] uppercase text-accent font-bold mb-4">
              Notre engagement
            </div>
            <h2 className="text-[36px] lg:text-[48px] font-extrabold tracking-tight leading-[1.05]">
              Six raisons de nous confier votre bien.
            </h2>
          </div>
          <div className="text-[12px] text-white/55 tracking-wide">
            Faites défiler →
          </div>
        </div>
      </div>

      <div className="overflow-x-auto pb-20 lg:pb-28 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-5 lg:gap-6 px-6 lg:px-10" style={{ paddingLeft: "max(1.5rem, calc((100vw - 1480px) / 2 + 2.5rem))", paddingRight: "max(6rem, calc((100vw - 1480px) / 2 + 6rem))" }}>
          {engagements.map((e, i) => (
            <article
              key={e.title}
              className="group relative shrink-0 w-[320px] lg:w-[360px] xl:w-[400px] aspect-[4/5] rounded-[20px] bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/15 p-7 lg:p-8 flex flex-col hover:border-white/35 transition-all"
            >
              <div className="flex items-start justify-between mb-auto">
                <span className="text-[64px] lg:text-[88px] font-extrabold tabular-nums leading-none text-white/15 group-hover:text-accent transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-white/40 group-hover:text-white transition-colors">
                  {e.icon}
                </span>
              </div>
              <h3 className="text-[22px] lg:text-[26px] font-extrabold tracking-tight leading-[1.15] mb-3 mt-12">
                {e.title}
              </h3>
              <p className="text-[13.5px] text-white/65 leading-relaxed">
                {e.body}
              </p>
              <div className="absolute left-7 right-7 lg:left-8 lg:right-8 bottom-7 lg:bottom-8 h-px bg-white/15 group-hover:bg-accent transition-colors" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Style 4 · Stats-driven (Compass / Knight Frank) ─────────── */
function Style4Stats() {
  return (
    <section className="bg-white">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-[720px] mb-16 lg:mb-20">
          <div className="text-[11px] tracking-[.25em] uppercase text-accent font-bold mb-3">
            Notre engagement, en chiffres
          </div>
          <h2 className="text-[40px] lg:text-[52px] font-extrabold tracking-tight leading-[1.05] text-ink">
            Des promesses, des preuves.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 lg:gap-y-20">
          {engagements.map((e) => (
            <div key={e.title} className="group">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-[64px] lg:text-[80px] font-extrabold tabular-nums leading-[0.9] text-ink tracking-tight group-hover:text-accent transition-colors">
                  {e.stat}
                </span>
                <span className="text-[11px] tracking-[.2em] uppercase font-bold text-ink/45">
                  {e.statLabel}
                </span>
              </div>
              <div className="h-px bg-ink/15 group-hover:bg-accent transition-colors mb-5" />
              <h3 className="text-[18px] lg:text-[20px] font-extrabold tracking-tight text-ink mb-2">
                {e.title}
              </h3>
              <p className="text-[13.5px] text-ink/60 leading-relaxed max-w-[360px]">
                {e.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Style 5 · Magazine asymétrique (The Modern House / Christie's) ─────────── */
function Style5Magazine() {
  return (
    <section className="bg-cream">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Image gauche */}
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-[20px] overflow-hidden bg-ink lg:sticky lg:top-28">
            <Image
              src={PATRON_IMAGE}
              alt="Guillaume, fondateur Be Home Partners"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover object-[40%_center]"
            />
          </div>

          {/* 6 enfants à droite */}
          <div className="lg:col-span-7 lg:max-w-[620px]">
            <div className="text-[11px] tracking-[.25em] uppercase text-accent font-bold mb-3">
              Notre engagement
            </div>
            <h2 className="text-[32px] lg:text-[40px] font-extrabold tracking-tight leading-[1.05] text-ink mb-10">
              Six promesses tenues à chaque mandat.
            </h2>
            <div className="border-t border-ink/15">
              {engagements.map((e, i) => (
                <article key={e.title} className="group grid grid-cols-[48px_1fr] gap-5 py-6 lg:py-7 border-b border-ink/15 hover:pl-2 transition-all duration-300">
                  <div className="text-[12px] font-bold tabular-nums tracking-[.2em] text-ink/40 pt-1.5 group-hover:text-accent transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-[18px] lg:text-[20px] font-extrabold tracking-tight text-ink mb-1.5">
                      {e.title}
                    </h3>
                    <p className="text-[14px] text-ink/60 leading-relaxed max-w-[520px]">
                      {e.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Page ─────────── */
export default function WhyChooseStylesPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-bg pt-32 pb-12">
          <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
            <div className="text-[11px] tracking-[.25em] uppercase text-accent font-bold mb-3">
              Recherche · 5 directions
            </div>
            <h1 className="text-[36px] lg:text-[48px] font-extrabold tracking-tight leading-[1.05] text-ink mb-4 max-w-[860px]">
              Comment les meilleures agences immo design leur section « pourquoi nous ».
            </h1>
            <p className="text-[15px] lg:text-[16px] text-ink/65 leading-relaxed max-w-[700px]">
              Cinq directions inspirées de The Modern House, Christie's, Aman, Compass, Knight Frank, Sotheby's et The Agency. Toutes utilisent les mêmes 6 engagements pour comparer à données égales.
            </p>
          </div>
        </section>

        <StyleLabel n={1} name="Éditorial numéroté" refs="The Modern House (UK), Mansion Global, Studio Lin" />
        <Style1Editorial />

        <StyleLabel n={2} name="Photo immersive + accordéon" refs="Aman Properties, Engel & Völkers, Sotheby's" />
        <Style2Accordion />

        <StyleLabel n={3} name="Carrousel premium horizontal" refs="The Agency RE, Linear (croisement luxe-tech)" />
        <Style3HorizontalScroll />

        <StyleLabel n={4} name="Promesses adossées à des chiffres" refs="Compass, Knight Frank, JLL" />
        <Style4Stats />

        <StyleLabel n={5} name="Magazine asymétrique" refs="The Modern House, Christie's International, NYT Real Estate" />
        <Style5Magazine />
      </main>
      <Footer />
    </>
  );
}
