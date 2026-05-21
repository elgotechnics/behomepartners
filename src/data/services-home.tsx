import type { ReactNode } from "react";

export type HomeService = {
  id: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: ReactNode;
};

const HomeIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M3 11.99V14.5C3 17.8 3 19.45 4.03 20.47C5.05 21.5 6.7 21.5 10 21.5H14C17.3 21.5 18.95 21.5 19.97 20.47C21 19.45 21 17.8 21 14.5V11.99C21 10.31 21 9.47 20.64 8.74C20.29 8.01 19.62 7.5 18.3 6.46L16.3 4.91C14.23 3.3 13.2 2.5 12 2.5C10.8 2.5 9.77 3.3 7.7 4.91L5.7 6.46C4.38 7.5 3.71 8.01 3.36 8.74C3 9.47 3 10.31 3 11.99Z" />
    <path d="M15 21.5V16.5C15 15.09 15 14.38 14.56 13.94C14.12 13.5 13.41 13.5 12 13.5C10.59 13.5 9.88 13.5 9.44 13.94C9 14.38 9 15.09 9 16.5V21.5" />
  </svg>
);

const KeyIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M15.5 14.5C18.81 14.5 21.5 11.81 21.5 8.5C21.5 5.19 18.81 2.5 15.5 2.5C12.19 2.5 9.5 5.19 9.5 8.5C9.5 9.38 9.69 10.22 10.03 10.97L2.5 18.5V21.5H5.5V19.5H7.5V17.5H9.5L13.03 13.97C13.78 14.31 14.62 14.5 15.5 14.5Z" />
    <path d="M17.5 6.5L16.5 7.5" />
  </svg>
);

const OfficeIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    aria-hidden
  >
    <path d="M14 22V8C14 5.17 14 3.76 13.12 2.88C12.24 2 10.83 2 8 2C5.17 2 3.76 2 2.88 2.88C2 3.76 2 5.17 2 8V16C2 18.83 2 20.24 2.88 21.12C3.76 22 5.17 22 8 22H14Z" />
    <path d="M6.5 11H5.5M10.5 11H9.5M6.5 7H5.5M6.5 15H5.5M10.5 7H9.5M10.5 15H9.5" />
    <path d="M18.5 15H17.5M18.5 11H17.5" />
    <path d="M18 8H14V22H18C19.89 22 20.83 22 21.41 21.41C22 20.83 22 19.89 22 18V12C22 10.11 22 9.17 21.41 8.59C20.83 8 19.89 8 18 8Z" />
  </svg>
);

const ChartIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M3 4V14C3 16.83 3 18.24 3.88 19.12C4.76 20 6.17 20 9 20H21" />
    <path d="M6 14L9.25 10.75C9.89 10.11 10.22 9.78 10.59 9.68C10.86 9.6 11.14 9.6 11.41 9.68C11.78 9.78 12.11 10.11 12.75 10.75C13.39 11.39 13.72 11.72 14.09 11.82C14.36 11.9 14.64 11.9 14.91 11.82C15.28 11.72 15.61 11.39 16.25 10.75L20 7" />
  </svg>
);

const PromoIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M14.93 2.91L8.27 6.10C7.76 6.35 7.21 6.41 6.66 6.29C6.29 6.21 6.11 6.16 5.96 6.15C4.14 5.94 3 7.38 3 9.04V9.96C3 11.62 4.14 13.06 5.96 12.85C6.11 12.84 6.29 12.79 6.66 12.71C7.21 12.59 7.76 12.65 8.27 12.90L14.93 16.09C16.45 16.82 17.22 17.19 18.07 16.90C18.92 16.62 19.21 16 19.80 14.78C21.40 11.41 21.40 7.59 19.80 4.22C19.21 3 18.92 2.38 18.07 2.10C17.22 1.81 16.45 2.18 14.93 2.91Z" />
    <path d="M11.46 20.77L9.97 22C6.61 19.33 7.02 18.06 7.02 13H8.15C8.61 15.86 9.70 17.22 11.19 18.20C12.12 18.80 12.31 20.07 11.46 20.77Z" />
    <path d="M7.5 12.5V6.5" />
  </svg>
);

export const HOME_SERVICES: HomeService[] = [
  {
    id: "vente",
    title: "Vente",
    description:
      "Mettre votre bien en valeur pour vendre dans les meilleures conditions.",
    cta: "Mettre en vente",
    href: "/services/vente",
    icon: HomeIcon,
  },
  {
    id: "location",
    title: "Location",
    description:
      "Trouver un locataire sérieux et sécuriser votre mise en location.",
    cta: "Mettre en location",
    href: "/services/location",
    icon: KeyIcon,
  },
  {
    id: "gestion-locative",
    title: "Gestion locative",
    description:
      "Confier la gestion de votre bien et gagner en tranquillité.",
    cta: "Confier mon bien",
    href: "/services/gestion-locative",
    icon: OfficeIcon,
  },
  {
    id: "investir",
    title: "Investir",
    description:
      "Bâtir votre patrimoine avec des conseils sur mesure.",
    cta: "Investir avec nous",
    href: "/services/investissement",
    icon: ChartIcon,
  },
  {
    id: "promotion-immobiliere",
    title: "Promotion immobilière",
    description:
      "Valoriser et commercialiser efficacement vos projets neufs.",
    cta: "Découvrir ce service",
    href: "/services/promotion-immobiliere",
    icon: PromoIcon,
  },
];
