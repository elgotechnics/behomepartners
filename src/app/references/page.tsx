import type { Metadata } from "next";
import { UnderConstruction } from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Références",
  description:
    "Découvrez une sélection de biens vendus, loués et de projets immobiliers accompagnés par Be Home Partners dans le Brabant wallon et ses environs.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/references" },
};

export default function ReferencesPage() {
  return <UnderConstruction />;
}
