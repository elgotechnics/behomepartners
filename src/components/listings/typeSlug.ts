import type { ListingType } from "@/data/listings";

export type TransactionMode = "vente" | "location";

type TypeMeta = {
  slug: string;
  type: ListingType;
  pluralLabel: string;
  pluralLower: string;
  h1Sale: string;
  h1Rent: string;
  titleSale: string;
  titleRent: string;
};

const RAW_TYPES: Omit<
  TypeMeta,
  "h1Sale" | "h1Rent" | "titleSale" | "titleRent"
>[] = [
  {
    slug: "maison",
    type: "Maison",
    pluralLabel: "Maisons",
    pluralLower: "maisons",
  },
  {
    slug: "appartement",
    type: "Appartement",
    pluralLabel: "Appartements",
    pluralLower: "appartements",
  },
  {
    slug: "terrain",
    type: "Terrain",
    pluralLabel: "Terrains",
    pluralLower: "terrains",
  },
  {
    slug: "bureau",
    type: "Bureau",
    pluralLabel: "Bureaux",
    pluralLower: "bureaux",
  },
  {
    slug: "commerce",
    type: "Commerce",
    pluralLabel: "Commerces",
    pluralLower: "commerces",
  },
  {
    slug: "industriel",
    type: "Industriel",
    pluralLabel: "Biens industriels",
    pluralLower: "biens industriels",
  },
  {
    slug: "immeuble-de-rapport",
    type: "Immeuble de rapport",
    pluralLabel: "Immeubles de rapport",
    pluralLower: "immeubles de rapport",
  },
  {
    slug: "garage-parking",
    type: "Garage / parking",
    pluralLabel: "Garages et parkings",
    pluralLower: "garages et parkings",
  },
];

export const TYPE_PAGES: TypeMeta[] = RAW_TYPES.map((t) => ({
  ...t,
  h1Sale: `${t.pluralLabel} à vendre`,
  h1Rent: `${t.pluralLabel} à louer`,
  titleSale: `${t.pluralLabel} à vendre`,
  titleRent: `${t.pluralLabel} à louer`,
}));

export function descriptionFor(meta: TypeMeta, mode: TransactionMode): string {
  const verb = mode === "vente" ? "à vendre" : "à louer";
  return `Découvrez l’ensemble des ${meta.pluralLower} ${verb} dans le Brabant wallon et ses environs.`;
}

const SALE_SLUGS = new Set<string>([
  "maison",
  "appartement",
  "terrain",
  "bureau",
  "commerce",
  "industriel",
  "immeuble-de-rapport",
  "garage-parking",
]);

const RENT_SLUGS = new Set<string>([
  "maison",
  "appartement",
  "bureau",
  "commerce",
]);

export function getTypePage(slug: string): TypeMeta | null {
  return TYPE_PAGES.find((t) => t.slug === slug) ?? null;
}

export function isValidSlug(slug: string, mode: TransactionMode): boolean {
  const set = mode === "vente" ? SALE_SLUGS : RENT_SLUGS;
  return set.has(slug);
}

export function isTypeAllowedForMode(
  type: ListingType,
  mode: TransactionMode,
): boolean {
  const slug = slugForType(type);
  return isValidSlug(slug, mode);
}

export function slugForType(type: ListingType): string {
  const m = TYPE_PAGES.find((t) => t.type === type);
  return m ? m.slug : "";
}

export function basePathForMode(mode: TransactionMode): string {
  return mode === "vente" ? "/a-vendre" : "/a-louer";
}

export function urlForTypeAndMode(
  mode: TransactionMode,
  type: ListingType | null,
): string {
  const base = basePathForMode(mode);
  if (!type) return base;
  const slug = slugForType(type);
  if (!slug) return base;
  if (!isValidSlug(slug, mode)) return base;
  return `${base}/${slug}`;
}

export function saleSlugs(): string[] {
  return Array.from(SALE_SLUGS);
}

export function rentSlugs(): string[] {
  return Array.from(RENT_SLUGS);
}
