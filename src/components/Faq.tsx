"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export type FaqItem = {
  q: string;
  a: ReactNode;
};

type FaqProps = {
  items?: FaqItem[];
  eyebrow?: string;
  eyebrowIndex?: string;
  title?: string;
  description?: string;
  image?: { src: string; alt: string };
  imagePosition?: "left" | "right";
  imageAspect?: "wide" | "tall";
  imageFit?: "cover" | "contain";
  id?: string;
  contactHint?: { text: string; linkText: string; href: string };
  layout?: "centered" | "split";
};

const defaultItems: FaqItem[] = [
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

function FaqItemRow({
  item,
  index,
  open,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-hairline">
      <h3 className="m-0">
        <button
          type="button"
          onClick={onToggle}
          className="w-full text-left px-1 py-6 flex items-center gap-5 cursor-pointer"
          aria-expanded={open}
        >
          <span className="text-lg font-extrabold text-accent tracking-tight">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[19px] font-extrabold text-ink tracking-tight flex-1">
            {item.q}
          </span>
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
      </h3>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
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
}

export function Faq({
  items = defaultItems,
  eyebrow = "Questions fréquentes",
  eyebrowIndex = "06",
  title = "Vos questions, nos réponses.",
  description,
  image,
  imagePosition = "left",
  imageAspect = "wide",
  imageFit = "cover",
  id = "faq",
  contactHint,
  layout = "centered",
}: FaqProps = {}) {
  const [openIdx, setOpenIdx] = useState(-1);

  useEffect(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setOpenIdx(0);
    }
  }, []);

  const hasImage = !!image;

  if (layout === "split") {
    return (
      <section id={id} className="bg-white relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-8 pt-20 lg:pt-24 pb-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start max-w-[1424px] mx-auto">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionEyebrow index={eyebrowIndex} tone="light">
                {eyebrow}
              </SectionEyebrow>
              <h2 className="mt-5 text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.05] text-ink">
                {title}
              </h2>
              {description && (
                <p className="mt-5 text-base text-ink/70 leading-relaxed max-w-[420px]">
                  {description}
                </p>
              )}
              {contactHint && (
                <div className="mt-8 pl-5 border-l-2 border-accent max-w-[420px]">
                  <p className="text-[10.5px] tracking-[.22em] uppercase font-bold text-accent mb-1.5">
                    Pas trouvé ?
                  </p>
                  <p className="text-[15px] text-ink/75 leading-relaxed">
                    {contactHint.text}{" "}
                    <a
                      href={contactHint.href}
                      className="font-bold text-accent underline-offset-4 hover:underline"
                    >
                      {contactHint.linkText}
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>

            <div className="lg:col-span-7 flex flex-col border-t border-hairline w-full">
              {items.map((item, i) => (
                <FaqItemRow
                  key={item.q}
                  item={item}
                  index={i}
                  open={openIdx === i}
                  onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="bg-white relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8 pt-20 lg:pt-24 pb-20 lg:pb-24">
        <div className="max-w-[720px] mx-auto text-center mb-14">
          <div className="flex justify-center mb-4">
            <SectionEyebrow index={eyebrowIndex} tone="light">
              {eyebrow}
            </SectionEyebrow>
          </div>
          <h2 className="text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.05] mb-5 text-ink">
            {title}
          </h2>
          {description && (
            <p className="text-base text-ink/70 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div
          className={`grid grid-cols-1 ${
            hasImage ? "lg:grid-cols-2" : ""
          } gap-12 lg:gap-16 items-stretch max-w-[1424px] mx-auto`}
        >
          {hasImage && image && (
            <div
              className={`relative overflow-hidden rounded-[14px] lg:w-full ${
                imageFit === "contain" ? "bg-white" : "bg-grid"
              } ${
                imageAspect === "tall"
                  ? "aspect-[1179/1469] lg:max-w-[540px] 2xl:max-w-[640px] lg:self-start"
                  : "aspect-[16/10] lg:aspect-auto lg:min-h-[520px] lg:max-w-[540px] 2xl:max-w-none"
              } ${
                imagePosition === "right"
                  ? "lg:order-2 lg:mr-auto"
                  : "lg:order-1 lg:ml-auto"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1535px) 540px, 680px"
                className={imageFit === "contain" ? "object-contain" : "object-cover"}
              />
            </div>
          )}

          <div
            className={`flex flex-col border-t border-hairline w-full ${
              hasImage
                ? `lg:max-w-[540px] 2xl:max-w-[720px] ${
                    imagePosition === "right" ? "lg:order-1 lg:ml-auto" : "lg:order-2"
                  }`
                : "lg:max-w-[720px] mx-auto"
            }`}
          >
            {items.map((item, i) => (
              <FaqItemRow
                key={item.q}
                item={item}
                index={i}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </div>
        </div>

        {contactHint && (
          <p className="mt-12 text-center text-[15px] text-ink/70">
            {contactHint.text}{" "}
            <a
              href={contactHint.href}
              className="font-bold text-accent underline-offset-4 hover:underline"
            >
              {contactHint.linkText}
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}
