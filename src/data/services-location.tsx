import Link from "next/link";
import {
  Camera,
  ClipboardList,
  DraftingCompass,
  FileText,
  LineChart,
  Megaphone,
  ScanSearch,
  ShieldCheck,
  Sofa,
  Target,
} from "lucide-react";
import type { ServiceConfig } from "@/data/services";

const ICON_SIZE = 20;
const STROKE = 1.7;

const linkCls =
  "font-semibold text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent transition-colors";

export const locationService: ServiceConfig = {
  slug: "location",
  metaTitle:
    "Mise en location dans le Brabant wallon et alentours",
  metaDescription:
    "Mettez votre bien en location sereinement. Nous sélectionnons des locataires sérieux et sécurisons chaque étape du processus.",
  serviceName: "Location immobilière en Brabant wallon",
  serviceType: "Real Estate Rental",

  hero: {
    label: "Mettre en location",
    h1: "Mise en location de votre bien immobilier",
    description:
      "De l'estimation du loyer à la signature du bail, nous sélectionnons des candidats sérieux pour mettre votre bien en location dans le Brabant wallon et les communes environnantes.",
    points: [
      {
        title: "Estimation locative objective",
        icon: <LineChart size={ICON_SIZE} strokeWidth={STROKE} />,
      },
      {
        title: "Sélection rigoureuse des candidats",
        icon: <ScanSearch size={ICON_SIZE} strokeWidth={STROKE} />,
      },
      {
        title: "Bail et formalités administratives",
        icon: <FileText size={ICON_SIZE} strokeWidth={STROKE} />,
      },
      {
        title: "Accompagnement jusqu'à l'entrée dans les lieux",
        icon: <ShieldCheck size={ICON_SIZE} strokeWidth={STROKE} />,
      },
    ],
    primaryCta: {
      label: "Mettre en location",
      href: "/contact?subject=location",
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
    eyebrow: "Notre méthode de location",
    title: "Une mise en location structurée et sécurisée",
    body: [
      <>
        Mettre un bien en location ne se limite pas à publier une annonce. Il
        s&apos;agit de définir un loyer cohérent, de présenter le bien de
        manière attractive et de sélectionner un candidat dont le profil
        correspond à vos attentes.
      </>,
      <>
        Nous commençons généralement par une{" "}
        <Link href="/estimation" className={linkCls}>
          estimation immobilière
        </Link>{" "}
        afin d&apos;analyser le niveau de loyer observé sur le marché local.
        Nous organisons ensuite la commercialisation du bien, les visites et
        la constitution du dossier locatif.
      </>,
      <>
        Notre accompagnement se poursuit jusqu&apos;à la rédaction et à la
        signature du bail, avec le souci de vous offrir un processus clair et
        structuré.
      </>,
    ],
    image: {
      src: "/assets/images/listing-appartement.jpg",
      alt: "Appartement disponible à la location avec Be Home Partners",
    },
    imagePosition: "right",
    bullets: [
      { text: "Estimation du loyer cohérente avec le marché local" },
      { text: "Sélection rigoureuse des candidats locataires" },
      { text: "Organisation des visites et gestion des dossiers" },
      { text: "Accompagnement jusqu'à la signature du bail" },
    ],
  },

  benefits: {
    eyebrow: "Ce qui fait la différence",
    title: "Un accompagnement rigoureux à chaque étape",
    items: [
      {
        title: "Un loyer cohérent avec le marché",
        body: "Nous analysons les loyers pratiqués pour des biens comparables afin de définir un positionnement réaliste.",
        icon: <Target size={22} strokeWidth={1.6} />,
      },
      {
        title: "Une sélection attentive des candidats",
        body: "Nous recueillons les informations utiles pour vous aider à choisir un locataire adapté à votre bien.",
        icon: <ScanSearch size={22} strokeWidth={1.6} />,
      },
      {
        title: "Un dossier complet",
        body: "Bail, annexes et formalités administratives sont préparés avec soin.",
        icon: <ClipboardList size={22} strokeWidth={1.6} />,
      },
      {
        title: "Sérénité administrative",
        body: "Vous bénéficiez d'un interlocuteur unique jusqu'à la signature du bail.",
        icon: <ShieldCheck size={22} strokeWidth={1.6} />,
      },
    ],
  },

  features: {
    eyebrow: "Préparation du bien",
    title: "Des outils pour présenter votre bien sous son meilleur jour",
    description:
      "Selon les caractéristiques de votre bien, nous mettons en place différents outils pour valoriser sa présentation et attirer des candidats locataires sérieux.",
    items: [
      {
        title: "Photographies professionnelles",
        body: "Des visuels de qualité pour capter l'attention dès la publication de l'annonce.",
        icon: <Camera size={24} strokeWidth={1.7} />,
      },
      {
        title: "Plans 2D",
        body: "Une lecture claire des volumes et de la distribution des espaces.",
        icon: <DraftingCompass size={24} strokeWidth={1.7} />,
      },
      {
        title: "Visites virtuelles",
        body: "Un parcours immersif permettant de présélectionner les candidats.",
        icon: <ScanSearch size={24} strokeWidth={1.7} />,
      },
      {
        title: "Home staging",
        body: "Quelques ajustements ciblés pour mettre en valeur les atouts du bien.",
        icon: <Sofa size={24} strokeWidth={1.7} />,
      },
      {
        title: "Accompagnement administratif",
        body: "Préparation des documents utiles à la mise en location.",
        icon: <FileText size={24} strokeWidth={1.7} />,
      },
      {
        title: "Diffusion ciblée",
        body: "Une visibilité optimisée pour toucher des candidats qualifiés.",
        icon: <Megaphone size={24} strokeWidth={1.7} />,
      },
    ],
  },

  process: {
    eyebrow: "Notre accompagnement",
    title: "Les étapes clés de votre mise en location",
    steps: [
      {
        title: "Estimation locative",
        body: (
          <>
            Nous analysons les caractéristiques du bien et les loyers observés
            sur le marché local. Plus de détails sur notre{" "}
            <Link href="/estimation" className={linkCls}>
              estimation immobilière
            </Link>
            .
          </>
        ),
      },
      {
        title: "Préparation et mise en valeur",
        body: "Nous préparons l'annonce et les supports nécessaires pour présenter le bien de manière attractive.",
      },
      {
        title: "Diffusion et visites",
        body: "Nous organisons la commercialisation, les visites et le suivi des candidats.",
      },
      {
        title: "Sélection du locataire",
        body: "Nous vous transmettons les dossiers des candidats afin de vous aider dans votre décision.",
      },
      {
        title: "Bail et formalités",
        body: "Nous préparons le bail et assurons les démarches administratives liées à la location.",
      },
    ],
  },

  faq: {
    eyebrow: "Questions fréquentes",
    title: "Tout savoir sur la location immobilière",
    items: [
      {
        q: "Comment déterminez-vous le loyer de mon bien ?",
        a: "Nous analysons les caractéristiques du bien, son emplacement et les loyers pratiqués pour des biens comparables. L'objectif est de définir un loyer cohérent avec le marché et attractif pour des candidats locataires sérieux.",
      },
      {
        q: "Comment sélectionnez-vous les candidats locataires ?",
        a: "Nous étudions chaque dossier avec attention sur la base des informations et documents communiqués. L'objectif est de vous présenter des candidats dont le profil correspond au bien et à votre projet locatif.",
      },
      {
        q: "Quels documents peut-on demander à un candidat locataire ?",
        a: "La liste des documents demandés dépend du cadre légal applicable. Nous veillons à recueillir les informations utiles à l'analyse du dossier dans le respect des règles en vigueur.",
      },
      {
        q: "Réalisez-vous également l'état des lieux ?",
        a: "Si vous souhaitez être accompagné au-delà de la mise en location, nous pouvons vous orienter vers les solutions les plus adaptées à votre situation et à votre organisation.",
      },
      {
        q: "Quelles normes mon logement doit-il respecter ?",
        a: "Oui. Un bien proposé à la location doit respecter certaines exigences légales et techniques. Si nécessaire, nous attirons votre attention sur les points à vérifier avant la mise en location.",
      },
      {
        q: "Proposez-vous aussi la gestion locative ?",
        a: (
          <>
            Oui. Si vous souhaitez déléguer le suivi du bien après la signature du bail, notre service de{" "}
            <Link href="/services/gestion-locative" className={linkCls}>
              gestion locative
            </Link>{" "}
            peut prendre le relais.
          </>
        ),
      },
    ],
  },

  cta: {
    eyebrow: "Passons à l'action",
    title: "Parlons de votre projet de location",
    body:
      "Un premier échange permet de comprendre votre situation, de répondre à vos questions et de définir la meilleure stratégie pour mettre votre bien en location.",
    primary: {
      label: "Mettre mon bien en location",
      href: "/contact?subject=location",
    },
    secondary: {
      label: "Nous contacter",
      href: "/contact",
    },
  },
};
