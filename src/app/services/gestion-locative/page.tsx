import type { Metadata } from "next";
import { ServicePage } from "@/components/services/ServicePage";
import { gestionLocativeService } from "@/data/services-gestion-locative";

export const metadata: Metadata = {
  title: gestionLocativeService.metaTitle,
  description: gestionLocativeService.metaDescription,
  alternates: {
    canonical: `/services/${gestionLocativeService.slug}`,
  },
  openGraph: {
    title: gestionLocativeService.metaTitle,
    description: gestionLocativeService.metaDescription,
    url: `/services/${gestionLocativeService.slug}`,
    type: "website",
  },
};

export default function GestionLocativeServicePage() {
  return <ServicePage service={gestionLocativeService} />;
}
