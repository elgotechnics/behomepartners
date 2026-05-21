import type { Metadata } from "next";
import { UnderConstruction } from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Agence Be Home Partners à Nivelles",
  description:
    "Notre agence immobilière à Nivelles. Page en cours de préparation.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/agences/nivelles" },
};

export default function AgenceNivellesPage() {
  return (
    <UnderConstruction />
  );
}
