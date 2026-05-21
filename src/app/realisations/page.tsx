import type { Metadata } from "next";
import { Compass, Handshake, Sparkles } from "lucide-react";
import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/Footer";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { RealisationsGrid } from "@/components/realisations/RealisationsGrid";

export const metadata: Metadata = {
  title: "Biens vendus et loués en Brabant wallon | Be Home Partners",
  description:
    "Découvrez une sélection de biens vendus et loués par Be Home Partners dans le Brabant wallon et ses environs.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    title: "Biens vendus et loués en Brabant wallon | Be Home Partners",
    description:
      "Découvrez une sélection de biens vendus et loués par Be Home Partners dans le Brabant wallon et ses environs.",
    url: "/realisations",
    type: "website",
  },
};

export default function RealisationsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-bg">
        <Hero />
        <GridSection />
        <ApproachSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

/* ───────────────── HERO ───────────────── */

function Hero() {
  return (
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

      <div className="relative max-w-[1480px] mx-auto px-6 lg:px-10 pt-[110px] md:pt-[130px] lg:pt-[140px] pb-12 lg:pb-16">
        <div className="max-w-[760px]">
          <SectionEyebrow tone="dark">Nos réalisations</SectionEyebrow>
          <h1 className="mt-6 text-[36px] sm:text-[44px] lg:text-[54px] font-extrabold tracking-tight leading-[1.05] text-white text-balance">
            Biens vendus et loués
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-5 text-base lg:text-[17px] text-white/75 leading-relaxed max-w-[620px]">
            Un aperçu des biens que nous avons vendus ou loués pour nos
            clients dans le Brabant wallon et ses environs.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── GRID + FILTERS ───────────────── */

function GridSection() {
  return (
    <section className="bg-bg">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 pt-6 lg:pt-8 pb-16 lg:pb-24">
        <RealisationsGrid />
      </div>
    </section>
  );
}

/* ───────────────── NOTRE APPROCHE ───────────────── */

const APPROACH_CARDS: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  text: string;
}[] = [
  {
    icon: Compass,
    title: "Stratégie sur-mesure",
    text: "Estimation, plan de commercialisation et choix des canaux selon le profil du bien et le marché local.",
  },
  {
    icon: Handshake,
    title: "Suivi personnalisé",
    text: "Sélection des candidats, visites, négociation et accompagnement administratif jusqu'à la signature.",
  },
  {
    icon: Sparkles,
    title: "Valorisation",
    text: "Mise en valeur photographique, conseils home staging et présentation soignée pour révéler chaque bien.",
  },
];

function ApproachSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-20 lg:py-32">
        {/* Titre centré, éditorial */}
        <div className="max-w-[720px] mx-auto text-center mb-16 lg:mb-24">
          <div className="inline-flex">
            <SectionEyebrow tone="light">Notre méthode</SectionEyebrow>
          </div>
          <h2 className="mt-5 text-[28px] lg:text-[40px] font-extrabold text-ink tracking-tight leading-[1.08] text-balance">
            Un accompagnement adapté à chaque bien
            <span className="text-accent">.</span>
          </h2>
          <p className="mx-auto mt-5 text-[15.5px] lg:text-[16.5px] text-ink/70 leading-relaxed max-w-[520px]">
            Une approche adaptée à chaque bien, à chaque marché, à chaque
            propriétaire.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {APPROACH_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-cream rounded-[16px] p-6 lg:p-8 ring-1 ring-inset ring-hairline"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-[12px] bg-white text-accent ring-1 ring-inset ring-accent/15 mb-5">
                  <Icon size={20} strokeWidth={1.7} />
                </span>
                <h3 className="text-[17px] lg:text-[19px] font-extrabold text-ink tracking-tight leading-[1.2] mb-2.5">
                  {card.title}
                </h3>
                <p className="text-[14.5px] text-ink/70 leading-relaxed">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── CTA FINAL (layout services standard) ───────────────── */

function FinalCta() {
  return (
    <ServiceCTA
      background="white"
      cta={{
        eyebrow: "Vendre ou louer votre bien",
        title: "Parlons de votre projet immobilier",
        body:
          "Notre équipe vous accompagne pour estimer, commercialiser et valoriser votre bien dans les meilleures conditions.",
        primary: {
          label: "Demander une estimation",
          href: "/estimation",
        },
        secondary: {
          label: "Nous contacter",
          href: "/contact",
        },
      }}
    />
  );
}
