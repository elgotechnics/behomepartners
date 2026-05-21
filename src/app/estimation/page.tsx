import type { Metadata } from "next";
import Image from "next/image";
import {
  Monitor,
  UserCheck,
  Tag,
  Users,
  Clock,
  TrendingUp,
  ArrowDown,
  ArrowUp,
  Handshake,
  MapPin,
  Ruler,
  Home as HomeIcon,
  Bed,
  Leaf,
  BarChart3,
  ClipboardList,
  Search,
  FileCheck,
  Lightbulb,
  Check,
  BadgeCheck,
  Award,
  Lock,
} from "lucide-react";

import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { CTAButton } from "@/components/ui/cta-button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export const metadata: Metadata = {
  title: "Estimation immobilière gratuite dans le Brabant wallon",
  description:
    "Obtenez une estimation fiable de votre maison, appartement ou terrain. Choisissez entre une estimation en ligne instantanée ou l'avis personnalisé d'un expert immobilier.",
  alternates: {
    canonical: "/estimation",
  },
  openGraph: {
    title:
      "Estimation immobilière gratuite dans le Brabant wallon | Be Home Partners",
    description:
      "Obtenez une estimation fiable de votre maison, appartement ou terrain. Choisissez entre une estimation en ligne instantanée ou l'avis personnalisé d'un expert immobilier.",
    url: "/estimation",
    type: "website",
  },
};

const ONLINE_BULLETS = [
  "Résultat immédiat",
  "Simple et rapide",
  "Disponible à tout moment",
];

const EXPERT_BULLETS = [
  "Analyse personnalisée",
  "Visite sur place possible",
  "Conseils adaptés à votre projet",
];

const TRUST_ITEMS = [
  {
    icon: <BadgeCheck size={20} strokeWidth={1.8} />,
    title: "Gratuit et sans engagement",
    body: "Aucun coût, aucune obligation à vendre.",
  },
  {
    icon: <Award size={20} strokeWidth={1.8} />,
    title: "Plus de 15 ans d'expertise",
    body: "Une équipe expérimentée à vos côtés.",
  },
  {
    icon: <MapPin size={20} strokeWidth={1.8} />,
    title: "Connaissance du marché local",
    body: "Spécialistes du Brabant wallon.",
  },
  {
    icon: <Lock size={20} strokeWidth={1.8} />,
    title: "Discrétion et confidentialité",
    body: "Vos informations restent strictement privées.",
  },
];

const WHY_ITEMS = [
  {
    icon: <Tag size={22} strokeWidth={1.7} />,
    title: "Fixer un prix cohérent",
    body: "Un prix juste reflète la réalité du marché et la qualité réelle de votre bien.",
  },
  {
    icon: <Users size={22} strokeWidth={1.7} />,
    title: "Attirer des acquéreurs sérieux",
    body: "Une estimation crédible filtre les visites et amène des candidats motivés.",
  },
  {
    icon: <Clock size={22} strokeWidth={1.7} />,
    title: "Réduire les délais de vente",
    body: "Un bien correctement positionné dès le départ se vend nettement plus vite.",
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.7} />,
    title: "Éviter une sous ou surestimation",
    body: "Vous protégez votre patrimoine et préservez votre marge de négociation.",
  },
];

const RISKS = [
  {
    icon: <ArrowUp size={22} strokeWidth={2} />,
    title: "Un prix trop élevé",
    body: "Le bien reste plus longtemps sur le marché, perd en attractivité et finit souvent par se vendre en dessous de sa valeur réelle.",
  },
  {
    icon: <ArrowDown size={22} strokeWidth={2} />,
    title: "Un prix trop bas",
    body: "Vous laissez de la valeur sur la table et réduisez inutilement le potentiel de votre bien.",
  },
  {
    icon: <Handshake size={22} strokeWidth={2} />,
    title: "Une négociation plus difficile",
    body: "Sans estimation solide, il est plus difficile de défendre votre prix face aux acheteurs.",
  },
];

const METHOD_ITEMS = [
  {
    icon: <MapPin size={22} strokeWidth={1.7} />,
    title: "Localisation",
    body: "Quartier, accessibilité, environnement immédiat et dynamique du secteur.",
  },
  {
    icon: <Ruler size={22} strokeWidth={1.7} />,
    title: "Superficie",
    body: "Surface habitable, terrain, annexes et volumes utiles.",
  },
  {
    icon: <HomeIcon size={22} strokeWidth={1.7} />,
    title: "État général",
    body: "Toiture, façades, châssis, finitions et travaux à prévoir.",
  },
  {
    icon: <Bed size={22} strokeWidth={1.7} />,
    title: "Agencement",
    body: "Nombre de pièces, distribution, luminosité et confort de vie.",
  },
  {
    icon: <Leaf size={22} strokeWidth={1.7} />,
    title: "PEB",
    body: "Performance énergétique, isolation et impact sur les charges.",
  },
  {
    icon: <BarChart3 size={22} strokeWidth={1.7} />,
    title: "Ventes comparables",
    body: "Biens similaires vendus récemment et demande actuelle dans le secteur.",
  },
];

const PROCESS_STEPS = [
  {
    icon: <ClipboardList size={18} strokeWidth={1.8} />,
    title: "Analyse de votre demande",
    body: "Nous prenons le temps de comprendre votre projet, vos contraintes et vos objectifs.",
  },
  {
    icon: <Search size={18} strokeWidth={1.8} />,
    title: "Étude du marché",
    body: "Nous analysons les ventes récentes, l'offre en cours et la demande pour votre secteur.",
  },
  {
    icon: <HomeIcon size={18} strokeWidth={1.8} />,
    title: "Visite du bien si nécessaire",
    body: "Un passage sur place pour valider les volumes, l'état général et les atouts spécifiques.",
  },
  {
    icon: <FileCheck size={18} strokeWidth={1.8} />,
    title: "Remise de l'avis de valeur",
    body: "Un document clair, argumenté et chiffré, remis sans engagement de votre part.",
  },
  {
    icon: <Lightbulb size={18} strokeWidth={1.8} />,
    title: "Conseils pour la suite",
    body: "Recommandations sur la mise en valeur, le timing et la stratégie de mise en vente.",
  },
];

const faqLinkClass =
  "font-bold text-accent underline-offset-4 hover:underline";

const FAQ_ITEMS = [
  {
    q: "L'estimation est-elle gratuite et sans engagement ?",
    a: (
      <>
        Oui. Nous réalisons votre estimation immobilière gratuitement et sans
        engagement, que ce soit dans le cadre d&apos;une vente ou d&apos;une
        mise en location. Vous restez entièrement libre de poursuivre votre
        projet avec ou sans notre accompagnement en{" "}
        <a href="/services/vente" className={faqLinkClass}>
          vente immobilière
        </a>{" "}
        ou en{" "}
        <a href="/services/location" className={faqLinkClass}>
          location
        </a>
        .
      </>
    ),
  },
  {
    q: "Pourquoi faire estimer mon bien par un agent plutôt qu'avec un outil en ligne ?",
    a: "Un outil en ligne fournit une première indication basée sur des données générales. Un agent immobilier tient compte des spécificités de votre bien, de son état, de son emplacement et de la demande réelle dans votre secteur. Si vous envisagez de vendre, une estimation personnalisée est généralement plus fiable.",
  },
  {
    q: "Quels critères influencent la valeur de mon bien ?",
    a: "Nous analysons notamment la localisation, la superficie, l'état général, le certificat PEB, les équipements, les données urbanistiques et les ventes comparables récentes. Chaque estimation repose sur plusieurs critères croisés afin de déterminer une valeur cohérente avec la réalité du marché.",
  },
  {
    q: "Quel est l'impact du certificat PEB sur le prix de mon bien ?",
    a: "Le certificat PEB fait aujourd'hui partie des éléments examinés par les acheteurs. Il influence l'attractivité du bien et peut avoir un impact sur sa valeur. Lors de notre estimation, nous tenons compte de la performance énergétique dans l'analyse globale de votre bien.",
  },
  {
    q: "Quels documents préparer pour une estimation ?",
    a: "Si vous les avez à disposition, le certificat PEB, les plans, le titre de propriété et les documents urbanistiques peuvent nous aider à affiner notre analyse. Si certains documents manquent, ce n'est pas un problème : nous vous guidons dans les démarches si nécessaire.",
  },
  {
    q: "Combien de temps une estimation reste-t-elle valable ?",
    a: (
      <>
        Une estimation reflète les conditions du marché au moment où elle est
        réalisée. Si votre projet est reporté ou si le marché évolue, une mise
        à jour peut être utile. Vous pouvez à tout moment demander une
        nouvelle estimation ou{" "}
        <a href="/contact" className={faqLinkClass}>
          nous contacter
        </a>{" "}
        pour faire le point sur votre projet.
      </>
    ),
  },
];

export default function EstimationPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <EstimationHero />
        <WhyEstimate />
        <PricingRisks />
        <Method />
        <LocalExpertise />
        <Process />
        <Faq
          items={FAQ_ITEMS}
          eyebrow="Questions fréquentes"
          title="Vos questions, nos réponses."
          description="Tout ce qu'il faut savoir avant de demander une estimation."
          image={{
            src: "/assets/images/faq-contact-interior.webp",
            alt: "Intérieur d'un bien immobilier",
          }}
          imagePosition="right"
          contactHint={{
            text: "Une question particulière ?",
            linkText: "Contactez-nous",
            href: "/contact",
          }}
        />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */

function EstimationHero() {
  return (
    <section className="bg-bg">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-[820px] mx-auto text-center">
          <div className="flex justify-center mb-5">
            <SectionEyebrow tone="light">Estimation immobilière</SectionEyebrow>
          </div>
          <h1 className="text-[40px] sm:text-[52px] lg:text-[64px] font-extrabold tracking-tight leading-[1.02] text-ink text-balance">
            Estimez la valeur de votre bien
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-6 text-base lg:text-lg text-ink/70 leading-relaxed max-w-[620px] mx-auto">
            Choisissez la méthode qui vous convient le mieux : une estimation en
            ligne instantanée ou l&apos;avis personnalisé d&apos;un expert
            immobilier.
          </p>
        </div>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)_minmax(0,1fr)] gap-5 lg:gap-6 max-w-[1180px] mx-auto items-stretch">
          <TrustPanel className="md:col-span-2 lg:col-span-1 order-last lg:order-first" />
          <ChoiceCard
            href="/estimation/en-ligne"
            icon={<Monitor size={26} strokeWidth={1.7} />}
            title="Estimation en ligne"
            description="Obtenez une première estimation de votre bien en quelques minutes grâce à notre outil automatisé."
            bullets={ONLINE_BULLETS}
            cta="Commencer"
            variant="standard"
          />
          <ChoiceCard
            href="/estimation/expert"
            icon={<UserCheck size={26} strokeWidth={1.7} />}
            title="Estimation par un expert"
            description="Recevez un avis de valeur personnalisé, basé sur les caractéristiques de votre bien et notre connaissance du marché local."
            bullets={EXPERT_BULLETS}
            cta="Demander une estimation"
            variant="recommended"
            badge="Recommandé"
          />
        </div>
      </div>
    </section>
  );
}

function TrustPanel({ className = "" }: { className?: string }) {
  return (
    <div className={`h-full flex flex-col ${className}`}>
      <div className="hidden lg:block text-[10.5px] tracking-[.22em] uppercase font-bold text-accent mb-2">
        Be Home Partners
      </div>
      <h3 className="hidden lg:block text-[22px] font-extrabold tracking-tight leading-[1.15] text-ink mb-6 text-balance">
        Le bon partenaire pour estimer<span className="text-accent">.</span>
      </h3>

      <ul className="flex flex-wrap items-start justify-center gap-x-6 gap-y-5 lg:flex-col lg:flex-nowrap lg:items-start lg:justify-start lg:gap-5">
        {TRUST_ITEMS.map((item) => (
          <li key={item.title} className="flex items-start gap-3 max-w-[260px] lg:max-w-none">
            <span
              aria-hidden
              className="inline-flex items-center justify-center w-10 h-10 rounded-[12px] bg-accent text-white shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_18px_-10px_rgba(184,31,58,0.5)]"
            >
              {item.icon}
            </span>
            <div className="min-w-0 self-center">
              <div className="text-[14px] font-bold text-ink leading-snug">
                {item.title}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="hidden lg:block mt-7 pt-6 border-t border-hairline">
        <div className="flex items-center gap-1 text-accent">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg
              key={i}
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <div className="mt-2.5 text-[13px] font-bold text-ink leading-snug">
          Plus de 500 avis clients
        </div>
        <div className="mt-3 flex items-center gap-3 opacity-90">
          <Image
            src="/assets/icons/google.svg"
            alt="Google"
            width={16}
            height={16}
            className="block"
          />
          <Image
            src="/assets/icons/facebook.svg"
            alt="Facebook"
            width={16}
            height={16}
            className="block"
          />
          <Image
            src="/assets/icons/realadvice.png"
            alt="RealAdvice"
            width={16}
            height={16}
            className="block"
            style={{ width: "auto", height: 16 }}
          />
        </div>
      </div>
    </div>
  );
}

function ChoiceCard({
  href,
  icon,
  title,
  description,
  bullets,
  cta,
  variant,
  badge,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  variant: "standard" | "recommended";
  badge?: string;
}) {
  const isRecommended = variant === "recommended";
  return (
    <div
      className={`group relative flex flex-col h-full rounded-[20px] p-7 lg:p-9 transition-all duration-300 hover:-translate-y-1 ${
        isRecommended
          ? "bg-accent-deep text-white shadow-[0_28px_70px_-22px_rgba(156,26,49,0.45)]"
          : "bg-white ring-1 ring-inset ring-hairline shadow-[0_18px_50px_-26px_rgba(15,23,42,0.18)] hover:ring-ink/20"
      }`}
    >
      {isRecommended ? (
        <>
          <div
            aria-hidden
            className="absolute -top-[120px] -right-[120px] w-[360px] h-[360px] rounded-full border border-white/10 pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute -top-[80px] -right-[80px] w-[260px] h-[260px] rounded-full border border-white/[0.08] pointer-events-none"
          />
        </>
      ) : null}

      {badge ? (
        <div
          className={`absolute -top-3 left-7 text-[10px] tracking-[.22em] uppercase font-bold px-3 py-1.5 rounded-full ${
            isRecommended ? "bg-white text-accent" : "bg-accent text-white"
          }`}
        >
          {badge}
        </div>
      ) : null}

      <span
        className={`relative inline-flex items-center justify-center w-12 h-12 rounded-[12px] mb-6 transition-colors ${
          isRecommended
            ? "bg-white/15 text-white"
            : "bg-ink/[0.06] text-ink/70 group-hover:bg-accent/10 group-hover:text-accent"
        }`}
      >
        {icon}
      </span>

      <h2
        className={`relative text-2xl lg:text-[26px] font-extrabold tracking-tight leading-[1.15] text-balance ${
          isRecommended ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <p
        className={`relative mt-3 text-[14.5px] leading-relaxed ${
          isRecommended ? "text-white/80" : "text-ink/65"
        }`}
      >
        {description}
      </p>

      <ul className="relative mt-6 space-y-3 flex-1">
        {bullets.map((b) => (
          <li
            key={b}
            className={`flex items-start gap-3 text-[14px] leading-snug ${
              isRecommended ? "text-white/90" : "text-ink/80"
            }`}
          >
            <span
              aria-hidden
              className={`mt-0.5 grid place-items-center w-5 h-5 rounded-full shrink-0 ${
                isRecommended
                  ? "bg-white text-accent"
                  : "bg-ink/[0.06] text-ink/70"
              }`}
            >
              <Check size={12} strokeWidth={3} />
            </span>
            {b}
          </li>
        ))}
      </ul>

      <div className="relative mt-8">
        <CTAButton
          href={href}
          variant={isRecommended ? "inverted" : "primary"}
          className="w-full"
        >
          {cta}
        </CTAButton>
      </div>
    </div>
  );
}

/* ───────────────── POURQUOI FAIRE ESTIMER SON BIEN ──────────────── */

function WhyEstimate() {
  return (
    <section className="bg-white">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-[720px] mx-auto text-center mb-14">
          <div className="flex justify-center mb-4">
            <SectionEyebrow tone="light">Pourquoi estimer</SectionEyebrow>
          </div>
          <h2 className="text-3xl lg:text-[40px] font-extrabold tracking-tight leading-[1.08] text-ink text-balance">
            Pourquoi faire estimer son bien
            <span className="text-accent">.</span>
          </h2>
          <p className="mt-5 text-base text-ink/70 leading-relaxed">
            Une estimation sérieuse pose les bases d&apos;une vente réussie, du
            premier prix affiché jusqu&apos;à la signature.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {WHY_ITEMS.map((item) => (
            <div
              key={item.title}
              className="group bg-cream rounded-[14px] p-7 lg:p-8 ring-1 ring-inset ring-hairline transition-all duration-300 hover:bg-white hover:ring-ink/20 hover:shadow-[0_18px_50px_-22px_rgba(26,40,69,0.18)]"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-[12px] bg-white text-ink/70 ring-1 ring-inset ring-hairline mb-5 transition-colors group-hover:bg-accent/10 group-hover:text-accent group-hover:ring-accent/20">
                {item.icon}
              </span>
              <h3 className="text-[17px] lg:text-[18px] font-bold text-ink tracking-tight leading-[1.2] mb-2.5 text-balance">
                {item.title}
              </h3>
              <p className="text-[13.5px] text-ink/65 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── LES RISQUES D'UN PRIX MAL POSITIONNÉ ──────────── */

function PricingRisks() {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-[140px] -left-[140px] w-[520px] h-[520px] rounded-full border border-white/[0.06] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-[180px] -right-[180px] w-[560px] h-[560px] rounded-full border border-white/[0.05] pointer-events-none"
      />

      <div className="relative max-w-[1480px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-[720px] mx-auto text-center mb-14">
          <div className="flex justify-center mb-4">
            <SectionEyebrow tone="dark">Bon à savoir</SectionEyebrow>
          </div>
          <h2 className="text-3xl lg:text-[40px] font-extrabold tracking-tight leading-[1.08] text-balance">
            Pourquoi le bon prix est essentiel
            <span className="text-accent">.</span>
          </h2>
          <p className="mt-5 text-base text-white/70 leading-relaxed">
            Le prix de départ conditionne tout le reste : le nombre de visites,
            la qualité des candidats et le temps nécessaire pour vendre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-[1180px] mx-auto items-stretch">
          {RISKS.map((r) => (
            <div
              key={r.title}
              className="group flex flex-col h-full rounded-[20px] p-7 lg:p-8 bg-white/[0.04] ring-1 ring-inset ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:ring-white/20"
            >
              <span
                aria-hidden
                className="inline-flex items-center justify-center w-12 h-12 rounded-[12px] bg-accent text-white mb-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_24px_-12px_rgba(184,31,58,0.5)] transition-transform group-hover:-translate-y-0.5"
              >
                {r.icon}
              </span>
              <h3 className="text-[18px] lg:text-[19px] font-bold text-white tracking-tight leading-[1.2] mb-2.5 text-balance">
                {r.title}
              </h3>
              <p className="text-[14px] text-white/70 leading-relaxed">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── NOTRE MÉTHODE D'ESTIMATION ─────────────────── */

function Method() {
  return (
    <section className="bg-bg">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-[720px] mx-auto text-center mb-14">
          <div className="flex justify-center mb-4">
            <SectionEyebrow tone="light">Notre méthode</SectionEyebrow>
          </div>
          <h2 className="text-3xl lg:text-[40px] font-extrabold tracking-tight leading-[1.08] text-ink text-balance">
            Les critères que nous analysons
            <span className="text-accent">.</span>
          </h2>
          <p className="mt-5 text-base text-ink/70 leading-relaxed">
            Chaque estimation croise plusieurs critères pour aboutir à une
            valeur cohérente, défendable et alignée sur le marché.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 max-w-[1180px] mx-auto">
          {METHOD_ITEMS.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-[14px] p-6 lg:p-7 ring-1 ring-inset ring-hairline transition-all duration-300 hover:ring-ink/20 hover:shadow-[0_18px_50px_-22px_rgba(26,40,69,0.18)]"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-[12px] bg-accent/10 text-accent mb-5 transition-transform group-hover:-translate-y-0.5">
                {item.icon}
              </span>
              <h3 className="text-[16px] lg:text-[17px] font-bold text-ink tracking-tight leading-[1.2] mb-2 text-balance">
                {item.title}
              </h3>
              <p className="text-[13px] text-ink/65 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── UNE EXPERTISE LOCALE ─────────────────── */

function LocalExpertise() {
  return (
    <section className="bg-white">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="lg:order-1">
            <SectionEyebrow tone="light">Expertise locale</SectionEyebrow>
            <h2 className="mt-5 text-3xl lg:text-[40px] font-extrabold tracking-tight leading-[1.08] text-ink text-balance">
              Une connaissance fine du marché local
              <span className="text-accent">.</span>
            </h2>
            <div className="mt-6 space-y-5 text-[15.5px] text-ink/75 leading-relaxed">
              <p>
                Plus de quinze ans d&apos;expérience sur le terrain, des
                centaines de biens visités, suivis et vendus dans le Brabant
                wallon et ses communes voisines.
              </p>
              <p>
                Nos estimations s&apos;appuient sur des données concrètes :
                ventes réelles, dynamique des quartiers, attentes des
                acquéreurs. Pas de fourchette vague, mais une valeur
                argumentée.
              </p>
            </div>

            <ul className="mt-8 space-y-3.5">
              {[
                "Connaissance approfondie des communes et quartiers",
                "Données de ventes récentes et comparables",
                "Lecture du marché en temps réel",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3.5">
                  <span
                    aria-hidden
                    className="mt-0.5 grid place-items-center w-8 h-8 rounded-[9px] bg-accent/10 text-accent shrink-0 ring-1 ring-inset ring-accent/15"
                  >
                    <Check size={15} strokeWidth={2.4} />
                  </span>
                  <span className="text-[14.5px] text-ink/85 leading-relaxed pt-[5px]">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:order-2 relative aspect-[4/3] lg:aspect-auto lg:min-h-[460px] rounded-[14px] overflow-hidden ring-1 ring-inset ring-hairline shadow-[0_24px_60px_-30px_rgba(15,23,42,0.25)]">
            <Image
              src="/assets/images/estimation-calcul.jpg"
              alt="Estimation d'un bien immobilier"
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

/* ─────────── DÉROULEMENT D'UNE ESTIMATION PAR UN EXPERT ─────────── */

function Process() {
  return (
    <section className="bg-bg">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr] xl:grid-cols-[minmax(0,480px)_1fr] gap-12 lg:gap-16 xl:gap-20 lg:items-start">
          <div className="text-center lg:text-left max-w-[720px] mx-auto lg:mx-0 lg:sticky lg:top-28 lg:self-start">
            <div className="flex justify-center lg:justify-start mb-4">
              <SectionEyebrow tone="light">Déroulement</SectionEyebrow>
            </div>
            <h2 className="text-3xl lg:text-[40px] font-extrabold tracking-tight leading-[1.08] text-ink text-balance">
              Comment se déroule une estimation par un expert
              <span className="text-accent">.</span>
            </h2>
            <p className="mt-5 text-base text-ink/70 leading-relaxed lg:max-w-[420px]">
              Un parcours simple, transparent et sans engagement, de la
              première prise de contact au document remis.
            </p>
          </div>

          <ol className="max-w-[820px] mx-auto lg:mx-0 lg:max-w-none w-full">
            {PROCESS_STEPS.map((step, i) => {
              const isLast = i === PROCESS_STEPS.length - 1;
              return (
                <li
                  key={step.title}
                  className="group relative pl-16 pb-10 last:pb-0"
                >
                  {!isLast ? (
                    <span
                      aria-hidden
                      className="absolute left-[19px] top-12 -bottom-[14px] w-px bg-gradient-to-b from-ink/15 via-ink/10 to-ink/15"
                    />
                  ) : null}
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 z-10 grid place-items-center w-10 h-10 rounded-full bg-white ring-1 ring-inset ring-hairline text-accent transition-colors group-hover:bg-accent group-hover:text-white group-hover:ring-accent"
                  >
                    {step.icon}
                  </span>
                  <h3 className="text-[18px] lg:text-[20px] font-extrabold text-ink tracking-tight leading-tight mb-2 text-balance">
                    {step.title}
                  </h3>
                  <p className="text-[14.5px] lg:text-[15px] text-ink/70 leading-relaxed max-w-[620px]">
                    {step.body}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CTA FINAL ─────────────────────────── */

function FinalCTA() {
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
              Prêt à connaître la valeur de votre bien ?
            </h2>
            <p className="mt-5 text-base lg:text-lg leading-relaxed opacity-90 max-w-[600px] mx-auto">
              Choisissez la méthode qui vous convient le mieux et obtenez une
              estimation fiable, gratuite et sans engagement.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <CTAButton
                href="/estimation/en-ligne"
                variant="inverted"
                className="w-full sm:w-auto whitespace-nowrap"
              >
                Estimation en ligne
              </CTAButton>
              <CTAButton
                href="/estimation/expert"
                variant="ghost"
                className="w-full sm:w-auto whitespace-nowrap"
              >
                Estimation par un expert
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
