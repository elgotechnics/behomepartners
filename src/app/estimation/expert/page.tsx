import type { Metadata } from "next";
import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/Footer";
import { ExpertEstimationForm } from "@/components/estimation/ExpertEstimationForm";

const SITE_URL = "https://behomepartners.netlify.app";
const URL_PATH = "/estimation/expert";

export const metadata: Metadata = {
  title: "Estimation immobilière par un agent",
  description:
    "Décrivez votre bien en quelques étapes, un agent Be Home Partners revient vers vous pour affiner votre estimation.",
  alternates: { canonical: `${SITE_URL}${URL_PATH}` },
  openGraph: {
    title: "Estimation immobilière par un agent | Be Home Partners",
    description:
      "Décrivez votre bien en quelques étapes, un agent Be Home Partners revient vers vous pour affiner votre estimation.",
    url: `${SITE_URL}${URL_PATH}`,
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col bg-cream">
        <ExpertEstimationForm />
      </main>
      <Footer />
    </>
  );
}
