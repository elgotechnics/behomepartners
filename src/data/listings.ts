export type ListingType = "Maison" | "Appartement" | "Terrain";
export type PebRating = "A" | "B" | "C" | "D" | "E" | "F" | "G";

export type Listing = {
  id: string;
  type: ListingType;
  salePrice: number;
  monthlyRent: number;
  city: string;
  postalCode?: string;
  surface: number;
  bedrooms: number;
  bathrooms: number;
  peb: PebRating;
  image: string;
  imageAlt: string;
  features: string[];
};

export const listings: Listing[] = [
  {
    id: "nivelles-1",
    type: "Maison",
    salePrice: 295000,
    monthlyRent: 1200,
    city: "Nivelles",
    postalCode: "1400",
    surface: 110,
    bedrooms: 3,
    bathrooms: 1,
    peb: "C",
    image: "/assets/images/listing-maison-1.jpg",
    imageAlt: "Maison à Nivelles",
    features: ["Jardin", "Garage"],
  },
  {
    id: "braine-1",
    type: "Appartement",
    salePrice: 299000,
    monthlyRent: 1350,
    city: "Braine-l'Alleud",
    postalCode: "1420",
    surface: 95,
    bedrooms: 2,
    bathrooms: 1,
    peb: "B",
    image: "/assets/images/listing-appartement.jpg",
    imageAlt: "Appartement à Braine-l'Alleud",
    features: ["Terrasse"],
  },
  {
    id: "genappe-1",
    type: "Maison",
    salePrice: 385000,
    monthlyRent: 1500,
    city: "Genappe",
    postalCode: "1470",
    surface: 145,
    bedrooms: 4,
    bathrooms: 2,
    peb: "D",
    image: "/assets/images/listing-maison-2.webp",
    imageAlt: "Maison à Genappe",
    features: ["Jardin", "2 garages"],
  },
  {
    id: "rhode-1",
    type: "Maison",
    salePrice: 525000,
    monthlyRent: 2100,
    city: "Rhode-Saint-Genèse",
    surface: 165,
    bedrooms: 3,
    bathrooms: 2,
    peb: "C",
    image: "/assets/images/listing-maison-3.jpg",
    imageAlt: "Maison à Rhode-Saint-Genèse",
    features: ["Jardin", "Bureau"],
  },
  {
    id: "wavre-1",
    type: "Maison",
    salePrice: 375000,
    monthlyRent: 1200,
    city: "Wavre",
    postalCode: "1300",
    surface: 130,
    bedrooms: 3,
    bathrooms: 1,
    peb: "C",
    image: "/assets/images/listing-maison-4.webp",
    imageAlt: "Maison neuve en briques avec carport",
    features: ["Jardin", "Carport"],
  },
];

export const pebColors: Record<PebRating, string> = {
  A: "#2e7d32",
  B: "#4caf50",
  C: "#7eb852",
  D: "#f9a825",
  E: "#f57c00",
  F: "#e64a19",
  G: "#c62828",
};

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-BE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  })
    .format(price)
    .replace(/ /g, " ");
}
