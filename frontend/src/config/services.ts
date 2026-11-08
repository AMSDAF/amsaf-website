import { commercialContact } from "@/config/contact";
import type { LinkContent } from "@/types/content";

export type ServiceRoute =
  "/landing-pages" | "/portfolios" | "/institucionais" | "/comerciais";

export interface ServiceContent {
  route: ServiceRoute;
  label: string;
  summary: string;
  audience: string;
  baseScope: readonly string[];
  startingPriceInCentavos: number;
  monthlyMaintenanceInCentavos: number;
  contact: LinkContent;
}

export const serviceProposalNote =
  "Uma proposta personalizada define as entregas e o valor final de acordo com o que você precisa.";

export const serviceMaintenanceNote =
  "A manutenção mensal é opcional e cobre hospedagem, monitoramento e suporte técnico conforme combinado. Você também pode gerenciar sua própria hospedagem.";

export const landingPagesService: ServiceContent = {
  route: "/landing-pages",
  label: "Landing Pages",
  summary: "Uma página para apresentar sua oferta e facilitar o contato.",
  audience:
    "Profissionais que querem divulgar um serviço, uma oferta, uma campanha, um curso ou um evento.",
  baseScope: [
    "Uma página responsiva organizada em seções",
    "Botão de contato direto pelo WhatsApp",
    "Configuração do domínio e publicação",
  ],
  startingPriceInCentavos: 75000,
  monthlyMaintenanceInCentavos: 4990,
  contact: commercialContact,
};

export const services: readonly ServiceContent[] = [
  landingPagesService,
  {
    route: "/portfolios",
    label: "Portfólios",
    summary: "Um site para mostrar seus trabalhos e receber contatos.",
    audience:
      "Fotógrafos, designers, artistas, arquitetos e outros profissionais que precisam apresentar seus trabalhos.",
    baseScope: [
      "Galeria responsiva de trabalhos",
      "Página sobre o profissional",
      "Informações de contato e links para redes sociais",
    ],
    startingPriceInCentavos: 109000,
    monthlyMaintenanceInCentavos: 7990,
    contact: commercialContact,
  },
  {
    route: "/institucionais",
    label: "Sites Institucionais",
    summary: "Um site para apresentar sua empresa e facilitar o contato.",
    audience:
      "Empresas que precisam explicar quem são, o que fazem e como entrar em contato.",
    baseScope: [
      "Páginas internas de serviços, equipe, localização e contato",
      "Otimização básica para mecanismos de busca",
    ],
    startingPriceInCentavos: 159000,
    monthlyMaintenanceInCentavos: 11990,
    contact: commercialContact,
  },
  {
    route: "/comerciais",
    label: "Sites Comerciais",
    summary: "Um catálogo ou cardápio digital com atendimento pelo WhatsApp.",
    audience:
      "Empresas que querem apresentar produtos ou serviços e receber consultas ou pedidos.",
    baseScope: [
      "Catálogo ou cardápio digital responsivo",
      "Páginas por categoria",
      "Consultas e pedidos pelo WhatsApp",
    ],
    startingPriceInCentavos: 199000,
    monthlyMaintenanceInCentavos: 16990,
    contact: commercialContact,
  },
];
