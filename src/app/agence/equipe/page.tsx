import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/ui/cta-button";
import { CtaPrefooter } from "@/components/CtaPrefooter";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import {
  Mail,
  Phone,
  Linkedin,
  MapPinned,
  Users,
  MessageCircle,
  Compass,
} from "lucide-react";
import { TEAM, type TeamMember } from "@/data/team";

const SITE_URL = "https://behomepartners.netlify.app";
const URL_PATH = "/agence/equipe";

export const metadata: Metadata = {
  title: "Notre équipe",
  description:
    "Découvrez les professionnels de Be Home Partners et les expertises qui vous accompagnent dans tous vos projets immobiliers.",
  alternates: { canonical: `${SITE_URL}${URL_PATH}` },
  openGraph: {
    title: "Notre équipe | Be Home Partners",
    description:
      "Découvrez les professionnels de Be Home Partners et les expertises qui vous accompagnent dans tous vos projets immobiliers.",
    url: `${SITE_URL}${URL_PATH}`,
    type: "website",
  },
};

export default function EquipePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Notre équipe", item: `${SITE_URL}${URL_PATH}` },
    ],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Be Home Partners",
    url: SITE_URL,
    employee: TEAM.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      email: member.email,
      telephone: member.phone,
      image: `${SITE_URL}${member.photo}`,
      ...(member.linkedin ? { sameAs: [member.linkedin] } : {}),
    })),
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TeamGrid />
        <CtaPrefooter />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </>
  );
}

/* ─────────────── HERO (style ServiceHero — glass card avec valeurs équipe) ─────────────── */

type TeamValue = {
  title: string;
  icon: React.ReactNode;
};

const TEAM_VALUES: TeamValue[] = [
  {
    title: "Accompagnement personnalisé",
    icon: <Users size={20} strokeWidth={1.7} />,
  },
  {
    title: "Expertise du marché local",
    icon: <MapPinned size={20} strokeWidth={1.7} />,
  },
  {
    title: "Disponibilité et suivi réactif",
    icon: <MessageCircle size={20} strokeWidth={1.7} />,
  },
  {
    title: "Approche adaptée à chaque projet",
    icon: <Compass size={20} strokeWidth={1.7} />,
  },
];

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

      <div className="relative max-w-[1480px] mx-auto px-6 lg:px-10 pt-32 pb-16 lg:pt-40 lg:pb-20 text-center">
        <h1 className="mx-auto max-w-[920px] text-[40px] sm:text-[52px] lg:text-[64px] font-extrabold tracking-tight leading-[1.04] text-white text-balance">
          Une équipe dédiée à votre projet immobilier
          <span className="text-accent">.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[640px] text-[16px] lg:text-[18px] text-white/70 leading-relaxed">
          Des professionnels de l&apos;immobilier actifs dans le Brabant wallon
          pour vous accompagner dans la vente, la location et
          l&apos;investissement immobilier.
        </p>
        <div className="mt-9 flex justify-center">
          <CTAButton
            href="/contact"
            variant="primary"
            className="w-full sm:w-auto whitespace-nowrap"
          >
            Contacter notre équipe
          </CTAButton>
        </div>
      </div>

      {/* Glass card valeurs équipe */}
      <div className="relative max-w-[1480px] mx-auto px-6 lg:px-10 pb-20 lg:pb-24">
        <div className="rounded-[20px] bg-white/[0.08] backdrop-blur-2xl">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
            {TEAM_VALUES.map((v) => (
              <li
                key={v.title}
                className="group flex items-center gap-4 px-5 py-5 lg:px-6 lg:py-6 transition-colors hover:bg-white/[0.04]"
              >
                <span
                  aria-hidden
                  className="grid place-items-center w-11 h-11 rounded-[12px] bg-accent text-white shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_24px_-12px_rgba(184,31,58,0.6)] transition-transform group-hover:-translate-y-0.5"
                >
                  {v.icon}
                </span>
                <span className="text-[14px] font-semibold text-white/95 leading-snug">
                  {v.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── TEAM GRID ─────────────── */

function TeamGrid() {
  return (
    <section id="equipe" className="bg-bg scroll-mt-24">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="text-center max-w-[720px] mx-auto mb-14 lg:mb-20">
          <div className="inline-flex">
            <SectionEyebrow tone="light">Notre équipe</SectionEyebrow>
          </div>
          <h2 className="mt-6 text-3xl lg:text-[40px] font-extrabold tracking-tight leading-[1.1] text-ink text-balance">
            Une équipe dédiée à votre projet immobilier
            <span className="text-accent">.</span>
          </h2>
          <p className="mx-auto mt-5 text-[15.5px] lg:text-[17px] text-ink/70 leading-relaxed max-w-[620px]">
            Chaque projet mérite une approche attentive, un suivi rigoureux et
            une relation de confiance à chaque étape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {TEAM.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  const isSvg = member.photo.endsWith(".svg");
  return (
    <article className="group flex flex-col bg-white text-ink rounded-[14px] overflow-hidden ring-1 ring-inset ring-hairline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(15,23,42,0.18)]">
      <div className="relative aspect-[5/4] bg-bg overflow-hidden">
        {isSvg ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.photo}
            alt={member.photoAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <Image
            src={member.photo}
            alt={member.photoAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="flex flex-col flex-1 p-5 lg:p-6">
        <h3 className="text-[17px] lg:text-[18px] font-extrabold text-ink tracking-tight leading-[1.2]">
          {member.name}
        </h3>
        <p className="mt-1 text-[13px] text-ink/65 leading-snug">
          {member.role}
        </p>
        <p className="mt-3 text-[14px] text-ink/70 leading-relaxed line-clamp-3 min-h-[66px]">
          {member.bio}
        </p>

        <div className="mt-auto pt-4 flex items-center gap-2">
          <a
            href={member.emailHref}
            aria-label={`Email de ${member.name}`}
            className="grid place-items-center w-9 h-9 rounded-full bg-ink/[0.05] text-ink hover:bg-accent hover:text-white transition-colors"
          >
            <Mail size={15} strokeWidth={1.8} />
          </a>
          <a
            href={member.phoneHref}
            aria-label={`Téléphone de ${member.name}`}
            className="grid place-items-center w-9 h-9 rounded-full bg-ink/[0.05] text-ink hover:bg-accent hover:text-white transition-colors"
          >
            <Phone size={15} strokeWidth={1.8} />
          </a>
          {member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${member.name}`}
              className="grid place-items-center w-9 h-9 rounded-full bg-ink/[0.05] text-ink hover:bg-accent hover:text-white transition-colors"
            >
              <Linkedin size={15} strokeWidth={1.8} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
