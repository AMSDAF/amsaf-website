import { describe, expect, it } from "vitest";
import robots from "../src/app/robots";
import sitemap from "../src/app/sitemap";
import { siteSeo } from "../src/config/seo";

describe("SEO foundation", () => {
  it("keeps indexing disabled until a real domain is configured", () => {
    expect(siteSeo.indexingEnabled).toBe(false);
    expect(siteSeo.siteUrl).toBeUndefined();
  });

  it("blocks crawlers while indexing is disabled", () => {
    expect(robots()).toEqual({
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    });
  });

  it("does not publish sitemap URLs without indexing authorization", () => {
    expect(sitemap()).toEqual([]);
  });
});
