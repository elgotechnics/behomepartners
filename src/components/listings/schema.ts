import { formatPrice, type Listing } from "@/data/listings";

const SITE_URL = "https://behomepartners.netlify.app";

export function breadcrumbSchema(
  items: { label: string; url: string }[],
): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE_URL}${item.url}`,
    })),
  });
}

export function listingItemListSchema(opts: {
  name: string;
  url: string;
  mode: "vente" | "location";
  items: Listing[];
}): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: opts.name,
    url: `${SITE_URL}${opts.url}`,
    numberOfItems: opts.items.length,
    itemListElement: opts.items.map((l, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": opts.mode === "vente" ? "Product" : "Accommodation",
        name: `${l.type} à ${l.city}`,
        description: l.imageAlt,
        image: `${SITE_URL}${(l.images && l.images[0]) || l.image}`,
        offers: {
          "@type": "Offer",
          price: opts.mode === "vente" ? l.salePrice : l.monthlyRent,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          ...(opts.mode === "location"
            ? { priceSpecification: { "@type": "UnitPriceSpecification", price: l.monthlyRent, priceCurrency: "EUR", unitText: "MONTH" } }
            : {}),
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: l.city,
          ...(l.postalCode ? { postalCode: l.postalCode } : {}),
          addressCountry: "BE",
        },
      },
    })),
  });
}

export function schemaJsonLd(json: string) {
  return { __html: json };
}

export { SITE_URL, formatPrice };
