import type { Metadata } from "next";
import { ServicePage } from "@/components/services/ServicePage";
import { locationService } from "@/data/services-location";

export const metadata: Metadata = {
  title: locationService.metaTitle,
  description: locationService.metaDescription,
  alternates: {
    canonical: `/services/${locationService.slug}`,
  },
  openGraph: {
    title: locationService.metaTitle,
    description: locationService.metaDescription,
    url: `/services/${locationService.slug}`,
    type: "website",
  },
};

export default function LocationServicePage() {
  return <ServicePage service={locationService} />;
}
