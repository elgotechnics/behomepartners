export type Agency = {
  id: "nivelles" | "braine";
  city: string;
  description: string;
  address: string;
  postalCode: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  mapsHref: string;
  pageHref: string;
  photos: { src: string; alt: string }[];
};

export const AGENCES: Agency[] = [
  {
    id: "nivelles",
    city: "Nivelles",
    description:
      "Idéalement située entre la gare et le centre-ville, notre agence de Nivelles accompagne les propriétaires, acquéreurs et investisseurs dans tout le Brabant wallon, notamment à Genappe, Ittre, Seneffe et dans les communes environnantes. Un parking est mis à disposition pour faciliter votre visite.",
    address: "Avenue du Centenaire 53/4",
    postalCode: "1400 Nivelles",
    phone: "+32 67 84 12 84",
    phoneHref: "tel:+3267841284",
    email: "info@behomepartners.be",
    emailHref: "mailto:info@behomepartners.be",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Avenue+du+Centenaire+53,+1400+Nivelles",
    pageHref: "/agences/nivelles",
    photos: [
      { src: "/assets/images/nivelles-01.jpg", alt: "Agence Be Home Partners à Nivelles, vue extérieure" },
      { src: "/assets/images/nivelles-02.jpg", alt: "Espace d'accueil de l'agence de Nivelles" },
      { src: "/assets/images/nivelles-03.jpg", alt: "Salle de rendez-vous de l'agence de Nivelles" },
      { src: "/assets/images/nivelles-04.jpg", alt: "Bureau de l'agence de Nivelles" },
    ],
  },
  {
    id: "braine",
    city: "Braine-l'Alleud",
    description:
      "Située à proximité de Waterloo et Lasne, notre agence de Braine-l'Alleud accompagne ses clients dans l'ouest du Brabant wallon avec la même exigence de qualité, de proximité et de disponibilité. Un parking privatif est à votre disposition pour un accès aisé.",
    address: "Chaussée de Tubize 11",
    postalCode: "1420 Braine-l'Alleud",
    phone: "+32 2 385 12 84",
    phoneHref: "tel:+3223851284",
    email: "info@behomepartners.be",
    emailHref: "mailto:info@behomepartners.be",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Chaussee+de+Tubize+11,+1420+Braine-l%27Alleud",
    pageHref: "/agences/braine-l-alleud",
    photos: [
      { src: "/assets/images/braine-01.jpg", alt: "Agence Be Home Partners à Braine-l'Alleud, vue extérieure" },
      { src: "/assets/images/braine-02.jpg", alt: "Espace d'accueil de l'agence de Braine-l'Alleud" },
      { src: "/assets/images/braine-03.jpg", alt: "Bureau de l'agence de Braine-l'Alleud" },
    ],
  },
];
