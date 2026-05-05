import type { MetadataRoute } from "next";

const SITE_URL = "https://behomepartners.netlify.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/hero-preview",
        "/hero-preview-2",
        "/hero-dark-preview",
        "/header-preview",
        "/services-preview",
        "/estimation-preview",
        "/marquee-preview",
        "/testimonials-preview",
        "/why-choose-preview",
        "/why-choose-preview-2",
        "/why-choose-preview-3",
        "/why-choose-styles",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
