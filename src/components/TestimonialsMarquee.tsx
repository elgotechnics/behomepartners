"use client";

import Image from "next/image";
import { useState } from "react";

type Testimonial = {
  rating: number;
  text: string;
  name: string;
  source?: string;
};

const reviewsRow1: Testimonial[] = [
  {
    rating: 5,
    text: "Vendu en 3 semaines au prix demandé. Équipe disponible et réactive du premier appel jusqu'à la signature. Une vraie écoute, pas du blabla commercial.",
    name: "Ludovic P.",
    source: "Google",
  },
  {
    rating: 5,
    text: "Accompagnement exceptionnel pour la vente de notre maison. Conseils avisés sur la mise en valeur du bien et négociation menée au top jusqu'au bout.",
    name: "Sophie & Marc D.",
    source: "RealAdvice",
  },
  {
    rating: 5,
    text: "Professionnels, à l'écoute et de bons conseils tout au long du processus. Notre appartement a été vendu rapidement à un prix juste. Je recommande vivement.",
    name: "Caroline V.",
    source: "Google",
  },
  {
    rating: 5,
    text: "Estimation précise et fidèle au marché actuel. Visite organisée avec beaucoup de sérieux. Une équipe humaine qui prend le temps d'expliquer chaque étape.",
    name: "Jean-Pierre L.",
    source: "Facebook",
  },
  {
    rating: 5,
    text: "Très belle expérience avec Be Home Partners. Ils nous ont guidés à chaque étape, sans pression et avec transparence. Compromis signé en seulement 5 semaines.",
    name: "Elodie M.",
    source: "RealAdvice",
  },
  {
    rating: 4,
    text: "Bonne agence, équipe sérieuse et professionnelle. Communication régulière tout au long du processus de vente. Je referai appel à eux sans la moindre hésitation.",
    name: "Thomas B.",
    source: "Google",
  },
];

const reviewsRow2: Testimonial[] = [
  {
    rating: 5,
    text: "Achat de notre première maison facilité par leur expertise et leur patience. Ils ont compris nos besoins et trouvé le bien parfait en seulement 2 mois.",
    name: "Aurélie & Nicolas R.",
    source: "Google",
  },
  {
    rating: 5,
    text: "Honnêteté et transparence du début à la fin du processus. On nous a évité un mauvais investissement avec un avis franc, documenté et argumenté.",
    name: "Marie-Claude T.",
    source: "RealAdvice",
  },
  {
    rating: 5,
    text: "Service haut de gamme. Photos professionnelles très soignées, visites bien orchestrées avec des acheteurs qualifiés, négociation menée avec finesse.",
    name: "Olivier S.",
    source: "Google",
  },
  {
    rating: 5,
    text: "Une approche humaine qui change tout dans ce métier. On se sent accompagnés, jamais bousculés. L'estimation s'est révélée parfaitement juste au final.",
    name: "Isabelle G.",
    source: "Facebook",
  },
  {
    rating: 5,
    text: "Mise en location de notre bien gérée de A à Z, sans aucun stress de notre côté. Locataire sérieux trouvé en 10 jours. Suivi locatif impeccable depuis 2 ans.",
    name: "Patrick H.",
    source: "Google",
  },
  {
    rating: 5,
    text: "Toute l'équipe est aux petits soins du début à la fin. Réponses rapides, conseils pertinents, suivi régulier sans relance. Vente conclue dans d'excellentes conditions.",
    name: "Florence W.",
    source: "RealAdvice",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-accent" aria-label={`${rating} sur 5 étoiles`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i <= rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          aria-hidden
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function FractionalStars({ rating, size = 16 }: { rating: number; size?: number }) {
  const fullStars = Math.floor(rating);
  const partial = rating - fullStars;
  const partialPct = Math.round(partial * 100);
  const gradientId = `star-fill-${partialPct}`;

  return (
    <div
      className="flex gap-1 text-accent"
      aria-label={`${rating} sur 5 étoiles`}
    >
      {[1, 2, 3, 4, 5].map((i) => {
        if (i <= fullStars) {
          return (
            <svg
              key={i}
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
              aria-hidden
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          );
        }
        if (i === fullStars + 1 && partial > 0) {
          return (
            <svg
              key={i}
              width={size}
              height={size}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
              aria-hidden
            >
              <defs>
                <linearGradient id={gradientId}>
                  <stop offset={`${partialPct}%`} stopColor="currentColor" />
                  <stop offset={`${partialPct}%`} stopColor="transparent" />
                </linearGradient>
              </defs>
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill={`url(#${gradientId})`}
              />
            </svg>
          );
        }
        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            aria-hidden
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        );
      })}
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <article className="w-[340px] sm:w-[380px] flex-shrink-0 bg-white rounded-[16px] p-6 shadow-[0_1px_2px_rgba(46,49,142,0.04)] hover:shadow-[0_8px_20px_-6px_rgba(46,49,142,0.15)] transition-shadow">
      <Stars rating={t.rating} />
      <p className="mt-4 text-[14px] text-ink/85 leading-relaxed min-h-[6.5rem]">
        “{t.text}”
      </p>
      <div className="mt-5 pt-4 border-t border-hairline">
        <div className="text-[14px] font-extrabold text-ink">{t.name}</div>
        {t.source && (
          <div className="mt-0.5 text-[11px] text-muted tracking-wider uppercase">
            Avis publié sur {t.source}
          </div>
        )}
      </div>
    </article>
  );
}

function Row({
  items,
  reverse = false,
  paused,
}: {
  items: Testimonial[];
  reverse?: boolean;
  paused: boolean;
}) {
  // Duplicate the items so the loop is seamless
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-x-clip py-6">
      <div
        className="flex gap-5 w-max motion-reduce:!animate-none"
        style={{
          animation: `testimonials-marquee 120s linear infinite ${reverse ? "reverse" : "normal"}`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {loop.map((t, i) => (
          <Card key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsMarquee() {
  const [paused, setPaused] = useState(false);
  return (
    <section className="bg-bg overflow-hidden">
      <div className="max-w-[1480px] mx-auto px-3 sm:px-4 py-16 lg:py-24">
        <div className="text-center max-w-[680px] mx-auto mb-12">
          <div className="text-[11px] tracking-[.2em] uppercase text-accent font-bold mb-3">
            Ils nous font confiance
          </div>
          <h2 className="text-3xl lg:text-[42px] font-extrabold tracking-tight leading-[1.1]">
            Ce que nos clients disent de nous
          </h2>
        </div>

        {/* Fade overlays + double row — uses CSS mask for clean edge fade */}
        <div
          className="relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Row items={[...reviewsRow1, ...reviewsRow2]} paused={paused} />
        </div>

        <div className="flex justify-center items-center gap-4 mt-10 flex-wrap text-xs text-muted tracking-wider">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/google.svg"
              alt="Google"
              width={20}
              height={20}
              className="block"
            />
            <Image
              src="/assets/icons/facebook.svg"
              alt="Facebook"
              width={20}
              height={20}
              className="block"
            />
            <Image
              src="/assets/icons/realadvice.png"
              alt="RealAdvice"
              width={20}
              height={20}
              className="block"
              style={{ width: "auto", height: 20 }}
            />
          </div>
          <FractionalStars rating={4.6} size={18} />
          <strong className="text-ink">4,6/5</strong>
          <span>· 579 avis cumulés sur Google, Facebook et RealAdvice</span>
        </div>
      </div>
    </section>
  );
}
