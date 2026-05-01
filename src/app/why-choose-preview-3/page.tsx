"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/Footer";

type Engagement = {
  title: string;
  body: string;
  icon: ReactNode;
};

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

const engagements: Engagement[] = [
  {
    title: "Agence de proximité",
    body: "Une parfaite connaissance du marché à Braine-l'Alleud, Waterloo, Nivelles, Genappe, Ittre, Seneffe et alentours avec des estimations basées sur les prix réellement pratiqués.",
    icon: PinIcon,
  },
  {
    title: "Suivi mensuel structuré",
    body: "Un point chaque mois pour analyser les visites, les retours des acquéreurs et ajuster la stratégie si nécessaire afin que vous sachiez toujours où vous en êtes.",
    icon: CalendarIcon,
  },
  {
    title: "Reportage photo professionnel",
    body: "Un photographe professionnel pour valoriser votre bien et capter immédiatement l'attention en ligne afin de générer plus de visites qualifiées.",
    icon: CameraIcon,
  },
  {
    title: "Accompagnement administratif complet",
    body: "Nous prenons en charge l'ensemble des démarches jusqu'à la signature de l'acte afin de garantir un suivi rigoureux tout au long du processus.",
    icon: FileIcon,
  },
  {
    title: "Marketing 360°",
    body: "Au-delà des photos : prises de vue par drone, visites virtuelles, plans 2D/3D et home staging pour valoriser votre bien sous tous les angles.",
    icon: VideoIcon,
  },
  {
    title: "Discrétion garantie",
    body: "Vente off-market possible, sans diffusion publique sur les portails, dans un cercle restreint d'acquéreurs ciblés et qualifiés.",
    icon: ShieldIcon,
  },
];

const PATRON_IMAGE = "/assets/images/patron.webp";

export default function WhyChoosePreview3() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <VariantSticky />
      </main>
      <Footer />
    </>
  );
}

function CenteredHead() {
  return (
    <div className="max-w-[720px] mx-auto text-center mb-12 lg:mb-14">
      <div className="text-[11px] tracking-[.2em] uppercase text-accent font-bold mb-3">
        Notre engagement
      </div>
      <h2 className="text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.05] mb-5 text-ink">
        Pourquoi nous confier votre bien
      </h2>
      <p className="text-base text-ink/70 leading-relaxed">
        Depuis plus de 15 ans, nous accompagnons vendeurs et acquéreurs dans
        le Brabant wallon. Discrétion, confiance et savoir-faire, avec un
        taux de vente sur portefeuille proche de 90%.
      </p>
    </div>
  );
}

function CtaButton() {
  return (
    <div className="text-center mt-12 lg:mt-14">
      <button
        type="button"
        className="inline-block bg-accent text-white text-xs font-bold tracking-wider uppercase rounded-[14px] px-6 py-3 hover:opacity-90 transition-opacity"
      >
        Découvrir l&apos;agence
      </button>
    </div>
  );
}

function VariantSticky() {
  return (
    <section className="bg-white">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 pt-16 pb-20 lg:pb-24">
        <CenteredHead />

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr] xl:grid-cols-[minmax(0,480px)_1fr] gap-10 lg:gap-12 xl:gap-14 items-stretch">
          <div className="relative aspect-[4/5] lg:aspect-auto overflow-hidden rounded-[20px] bg-ink">
            <Image
              src={PATRON_IMAGE}
              alt="Guillaume — fondateur"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover object-[40%_center]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4">
            {engagements.map((eng) => (
              <div
                key={eng.title}
                className="relative rounded-[16px] p-5 lg:p-6 bg-cream border border-hairline hover:bg-white hover:border-accent/30 hover:shadow-[0_18px_50px_-22px_rgba(26,40,69,0.18)] transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-[9px] flex items-center justify-center flex-shrink-0 bg-accent text-white">
                    {eng.icon}
                  </div>
                  <h3 className="text-[15px] font-extrabold text-ink tracking-tight leading-tight">
                    {eng.title}
                  </h3>
                </div>
                <p className="text-[13px] text-ink/70 leading-relaxed">
                  {eng.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <CtaButton />
      </div>
    </section>
  );
}
