"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Calendar,
  Building,
  Building2,
  Award,
  Users,
  Handshake,
  Eye,
  Briefcase,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronLeft,
  ChevronRight,
  Check,
  CheckCircle,
  GraduationCap,
  Camera,
  Linkedin,
} from "lucide-react";

import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/Footer";
import { Agences } from "@/components/Agences";
import { WhyChoose } from "@/components/WhyChoose";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { CTAButton } from "@/components/ui/cta-button";

/* ─────────────── DATA ─────────────── */

type Stat = { value: string; label: string; icon: React.ReactNode };

const STATS: Stat[] = [
  {
    value: "Depuis 2010",
    label:
      "Plus de 15 ans d'expérience sur le marché immobilier du Brabant wallon.",
    icon: <Calendar size={22} strokeWidth={1.6} />,
  },
  {
    value: "2 agences",
    label:
      "Deux agences à Nivelles et Braine-l'Alleud pour vous accompagner localement.",
    icon: <Building2 size={22} strokeWidth={1.6} />,
  },
  {
    value: "Expertise immobilière",
    label:
      "Une parfaite connaissance du marché immobilier et des spécificités locales.",
    icon: <Award size={22} strokeWidth={1.6} />,
  },
  {
    value: "Service sur mesure",
    label:
      "Un accompagnement personnalisé adapté à votre projet immobilier.",
    icon: <Users size={22} strokeWidth={1.6} />,
  },
];

type Realisation = {
  id: string;
  status: "Vendu" | "Loué";
  type: string;
  city: string;
  image: string;
  alt: string;
};

const REALISATIONS: Realisation[] = [
  {
    id: "r-1",
    status: "Vendu",
    type: "Maison familiale",
    city: "Nivelles",
    image: "/assets/images/listing-maison-1.jpg",
    alt: "Maison familiale vendue à Nivelles",
  },
  {
    id: "r-2",
    status: "Loué",
    type: "Appartement",
    city: "Braine-l'Alleud",
    image: "/assets/images/listing-appartement.jpg",
    alt: "Appartement loué à Braine-l'Alleud",
  },
  {
    id: "r-3",
    status: "Vendu",
    type: "Maison de caractère",
    city: "Waterloo",
    image: "/assets/images/listing-maison-2.webp",
    alt: "Maison de caractère vendue à Waterloo",
  },
  {
    id: "r-4",
    status: "Vendu",
    type: "Villa contemporaine",
    city: "Lasne",
    image: "/assets/images/listing-maison-3.jpg",
    alt: "Villa contemporaine vendue à Lasne",
  },
  {
    id: "r-5",
    status: "Loué",
    type: "Maison",
    city: "Genappe",
    image: "/assets/images/listing-maison-4.webp",
    alt: "Maison louée à Genappe",
  },
  {
    id: "r-6",
    status: "Vendu",
    type: "Appartement",
    city: "Nivelles",
    image: "/assets/images/listing-maison-1.jpg",
    alt: "Appartement vendu à Nivelles",
  },
];

/* ─────────────── PAGE ─────────────── */

export default function NotreAgencePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Agences background="cream" />
        <Approche />
        <WhyChoose showImage={false} variant="agency" tone="dark" />
        <Team />
      </main>
      <Footer />
    </>
  );
}

/* ─────────────── HERO ─────────────── */

function Hero() {
  return (
    <section className="relative bg-ink overflow-hidden min-h-[calc(100dvh-16rem)] md:min-h-[calc(100dvh-17rem)] lg:min-h-[640px] max-h-[820px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/agence-bureaux.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/85 to-ink-deep/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070d22] via-transparent to-[#070d22]/40" />
      </div>

      <div className="relative w-full max-w-[1480px] mx-auto px-6 lg:px-10 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-[700px]">
          <SectionEyebrow tone="dark">Nos agences</SectionEyebrow>
          <h1 className="mt-6 text-[40px] sm:text-[52px] lg:text-[64px] font-extrabold tracking-tight leading-[1.02] text-white">
            Votre agence immobilière à Nivelles et Braine-l&apos;Alleud
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-6 text-base lg:text-lg text-white/80 leading-relaxed max-w-[640px]">
            Depuis 2010, Be Home Partners accompagne vos projets de vente,
            d&apos;achat, de location et d&apos;investissement immobilier
            partout en Brabant wallon.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CTAButton href="#agences" variant="primary">
              Découvrir nos agences
            </CTAButton>
            <CTAButton href="/contact" variant="ghost">
              Discutons de votre projet
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── STATS ─────────────── */

function Stats() {
  return (
    <section className="bg-bg">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group bg-white rounded-[14px] p-7 ring-1 ring-inset ring-hairline transition-all duration-300 hover:ring-ink/20 hover:shadow-[0_18px_50px_-22px_rgba(26,40,69,0.18)]"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-[12px] bg-accent/10 text-accent mb-5">
                {s.icon}
              </span>
              <div className="text-xl lg:text-[22px] font-extrabold text-ink tracking-tight leading-[1.15] mb-2">
                {s.value}
              </div>
              <p className="text-[13.5px] text-ink/65 leading-relaxed">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── APPROCHE ─────────────── */

function Approche() {
  return (
    <section className="bg-white">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          <div>
            <SectionEyebrow tone="light">Notre approche</SectionEyebrow>
            <h2 className="mt-5 text-2xl lg:text-[34px] font-extrabold text-ink tracking-tight leading-[1.1]">
              Un accompagnement sur mesure, du premier échange à la signature
            </h2>
            <p className="mt-6 text-[15.5px] text-ink/75 leading-relaxed">
              Chez Be Home Partners, nous accompagnons vendeurs, acquéreurs,
              bailleurs et investisseurs avec une approche fondée sur
              l&apos;écoute, la transparence et un suivi rigoureux à chaque
              étape.
            </p>

            <ul className="mt-8 space-y-5">
              {[
                {
                  icon: <Building size={20} strokeWidth={1.7} />,
                  title: "Services complets",
                  desc: "Vente, location, estimation, investissement et promotion immobilière.",
                },
                {
                  icon: <Users size={20} strokeWidth={1.7} />,
                  title: "Une équipe complémentaire",
                  desc: "Des professionnels de l'immobilier, du juridique et du commercial à votre service.",
                },
                {
                  icon: <Camera size={20} strokeWidth={1.7} />,
                  title: "Commercialisation sur mesure",
                  desc: "Une stratégie pensée pour valoriser votre bien et maximiser sa visibilité.",
                },
                {
                  icon: <CheckCircle size={20} strokeWidth={1.7} />,
                  title: "Accompagnement de A à Z",
                  desc: "Des conseils clairs, de l'estimation à la signature de l'acte.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="mt-0.5 grid place-items-center w-10 h-10 rounded-[10px] bg-accent/10 text-accent shrink-0 ring-1 ring-inset ring-accent/15"
                  >
                    {item.icon}
                  </span>
                  <div>
                    <div className="text-[15.5px] font-bold text-ink leading-tight">
                      {item.title}
                    </div>
                    <p className="mt-1 text-[14.5px] text-ink/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] rounded-[14px] overflow-hidden ring-1 ring-inset ring-hairline shadow-[0_24px_60px_-24px_rgba(15,23,42,0.25)]">
            <Image
              src="/assets/images/agence-bureaux.webp"
              alt="Équipe Be Home Partners dans les bureaux de l'agence"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── RÉALISATIONS ─────────────── */

function Realisations() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      setAtStart(track.scrollLeft <= 8);
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 8);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section className="bg-cream">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-end mb-10 lg:mb-12">
          <div className="max-w-[640px]">
            <SectionEyebrow tone="light">Nos réalisations récentes</SectionEyebrow>
            <h2 className="mt-5 text-3xl lg:text-[42px] font-extrabold text-ink tracking-tight leading-[1.05]">
              Quelques projets récemment concrétisés
            </h2>
            <p className="mt-5 text-base text-ink/70 leading-relaxed">
              Découvrez une sélection de biens récemment vendus ou loués par
              notre équipe dans le Brabant wallon.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Précédent"
              disabled={atStart}
              className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white ring-1 ring-inset ring-hairline flex items-center justify-center text-ink shadow-sm hover:ring-ink/20 hover:bg-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} strokeWidth={2.2} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Suivant"
              disabled={atEnd}
              className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-ink text-white flex items-center justify-center shadow-md hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pt-3 pb-4 -my-1 snap-x scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {REALISATIONS.map((r) => (
            <article
              key={r.id}
              data-card
              className="group relative snap-start flex-shrink-0 w-[calc(100vw-3rem)] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] min-w-[280px] max-w-[440px] sm:max-w-none bg-white rounded-[14px] overflow-hidden ring-1 ring-inset ring-hairline shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-20px_rgba(15,23,42,0.25)] hover:ring-ink/15"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={r.image}
                  alt={r.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span
                  className={`absolute top-3 left-3 px-3 py-1.5 font-bold text-[11px] tracking-[.15em] uppercase rounded-sm ${
                    r.status === "Vendu"
                      ? "bg-ink text-white"
                      : "bg-white text-ink ring-1 ring-inset ring-ink/15"
                  }`}
                >
                  {r.status}
                </span>
              </div>
              <div className="p-5 lg:p-6">
                <div className="text-[11px] tracking-[.22em] uppercase font-bold text-ink/55 mb-2">
                  {r.city}
                </div>
                <h3 className="text-lg font-extrabold text-ink tracking-tight mb-4">
                  {r.type}
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[.15em] uppercase text-accent hover:text-accent-deep transition-colors"
                >
                  Voir le bien
                  <ChevronRight size={14} strokeWidth={2.4} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="sm:hidden flex items-center justify-center gap-3 mt-8">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Précédent"
            disabled={atStart}
            className="w-11 h-11 rounded-full bg-white ring-1 ring-inset ring-hairline flex items-center justify-center text-ink shadow-sm disabled:opacity-40"
          >
            <ChevronLeft size={18} strokeWidth={2.2} />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Suivant"
            disabled={atEnd}
            className="w-11 h-11 rounded-full bg-ink text-white flex items-center justify-center shadow-md disabled:opacity-40"
          >
            <ChevronRight size={18} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── TEAM ─────────────── */

type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
  email?: string;
  phone?: string;
};

const TEAM: TeamMember[] = [
  {
    id: "member-1",
    name: "Membre 1",
    role: "Fondateur · Agent immobilier",
    photo: "/assets/images/team-placeholder.svg",
    linkedin: "https://www.linkedin.com",
    email: "info@behomepartners.be",
    phone: "+32 67 84 12 84",
  },
  {
    id: "member-2",
    name: "Membre 2",
    role: "Agent immobilier",
    photo: "/assets/images/team-placeholder.svg",
    linkedin: "https://www.linkedin.com",
    email: "info@behomepartners.be",
    phone: "+32 67 84 12 84",
  },
  {
    id: "member-3",
    name: "Membre 3",
    role: "Office Manager",
    photo: "/assets/images/team-placeholder.svg",
    linkedin: "https://www.linkedin.com",
    email: "info@behomepartners.be",
    phone: "+32 67 84 12 84",
  },
  {
    id: "member-4",
    name: "Membre 4",
    role: "Conseiller commercial",
    photo: "/assets/images/team-placeholder.svg",
    linkedin: "https://www.linkedin.com",
    email: "info@behomepartners.be",
    phone: "+32 67 84 12 84",
  },
];

function Team() {
  return (
    <section className="relative bg-cream overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-[120px] -left-[120px] w-[480px] h-[480px] rounded-full border border-ink/[0.05] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-[160px] -right-[160px] w-[560px] h-[560px] rounded-full border border-ink/[0.04] pointer-events-none"
      />

      <div className="relative max-w-[1480px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-[760px] mx-auto text-center mb-12 lg:mb-14">
          <SectionEyebrow tone="light">Notre équipe</SectionEyebrow>
          <h2 className="mt-5 text-3xl lg:text-[42px] font-extrabold tracking-tight leading-[1.05] text-ink">
            Une équipe de professionnels à votre&nbsp;service<span className="text-accent">.</span>
          </h2>
          <p className="mt-5 text-base text-ink/70 leading-relaxed">
            Agents immobiliers, spécialistes administratifs et experts du
            marché local vous accompagnent à chaque étape de votre projet
            immobilier.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {TEAM.map((m) => (
            <article
              key={m.id}
              className="group bg-white text-ink rounded-[14px] overflow-hidden ring-1 ring-inset ring-hairline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(15,23,42,0.18)]"
            >
              <div className="relative aspect-[5/4] bg-bg overflow-hidden">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5 lg:p-6">
                <h3 className="text-[17px] lg:text-[18px] font-extrabold text-ink tracking-tight leading-[1.2]">
                  {m.name}
                </h3>
                <p className="mt-1 text-[13px] text-ink/65 leading-snug">
                  {m.role}
                </p>

                <div className="mt-4 flex items-center gap-2">
                  {m.linkedin ? (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${m.name}`}
                      className="grid place-items-center w-9 h-9 rounded-full bg-ink/[0.05] text-ink hover:bg-accent hover:text-white transition-colors"
                    >
                      <Linkedin size={15} strokeWidth={1.8} />
                    </a>
                  ) : null}
                  {m.email ? (
                    <a
                      href={`mailto:${m.email}`}
                      aria-label={`Email de ${m.name}`}
                      className="grid place-items-center w-9 h-9 rounded-full bg-ink/[0.05] text-ink hover:bg-accent hover:text-white transition-colors"
                    >
                      <Mail size={15} strokeWidth={1.8} />
                    </a>
                  ) : null}
                  {m.phone ? (
                    <a
                      href={`tel:${m.phone.replace(/\s/g, "")}`}
                      aria-label={`Téléphone de ${m.name}`}
                      className="grid place-items-center w-9 h-9 rounded-full bg-ink/[0.05] text-ink hover:bg-accent hover:text-white transition-colors"
                    >
                      <Phone size={15} strokeWidth={1.8} />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton href="/notre-equipe" variant="primary">
            Voir toute l&apos;équipe
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
