import type { ListingType } from "@/data/listings";
import type { TransactionMode } from "./typeSlug";

export type MainExtraKey = "bedrooms" | "surface" | "landSurface" | "units";

export type AdvancedSection =
  | "surface"
  | "landSurface"
  | "floor"
  | "units"
  | "facades"
  | "condition"
  | "charges"
  | "furnished"
  | "peb"
  | "features"
  | "availability"
  | "ceilingHeight"
  | "electricalPower"
  | "rentalIncome"
  | "grossYield"
  | "cadastralIncome"
  | "frontage"
  | "depth"
  | "orientation"
  | "relief"
  | "occupancy";

export type FeatureToggle = {
  key: string;
  label: string;
};

export type FilterConfig = {
  mainExtra: MainExtraKey;
  mainExtraLabel: string;
  advanced: AdvancedSection[];
  features: FeatureToggle[];
  surfaceLabel?: string;
};

const FEATURES = {
  jardin: { key: "jardin", label: "Jardin" },
  terrasse: { key: "terrasse", label: "Terrasse" },
  balcon: { key: "balcon", label: "Balcon" },
  garage: { key: "garage", label: "Garage" },
  parking: { key: "parking", label: "Parking" },
  ascenseur: { key: "ascenseur", label: "Ascenseur" },
  cave: { key: "cave", label: "Cave" },
  grenier: { key: "grenier", label: "Grenier" },
  bureauRoom: { key: "bureau", label: "Bureau" },
  piscine: { key: "piscine", label: "Piscine" },
  climatisation: { key: "climatisation", label: "Climatisation" },
  salleReunion: { key: "salle de réunion", label: "Salle de réunion" },
  accesPmr: { key: "accès pmr", label: "Accès PMR" },
  vitrine: { key: "vitrine", label: "Vitrine" },
  horeca: { key: "horeca", label: "Horeca possible" },
  reserve: { key: "réserve", label: "Réserve" },
  extraction: { key: "extraction", label: "Extraction possible" },
  boxFerme: { key: "box fermé", label: "Box fermé" },
  parkingInt: { key: "parking intérieur", label: "Parking intérieur" },
  parkingExt: { key: "parking extérieur", label: "Parking extérieur" },
  securise: { key: "sécurisé", label: "Sécurisé" },
  quaiChargement: { key: "quai de chargement", label: "Quai de chargement" },
  porteSectionnelle: {
    key: "porte sectionnelle",
    label: "Porte sectionnelle",
  },
  accesCamion: { key: "accès camion", label: "Accès camion" },
  bureauxIntegres: { key: "bureaux intégrés", label: "Bureaux intégrés" },
  constructible: { key: "constructible", label: "Constructible" },
  lotissement: { key: "lotissement", label: "Lotissement" },
  impetrants: { key: "impétrants", label: "Impétrants" },
  permisUrbanisme: { key: "permis d'urbanisme", label: "Permis d'urbanisme" },
  travaux: { key: "travaux à prévoir", label: "Travaux à prévoir" },
  borneElectrique: { key: "borne électrique", label: "Borne électrique" },
} as const;

const MAIN_EXTRA_LABELS: Record<MainExtraKey, string> = {
  bedrooms: "Chambres",
  surface: "Surface",
  landSurface: "Surface terrain",
  units: "Unités",
};

const GENERIC_FEATURES_SALE: FeatureToggle[] = [
  FEATURES.jardin,
  FEATURES.terrasse,
  FEATURES.garage,
  FEATURES.parking,
  FEATURES.ascenseur,
];

const GENERIC_FEATURES_RENT: FeatureToggle[] = [
  FEATURES.jardin,
  FEATURES.terrasse,
  FEATURES.garage,
  FEATURES.parking,
  FEATURES.ascenseur,
];

const MAISON_FEATURES: FeatureToggle[] = [
  FEATURES.jardin,
  FEATURES.terrasse,
  FEATURES.garage,
  FEATURES.parking,
  FEATURES.cave,
  FEATURES.grenier,
  FEATURES.bureauRoom,
  FEATURES.piscine,
];

const APPARTEMENT_FEATURES: FeatureToggle[] = [
  FEATURES.terrasse,
  FEATURES.balcon,
  FEATURES.ascenseur,
  FEATURES.cave,
  FEATURES.garage,
  FEATURES.parking,
];

const TERRAIN_FEATURES: FeatureToggle[] = [
  FEATURES.constructible,
  FEATURES.lotissement,
  FEATURES.impetrants,
  FEATURES.permisUrbanisme,
];

const BUREAU_FEATURES: FeatureToggle[] = [
  FEATURES.parking,
  FEATURES.ascenseur,
  FEATURES.climatisation,
  FEATURES.salleReunion,
  FEATURES.accesPmr,
];

const COMMERCE_FEATURES: FeatureToggle[] = [
  FEATURES.vitrine,
  FEATURES.horeca,
  FEATURES.reserve,
  FEATURES.parking,
  FEATURES.extraction,
];

const INDUSTRIEL_FEATURES: FeatureToggle[] = [
  FEATURES.quaiChargement,
  FEATURES.porteSectionnelle,
  FEATURES.accesCamion,
  FEATURES.parking,
  FEATURES.bureauxIntegres,
];

const IMMEUBLE_FEATURES: FeatureToggle[] = [FEATURES.travaux];

const GARAGE_FEATURES: FeatureToggle[] = [
  FEATURES.garage,
  FEATURES.parking,
  FEATURES.boxFerme,
  FEATURES.parkingInt,
  FEATURES.parkingExt,
  FEATURES.securise,
  FEATURES.borneElectrique,
];

function configForType(
  mode: TransactionMode,
  type: ListingType | null,
): FilterConfig {
  const isRent = mode === "location";

  if (type === null) {
    return {
      mainExtra: "bedrooms",
      mainExtraLabel: MAIN_EXTRA_LABELS.bedrooms,
      advanced: [
        "surface",
        "peb",
        ...(isRent ? (["furnished", "charges"] as AdvancedSection[]) : []),
        "condition",
        "features",
      ],
      features: isRent ? GENERIC_FEATURES_RENT : GENERIC_FEATURES_SALE,
    };
  }

  if (type === "Maison") {
    return {
      mainExtra: "bedrooms",
      mainExtraLabel: MAIN_EXTRA_LABELS.bedrooms,
      advanced: [
        "surface",
        "landSurface",
        "facades",
        "peb",
        "condition",
        ...(isRent ? (["furnished", "charges"] as AdvancedSection[]) : []),
        "features",
      ],
      features: MAISON_FEATURES,
    };
  }

  if (type === "Appartement") {
    return {
      mainExtra: "bedrooms",
      mainExtraLabel: MAIN_EXTRA_LABELS.bedrooms,
      advanced: [
        "surface",
        "floor",
        "peb",
        "charges",
        ...(isRent ? (["furnished"] as AdvancedSection[]) : []),
        "condition",
        "features",
      ],
      features: APPARTEMENT_FEATURES,
    };
  }

  if (type === "Terrain") {
    return {
      mainExtra: "landSurface",
      mainExtraLabel: MAIN_EXTRA_LABELS.landSurface,
      advanced: ["frontage", "depth", "orientation", "relief", "features"],
      features: TERRAIN_FEATURES,
    };
  }

  if (type === "Bureau") {
    return {
      mainExtra: "surface",
      mainExtraLabel: MAIN_EXTRA_LABELS.surface,
      advanced: [
        "floor",
        "charges",
        "availability",
        "condition",
        "features",
      ],
      features: BUREAU_FEATURES,
    };
  }

  if (type === "Commerce") {
    return {
      mainExtra: "surface",
      mainExtraLabel: MAIN_EXTRA_LABELS.surface,
      advanced: ["charges", "availability", "condition", "features"],
      features: COMMERCE_FEATURES,
    };
  }

  if (type === "Industriel") {
    return {
      mainExtra: "surface",
      mainExtraLabel: MAIN_EXTRA_LABELS.surface,
      advanced: [
        "ceilingHeight",
        "electricalPower",
        "landSurface",
        "availability",
        "condition",
        "features",
      ],
      features: INDUSTRIEL_FEATURES,
    };
  }

  if (type === "Immeuble de rapport") {
    return {
      mainExtra: "units",
      mainExtraLabel: MAIN_EXTRA_LABELS.units,
      surfaceLabel: "Surface totale",
      advanced: [
        "surface",
        "rentalIncome",
        "grossYield",
        "occupancy",
        "cadastralIncome",
        "peb",
        "charges",
        "condition",
        "features",
      ],
      features: IMMEUBLE_FEATURES,
    };
  }

  if (type === "Garage / parking") {
    return {
      mainExtra: "surface",
      mainExtraLabel: MAIN_EXTRA_LABELS.surface,
      advanced: ["charges", "availability", "features"],
      features: GARAGE_FEATURES,
    };
  }

  return {
    mainExtra: "bedrooms",
    mainExtraLabel: MAIN_EXTRA_LABELS.bedrooms,
    advanced: ["surface", "peb", "condition", "features"],
    features: GENERIC_FEATURES_SALE,
  };
}

export function getFilterConfig(
  mode: TransactionMode,
  type: ListingType | null,
): FilterConfig {
  return configForType(mode, type);
}

export function priceLabel(mode: TransactionMode): string {
  return mode === "vente" ? "Budget" : "Loyer";
}
