"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

function AnimatedCounter({ to, duration = 1600 }: { to: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.round(to * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{value}</span>;
}

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
    body: "Connaissance fine du Brabant wallon et estimations basées sur les prix réels du marché.",
    icon: PinIcon,
  },
  {
    title: "Suivi mensuel structuré",
    body: "Un point chaque mois sur les visites, les retours et la stratégie.",
    icon: CalendarIcon,
  },
  {
    title: "Reportage photo professionnel",
    body: "Un photographe dédié pour valoriser votre bien et capter l'attention en ligne.",
    icon: CameraIcon,
  },
  {
    title: "Accompagnement administratif",
    body: "Toutes les démarches gérées de A à Z jusqu'à la signature de l'acte.",
    icon: FileIcon,
  },
  {
    title: "Discrétion garantie",
    body: "Vente off-market possible, dans un cercle restreint d'acquéreurs qualifiés.",
    icon: ShieldIcon,
  },
];

const PATRON_IMAGE = "/assets/images/patron.webp";

export function WhyChoose() {
  return (
    <section id="about" className="bg-cream relative z-10">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 pt-16 pb-20 lg:pb-24">
        <div className="max-w-[720px] mx-auto text-center mb-12 lg:mb-14">
          <div className="flex justify-center mb-4">
            <SectionEyebrow index="03" tone="light">
              Ce qui nous différencie
            </SectionEyebrow>
          </div>
          <h2 className="text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.05] mb-5 text-ink">
            Pourquoi nous confier votre bien
          </h2>
          <p className="text-base text-ink/70 leading-relaxed">
            Depuis plus de 15 ans, nous accompagnons vendeurs et acquéreurs
            dans le Brabant wallon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr] xl:grid-cols-[minmax(0,480px)_1fr] gap-10 lg:gap-12 xl:gap-14 items-stretch">
          <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden rounded-[20px] bg-ink">
            <Image
              src={PATRON_IMAGE}
              alt="Guillaume — fondateur Be Home Partners"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover object-[40%_30%] lg:object-[40%_center]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4">
            {engagements.map((eng) => (
              <div
                key={eng.title}
                className="group relative bg-white rounded-[16px] p-7 lg:p-8 ring-1 ring-inset ring-hairline transition-all duration-300 hover:ring-ink/20 hover:shadow-[0_18px_50px_-22px_rgba(26,40,69,0.18)]"
              >
                <span className="inline-flex items-center justify-center text-ink/55 mb-5 group-hover:text-accent transition-colors duration-300">
                  {eng.icon}
                </span>
                <h3 className="text-[17px] lg:text-[18px] font-extrabold text-ink tracking-tight leading-[1.2] mb-2.5">
                  {eng.title}
                </h3>
                <p className="text-[13.5px] text-ink/60 leading-relaxed">
                  {eng.body}
                </p>
              </div>
            ))}
            <div className="relative bg-accent text-white rounded-[16px] p-7 lg:p-8 overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-16 -right-16 w-56 h-56 rounded-full border border-white/10 pointer-events-none"
              />
              <div
                aria-hidden
                className="absolute -top-8 -right-8 w-40 h-40 rounded-full border border-white/15 pointer-events-none"
              />
              <div className="relative">
                <div className="text-[64px] lg:text-[72px] font-extrabold tabular-nums leading-[0.9] tracking-tight mb-3">
                  <AnimatedCounter to={90} />%
                </div>
                <div className="text-[10px] tracking-[.25em] uppercase font-bold text-white/55 mb-3">
                  Taux de vente sur portefeuille
                </div>
                <p className="text-[13.5px] text-white/80 leading-relaxed">
                  Nos mandats trouvent preneur, vite et au bon prix.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
