import type { ImageReference, LinkContent } from "@/types/content";

export interface ProjectContent {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  technologies: readonly string[];
  decisions: readonly string[];
  results: readonly string[];
  links: readonly LinkContent[];
  images: readonly ImageReference[];
}

export const projects: readonly ProjectContent[] = [
  {
    slug: "emilly-araujo-fotografia",
    title: "Emilly Araújo Fotografia",
    summary: "Portfólio de fotografia",
    detail:
      "O site da Emilly Araújo Fotografia funciona como portfólio digital para apresentar o trabalho fotográfico de Emilly Araújo.",
    technologies: [],
    decisions: [],
    results: [],
    links: [],
    images: [],
  },
];
