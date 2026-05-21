import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/ui/cta-button";
import {
  Mail,
  Phone,
  Linkedin,
  MapPinned,
  Users,
  FileText,
  Camera,
  MessageCircle,
  Handshake,
} from "lucide-react";
import { TEAM, type TeamMember } from "@/data/team";

const SITE_URL = "https://behomepartners.netlify.app";
const URL_PATH = "/notre-equipe";

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

export default function NotreEquipePage() {
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
        <HeroBanner />
        <IntroIcons />
        <TeamGrid />
        <FinalCta />
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

/* ─────────────── HERO BANNER ─────────────── */

function HeroBanner() {
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
      <div className="relative max-w-[1480px] mx-auto px-6 lg:px-10 pt-28 pb-16 lg:pt-32 lg:pb-20 text-center">
        <h1 className="mx-auto max-w-[820px] text-[40px] sm:text-[52px] lg:text-[60px] font-extrabold tracking-tight leading-[1.05] text-white text-balance">
          Notre équipe<span className="text-accent">.</span>
        </h1>
      </div>
    </section>
  );
}

/* ─────────────── INTRO + ICONS ─────────────── */

type Capability = {
  key: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const CAPABILITIES: Capability[] = [
  {
    key: "marche",
    title: "Connaissance du marché",
    description: "Une vision précise du marché immobilier local.",
    icon: <MapPinned size={20} strokeWidth={1.6} />,
  },
  {
    key: "humain",
    title: "Accompagnement humain",
    description: "Des échanges clairs et un suivi personnalisé.",
    icon: <Users size={20} strokeWidth={1.6} />,
  },
  {
    key: "admin",
    title: "Suivi administratif",
    description: "Une gestion structurée des démarches et documents.",
    icon: <FileText size={20} strokeWidth={1.6} />,
  },
  {
    key: "valorisation",
    title: "Valorisation du bien",
    description: "Présentation, visibilité et mise en valeur du bien.",
    icon: <Camera size={20} strokeWidth={1.6} />,
  },
  {
    key: "communication",
    title: "Communication réactive",
    description: "Des réponses rapides et un accompagnement disponible.",
    icon: <MessageCircle size={20} strokeWidth={1.6} />,
  },
  {
    key: "negociation",
    title: "Stratégie & négociation",
    description: "Une approche réfléchie pour défendre vos intérêts.",
    icon: <Handshake size={20} strokeWidth={1.6} />,
  },
];

function IntroIcons() {
  return (
    <section className="bg-cream">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-[40px] font-extrabold tracking-tight leading-[1.1] text-ink text-balance">
              Des expertises réunies autour de votre projet
              <span className="text-accent">.</span>
            </h2>
            <p className="mt-6 text-base lg:text-[17px] text-ink/70 leading-relaxed">
              Chez Be Home Partners, chaque dossier bénéficie d&apos;un
              accompagnement collectif. Vente, stratégie, administratif,
              marketing et suivi terrain : notre équipe travaille ensemble pour
              offrir un accompagnement structuré, réactif et personnalisé.
            </p>
            <p className="mt-4 text-base lg:text-[17px] text-ink/70 leading-relaxed">
              Un seul interlocuteur, plusieurs expertises réunies autour de
              votre projet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
            {CAPABILITIES.map((c) => (
              <CapabilityTile key={c.key} capability={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityTile({ capability }: { capability: Capability }) {
  return (
    <div className="group flex items-start gap-4 bg-white rounded-2xl px-5 py-4 ring-1 ring-inset ring-hairline transition-all duration-300 hover:ring-ink/15 hover:shadow-[0_10px_24px_-14px_rgba(15,23,42,0.18)]">
      <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 text-accent shrink-0 transition-colors group-hover:bg-accent group-hover:text-white">
        {capability.icon}
      </span>
      <div className="min-w-0">
        <p className="text-[14.5px] font-bold text-ink tracking-tight leading-tight">
          {capability.title}
        </p>
        <p className="mt-1 text-[13px] text-ink/65 leading-snug">
          {capability.description}
        </p>
      </div>
    </div>
  );
}

/* ─────────────── TEAM GRID ─────────────── */

function TeamGrid() {
  return (
    <section className="bg-bg">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="text-center max-w-[680px] mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-[40px] font-extrabold tracking-tight leading-[1.1] text-ink text-balance">
            Les visages derrière Be Home Partners
            <span className="text-accent">.</span>
          </h2>
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

/* ─────────────── FINAL CTA ─────────────── */

function FinalCta() {
  return (
    <section className="bg-cream">
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
              Parlons de votre projet immobilier.
            </h2>
            <p className="mt-5 text-base lg:text-lg leading-relaxed opacity-90 max-w-[600px] mx-auto">
              Notre équipe est à votre disposition pour répondre à vos questions
              et vous accompagner dans votre projet.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <CTAButton
                href="/contact"
                variant="inverted"
                className="w-full sm:w-auto whitespace-nowrap"
              >
                Contactez-nous
              </CTAButton>
              <CTAButton
                href="/estimation"
                variant="ghost"
                className="w-full sm:w-auto whitespace-nowrap"
              >
                Demander une estimation
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
