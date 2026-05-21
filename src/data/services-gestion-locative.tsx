import Link from "next/link";
import {
  Bell,
  Calendar,
  ClipboardList,
  Eye,
  FileText,
  Headphones,
  LineChart,
  MessageSquare,
  RefreshCw,
  SlidersHorizontal,
  Wrench,
} from "lucide-react";
import type { ServiceConfig } from "@/data/services";

const ICON_SIZE = 20;
const STROKE = 1.7;

const linkCls =
  "font-semibold text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent transition-colors";

export const gestionLocativeService: ServiceConfig = {
  slug: "gestion-locative",
  metaTitle:
    "Gestion locative dans le Brabant wallon et alentours",
  metaDescription:
    "Confiez la gestion locative de votre bien à une équipe expérimentée. Un suivi transparent pour louer en toute sérénité.",
  serviceName: "Gestion locative en Brabant wallon",
  serviceType: "Property Management",

  hero: {
    label: "Gestion locative",
    h1: "Gestion locative complète et transparente",
    description:
      "Un suivi administratif et opérationnel transparent pour gérer votre bien en toute sérénité, dans le Brabant wallon et les communes environnantes.",
    points: [
      {
        title: "Suivi administratif du bail",
        icon: <FileText size={ICON_SIZE} strokeWidth={STROKE} />,
      },
      {
        title: "Indexation des loyers",
        icon: <LineChart size={ICON_SIZE} strokeWidth={STROKE} />,
      },
      {
        title: "Interlocuteur pour le locataire",
        icon: <Headphones size={ICON_SIZE} strokeWidth={STROKE} />,
      },
      {
        title: "Gestion sur mesure selon vos besoins",
        icon: <SlidersHorizontal size={ICON_SIZE} strokeWidth={STROKE} />,
      },
    ],
    primaryCta: {
      label: "Confier en gestion",
      href: "/contact?subject=gestion",
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
    eyebrow: "Notre méthode de gestion",
    title: "Une gestion locative claire et structurée",
    body: [
      <>
        Gérer un bien mis en location demande du temps, de la rigueur et un
        suivi régulier. Nous vous accompagnons dans la gestion administrative
        et opérationnelle de votre bien afin de vous décharger des démarches
        du quotidien.
      </>,
      <>
        Selon vos besoins, nous pouvons prendre en charge tout ou partie des
        tâches liées à la gestion locative : suivi du bail, indexation des
        loyers, échanges avec le locataire et coordination des interventions
        nécessaires.
      </>,
      <>
        Que votre bien ait été loué par notre agence ou qu&apos;il soit déjà
        occupé, nous pouvons vous proposer une solution adaptée à votre
        situation. Découvrez aussi notre service de{" "}
        <Link href="/services/location" className={linkCls}>
          location immobilière
        </Link>{" "}
        si la recherche du locataire reste à organiser.
      </>,
    ],
    image: {
      src: "/assets/images/gestion-locative.png",
      alt: "Remise de clés et signature du mandat de gestion locative",
    },
    imagePosition: "right",
    bullets: [
      { text: "Suivi administratif du bail et des échéances" },
      { text: "Indexation des loyers et gestion des échanges" },
      { text: "Coordination des interventions nécessaires" },
      { text: "Gestion adaptée selon votre niveau d'implication" },
    ],
  },

  benefits: {
    eyebrow: "Ce qui fait la différence",
    title: "Une gestion pensée pour vous simplifier la vie",
    items: [
      {
        title: "Un suivi administratif rigoureux",
        body: "Nous assurons le suivi des documents et des échéances liés à votre location.",
        icon: <ClipboardList size={22} strokeWidth={1.6} />,
      },
      {
        title: "Un interlocuteur dédié",
        body: "Le locataire dispose d'un point de contact clair pour les questions courantes.",
        icon: <MessageSquare size={22} strokeWidth={1.6} />,
      },
      {
        title: "Une gestion adaptée à vos besoins",
        body: "Nous définissons avec vous le niveau d'accompagnement souhaité.",
        icon: <SlidersHorizontal size={22} strokeWidth={1.6} />,
      },
      {
        title: "Une vision claire de votre dossier",
        body: "Vous restez informé des démarches effectuées et des points nécessitant votre attention.",
        icon: <Eye size={22} strokeWidth={1.6} />,
      },
    ],
  },

  features: {
    eyebrow: "Ce que nous pouvons prendre en charge",
    title: "Une gestion locative adaptée à vos besoins",
    description:
      "Selon votre situation, nous pouvons assurer tout ou partie du suivi administratif et courant de votre bien loué.",
    items: [
      {
        title: "Suivi administratif du bail",
        body: "Gestion des documents, échéances et éléments liés au bail.",
        icon: <FileText size={24} strokeWidth={1.7} />,
      },
      {
        title: "Indexation des loyers",
        body: "Suivi des échéances prévues et accompagnement dans l'application de l'indexation.",
        icon: <RefreshCw size={24} strokeWidth={1.7} />,
      },
      {
        title: "Échanges avec le locataire",
        body: "Centralisation des demandes courantes et communication claire avec les parties.",
        icon: <MessageSquare size={24} strokeWidth={1.7} />,
      },
      {
        title: "Coordination des interventions",
        body: "Organisation des démarches nécessaires en cas de demande ou d'intervention sur le bien.",
        icon: <Wrench size={24} strokeWidth={1.7} />,
      },
      {
        title: "Suivi des échéances",
        body: "Attention portée aux dates importantes et aux démarches à anticiper.",
        icon: <Calendar size={24} strokeWidth={1.7} />,
      },
      {
        title: "Information du propriétaire",
        body: "Vous restez informé des points importants et des actions réalisées.",
        icon: <Bell size={24} strokeWidth={1.7} />,
      },
    ],
  },

  process: {
    eyebrow: "Notre accompagnement",
    title: "Les étapes clés de la gestion locative",
    steps: [
      {
        title: "Analyse de votre situation",
        body: "Nous échangeons avec vous afin de définir vos besoins et le niveau de délégation souhaité.",
      },
      {
        title: "Reprise du dossier",
        body: "Nous rassemblons les documents utiles et analysons la situation locative du bien.",
      },
      {
        title: "Gestion courante",
        body: "Nous assurons le suivi administratif et les échanges avec le locataire.",
      },
      {
        title: "Coordination",
        body: "Nous vous tenons informé des éléments importants et coordonnons les démarches nécessaires.",
      },
      {
        title: "Suivi dans la durée",
        body: "Votre bien bénéficie d'un accompagnement structuré et évolutif.",
      },
    ],
  },

  faq: {
    eyebrow: "Questions fréquentes",
    title: "Tout savoir sur la gestion locative",
    items: [
      {
        q: "Quels sont les avantages de déléguer la gestion de mon bien ?",
        a: "La gestion locative permet de confier à un professionnel le suivi administratif et les échanges courants liés à votre bien. Vous gagnez du temps tout en bénéficiant d'un interlocuteur dédié pour assurer un suivi structuré.",
      },
      {
        q: "Pouvez-vous reprendre la gestion d'un bien déjà loué ?",
        a: "Oui. Si votre bien est déjà occupé, nous analysons la situation existante et déterminons avec vous les modalités d'une reprise dans les meilleures conditions.",
      },
      {
        q: "Comment gérez-vous les loyers impayés ou les difficultés locatives ?",
        a: "Chaque situation est différente. En cas de difficulté, nous assurons le suivi du dossier et vous tenons informé des démarches entreprises afin de rechercher la solution la plus appropriée.",
      },
      {
        q: "Prenez-vous en charge les réparations et interventions techniques ?",
        a: "Nous pouvons coordonner les demandes et interventions nécessaires liées au bien, tout en vous tenant informé des éléments importants nécessitant votre décision.",
      },
      {
        q: "Comment êtes-vous rémunérés pour ce service ?",
        a: "Les modalités de rémunération dépendent de l'étendue de la mission confiée. Elles sont clairement expliquées avant toute collaboration afin que vous disposiez d'une vision transparente.",
      },
      {
        q: "Puis-je mettre fin au mandat de gestion ?",
        a: "Les conditions applicables sont précisées dans le mandat. Nous prenons le temps de vous expliquer son fonctionnement et de répondre à vos questions avant toute signature.",
      },
    ],
  },

  cta: {
    eyebrow: "Passons à l'action",
    title: "Parlons de la gestion de votre bien",
    body:
      "Un premier échange permet de comprendre votre situation et de définir une solution de gestion adaptée à vos besoins.",
    primary: {
      label: "Confier mon bien en gestion",
      href: "/contact?subject=gestion",
    },
    secondary: {
      label: "Nous contacter",
      href: "/contact",
    },
  },
};
