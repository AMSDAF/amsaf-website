import { describe, expect, it } from "vitest";
import { commercialContact } from "@/config/contact";
import {
  findProjectBySlug,
  projectDetailPath,
  projects,
} from "@/config/projects";
import { services } from "@/config/services";

describe("Commercial service catalog", () => {
  it("keeps the four approved service paths in order, separate from /portfolio", () => {
    expect(services.map(({ route }) => route)).toEqual([
      "/landing-pages",
      "/portfolios",
      "/institucionais",
      "/comerciais",
    ]);
  });

  it("uses the configured WhatsApp link in every service record", () => {
    expect(commercialContact.href).toBe("https://wa.me/5581999370547");

    for (const { contact } of services) {
      expect(contact).toEqual(commercialContact);
    }
  });
});

describe("Portfolio project catalog", () => {
  it("uses unique project slugs", () => {
    expect(new Set(projects.map(({ slug }) => slug)).size).toBe(
      projects.length,
    );
  });

  it("resolves each known slug and builds its detail link", () => {
    expect(findProjectBySlug("emilly-araujo-fotografia")?.title).toBe(
      "Emilly Araújo Fotografia",
    );

    for (const project of projects) {
      expect(findProjectBySlug(project.slug)).toBe(project);
      expect(projectDetailPath(project.slug)).toBe(
        `/portfolio/projetos/${project.slug}`,
      );
    }
  });

  it("returns undefined for an unknown slug", () => {
    expect(findProjectBySlug("projeto-desconhecido")).toBeUndefined();
  });
});
