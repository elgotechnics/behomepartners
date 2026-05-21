import type {
  Listing,
  ListingType,
  Occupancy,
  Orientation,
  PebRating,
  PropertyCondition,
  Relief,
} from "@/data/listings";

export type SortKey =
  | "recent"
  | "price-asc"
  | "price-desc"
  | "surface-desc";

export type Filters = {
  cities: string[];
  priceMin: number | null;
  priceMax: number | null;
  types: ListingType[];
  bedroomsMin: number | null;
  bedroomsMax: number | null;
  surfaceMin: number | null;
  surfaceMax: number | null;
  landSurfaceMin: number | null;
  landSurfaceMax: number | null;
  floorMin: number | null;
  floorMax: number | null;
  facades: number[];
  conditions: PropertyCondition[];
  chargesMax: number | null;
  furnished: boolean | null;
  unitsMin: number | null;
  unitsMax: number | null;
  availableImmediately: boolean | null;
  ceilingHeightMin: number | null;
  electricalPowerMin: number | null;
  rentalIncomeMin: number | null;
  grossYieldMin: number | null;
  cadastralIncomeMax: number | null;
  frontageMin: number | null;
  frontageMax: number | null;
  depthMin: number | null;
  depthMax: number | null;
  orientations: Orientation[];
  reliefs: Relief[];
  occupancies: Occupancy[];
  peb: PebRating[];
  features: string[];
};

export const EMPTY_FILTERS: Filters = {
  cities: [],
  priceMin: null,
  priceMax: null,
  types: [],
  bedroomsMin: null,
  bedroomsMax: null,
  surfaceMin: null,
  surfaceMax: null,
  landSurfaceMin: null,
  landSurfaceMax: null,
  floorMin: null,
  floorMax: null,
  facades: [],
  conditions: [],
  chargesMax: null,
  furnished: null,
  unitsMin: null,
  unitsMax: null,
  availableImmediately: null,
  ceilingHeightMin: null,
  electricalPowerMin: null,
  rentalIncomeMin: null,
  grossYieldMin: null,
  cadastralIncomeMax: null,
  frontageMin: null,
  frontageMax: null,
  depthMin: null,
  depthMax: null,
  orientations: [],
  reliefs: [],
  occupancies: [],
  peb: [],
  features: [],
};

export const PEB_RATINGS: PebRating[] = ["A", "B", "C", "D", "E", "F", "G"];

export const CONDITION_LABELS: Record<PropertyCondition, string> = {
  neuf: "Neuf",
  renove: "Rénové",
  bon: "Bon état",
  "a-renover": "À rénover",
};

export const FACADE_OPTIONS = [2, 3, 4] as const;

export const ORIENTATION_OPTIONS: Orientation[] = [
  "N",
  "NE",
  "E",
  "SE",
  "S",
  "SO",
  "O",
  "NO",
];

export const RELIEF_LABELS: Record<Relief, string> = {
  plat: "Plat",
  "legere-pente": "Légère pente",
  pente: "Pente",
};

export const OCCUPANCY_LABELS: Record<Occupancy, string> = {
  occupe: "Occupé",
  libre: "Libre",
  mixte: "Mixte",
};

export const SORT_LABELS: Record<SortKey, string> = {
  recent: "Plus récent",
  "price-asc": "Prix croissant",
  "price-desc": "Prix décroissant",
  "surface-desc": "Plus grande surface",
};

function rangeOk(
  value: number | undefined | null,
  min: number | null,
  max: number | null,
): boolean {
  if (min == null && max == null) return true;
  if (value == null) return false;
  if (min != null && value < min) return false;
  if (max != null && value > max) return false;
  return true;
}

export function applyFilters(
  list: Listing[],
  filters: Filters,
  mode: "vente" | "location" = "vente",
): Listing[] {
  const inverted =
    filters.priceMin != null &&
    filters.priceMax != null &&
    filters.priceMax < filters.priceMin;
  const effectivePriceMax = inverted ? null : filters.priceMax;
  return list.filter((l) => {
    if (filters.cities.length && !filters.cities.includes(l.city)) return false;
    if (filters.types.length && !filters.types.includes(l.type)) return false;
    const price = mode === "vente" ? l.salePrice : l.monthlyRent;
    if (filters.priceMin != null && price < filters.priceMin) return false;
    if (effectivePriceMax != null && price > effectivePriceMax) return false;

    const bedInverted =
      filters.bedroomsMin != null &&
      filters.bedroomsMax != null &&
      filters.bedroomsMax < filters.bedroomsMin;
    if (filters.bedroomsMin != null && l.bedrooms < filters.bedroomsMin)
      return false;
    if (
      !bedInverted &&
      filters.bedroomsMax != null &&
      l.bedrooms > filters.bedroomsMax
    )
      return false;

    if (filters.surfaceMin != null && l.surface < filters.surfaceMin)
      return false;
    if (filters.surfaceMax != null && l.surface > filters.surfaceMax)
      return false;

    if (!rangeOk(l.landSurface, filters.landSurfaceMin, filters.landSurfaceMax))
      return false;
    if (!rangeOk(l.floor, filters.floorMin, filters.floorMax)) return false;
    if (!rangeOk(l.units, filters.unitsMin, filters.unitsMax)) return false;
    if (!rangeOk(l.frontageWidth, filters.frontageMin, filters.frontageMax))
      return false;
    if (!rangeOk(l.depth, filters.depthMin, filters.depthMax)) return false;

    if (filters.facades.length) {
      if (l.facades == null || !filters.facades.includes(l.facades))
        return false;
    }
    if (filters.conditions.length) {
      if (l.condition == null || !filters.conditions.includes(l.condition))
        return false;
    }
    if (filters.chargesMax != null) {
      if (l.charges == null || l.charges > filters.chargesMax) return false;
    }
    if (filters.furnished != null) {
      if ((l.furnished ?? false) !== filters.furnished) return false;
    }
    if (filters.availableImmediately != null) {
      if ((l.availableImmediately ?? false) !== filters.availableImmediately)
        return false;
    }
    if (filters.ceilingHeightMin != null) {
      if (l.ceilingHeight == null || l.ceilingHeight < filters.ceilingHeightMin)
        return false;
    }
    if (filters.electricalPowerMin != null) {
      if (
        l.electricalPower == null ||
        l.electricalPower < filters.electricalPowerMin
      )
        return false;
    }
    if (filters.rentalIncomeMin != null) {
      if (l.rentalIncome == null || l.rentalIncome < filters.rentalIncomeMin)
        return false;
    }
    if (filters.grossYieldMin != null) {
      if (l.grossYield == null || l.grossYield < filters.grossYieldMin)
        return false;
    }
    if (filters.cadastralIncomeMax != null) {
      if (
        l.cadastralIncome == null ||
        l.cadastralIncome > filters.cadastralIncomeMax
      )
        return false;
    }
    if (filters.orientations.length) {
      if (l.orientation == null || !filters.orientations.includes(l.orientation))
        return false;
    }
    if (filters.reliefs.length) {
      if (l.relief == null || !filters.reliefs.includes(l.relief)) return false;
    }
    if (filters.occupancies.length) {
      if (l.occupancy == null || !filters.occupancies.includes(l.occupancy))
        return false;
    }

    if (filters.peb.length && !filters.peb.includes(l.peb)) return false;
    if (filters.features.length) {
      const lc = l.features.map((f) => f.toLowerCase());
      const has = filters.features.every((f) =>
        lc.some((x) => x.includes(f.toLowerCase())),
      );
      if (!has) return false;
    }
    return true;
  });
}

export function applySort(
  list: Listing[],
  sort: SortKey,
  mode: "vente" | "location" = "vente",
): Listing[] {
  const sorted = [...list];
  const price = (l: Listing) =>
    mode === "vente" ? l.salePrice : l.monthlyRent;
  switch (sort) {
    case "recent":
      sorted.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      break;
    case "price-asc":
      sorted.sort((a, b) => price(a) - price(b));
      break;
    case "price-desc":
      sorted.sort((a, b) => price(b) - price(a));
      break;
    case "surface-desc":
      sorted.sort((a, b) => b.surface - a.surface);
      break;
  }
  return sorted;
}

export function countActive(filters: Filters): number {
  let n = 0;
  if (filters.cities.length) n++;
  if (filters.priceMin != null || filters.priceMax != null) n++;
  if (filters.types.length) n++;
  n += advancedCount(filters);
  if (filters.bedroomsMin != null || filters.bedroomsMax != null) n++;
  return n;
}

export function countAdvanced(filters: Filters): number {
  return advancedCount(filters);
}

function advancedCount(filters: Filters): number {
  let n = 0;
  if (filters.surfaceMin != null || filters.surfaceMax != null) n++;
  if (filters.landSurfaceMin != null || filters.landSurfaceMax != null) n++;
  if (filters.floorMin != null || filters.floorMax != null) n++;
  if (filters.unitsMin != null || filters.unitsMax != null) n++;
  if (filters.frontageMin != null || filters.frontageMax != null) n++;
  if (filters.depthMin != null || filters.depthMax != null) n++;
  if (filters.facades.length) n++;
  if (filters.conditions.length) n++;
  if (filters.chargesMax != null) n++;
  if (filters.furnished != null) n++;
  if (filters.availableImmediately != null) n++;
  if (filters.ceilingHeightMin != null) n++;
  if (filters.electricalPowerMin != null) n++;
  if (filters.rentalIncomeMin != null) n++;
  if (filters.grossYieldMin != null) n++;
  if (filters.cadastralIncomeMax != null) n++;
  if (filters.orientations.length) n++;
  if (filters.reliefs.length) n++;
  if (filters.occupancies.length) n++;
  if (filters.peb.length) n++;
  if (filters.features.length) n++;
  return n;
}

export function formatCompactPrice(value: number): string {
  return `${value.toLocaleString("fr-BE")} €`;
}
