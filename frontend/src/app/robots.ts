import type { MetadataRoute } from "next";
import { siteSeo } from "@/config/seo";

export default function robots(): MetadataRoute.Robots {
  if (!siteSeo.indexingEnabled) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  if (!siteSeo.siteUrl) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteSeo.siteUrl}/sitemap.xml`,
  };
}
