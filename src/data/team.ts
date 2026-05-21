export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  photoAlt: string;
  email: string;
  emailHref: string;
  phone: string;
  phoneHref: string;
  linkedin?: string;
};

const PLACEHOLDER_BIO =
  "Présentation du membre à compléter. Cette zone affichera une courte biographie professionnelle.";

export const TEAM: TeamMember[] = [
  {
    id: "member-1",
    name: "Membre 1",
    role: "Fondateur · Agent immobilier",
    bio: PLACEHOLDER_BIO,
    photo: "/assets/images/team-placeholder.svg",
    photoAlt: "Portrait du membre 1",
    email: "info@behomepartners.be",
    emailHref: "mailto:info@behomepartners.be",
    phone: "+32 67 84 12 84",
    phoneHref: "tel:+3267841284",
    linkedin: "https://www.linkedin.com",
  },
  {
    id: "member-2",
    name: "Membre 2",
    role: "Agent immobilier · Vente",
    bio: PLACEHOLDER_BIO,
    photo: "/assets/images/team-placeholder.svg",
    photoAlt: "Portrait du membre 2",
    email: "info@behomepartners.be",
    emailHref: "mailto:info@behomepartners.be",
    phone: "+32 67 84 12 84",
    phoneHref: "tel:+3267841284",
    linkedin: "https://www.linkedin.com",
  },
  {
    id: "member-3",
    name: "Membre 3",
    role: "Responsable location",
    bio: PLACEHOLDER_BIO,
    photo: "/assets/images/team-placeholder.svg",
    photoAlt: "Portrait du membre 3",
    email: "info@behomepartners.be",
    emailHref: "mailto:info@behomepartners.be",
    phone: "+32 67 84 12 84",
    phoneHref: "tel:+3267841284",
    linkedin: "https://www.linkedin.com",
  },
  {
    id: "member-4",
    name: "Membre 4",
    role: "Gestion locative",
    bio: PLACEHOLDER_BIO,
    photo: "/assets/images/team-placeholder.svg",
    photoAlt: "Portrait du membre 4",
    email: "info@behomepartners.be",
    emailHref: "mailto:info@behomepartners.be",
    phone: "+32 67 84 12 84",
    phoneHref: "tel:+3267841284",
    linkedin: "https://www.linkedin.com",
  },
  {
    id: "member-5",
    name: "Membre 5",
    role: "Conseil juridique",
    bio: PLACEHOLDER_BIO,
    photo: "/assets/images/team-placeholder.svg",
    photoAlt: "Portrait du membre 5",
    email: "info@behomepartners.be",
    emailHref: "mailto:info@behomepartners.be",
    phone: "+32 67 84 12 84",
    phoneHref: "tel:+3267841284",
    linkedin: "https://www.linkedin.com",
  },
  {
    id: "member-6",
    name: "Membre 6",
    role: "Marketing · Office manager",
    bio: PLACEHOLDER_BIO,
    photo: "/assets/images/team-placeholder.svg",
    photoAlt: "Portrait du membre 6",
    email: "info@behomepartners.be",
    emailHref: "mailto:info@behomepartners.be",
    phone: "+32 67 84 12 84",
    phoneHref: "tel:+3267841284",
    linkedin: "https://www.linkedin.com",
  },
];

export type Expertise = {
  key: string;
  title: string;
};

export const EXPERTISES: Expertise[] = [
  { key: "vente", title: "Vente immobilière" },
  { key: "location", title: "Location" },
  { key: "gestion", title: "Gestion locative" },
  { key: "juridique", title: "Conseil juridique" },
  { key: "marketing", title: "Marketing immobilier" },
  { key: "support", title: "Support administratif" },
];

export type Value = {
  key: string;
  title: string;
  description: string;
};

export const VALUES: Value[] = [
  {
    key: "ecoute",
    title: "Écoute",
    description:
      "Comprendre votre projet avant de proposer la moindre stratégie.",
  },
  {
    key: "transparence",
    title: "Transparence",
    description:
      "Honoraires, démarches, délais : tout est annoncé clairement dès le départ.",
  },
  {
    key: "reactivite",
    title: "Réactivité",
    description:
      "Un suivi rapide à chaque étape, sans laisser les questions sans réponse.",
  },
  {
    key: "rigueur",
    title: "Rigueur",
    description:
      "Dossiers, contrats et formalités traités avec méthode et précision.",
  },
  {
    key: "discretion",
    title: "Discrétion",
    description: "Respect de votre vie privée et de la confidentialité de votre projet.",
  },
  {
    key: "accompagnement",
    title: "Accompagnement personnalisé",
    description:
      "Une équipe qui s'adapte à votre situation, vos contraintes et votre rythme.",
  },
];
