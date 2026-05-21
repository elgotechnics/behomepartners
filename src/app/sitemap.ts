import type { MetadataRoute } from "next";
import { saleSlugs, rentSlugs } from "@/components/listings/typeSlug";

const SITE_URL = "https://behomepartners.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/a-vendre`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/a-louer`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];
  for (const slug of saleSlugs()) {
    entries.push({
      url: `${SITE_URL}/a-vendre/${slug}`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    });
  }
  for (const slug of rentSlugs()) {
    entries.push({
      url: `${SITE_URL}/a-louer/${slug}`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    });
  }
  return entries;
}
