import {
  Building,
  ClipboardList,
  Compass,
  Eye,
  FileSearch,
  FileText,
  Hammer,
  Handshake,
  Layers3,
  Map,
  Megaphone,
  Target,
  Users,
} from "lucide-react";
import type { ServiceConfig } from "@/data/services";

const ICON_SIZE = 20;
const STROKE = 1.7;

export const promotionImmobiliereService: ServiceConfig = {
  slug: "promotion-immobiliere",
  metaTitle:
    "Promotion immobilière dans le Brabant wallon et alentours",
  metaDescription:
    "Valorisez votre terrain ou votre projet neuf avec une étude de potentiel et une stratégie de commercialisation sur mesure.",
  serviceName: "Promotion immobilière en Brabant wallon",
  serviceType: "Real Estate Development",

  hero: {
    label: "Promotion immobilière",
    h1: "Promotion immobilière et valorisation de projets",
    description:
      "De l'étude de potentiel à la commercialisation, une stratégie sur mesure pour valoriser votre terrain ou votre projet neuf dans le Brabant wallon et les communes environnantes.",
    points: [
      {
        title: "Analyse du potentiel du projet",
        icon: <Compass size={ICON_SIZE} strokeWidth={STROKE} />,
      },
      {
        title: "Accompagnement administratif et urbanistique",
        icon: <FileText size={ICON_SIZE} strokeWidth={STROKE} />,
      },
      {
        title: "Coordination des intervenants",
        icon: <Users size={ICON_SIZE} strokeWidth={STROKE} />,
      },
      {
        title: "Commercialisation des unités",
        icon: <Megaphone size={ICON_SIZE} strokeWidth={STROKE} />,
      },
    ],
    primaryCta: {
      label: "Étudier mon projet",
      href: "/contact?subject=promotion",
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
    title: "Un accompagnement sur mesure pour structurer votre projet",
    body: [
      <>
        Qu&apos;il s&apos;agisse d&apos;un projet neuf, d&apos;un terrain à
        valoriser ou d&apos;un immeuble à rénover, la réussite d&apos;une
        opération immobilière repose sur une vision claire et une coordination
        rigoureuse.
      </>,
      <>
        Nous vous accompagnons dans l&apos;analyse du potentiel du bien, les
        démarches administratives et urbanistiques ainsi que la préparation de
        la commercialisation.
      </>,
      <>
        Selon la nature du projet, nous collaborons avec les différents
        intervenants nécessaires afin de vous aider à avancer avec méthode et
        cohérence.
      </>,
    ],
    image: {
      src: "/assets/images/promotion-immobiliere.jpg",
      alt: "Projet de promotion immobilière accompagné par Be Home Partners en Brabant wallon",
    },
    imagePosition: "right",
    bullets: [
      { text: "Analyse du potentiel du terrain ou du projet" },
      { text: "Accompagnement administratif et urbanistique" },
      { text: "Coordination des différents intervenants" },
      { text: "Préparation structurée de la commercialisation" },
    ],
  },

  benefits: {
    eyebrow: "Ce qui fait la différence",
    title: "Une vision globale de votre projet immobilier",
    items: [
      {
        title: "Analyse du potentiel",
        body: "Nous étudions les caractéristiques du bien ou du terrain afin d'identifier les possibilités de valorisation.",
        icon: <Eye size={22} strokeWidth={1.6} />,
      },
      {
        title: "Accompagnement administratif",
        body: "Nous vous assistons dans les démarches et recherches nécessaires au bon déroulement du projet.",
        icon: <ClipboardList size={22} strokeWidth={1.6} />,
      },
      {
        title: "Coordination des intervenants",
        body: "Nous collaborons avec les professionnels utiles selon les besoins du projet.",
        icon: <Handshake size={22} strokeWidth={1.6} />,
      },
      {
        title: "Commercialisation structurée",
        body: "Nous préparons la mise en marché des unités avec une stratégie adaptée.",
        icon: <Target size={22} strokeWidth={1.6} />,
      },
    ],
  },

  features: {
    eyebrow: "Nos domaines d'intervention",
    title: "Les types de projets que nous accompagnons",
    description:
      "Nous intervenons sur différents types de projets immobiliers, de l'étude du potentiel à la mise en marché.",
    items: [
      {
        title: "Projet neuf",
        body: "Accompagnement dans la structuration et la commercialisation d'un programme neuf.",
        icon: <Building size={24} strokeWidth={1.7} />,
      },
      {
        title: "Terrain à valoriser",
        body: "Analyse du potentiel d'un terrain ou d'une parcelle à développer.",
        icon: <Map size={24} strokeWidth={1.7} />,
      },
      {
        title: "Immeuble à rénover",
        body: "Étude des possibilités de valorisation d'un bâtiment existant.",
        icon: <Hammer size={24} strokeWidth={1.7} />,
      },
      {
        title: "Projet mixte",
        body: "Approche globale pour des projets combinant plusieurs usages.",
        icon: <Layers3 size={24} strokeWidth={1.7} />,
      },
      {
        title: "Commercialisation des unités",
        body: "Préparation de la stratégie de mise en marché.",
        icon: <Megaphone size={24} strokeWidth={1.7} />,
      },
      {
        title: "Accompagnement urbanistique",
        body: "Analyse des éléments administratifs et urbanistiques disponibles.",
        icon: <FileSearch size={24} strokeWidth={1.7} />,
      },
    ],
  },

  process: {
    eyebrow: "Notre accompagnement",
    title: "Les étapes clés de votre projet",
    steps: [
      {
        title: "Analyse du potentiel",
        body: "Nous étudions le bien, le terrain ou l'immeuble afin d'identifier les possibilités de valorisation.",
      },
      {
        title: "Étude du dossier",
        body: "Nous analysons les éléments administratifs, urbanistiques et techniques disponibles.",
      },
      {
        title: "Structuration du projet",
        body: "Nous définissons avec vous les orientations à privilégier.",
      },
      {
        title: "Préparation de la commercialisation",
        body: "Nous élaborons les supports et la stratégie de mise en marché.",
      },
      {
        title: "Accompagnement dans la durée",
        body: "Nous restons à vos côtés tout au long du projet.",
      },
    ],
  },

  faq: {
    eyebrow: "Questions fréquentes",
    title: "Tout savoir sur la promotion immobilière",
    items: [
      {
        q: "Accompagnez-vous les projets immobiliers neufs ?",
        a: "Oui. Nous pouvons intervenir dès les premières réflexions afin d'analyser le potentiel du projet et de vous accompagner dans sa structuration et sa commercialisation.",
      },
      {
        q: "Mon terrain ou mon immeuble présente-t-il un potentiel de valorisation ?",
        a: "Chaque projet est unique. Nous analysons les caractéristiques du bien, son contexte et les éléments disponibles afin d'identifier les possibilités de développement ou de mise en valeur.",
      },
      {
        q: "Pouvez-vous m'aider sur les aspects urbanistiques ?",
        a: "Nous pouvons vous accompagner dans l'analyse des éléments urbanistiques disponibles et vous orienter dans les démarches nécessaires selon la nature du projet.",
      },
      {
        q: "Travaillez-vous avec des architectes et d'autres intervenants ?",
        a: "Selon les besoins du projet, nous pouvons collaborer avec les professionnels utiles afin d'assurer une approche cohérente et structurée.",
      },
      {
        q: "Pouvez-vous prendre en charge la commercialisation du projet ?",
        a: "Oui. Nous pouvons préparer la stratégie de mise en marché et accompagner la commercialisation des unités.",
      },
      {
        q: "Intervenez-vous dès les premières réflexions ?",
        a: "Oui. Un échange en amont permet souvent de clarifier les options envisageables et d'orienter le projet sur des bases solides.",
      },
    ],
  },

  cta: {
    eyebrow: "Passons à l'action",
    title: "Parlons de votre projet immobilier",
    body:
      "Un premier échange permet de comprendre vos objectifs et de définir la meilleure approche pour structurer et valoriser votre projet.",
    primary: {
      label: "Étudier mon projet",
      href: "/contact?subject=promotion",
    },
    secondary: {
      label: "Nous contacter",
      href: "/contact",
    },
  },
};
