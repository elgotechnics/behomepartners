import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/ui/cta-button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { cn } from "@/lib/utils";
import { Compass, Lightbulb, Route } from "lucide-react";

const SITE_URL = "https://behomepartners.netlify.app";
const URL_PATH = "/services";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "Vente, location, gestion locative, investissement et promotion immobilière. Be Home Partners vous accompagne dans tous vos projets immobiliers.",
  alternates: { canonical: `${SITE_URL}${URL_PATH}` },
  openGraph: {
    title: "Nos services | Be Home Partners",
    description:
      "Vente, location, gestion locative, investissement et promotion immobilière. Be Home Partners vous accompagne dans tous vos projets immobiliers.",
    url: `${SITE_URL}${URL_PATH}`,
    type: "website",
  },
};

type Service = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: { src: string; alt: string };
};

const SERVICES: Service[] = [
  {
    id: "vente",
    title: "Vente immobilière",
    description:
      "Vendre un bien demande plus qu'une annonce. Estimation cohérente, mise en valeur soignée, diffusion ciblée et accompagnement jusqu'à la signature : on couvre chaque étape avec la même exigence.",
    href: "/services/vente",
    image: {
      src: "/assets/images/vente-service.jpg",
      alt: "Accompagnement à la vente immobilière par Be Home Partners",
    },
  },
  {
    id: "location",
    title: "Location immobilière",
    description:
      "Trouver le bon locataire et sécuriser la mise en location. Estimation locative, sélection des candidats, visites et rédaction du bail menés avec rigueur jusqu'à l'entrée dans les lieux.",
    href: "/services/location",
    image: {
      src: "/assets/images/listing-appartement.jpg",
      alt: "Appartement disponible à la location",
    },
  },
  {
    id: "gestion-locative",
    title: "Gestion locative",
    description:
      "Confiez la gestion quotidienne de votre bien et gagnez en tranquillité. Relation locataire, encaissements, états des lieux et suivi annuel : on s'occupe de tout, vous gardez la vue d'ensemble.",
    href: "/services/gestion-locative",
    image: {
      src: "/assets/images/gestion-locative.png",
      alt: "Remise de clés et signature du mandat de gestion locative",
    },
  },
  {
    id: "investissement",
    title: "Investissement immobilier",
    description:
      "Identifier les opportunités, analyser le rendement et construire une stratégie patrimoniale alignée avec vos objectifs. On vous aide à investir avec méthode et lucidité.",
    href: "/services/investissement",
    image: {
      src: "/assets/images/investissement-immobilier-brabant-wallon.webp",
      alt: "Bien d'investissement en Brabant wallon",
    },
  },
  {
    id: "promotion-immobiliere",
    title: "Promotion immobilière",
    description:
      "Accompagner les projets immobiliers neufs, de la stratégie de valorisation à la commercialisation. Conseil aux promoteurs, mise en marché et suivi des acquéreurs.",
    href: "/services/promotion-immobiliere",
    image: {
      src: "/assets/images/promotion-immobiliere.jpg",
      alt: "Projet de promotion immobilière",
    },
  },
];

export default function ServicesPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Nos services", item: `${SITE_URL}${URL_PATH}` },
    ],
  };

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${SITE_URL}${s.href}`,
    })),
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesGrid />
        <Approach />
        <FinalCta />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
    </>
  );
}

/* ─────────────── HERO ─────────────── */

function Hero() {
  return (
    <section className="relative bg-ink-deep overflow-hidden">
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
      <div className="relative max-w-[1480px] mx-auto px-6 lg:px-10 pt-28 pb-20 lg:pt-32 lg:pb-24 text-center">
        <div className="flex justify-center">
          <SectionEyebrow tone="dark">Nos services</SectionEyebrow>
        </div>
        <h1 className="mx-auto mt-5 max-w-[860px] text-[40px] sm:text-[52px] lg:text-[60px] font-extrabold tracking-tight leading-[1.05] text-white text-balance">
          Des services immobiliers pour chaque projet
          <span className="text-accent">.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[640px] text-[16px] lg:text-[18px] text-white/70 leading-relaxed">
          Vendre, louer, gérer ou valoriser un bien demande une approche
          adaptée. Be Home Partners vous accompagne avec une connaissance
          précise du marché immobilier dans le Brabant wallon et ses environs.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
          <CTAButton
            href="/contact"
            variant="primary"
            className="w-full sm:w-auto whitespace-nowrap"
          >
            Démarrer mon projet
          </CTAButton>
          <CTAButton
            href="/estimation"
            variant="ghost"
            className="w-full sm:w-auto whitespace-nowrap"
          >
            Estimer mon bien
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── SERVICES GRID ─────────────── */

function ServicesGrid() {
  return (
    <section className="bg-cream">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-[760px] mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-[40px] font-extrabold tracking-tight leading-[1.1] text-ink text-balance">
            Choisissez l&apos;accompagnement adapté à votre besoin
            <span className="text-accent">.</span>
          </h2>
          <p className="mt-5 text-base lg:text-[17px] text-ink/70 leading-relaxed">
            Chaque projet immobilier demande une réponse différente. Découvrez
            nos services et trouvez l&apos;accompagnement qui correspond à
            votre situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {SERVICES.slice(0, 2).map((s) => (
            <ServiceCardUniform key={s.id} service={s} />
          ))}
          <CtaEstimationCard />
          {SERVICES.slice(2).map((s) => (
            <ServiceCardUniform key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCardUniform({ service }: { service: Service }) {
  return (
    <a
      href={service.href}
      aria-label={`Découvrir ${service.title}`}
      className="group flex h-full flex-col overflow-hidden rounded-[18px] bg-white ring-1 ring-inset ring-hairline shadow-[0_10px_30px_-18px_rgba(15,23,42,0.16)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_50px_-22px_rgba(15,23,42,0.28)] hover:ring-ink/15"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-bg">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <h3 className="text-[20px] lg:text-[22px] font-extrabold tracking-tight text-ink leading-[1.15] text-balance">
          {service.title}
        </h3>
        <p className="mt-3 text-[14px] text-ink/65 leading-relaxed flex-1">
          {service.description}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-[11.5px] font-bold tracking-[.18em] uppercase text-ink group-hover:text-accent transition-colors duration-300">
          Découvrir
          <svg
            aria-hidden
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-500 ease-out group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="M13 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </a>
  );
}

function CtaEstimationCard() {
  return (
    <a
      href="/estimation"
      aria-label="Estimer mon bien gratuitement"
      className="group relative isolate flex h-full flex-col overflow-hidden rounded-[18px] bg-accent text-white shadow-[0_10px_30px_-18px_rgba(159,30,67,0.45)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_28px_60px_-24px_rgba(159,30,67,0.55)] hover:brightness-[1.05]"
    >
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-[260px] h-[260px] rounded-full border border-white/15 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-28 w-[300px] h-[300px] rounded-full border border-white/10 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full bg-white/[0.06] blur-3xl pointer-events-none"
      />

      <div className="relative aspect-[4/3] flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logos/square/BeHome_logo_blanc.svg"
          alt=""
          aria-hidden
          className="relative w-[140px] h-[140px] lg:w-[160px] lg:h-[160px] object-contain transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="relative flex flex-1 flex-col p-6 lg:p-7">
        <div className="flex items-center gap-2 text-[10.5px] font-bold tracking-[.22em] uppercase text-white/80">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/80" />
          Estimation gratuite
        </div>
        <h3 className="mt-3 text-[20px] lg:text-[22px] font-extrabold tracking-tight leading-[1.15] text-balance">
          Connaître la valeur de votre bien
        </h3>
        <p className="mt-3 text-[14px] text-white/85 leading-relaxed flex-1">
          Recevez une estimation cohérente, basée sur le marché local.
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-[11.5px] font-bold tracking-[.18em] uppercase">
          Démarrer
          <span
            aria-hidden
            className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-accent transition-transform duration-500 ease-out group-hover:translate-x-1"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </span>
        </span>
      </div>
    </a>
  );
}

/* ─────────────── APPROACH ─────────────── */

const APPROACH = [
  {
    title: "Analyse du projet",
    description:
      "Nous commençons par comprendre votre besoin, votre calendrier et les caractéristiques du bien concerné.",
    icon: <Compass size={28} strokeWidth={1.6} />,
  },
  {
    title: "Conseil personnalisé",
    description:
      "Nous vous orientons vers la solution la plus adaptée : vente, location, gestion, investissement ou promotion.",
    icon: <Lightbulb size={28} strokeWidth={1.6} />,
  },
  {
    title: "Suivi à chaque étape",
    description:
      "Vous bénéficiez d'un accompagnement clair, avec des échanges réguliers et des décisions expliquées.",
    icon: <Route size={28} strokeWidth={1.6} />,
  },
];

function Approach() {
  return (
    <section className="bg-white">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-[760px] mx-auto text-center mb-12 lg:mb-16">
          <SectionEyebrow tone="light">Notre approche</SectionEyebrow>
          <h2 className="mt-5 text-3xl lg:text-[40px] font-extrabold tracking-tight leading-[1.1] text-ink text-balance">
            Un accompagnement clair, attentif et structuré
            <span className="text-accent">.</span>
          </h2>
          <p className="mt-5 text-base lg:text-[17px] text-ink/70 leading-relaxed">
            Chaque projet immobilier mérite une analyse précise et un
            accompagnement adapté. Notre équipe prend le temps de comprendre
            votre situation, vos objectifs et les particularités de votre bien
            afin de vous proposer la stratégie la plus cohérente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-[1180px] mx-auto">
          {APPROACH.map((item) => (
            <div
              key={item.title}
              className="group relative h-full flex flex-col p-7 lg:p-8 rounded-[16px] bg-white ring-1 ring-inset ring-hairline shadow-[0_10px_30px_-22px_rgba(15,23,42,0.16)] transition-all duration-300 ease-out hover:-translate-y-1 hover:ring-ink/15 hover:shadow-[0_20px_45px_-22px_rgba(15,23,42,0.22)]"
            >
              <span
                aria-hidden
                className="inline-flex items-center justify-center w-12 h-12 rounded-[12px] bg-accent/10 text-accent ring-1 ring-inset ring-accent/15 mb-5 transition-transform duration-300 group-hover:scale-105"
              >
                {item.icon}
              </span>
              <h3 className="text-[18px] lg:text-[19px] font-extrabold tracking-tight text-ink leading-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-[14.5px] text-ink/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── FINAL CTA ─────────────── */

function FinalCta() {
  return (
    <section className="bg-white">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 lg:pt-6 pb-6 lg:pb-10">
        <div className="relative bg-accent text-white rounded-[18px] overflow-hidden px-8 py-16 lg:px-16 lg:py-24 text-center">
          <div
            aria-hidden
            className="absolute -top-[140px] -left-[140px] w-[480px] h-[480px] rounded-full border border-white/15 pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute -bottom-[160px] -right-[160px] w-[520px] h-[520px] rounded-full border border-white/10 pointer-events-none"
          />

          <div className="relative max-w-[760px] mx-auto">
            <h2 className="text-3xl lg:text-[44px] font-extrabold tracking-tight leading-[1.05] text-balance">
              Vous avez un projet immobilier ?
            </h2>
            <p className="mt-5 text-base lg:text-lg leading-relaxed opacity-90 max-w-[600px] mx-auto">
              Parlez-nous de votre situation. Nous vous aiderons à identifier
              l&apos;accompagnement le plus adapté à votre bien et à vos
              objectifs.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <CTAButton
                href="/contact"
                variant="inverted"
                className="w-full sm:w-auto whitespace-nowrap"
              >
                Nous contacter
              </CTAButton>
              <CTAButton
                href="/estimation"
                variant="ghost"
                className="w-full sm:w-auto whitespace-nowrap"
              >
                Estimer mon bien
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
