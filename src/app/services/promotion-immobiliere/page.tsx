import type { Metadata } from "next";
import { ServicePage } from "@/components/services/ServicePage";
import { promotionImmobiliereService } from "@/data/services-promotion-immobiliere";

export const metadata: Metadata = {
  title: promotionImmobiliereService.metaTitle,
  description: promotionImmobiliereService.metaDescription,
  alternates: {
    canonical: `/services/${promotionImmobiliereService.slug}`,
  },
  openGraph: {
    title: promotionImmobiliereService.metaTitle,
    description: promotionImmobiliereService.metaDescription,
    url: `/services/${promotionImmobiliereService.slug}`,
    type: "website",
  },
};

export default function PromotionImmobiliereServicePage() {
  return <ServicePage service={promotionImmobiliereService} />;
}
