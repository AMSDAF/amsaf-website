import type { MetadataRoute } from "next";
import { siteSeo } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteSeo.indexingEnabled || !siteSeo.siteUrl) {
    return [];
  }

  return [
    {
      url: siteSeo.siteUrl,
    },
  ];
}
