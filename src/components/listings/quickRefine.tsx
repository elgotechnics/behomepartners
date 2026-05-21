import {
  ArrowDownToLine,
  Briefcase,
  Cable,
  Car,
  CheckCircle2,
  ChevronsUpDown,
  Construction,
  DoorOpen,
  Eye,
  Hammer,
  Leaf,
  Lock,
  Map as MapIcon,
  Minus,
  ParkingCircle,
  ParkingSquare,
  Shield,
  Snowflake,
  Sofa,
  Sun,
  TreePine,
  Truck,
  Waves,
  Wind,
  Zap,
} from "lucide-react";
import type { ListingType, PebRating } from "@/data/listings";
import type { Filters } from "./filters";
import type { TransactionMode } from "./typeSlug";

export type QuickRefineChip = {
  key: string;
  label: string;
  icon: React.ReactNode;
  isActive: (f: Filters) => boolean;
  apply: (f: Filters) => Filters;
  remove: (f: Filters) => Filters;
};

const ICON_SIZE = 14;

function featureChip(
  key: string,
  label: string,
  featureLabel: string,
  icon: React.ReactNode,
): QuickRefineChip {
  return {
    key,
    label,
    icon,
    isActive: (f) => f.features.includes(featureLabel),
    apply: (f) =>
      f.features.includes(featureLabel)
        ? f
        : { ...f, features: [...f.features, featureLabel] },
    remove: (f) => ({
      ...f,
      features: f.features.filter((x) => x !== featureLabel),
    }),
  };
}

const CHIPS = {
  jardin: featureChip(
    "jardin",
    "Jardin",
    "Jardin",
    <TreePine size={ICON_SIZE} />,
  ),
  garage: featureChip("garage", "Garage", "Garage", <Car size={ICON_SIZE} />),
  terrasse: featureChip(
    "terrasse",
    "Terrasse",
    "Terrasse",
    <Sun size={ICON_SIZE} />,
  ),
  parking: featureChip(
    "parking",
    "Parking",
    "Parking",
    <ParkingCircle size={ICON_SIZE} />,
  ),
  piscine: featureChip(
    "piscine",
    "Piscine",
    "Piscine",
    <Waves size={ICON_SIZE} />,
  ),
  ascenseur: featureChip(
    "ascenseur",
    "Ascenseur",
    "Ascenseur",
    <ChevronsUpDown size={ICON_SIZE} />,
  ),
  climatisation: featureChip(
    "climatisation",
    "Climatisation",
    "Climatisation",
    <Snowflake size={ICON_SIZE} />,
  ),
  vitrine: featureChip(
    "vitrine",
    "Vitrine",
    "Vitrine",
    <Eye size={ICON_SIZE} />,
  ),
  extraction: featureChip(
    "extraction",
    "Extraction",
    "Extraction possible",
    <Wind size={ICON_SIZE} />,
  ),
  porteSectionnelle: featureChip(
    "porte-sectionnelle",
    "Porte sectionnelle",
    "Porte sectionnelle",
    <DoorOpen size={ICON_SIZE} />,
  ),
  quaiChargement: featureChip(
    "quai-chargement",
    "Quai de chargement",
    "Quai de chargement",
    <Truck size={ICON_SIZE} />,
  ),
  accesCamion: featureChip(
    "acces-camion",
    "Accès camion",
    "Accès camion",
    <Truck size={ICON_SIZE} />,
  ),
  bureauxIntegres: featureChip(
    "bureaux-integres",
    "Bureaux intégrés",
    "Bureaux intégrés",
    <Briefcase size={ICON_SIZE} />,
  ),
  boxFerme: featureChip(
    "box-ferme",
    "Box fermé",
    "Box fermé",
    <Lock size={ICON_SIZE} />,
  ),
  securise: featureChip(
    "securise",
    "Sécurisé",
    "Sécurisé",
    <Shield size={ICON_SIZE} />,
  ),
  parkingInt: featureChip(
    "parking-int",
    "Parking intérieur",
    "Parking intérieur",
    <ParkingSquare size={ICON_SIZE} />,
  ),
  borneElectrique: featureChip(
    "borne-electrique",
    "Borne électrique",
    "Borne électrique",
    <Zap size={ICON_SIZE} />,
  ),
  constructible: featureChip(
    "constructible",
    "Constructible",
    "Constructible",
    <Hammer size={ICON_SIZE} />,
  ),
  lotissement: featureChip(
    "lotissement",
    "Lotissement",
    "Lotissement",
    <MapIcon size={ICON_SIZE} />,
  ),
  impetrants: featureChip(
    "impetrants",
    "Impétrants",
    "Impétrants",
    <Cable size={ICON_SIZE} />,
  ),
  travaux: featureChip(
    "travaux",
    "Travaux à prévoir",
    "Travaux à prévoir",
    <Construction size={ICON_SIZE} />,
  ),

  pebAC: {
    key: "peb-ac",
    label: "PEB A-C",
    icon: <Leaf size={ICON_SIZE} />,
    isActive: (f: Filters) =>
      ["A", "B", "C"].every((p) => f.peb.includes(p as PebRating)),
    apply: (f: Filters) => ({
      ...f,
      peb: ["A", "B", "C"] as PebRating[],
    }),
    remove: (f: Filters) => ({
      ...f,
      peb: f.peb.filter((p) => !["A", "B", "C"].includes(p)),
    }),
  } as QuickRefineChip,

  rezDeChaussee: {
    key: "rdc",
    label: "Rez-de-chaussée",
    icon: <ArrowDownToLine size={ICON_SIZE} />,
    isActive: (f: Filters) => f.floorMin === 0 && f.floorMax === 0,
    apply: (f: Filters) => ({ ...f, floorMin: 0, floorMax: 0 }),
    remove: (f: Filters) => ({ ...f, floorMin: null, floorMax: null }),
  } as QuickRefineChip,

  meuble: {
    key: "meuble",
    label: "Meublé",
    icon: <Sofa size={ICON_SIZE} />,
    isActive: (f: Filters) => f.furnished === true,
    apply: (f: Filters) => ({ ...f, furnished: true }),
    remove: (f: Filters) => ({ ...f, furnished: null }),
  } as QuickRefineChip,

  plat: {
    key: "plat",
    label: "Plat",
    icon: <Minus size={ICON_SIZE} />,
    isActive: (f: Filters) => f.reliefs.includes("plat"),
    apply: (f: Filters) =>
      f.reliefs.includes("plat")
        ? f
        : { ...f, reliefs: [...f.reliefs, "plat"] },
    remove: (f: Filters) => ({
      ...f,
      reliefs: f.reliefs.filter((r) => r !== "plat"),
    }),
  } as QuickRefineChip,

  entierementLoue: {
    key: "fully-occupied",
    label: "Entièrement loué",
    icon: <CheckCircle2 size={ICON_SIZE} />,
    isActive: (f: Filters) => f.occupancies.includes("occupe"),
    apply: (f: Filters) =>
      f.occupancies.includes("occupe")
        ? f
        : { ...f, occupancies: [...f.occupancies, "occupe"] },
    remove: (f: Filters) => ({
      ...f,
      occupancies: f.occupancies.filter((o) => o !== "occupe"),
    }),
  } as QuickRefineChip,
};

export function getQuickRefineChips(
  mode: TransactionMode,
  type: ListingType | null,
): QuickRefineChip[] {
  const isRent = mode === "location";

  if (type === null) {
    return isRent
      ? [CHIPS.jardin, CHIPS.garage, CHIPS.terrasse, CHIPS.parking, CHIPS.meuble]
      : [CHIPS.jardin, CHIPS.garage, CHIPS.terrasse, CHIPS.parking, CHIPS.pebAC];
  }

  if (type === "Maison") {
    return isRent
      ? [CHIPS.jardin, CHIPS.garage, CHIPS.terrasse, CHIPS.pebAC, CHIPS.meuble]
      : [
          CHIPS.jardin,
          CHIPS.garage,
          CHIPS.terrasse,
          CHIPS.pebAC,
          CHIPS.piscine,
        ];
  }

  if (type === "Appartement") {
    return isRent
      ? [
          CHIPS.terrasse,
          CHIPS.ascenseur,
          CHIPS.parking,
          CHIPS.rezDeChaussee,
          CHIPS.meuble,
        ]
      : [
          CHIPS.terrasse,
          CHIPS.ascenseur,
          CHIPS.parking,
          CHIPS.rezDeChaussee,
          CHIPS.pebAC,
        ];
  }

  if (type === "Terrain") {
    return [CHIPS.constructible, CHIPS.plat, CHIPS.lotissement, CHIPS.impetrants];
  }

  if (type === "Bureau") {
    return [
      CHIPS.parking,
      CHIPS.rezDeChaussee,
      CHIPS.ascenseur,
      CHIPS.climatisation,
    ];
  }

  if (type === "Commerce") {
    return [
      CHIPS.vitrine,
      CHIPS.rezDeChaussee,
      CHIPS.extraction,
      CHIPS.parking,
    ];
  }

  if (type === "Industriel") {
    return [
      CHIPS.porteSectionnelle,
      CHIPS.quaiChargement,
      CHIPS.accesCamion,
      CHIPS.bureauxIntegres,
    ];
  }

  if (type === "Immeuble de rapport") {
    return [CHIPS.entierementLoue, CHIPS.travaux];
  }

  if (type === "Garage / parking") {
    return [
      CHIPS.boxFerme,
      CHIPS.securise,
      CHIPS.parkingInt,
      CHIPS.borneElectrique,
    ];
  }

  return [];
}
