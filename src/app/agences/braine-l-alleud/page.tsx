import type { Metadata } from "next";
import { UnderConstruction } from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Agence Be Home Partners à Braine-l'Alleud",
  description:
    "Notre agence immobilière à Braine-l'Alleud. Page en cours de préparation.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/agences/braine-l-alleud" },
};

export default function AgenceBraineAlleudPage() {
  return (
    <UnderConstruction />
  );
}
