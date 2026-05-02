"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

type FaqItem = {
  q: string;
  a: string;
};

const faqs: FaqItem[] = [
  {
    q: "Quels sont vos frais et votre commission ?",
    a: "Nos honoraires sont définis lors de l'estimation, en fonction de la valeur de votre bien et de la formule choisie. À titre indicatif, en Wallonie les commissions se situent généralement entre 3% et 5% HTVA. En Belgique, ces frais sont toujours à la charge du vendeur. L'acheteur ne paie aucune commission d'agence.",
  },
  {
    q: "L'estimation est-elle vraiment gratuite et sans engagement ?",
    a: "Oui, totalement. Notre estimation est gratuite et ne vous engage à rien. Vous restez libre de mettre votre bien en vente avec nous, avec une autre agence, ou de ne pas vendre du tout. Notre objectif : vous donner une vision claire et précise de la valeur de votre bien.",
  },
  {
    q: "Combien de temps faut-il pour vendre un bien avec vous ?",
    a: "La durée dépend du bien, de sa localisation et du marché. En moyenne dans le Brabant wallon, un bien correctement estimé trouve preneur en 3 à 6 mois. Grâce à notre approche (photos pro, drone, home staging, diffusion premium), notre taux de vente sur portefeuille est proche de 90%.",
  },
  {
    q: "Travaillez-vous en mandat exclusif ou simple ?",
    a: "Les deux. Le mandat exclusif vous garantit notre engagement marketing complet : photographie professionnelle, prises de vue par drone, home staging, diffusion sur tous les portails, avec une stratégie de vente dédiée. Le mandat simple offre plus de flexibilité. Nous discutons ensemble de la formule la plus adaptée à votre projet lors du rendez-vous.",
  },
  {
    q: "Quelle zone géographique couvrez-vous ?",
    a: "Notre cœur de métier, c'est le Brabant wallon : Nivelles, Braine-l'Alleud, Genappe, Seneffe, Ittre, Les Bons Villers, Pont-à-Celles et les communes alentour. Nous intervenons également sur Bruxelles et Charleroi pour certains projets. Deux agences à votre service : Nivelles et Braine-l'Alleud.",
  },
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState(-1);

  useEffect(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setOpenIdx(0);
    }
  }, []);

  return (
    <section id="faq" className="bg-white relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8 pt-20 lg:pt-24 pb-20 lg:pb-24">
        <div className="max-w-[720px] mx-auto text-center mb-14">
          <div className="flex justify-center mb-4">
            <SectionEyebrow index="06" tone="light">
              Questions fréquentes
            </SectionEyebrow>
          </div>
          <h2 className="text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.05] mb-5 text-ink">
            Vos questions, nos réponses.
          </h2>
          <p className="text-base text-ink/70 leading-relaxed">
            Des réponses claires à toutes vos questions sur l&apos;immobilier en
            Brabant wallon : frais, mandats, délais, secteur couvert.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch max-w-[1424px] mx-auto">
          <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[520px] overflow-hidden rounded-[14px] bg-grid lg:max-w-[540px] lg:ml-auto lg:w-full 2xl:max-w-none">
            <Image
              src="/assets/images/agence-bureaux.webp"
              alt="Be Home Partners — Bureaux de l'agence"
              fill
              sizes="(max-width: 1024px) 100vw, (max-width: 1535px) 540px, 680px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col border-t border-hairline lg:max-w-[540px] 2xl:max-w-[720px] w-full">
            {faqs.map((item, i) => {
              const open = openIdx === i;
              return (
                <div key={item.q} className="border-b border-hairline">
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
                      {item.q}
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
                        aria-hidden
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
                      <p className="px-1 pl-12 pb-6 text-[15px] text-ink/75 leading-relaxed max-w-[680px]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-12 text-center text-[15px] text-ink/70">
          Vous ne trouvez pas votre réponse ? N&apos;hésitez pas à{" "}
          <a
            href="#contact"
            className="font-bold text-accent underline-offset-4 hover:underline"
          >
            nous contacter
          </a>
          .
        </p>
      </div>
    </section>
  );
}
