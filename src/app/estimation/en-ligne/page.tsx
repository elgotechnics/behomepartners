import type { Metadata } from "next";
import { UnderConstruction } from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Estimation en ligne",
  description:
    "Outil d'estimation en ligne en cours de préparation. Pour une estimation immédiate, demandez le passage d'un agent.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/estimation/en-ligne" },
};

export default function EstimationEnLignePage() {
  return <UnderConstruction />;
}
