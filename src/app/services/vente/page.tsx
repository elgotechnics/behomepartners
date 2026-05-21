import type { Metadata } from "next";
import { ServicePage } from "@/components/services/ServicePage";
import { venteService } from "@/data/services-vente";

export const metadata: Metadata = {
  title: venteService.metaTitle,
  description: venteService.metaDescription,
  alternates: {
    canonical: `/services/${venteService.slug}`,
  },
  openGraph: {
    title: venteService.metaTitle,
    description: venteService.metaDescription,
    url: `/services/${venteService.slug}`,
    type: "website",
  },
};

export default function VenteServicePage() {
  return <ServicePage service={venteService} />;
}
