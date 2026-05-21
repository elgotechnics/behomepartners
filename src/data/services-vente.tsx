import Link from "next/link";
import {
  BadgeCheck,
  Camera,
  ClipboardList,
  DraftingCompass,
  FileText,
  Scale,
  ScanSearch,
  ShieldCheck,
  Sofa,
  Target,
} from "lucide-react";
import type { ServiceConfig } from "@/data/services";

const ICON_SIZE = 20;
const STROKE = 1.7;

function DroneIcon({ size = 24, strokeWidth = 1.7 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="5" cy="5" r="2.5" />
      <circle cx="19" cy="5" r="2.5" />
      <circle cx="5" cy="19" r="2.5" />
      <circle cx="19" cy="19" r="2.5" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M7 7l2 2M17 7l-2 2M7 17l2-2M17 17l-2-2" />
    </svg>
  );
}

const linkCls =
  "font-semibold text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent transition-colors";

export const venteService: ServiceConfig = {
  slug: "vente",
  metaTitle:
    "Vente immobilière dans le Brabant wallon et alentours",
  metaDescription:
    "Vendez votre bien avec un accompagnement sur mesure, transparent et discret dans le Brabant wallon et les communes environnantes.",
  serviceName: "Vente immobilière en Brabant wallon",
  serviceType: "Real Estate Sales",

  hero: {
    label: "Vendre votre bien",
    h1: "Vendre votre bien immobilier dans les meilleures conditions",
    description:
      "De l'estimation à la signature, un accompagnement sur mesure et transparent pour commercialiser votre bien dans le Brabant wallon et les communes environnantes.",
    points: [
      {
        title: "Estimation offerte et sans engagement",
        icon: <BadgeCheck size={ICON_SIZE} strokeWidth={STROKE} />,
      },
      {
        title: "Mise en valeur professionnelle du bien",
        icon: <Camera size={ICON_SIZE} strokeWidth={STROKE} />,
      },
      {
        title: "Accompagnement juridique complet",
        icon: <Scale size={ICON_SIZE} strokeWidth={STROKE} />,
      },
      {
        title: "Suivi jusqu'à l'acte authentique",
        icon: <ShieldCheck size={ICON_SIZE} strokeWidth={STROKE} />,
      },
    ],
    primaryCta: {
      label: "Vendre mon bien",
      href: "/estimation",
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
    eyebrow: "Notre méthode de vente",
    title: "Une stratégie de commercialisation adaptée à votre bien",
    body: [
      <>
        Vendre un bien immobilier ne consiste pas uniquement à publier une
        annonce. Une commercialisation efficace repose sur une estimation
        cohérente, une présentation soignée et un suivi rigoureux à chaque
        étape.
      </>,
      <>
        Nous commençons généralement par une{" "}
        <Link href="/estimation" className={linkCls}>
          estimation immobilière
        </Link>{" "}
        afin de définir un prix de mise en vente cohérent avec le marché. Nous
        élaborons ensuite une stratégie de commercialisation adaptée aux
        caractéristiques du bien et au profil des acquéreurs recherchés.
      </>,
      <>
        Que vous vendiez un appartement, une maison familiale, un terrain ou
        un bien de caractère, nous vous accompagnons avec la même exigence de
        qualité et d&apos;attention aux détails.
      </>,
    ],
    image: {
      src: "/assets/images/vente-service.jpg",
      alt: "Accompagnement à la vente immobilière par Be Home Partners",
    },
    imagePosition: "right",
    bullets: [
      { text: "Stratégie de prix ancrée dans la réalité du marché" },
      { text: "Adaptation au type de bien et au profil des acquéreurs" },
      { text: "Suivi commercial régulier tout au long du mandat" },
      { text: "Coordination administrative jusqu'à l'acte authentique" },
    ],
  },

  benefits: {
    eyebrow: "Ce qui fait la différence",
    title: "Un accompagnement structuré du premier échange à la signature",
    description:
      "Quatre repères qui structurent notre manière de commercialiser votre bien, du positionnement initial à la signature de l'acte.",
    items: [
      {
        title: "Une stratégie claire dès le départ",
        body: "Nous définissons avec vous le positionnement du bien, le prix de mise en vente et les actions à mettre en place.",
        icon: <Target size={22} strokeWidth={1.6} />,
      },
      {
        title: "Une présentation soignée",
        body: "Photos professionnelles, plans, vidéos ou visites virtuelles selon les besoins du bien.",
        icon: <Camera size={22} strokeWidth={1.6} />,
      },
      {
        title: "Un suivi commercial rigoureux",
        body: "Organisation des visites, retour des candidats et ajustements si nécessaire.",
        icon: <ClipboardList size={22} strokeWidth={1.6} />,
      },
      {
        title: "Un encadrement administratif et juridique",
        body: "Préparation du compromis et coordination avec les notaires.",
        icon: <Scale size={22} strokeWidth={1.6} />,
      },
    ],
  },

  features: {
    eyebrow: "Mise en valeur du bien",
    title: "Des outils pour valoriser votre bien",
    description:
      "Selon les caractéristiques de votre bien, nous mettons en place différents outils pour renforcer son attractivité et permettre aux acquéreurs potentiels de se projeter plus facilement.",
    items: [
      {
        title: "Photographies professionnelles",
        body: "Un photographe dédié pour valoriser chaque pièce et capter l'attention en ligne.",
        icon: <Camera size={24} strokeWidth={1.7} />,
      },
      {
        title: "Vidéos par drone",
        body: "Pour les biens avec jardin, terrain ou environnement remarquable.",
        icon: <DroneIcon size={24} strokeWidth={1.7} />,
      },
      {
        title: "Plans 2D",
        body: "Une lecture claire des volumes pour les futurs visiteurs.",
        icon: <DraftingCompass size={24} strokeWidth={1.7} />,
      },
      {
        title: "Visites virtuelles",
        body: "Un parcours immersif disponible 24/7, qui filtre naturellement les visites.",
        icon: <ScanSearch size={24} strokeWidth={1.7} />,
      },
      {
        title: "Home staging",
        body: "Quelques ajustements simples pour mettre votre bien en valeur sans gros travaux.",
        icon: <Sofa size={24} strokeWidth={1.7} />,
      },
      {
        title: "Accompagnement administratif",
        body: "PEB, certificats, électricité, urbanisme : on coordonne les démarches.",
        icon: <FileText size={24} strokeWidth={1.7} />,
      },
    ],
  },

  process: {
    eyebrow: "Notre accompagnement",
    title: "Les étapes clés de votre vente",
    description:
      "Un parcours simple, structuré, avec un seul interlocuteur du premier échange à la signature.",
    steps: [
      {
        title: "Estimation du bien",
        body: (
          <>
            Nous analysons les caractéristiques de votre bien et les ventes
            récentes du secteur afin de définir un prix cohérent avec le
            marché. Plus de détails sur notre{" "}
            <Link href="/estimation" className={linkCls}>
              estimation immobilière
            </Link>
            .
          </>
        ),
      },
      {
        title: "Préparation et mise en valeur",
        body: "Nous réunissons les documents utiles et préparons les supports de présentation pour valoriser votre bien.",
      },
      {
        title: "Commercialisation ciblée",
        body: "Votre bien est diffusé auprès de notre réseau et sur les supports les plus pertinents.",
      },
      {
        title: "Visites et négociation",
        body: "Nous organisons les visites, recueillons les retours et vous accompagnons dans l'analyse des offres.",
      },
      {
        title: "Compromis et signature",
        body: "Nous coordonnons les démarches administratives et juridiques jusqu'à la signature de l'acte authentique.",
      },
    ],
  },

  faq: {
    eyebrow: "Questions fréquentes",
    title: "Tout savoir sur la vente immobilière",
    description:
      "Ce que les vendeurs nous demandent le plus souvent avant de nous confier la mise en vente de leur bien.",
    items: [
      {
        q: "Quels documents dois-je préparer pour vendre mon bien ?",
        a: "Selon le type de bien, plusieurs documents peuvent être nécessaires, comme le certificat PEB, les renseignements urbanistiques ou certaines attestations techniques. Nous vous indiquons les éléments à prévoir et pouvons vous accompagner dans la constitution du dossier.",
      },
      {
        q: "Mandat simple ou exclusif : quelle est la différence ?",
        a: "Un mandat simple permet de confier la vente à plusieurs agences, tandis qu'un mandat exclusif repose sur une collaboration unique. Le choix dépend de votre stratégie, du niveau d'accompagnement souhaité et de la manière dont vous souhaitez commercialiser votre bien.",
      },
      {
        q: "Comment déterminez-vous le prix de vente idéal ?",
        a: (
          <>
            Nous nous appuyons sur une analyse du marché, les caractéristiques du bien et les ventes récentes dans le secteur. Une{" "}
            <Link href="/estimation" className={linkCls}>
              estimation immobilière
            </Link>{" "}
            précise constitue la base d'une stratégie de commercialisation cohérente.
          </>
        ),
      },
      {
        q: "Comment valorisez-vous mon bien pour attirer les acquéreurs ?",
        a: "Selon les caractéristiques du bien, nous pouvons mettre en place des photographies professionnelles, des plans, des visites virtuelles ou d'autres outils de présentation afin de mettre en avant ses atouts.",
      },
      {
        q: "Combien de temps faut-il entre une offre acceptée et la signature ?",
        a: "Le délai dépend du dossier et des démarches à accomplir. Nous assurons le suivi administratif et la coordination avec les différentes parties afin de faire avancer la transaction dans les meilleures conditions.",
      },
      {
        q: "Quels frais dois-je anticiper en tant que vendeur ?",
        a: "Les frais varient selon la situation du bien et les documents à réunir. Lors de notre premier échange, nous vous expliquons les coûts éventuels liés à la préparation et à la vente de votre bien.",
      },
    ],
  },

  cta: {
    eyebrow: "Passons à l'action",
    title: "Parlons de votre projet de vente",
    body:
      "Un premier échange permet de comprendre votre situation, de répondre à vos questions et de définir la meilleure stratégie pour commercialiser votre bien.",
    primary: {
      label: "Estimer mon bien",
      href: "/estimation",
    },
    secondary: {
      label: "Nous contacter",
      href: "/contact",
    },
  },
};
