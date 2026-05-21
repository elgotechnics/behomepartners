import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Home,
  Key,
  Phone,
  Wallet,
} from "lucide-react";
import { Header } from "@/components/ui/header-2";

export const metadata: Metadata = {
  title: "Hero variants — sandbox",
  robots: { index: false, follow: false },
};

function Label({ index, name }: { index: number; name: string }) {
  return (
    <div className="bg-cream border-y border-hairline">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-3 flex items-center gap-3 text-[11px] tracking-[.22em] uppercase font-bold text-ink/55">
        <span className="grid place-items-center w-6 h-6 rounded-full bg-ink text-white text-[11px] tracking-normal font-extrabold">
          {index}
        </span>
        Variante {index} — {name}
      </div>
    </div>
  );
}

const dot = "inline-block w-1.5 h-1.5 rounded-full bg-accent";

function HeroEditorial() {
  return (
    <section className="relative bg-ink-deep overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-accent/15 blur-[140px] pointer-events-none" />
      <div className="relative max-w-[1480px] mx-auto px-6 lg:px-10 pt-20 pb-14 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-[820px]">
          <p className="flex items-center gap-2.5 text-[11.5px] tracking-[.22em] uppercase font-bold text-white/55">
            <span className={dot} />
            Be Home Partners
          </p>
          <h1 className="mt-6 text-[40px] sm:text-[54px] lg:text-[72px] font-extrabold tracking-tight leading-[1.02] text-white text-balance">
            L&apos;immobilier qui vous ressemble<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 text-[16px] lg:text-[17px] text-white/70 leading-relaxed max-w-[560px]">
            Vente, location, gestion. Un accompagnement personnalisé dans le Brabant wallon et les communes environnantes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-deep text-white px-7 py-3.5 rounded-full font-bold text-[15px] transition-colors"
            >
              Démarrer un projet
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="tel:+3267841284"
              className="inline-flex items-center justify-center gap-2 text-white/85 hover:text-white font-bold text-[15px] underline underline-offset-[6px] decoration-white/30 hover:decoration-white"
            >
              <Phone size={16} />
              067 84 12 84
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[12.5px] font-semibold text-white/55">
            <span>Nivelles</span>
            <span className="w-1 h-1 rounded-full bg-white/25" />
            <span>Braine-l&apos;Alleud</span>
            <span className="w-1 h-1 rounded-full bg-white/25" />
            <span>Plus de 15 ans sur le terrain</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSplitData() {
  const facts = [
    { label: "Agences", value: "Nivelles, Braine-l'Alleud" },
    { label: "Sur le terrain depuis", value: "Plus de 15 ans" },
    { label: "Services", value: "Vente, location, gestion" },
  ];
  return (
    <section className="relative bg-ink-deep">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 pt-20 pb-14 lg:pt-24 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <p className="text-[11.5px] tracking-[.22em] uppercase font-bold text-accent">
              Agence indépendante
            </p>
            <h1 className="mt-5 text-[38px] sm:text-[50px] lg:text-[64px] font-extrabold tracking-tight leading-[1.02] text-white text-balance">
              Votre projet immobilier, pris en main<span className="text-accent">.</span>
            </h1>
            <p className="mt-5 text-[16px] lg:text-[17px] text-white/70 leading-relaxed max-w-[520px]">
              Une agence de proximité pour vous accompagner dans le Brabant wallon et les communes environnantes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-[460px]">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-deep text-white px-6 py-3 rounded-[10px] font-bold text-sm transition-colors"
              >
                Parlons de votre projet
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:+3267841284"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-[10px] font-bold text-sm transition-colors"
              >
                <Phone size={14} />
                Nous appeler
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <ul className="grid gap-px bg-white/10 rounded-[14px] overflow-hidden">
              {facts.map((f) => (
                <li key={f.label} className="bg-ink-deep px-5 py-5">
                  <p className="text-[10.5px] tracking-[.20em] uppercase font-bold text-white/40">
                    {f.label}
                  </p>
                  <p className="mt-1.5 text-[17px] font-extrabold text-white leading-snug">
                    {f.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCenteredChip() {
  return (
    <section className="relative bg-ink-deep overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[460px] bg-[radial-gradient(closest-side,rgba(184,31,58,0.18),transparent)] pointer-events-none" />
      <div className="relative max-w-[1480px] mx-auto px-6 lg:px-10 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 text-center">
        <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-[11.5px] tracking-[.18em] uppercase font-bold text-white/85">
          <span className={dot} />
          Nivelles, Braine-l&apos;Alleud
        </span>
        <h1 className="mt-7 text-[40px] sm:text-[56px] lg:text-[68px] font-extrabold tracking-tight leading-[1.02] text-white text-balance mx-auto max-w-[900px]">
          Vendre, louer, gérer.
          <br className="hidden sm:block" />
          <span className="sm:ml-0"> </span>
          <span className="text-accent">Avec méthode</span>
          <span className="text-white">.</span>
        </h1>
        <p className="mt-6 text-[16px] lg:text-lg text-white/65 leading-relaxed max-w-[560px] mx-auto">
          Une agence de proximité pour votre projet immobilier dans le Brabant wallon et les communes environnantes.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center max-w-[460px] mx-auto">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-deep text-white px-7 py-3.5 rounded-full font-bold text-[15px] transition-colors"
          >
            Démarrer un projet
            <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+3267841284"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-7 py-3.5 rounded-full font-bold text-[15px] transition-colors"
          >
            <Phone size={15} />
            Nous appeler
          </a>
        </div>
      </div>
    </section>
  );
}

function HeroServiceTiles() {
  const tiles = [
    { label: "Vente", desc: "Vendre votre bien", href: "/services/vente", icon: <Home size={20} /> },
    { label: "Location", desc: "Mettre en location", href: "/services/location", icon: <Key size={20} /> },
    { label: "Gestion", desc: "Déléguer le suivi", href: "/services/gestion-locative", icon: <Building2 size={20} /> },
    { label: "Investir", desc: "Construire un patrimoine", href: "/services/investissement", icon: <Wallet size={20} /> },
  ];
  return (
    <section className="relative bg-ink-deep">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 pt-18 pb-12 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-[11.5px] tracking-[.22em] uppercase font-bold text-white/50">
              Be Home Partners
            </p>
            <h1 className="mt-5 text-[36px] sm:text-[46px] lg:text-[54px] font-extrabold tracking-tight leading-[1.02] text-white text-balance">
              Par où commence votre projet<span className="text-accent">?</span>
            </h1>
            <p className="mt-5 text-[16px] text-white/65 leading-relaxed max-w-[400px]">
              Choisissez votre point de départ, ou contactez-nous directement.
            </p>
            <Link
              href="/contact"
              className="mt-6 group inline-flex items-center gap-2 text-accent hover:text-white font-bold text-sm transition-colors"
            >
              Nous écrire
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
            {tiles.map((t) => (
              <Link
                key={t.label}
                href={t.href}
                className="group bg-white/[0.06] hover:bg-white/[0.10] rounded-[14px] p-5 sm:p-6 transition-colors block"
              >
                <span className="grid place-items-center w-11 h-11 rounded-[10px] bg-accent/15 text-accent">
                  {t.icon}
                </span>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[16px] sm:text-[17px] font-extrabold text-white">{t.label}</p>
                    <p className="mt-1 text-[12.5px] sm:text-[13px] text-white/55 leading-snug">{t.desc}</p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-white/40 group-hover:text-accent transition-colors mt-1 shrink-0"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HeroSandboxPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Label index={1} name="Éditorial minimal" />
        <HeroEditorial />
        <Label index={2} name="Split avec faits" />
        <HeroSplitData />
        <Label index={3} name="Centré chip badge" />
        <HeroCenteredChip />
        <Label index={4} name="Tuiles services" />
        <HeroServiceTiles />
      </main>
    </>
  );
}
