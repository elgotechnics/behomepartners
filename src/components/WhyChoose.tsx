"use client";

import Image from "next/image";
import { useState } from "react";

type Engagement = {
  title: string;
  body: string;
};

const engagements: Engagement[] = [
  {
    title: "Agence de proximité",
    body: "Une grande maîtrise du marché local : Braine-l'Alleud, Waterloo, Nivelles, Genappe, Ittre, Seneffe et alentours. On connaît les rues, les écoles, les tendances de prix réelles.",
  },
  {
    title: "Visite mensuelle des propriétaires",
    body: "Pendant la commercialisation, nous visitons mensuellement chaque propriétaire pour faire le point : retours, ajustements, stratégie. Pas de silence radio une fois le mandat signé.",
  },
  {
    title: "Reportage photo professionnel",
    body: "Photographie incluse dans nos services : un photographe pro pour valoriser chaque bien comme il le mérite. La première impression se joue en ligne, on ne laisse rien au hasard.",
  },
  {
    title: "Démarches administratives prises en charge",
    body: "Achat ou vente, les démarches sont longues et fastidieuses. On s'en charge. Vous gardez la décision, nous prenons la paperasse — et le suivi jusqu'à la signature de l'acte.",
  },
  {
    title: "Estimation gratuite et sans engagement",
    body: "Une estimation rigoureuse basée sur les ventes récentes, l'état du marché et les spécificités de votre bien. Vous repartez avec une fourchette de prix réaliste — pas de promesse en l'air pour décrocher un mandat.",
  },
];

export function WhyChoose() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="about" className="bg-white relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 pt-12 lg:pt-16 pb-20 lg:pb-24">
        <div className="max-w-[720px] mx-auto text-center mb-16">
          <div className="text-[11px] tracking-[.2em] uppercase text-accent font-bold mb-3">
            Notre engagement
          </div>
          <h2 className="text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.05] mb-5 text-ink">
            Pourquoi nous choisir
          </h2>
          <p className="text-base text-ink/70 leading-relaxed">
            Depuis plus de 15 ans, nous accompagnons vendeurs et acquéreurs dans
            le Brabant wallon. Discrétion, confiance et savoir-faire — avec un
            taux de vente sur portefeuille proche de 90%.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[550px_1fr] gap-12 items-stretch">
          <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[480px] overflow-hidden rounded-[14px] bg-grid">
            <Image
              src="/assets/images/agence-interior.png"
              alt="Conseiller Be Home Partners au travail"
              fill
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col border-t border-hairline">
            {engagements.map((eng, i) => {
              const open = openIdx === i;
              return (
                <div key={eng.title} className="border-b border-hairline">
                  <button
                    type="button"
                    onClick={() => setOpenIdx(open ? -1 : i)}
                    className="w-full text-left px-1 py-6 flex items-center gap-5 cursor-pointer"
                    aria-expanded={open}
                  >
                    <span className="text-lg font-extrabold text-accent tracking-tight">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[19px] font-extrabold text-ink tracking-tight flex-1">
                      {eng.title}
                    </h3>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        open
                          ? "bg-accent border border-accent text-white rotate-180"
                          : "border border-hairline text-ink"
                      }`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-1 pl-10 pb-6 pr-12 text-sm text-ink/70 leading-relaxed max-w-[530px]">
                        {eng.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            type="button"
            className="inline-block bg-accent text-white text-xs font-bold tracking-wider uppercase rounded-[14px] px-6 py-3 hover:opacity-90 transition-opacity"
          >
            Découvrir l&apos;agence
          </button>
        </div>
      </div>
    </section>
  );
}
