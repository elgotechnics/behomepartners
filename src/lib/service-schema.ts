import {
  AREA_SERVED,
  ORGANIZATION_ID,
  SITE_LOGO,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
  absoluteUrl,
} from "@/lib/site";

export type ServiceSchemaInput = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  serviceName: string;
  serviceType: string;
  faq?: { q: string; a: string }[];
  includeFaq?: boolean;
};

type GraphNode = Record<string, unknown>;

const ORG_NODE: GraphNode = {
  "@type": "RealEstateAgent",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl(SITE_LOGO),
  image: absoluteUrl(SITE_LOGO),
  foundingDate: "2010",
  areaServed: AREA_SERVED.map((name) => ({
    "@type": "City",
    name,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Brabant wallon",
    },
  })),
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Avenue du Centenaire 53 bte 4",
      postalCode: "1400",
      addressLocality: "Nivelles",
      addressCountry: "BE",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Chaussée de Tubize 11",
      postalCode: "1420",
      addressLocality: "Braine-l'Alleud",
      addressCountry: "BE",
    },
  ],
  telephone: ["+32 67 84 12 84", "+32 2 385 12 84"],
};

const WEBSITE_NODE: GraphNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "fr-BE",
  publisher: { "@id": ORGANIZATION_ID },
};

export function generateServiceSchema(input: ServiceSchemaInput) {
  const pageUrl = absoluteUrl(`/services/${input.slug}`);
  const serviceId = `${pageUrl}#service`;
  const webpageId = `${pageUrl}#webpage`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const faqId = `${pageUrl}#faq`;

  const webPageNode: GraphNode = {
    "@type": "WebPage",
    "@id": webpageId,
    url: pageUrl,
    name: input.metaTitle,
    description: input.metaDescription,
    inLanguage: "fr-BE",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": serviceId },
    breadcrumb: { "@id": breadcrumbId },
  };

  const breadcrumbNode: GraphNode = {
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: absoluteUrl("/services"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: input.serviceName,
        item: pageUrl,
      },
    ],
  };

  const serviceNode: GraphNode = {
    "@type": "Service",
    "@id": serviceId,
    name: input.serviceName,
    serviceType: input.serviceType,
    description: input.metaDescription,
    url: pageUrl,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: AREA_SERVED.map((name) => ({
      "@type": "City",
      name,
    })),
  };

  const graph: GraphNode[] = [
    ORG_NODE,
    WEBSITE_NODE,
    webPageNode,
    breadcrumbNode,
    serviceNode,
  ];

  if (input.includeFaq && input.faq && input.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": faqId,
      mainEntity: input.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function serializeJsonLd(jsonLd: unknown): string {
  return JSON.stringify(jsonLd).replace(/</g, "\\u003c");
}
