import Link from "next/link";
import {
  Briefcase,
  Building2,
  ClipboardList,
  Compass,
  Eye,
  Hammer,
  Handshake,
  Home,
  Hotel,
  Lightbulb,
  Map,
  Target,
  TrendingUp,
} from "lucide-react";
import type { ServiceConfig } from "@/data/services";

const ICON_SIZE = 20;
const STROKE = 1.7;

const linkCls =
  "font-semibold text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent transition-colors";

export const investissementService: ServiceConfig = {
  slug: "investissement",
  metaTitle:
    "Investissement immobilier dans le Brabant wallon et alentours",
  metaDescription:
    "Bénéficiez d'un accompagnement sur mesure pour investir dans l'immobilier selon vos objectifs patrimoniaux et de rendement.",
  serviceName: "Investissement immobilier en Brabant wallon",
  serviceType: "Real Estate Investment",

  hero: {
    label: "Investissement immobilier",
    h1: "Investissement immobilier sur mesure",
    description:
      "Un accompagnement sur mesure pour structurer votre projet et identifier des opportunités cohérentes avec vos objectifs, dans le Brabant wallon et les communes environnantes.",
    points: [
      {
        title: "Analyse personnalisée de votre projet",
        icon: <Target size={ICON_SIZE} strokeWidth={STROKE} />,
      },
      {
        title: "Conseils stratégiques et pratiques",
        icon: <Lightbulb size={ICON_SIZE} strokeWidth={STROKE} />,
      },
      {
        title: "Accompagnement à chaque étape",
        icon: <Handshake size={ICON_SIZE} strokeWidth={STROKE} />,
      },
      {
        title: "Vision patrimoniale à long terme",
        icon: <TrendingUp size={ICON_SIZE} strokeWidth={STROKE} />,
      },
    ],
    primaryCta: {
      label: "Investir avec nous",
      href: "/contact?subject=investissement",
    },
    secondaryCta: {
      label: "Nous appeler",
      href: "tel:+3267841284",
    },
    image: {
      src: "/assets/images/agence-bureaux.webp",
      alt: "",
    },
  },

  intro: {
    eyebrow: "Notre approche",
    title: "Un regard objectif pour structurer votre investissement",
    body: [
      <>
        Investir dans l&apos;immobilier soulève de nombreuses questions : type
        de bien, localisation, niveau de loyer, travaux éventuels ou mode de
        gestion. Notre rôle est de vous aider à analyser ces éléments afin de
        prendre une décision éclairée.
      </>,
      <>
        Nous prenons le temps de comprendre vos objectifs, votre horizon de
        détention et vos attentes afin de vous orienter vers une stratégie
        cohérente avec votre situation.
      </>,
      <>
        Que vous envisagiez un appartement, une maison de rapport ou un projet
        plus spécifique, nous vous accompagnons avec une approche pragmatique
        et personnalisée.
      </>,
    ],
    image: {
      src: "/assets/images/investissement-immobilier-brabant-wallon.webp",
      alt: "Investissement immobilier dans le Brabant wallon avec analyse du rendement locatif",
    },
    imagePosition: "right",
    bullets: [
      { text: "Analyse cohérente selon vos objectifs patrimoniaux" },
      { text: "Accompagnement dans l'étude du projet immobilier" },
      { text: "Conseils adaptés au type de bien recherché" },
      { text: "Vision pragmatique orientée long terme" },
    ],
  },

  benefits: {
    eyebrow: "Ce qui fait la différence",
    title: "Un accompagnement fondé sur l'analyse et l'expérience du terrain",
    items: [
      {
        title: "Une vision globale du projet",
        body: "Nous analysons les aspects pratiques, locatifs et patrimoniaux de votre investissement.",
        icon: <Eye size={22} strokeWidth={1.6} />,
      },
      {
        title: "Des conseils adaptés à votre situation",
        body: "Chaque projet est étudié en fonction de vos objectifs et de vos contraintes.",
        icon: <Compass size={22} strokeWidth={1.6} />,
      },
      {
        title: "Une approche concrète",
        body: "Nous privilégions des recommandations claires et directement applicables.",
        icon: <ClipboardList size={22} strokeWidth={1.6} />,
      },
      {
        title: "Un accompagnement sur la durée",
        body: "Nous pouvons vous accompagner au-delà de l'acquisition si nécessaire.",
        icon: <Handshake size={22} strokeWidth={1.6} />,
      },
    ],
  },

  features: {
    eyebrow: "Nos domaines d'intervention",
    title: "Quels projets d'investissement accompagnons-nous ?",
    description:
      "Que vous envisagiez un premier achat locatif ou le développement de votre patrimoine, nous vous accompagnons dans l'analyse de projets adaptés à vos objectifs.",
    items: [
      {
        title: "Premier investissement locatif",
        body: "Un accompagnement structuré pour poser des bases solides et avancer avec méthode.",
        icon: <Home size={24} strokeWidth={1.7} />,
      },
      {
        title: "Appartement destiné à la location",
        body: "Analyse du potentiel locatif, des charges et des points d'attention.",
        icon: <Building2 size={24} strokeWidth={1.7} />,
      },
      {
        title: "Immeuble de rapport",
        body: "Étude de projets générant plusieurs revenus locatifs.",
        icon: <Hotel size={24} strokeWidth={1.7} />,
      },
      {
        title: "Bien à rénover",
        body: "Identification des possibilités de valorisation et des éléments à anticiper.",
        icon: <Hammer size={24} strokeWidth={1.7} />,
      },
      {
        title: "Terrain ou projet à développer",
        body: "Analyse du potentiel d'un terrain ou d'un projet plus ambitieux.",
        icon: <Map size={24} strokeWidth={1.7} />,
      },
      {
        title: "Investissement patrimonial",
        body: "Vision à long terme pour structurer votre stratégie immobilière.",
        icon: <Briefcase size={24} strokeWidth={1.7} />,
      },
    ],
  },

  process: {
    eyebrow: "Notre accompagnement",
    title: "Les étapes clés de votre projet d'investissement",
    steps: [
      {
        title: "Analyse de vos objectifs",
        body: "Nous échangeons avec vous afin de comprendre votre stratégie et vos attentes.",
      },
      {
        title: "Étude des opportunités",
        body: "Nous analysons les biens ou les pistes d'investissement envisagés.",
      },
      {
        title: "Recommandations personnalisées",
        body: "Nous vous aidons à évaluer les points d'attention et les options possibles.",
      },
      {
        title: "Mise en œuvre",
        body: "Nous vous accompagnons dans les démarches nécessaires à la concrétisation du projet.",
      },
      {
        title: "Suivi dans le temps",
        body: (
          <>
            Selon vos besoins, nous pouvons également vous accompagner pour la{" "}
            <Link href="/services/location" className={linkCls}>
              location
            </Link>{" "}
            ou la{" "}
            <Link href="/services/gestion-locative" className={linkCls}>
              gestion du bien
            </Link>
            .
          </>
        ),
      },
    ],
  },

  faq: {
    eyebrow: "Questions fréquentes",
    title: "Tout savoir sur l'investissement immobilier",
    items: [
      {
        q: "Accompagnez-vous les investisseurs débutants ?",
        a: "Oui. Que vous envisagiez un premier achat locatif ou le développement de votre patrimoine, nous prenons le temps de comprendre vos objectifs et de vous orienter vers une stratégie cohérente avec votre situation.",
      },
      {
        q: "Pouvez-vous analyser un bien que j'ai repéré ?",
        a: "Oui. Nous pouvons vous aider à évaluer les points d'attention, le potentiel locatif et la cohérence du projet par rapport à vos objectifs d'investissement.",
      },
      {
        q: "Quelle rentabilité locative peut-on espérer ?",
        a: "La rentabilité dépend du type de bien, de son emplacement, des charges et du niveau de loyer envisageable. Nous vous aidons à analyser ces éléments afin d'évaluer le potentiel du projet.",
      },
      {
        q: "Dois-je privilégier un bien neuf, ancien ou à rénover ?",
        a: "Chaque option présente ses spécificités. Le choix dépend de vos objectifs, de votre horizon de détention et du niveau d'implication souhaité dans le projet.",
      },
      {
        q: "Proposez-vous aussi la mise en location et la gestion du bien ?",
        a: (
          <>
            Oui. Après l'acquisition, nous pouvons également vous accompagner pour la{" "}
            <Link href="/services/location" className={linkCls}>
              location immobilière
            </Link>{" "}
            et, si vous souhaitez déléguer le suivi, pour la{" "}
            <Link href="/services/gestion-locative" className={linkCls}>
              gestion locative
            </Link>
            .
          </>
        ),
      },
      {
        q: "Quels sont les points d'attention à analyser avant d'investir ?",
        a: "Au-delà du prix, il est important d'examiner l'état du bien, sa situation urbanistique, les charges, le potentiel locatif et les perspectives de valorisation à long terme.",
      },
    ],
  },

  cta: {
    eyebrow: "Passons à l'action",
    title: "Parlons de votre projet d'investissement",
    body:
      "Un premier échange permet de comprendre vos objectifs et de vous orienter vers une stratégie adaptée à votre situation.",
    primary: {
      label: "Discuter de mon projet",
      href: "/contact?subject=investissement",
    },
    secondary: {
      label: "Nous contacter",
      href: "/contact",
    },
  },
};
