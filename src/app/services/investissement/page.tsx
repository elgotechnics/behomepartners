import type { Metadata } from "next";
import { ServicePage } from "@/components/services/ServicePage";
import { investissementService } from "@/data/services-investissement";

export const metadata: Metadata = {
  title: investissementService.metaTitle,
  description: investissementService.metaDescription,
  alternates: {
    canonical: `/services/${investissementService.slug}`,
  },
  openGraph: {
    title: investissementService.metaTitle,
    description: investissementService.metaDescription,
    url: `/services/${investissementService.slug}`,
    type: "website",
  },
};

export default function InvestissementServicePage() {
  return <ServicePage service={investissementService} />;
}
