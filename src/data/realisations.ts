export type RealisationStatus = "sold" | "rented";

export type RealisationPropertyType =
  | "Maison"
  | "Appartement"
  | "Terrain"
  | "Commerce"
  | "Bureau";

export type Realisation = {
  id: string;
  title: string;
  status: RealisationStatus;
  propertyType: RealisationPropertyType;
  city: string;
  surface?: number;
  bedrooms?: number;
  landSurface?: number;
  description?: string;
  image: string;
  imageAlt: string;
  year: number;
  slug?: string;
};

/**
 * Sélection éditoriale de biens commercialisés.
 * Données factuelles, sans prix, sans délai.
 */
export const realisations: Realisation[] = [
  {
    id: "rea-001",
    title: "Maison familiale",
    status: "sold",
    propertyType: "Maison",
    city: "Waterloo",
    surface: 215,
    bedrooms: 4,
    landSurface: 680,
    description:
      "Maison quatre façades avec jardin orienté sud, dans un quartier résidentiel calme.",
    image: "/assets/images/listing-maison-1.jpg",
    imageAlt: "Maison familiale vendue à Waterloo",
    year: 2026,
  },
  {
    id: "rea-002",
    title: "Appartement contemporain",
    status: "rented",
    propertyType: "Appartement",
    city: "Braine-l'Alleud",
    surface: 95,
    bedrooms: 2,
    description:
      "Appartement lumineux avec terrasse, proche du centre et des commerces.",
    image: "/assets/images/listing-appartement.jpg",
    imageAlt: "Appartement loué à Braine-l'Alleud",
    year: 2026,
  },
  {
    id: "rea-003",
    title: "Terrain à bâtir",
    status: "sold",
    propertyType: "Terrain",
    city: "Lasne",
    landSurface: 1240,
    description:
      "Terrain plat dans un environnement verdoyant, prêt à bâtir.",
    image: "/assets/images/listing-maison-2.webp",
    imageAlt: "Terrain à bâtir vendu à Lasne",
    year: 2025,
  },
  {
    id: "rea-004",
    title: "Maison de caractère",
    status: "sold",
    propertyType: "Maison",
    city: "Nivelles",
    surface: 180,
    bedrooms: 3,
    landSurface: 420,
    description:
      "Maison rénovée avec beaucoup de cachet, idéale pour une famille.",
    image: "/assets/images/listing-maison-3.jpg",
    imageAlt: "Maison de caractère vendue à Nivelles",
    year: 2026,
  },
  {
    id: "rea-005",
    title: "Appartement deux chambres",
    status: "rented",
    propertyType: "Appartement",
    city: "Genappe",
    surface: 78,
    bedrooms: 2,
    description:
      "Appartement rénové dans un immeuble récent, avec parking privatif.",
    image: "/assets/images/listing-maison-4.webp",
    imageAlt: "Appartement loué à Genappe",
    year: 2025,
  },
  {
    id: "rea-006",
    title: "Immeuble mixte",
    status: "sold",
    propertyType: "Commerce",
    city: "Nivelles",
    surface: 320,
    description:
      "Surface commerciale au rez avec deux appartements aux étages.",
    image: "/assets/images/listing-immeuble-1.webp",
    imageAlt: "Immeuble mixte vendu à Nivelles",
    year: 2025,
  },
  {
    id: "rea-007",
    title: "Maison trois façades",
    status: "sold",
    propertyType: "Maison",
    city: "Ittre",
    surface: 165,
    bedrooms: 4,
    landSurface: 510,
    description:
      "Belle maison avec jardin clos, à proximité des écoles et des commerces.",
    image: "/assets/images/listing-maison-4.webp",
    imageAlt: "Maison trois façades vendue à Ittre",
    year: 2026,
  },
  {
    id: "rea-008",
    title: "Bureaux professionnels",
    status: "rented",
    propertyType: "Bureau",
    city: "Wavre",
    surface: 140,
    description:
      "Plateau de bureaux modulables au cœur du quartier d'affaires.",
    image: "/assets/images/listing-immeuble-2.webp",
    imageAlt: "Bureaux loués à Wavre",
    year: 2025,
  },
  {
    id: "rea-009",
    title: "Appartement avec terrasse",
    status: "sold",
    propertyType: "Appartement",
    city: "Rhode-Saint-Genèse",
    surface: 110,
    bedrooms: 3,
    description:
      "Appartement traversant avec grande terrasse et vue dégagée.",
    image: "/assets/images/listing-immeuble-3.webp",
    imageAlt: "Appartement vendu à Rhode-Saint-Genèse",
    year: 2026,
  },
];

export const REALISATION_PROPERTY_TYPES: RealisationPropertyType[] = [
  "Maison",
  "Appartement",
  "Terrain",
  "Commerce",
  "Bureau",
];

export function getRealisationCities(): string[] {
  return Array.from(new Set(realisations.map((r) => r.city))).sort((a, b) =>
    a.localeCompare(b, "fr"),
  );
}
