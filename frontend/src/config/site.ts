import type { NavigationItem } from "@/types/navigation";
import type {
  ContentSection,
  FooterContent,
  GalleryItem,
  HeroContent,
  SiteContent,
} from "@/types/content";

export const siteContent = {
  title: "Portfolio Foundation",
  description: "Base reutilizável para portfólios profissionais.",
} satisfies SiteContent;

export const siteHero = {
  title: "Uma base clara para apresentar trabalho profissional.",
  description:
    "Um template neutro para testar hierarquia, navegação e composição antes de aplicar uma identidade visual.",
  actions: [
    {
      href: "#template-overview",
      label: "Conhecer a estrutura",
    },
  ],
} satisfies HeroContent;

export const siteSections = [
  {
    id: "template-overview",
    title: "Estrutura orientada por conteúdo",
    description:
      "Seções independentes ajudam cada implementação a organizar sua narrativa sem acoplar apresentação, dados ou uma marca específica.",
  },
  {
    id: "template-principles",
    title: "Composição simples e reutilizável",
    description:
      "Padrões neutros de layout, tipografia e ação formam uma base previsível para futuras páginas e experiências profissionais.",
  },
] satisfies ContentSection[];

export const siteGallery = [
  {
    title: "Grade modular",
    description: "Uma composição visual baseada em ritmo e repetição.",
    image: {
      alt: "Grade geométrica em tons neutros",
      src: "/gallery/abstract-grid.svg",
    },
    link: {
      href: "#template-principles",
      label: "Ver princípio relacionado",
    },
  },
  {
    title: "Planos sobrepostos",
    description:
      "Camadas simples para organizar diferentes níveis de conteúdo.",
    image: {
      alt: "Planos abstratos em tons neutros",
      src: "/gallery/abstract-planes.svg",
    },
  },
  {
    title: "Contraste controlado",
    description: "Uma variação neutra para destacar uma informação importante.",
    image: {
      alt: "Contraste abstrato em tons neutros",
      src: "/gallery/abstract-contrast.svg",
    },
  },
] satisfies GalleryItem[];

export const siteNavigation = [
  {
    href: "/",
    label: "Início",
  },
] satisfies NavigationItem[];

export const siteFooter = {
  navigation: [
    {
      href: "#main-content",
      label: "Ir para o conteúdo",
    },
  ],
  cta: {
    href: "#main-content",
    label: "Explorar o template",
  },
} satisfies FooterContent;
