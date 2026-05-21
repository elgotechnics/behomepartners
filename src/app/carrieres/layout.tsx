import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carrières immobilières | Be Home Partners",
  description:
    "Découvrez les opportunités de carrière chez Be Home Partners et rejoignez une agence immobilière active dans le Brabant wallon.",
  alternates: { canonical: "/carrieres" },
  openGraph: {
    title: "Carrières immobilières | Be Home Partners",
    description:
      "Découvrez les opportunités de carrière chez Be Home Partners et rejoignez une agence immobilière active dans le Brabant wallon.",
    url: "/carrieres",
    type: "website",
  },
};

export default function CarrieresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
