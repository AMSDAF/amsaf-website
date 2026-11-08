import type { ReactNode } from "react";
import { SiteShell } from "@/components/site-shell";

const commercialBrand = { href: "/", label: "AMSAF" };
const professionalBrand = { href: "/portfolio", label: "Antônio Marcos" };
const services = { href: "/#servicos", label: "Serviços" };
const work = { href: "/#trabalhos", label: "Trabalhos" };
const portfolio = { href: "/portfolio", label: "Portfólio profissional" };
const returnToServices = { href: services.href, label: "Voltar aos serviços" };
const returnToProjects = {
  href: "/portfolio#projetos",
  label: "Voltar aos projetos",
};
const whatsApp = {
  href: "https://wa.me/5581999370547",
  label: "Falar pelo WhatsApp",
};

export function CommercialLayout({
  children,
  scaffold = false,
}: {
  children: ReactNode;
  scaffold?: boolean;
}) {
  return (
    <SiteShell
      brand={commercialBrand}
      headerLinks={
        scaffold
          ? [{ href: "#template-overview", label: "Estrutura do site" }]
          : [
              services,
              work,
              { href: "/#como-funciona", label: "Como funciona" },
              { href: "/#sobre", label: "Sobre" },
              portfolio,
            ]
      }
      headerAction={whatsApp}
      footerLinks={
        scaffold
          ? [{ href: "#template-principles", label: "Princípios do site" }]
          : [services, work, portfolio]
      }
    >
      {children}
    </SiteShell>
  );
}

export function ServiceLayout({ children }: { children: ReactNode }) {
  return (
    <SiteShell
      brand={commercialBrand}
      headerLinks={[returnToServices]}
      footerLinks={[portfolio]}
    >
      {children}
    </SiteShell>
  );
}

export function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <SiteShell
      brand={professionalBrand}
      headerLinks={[
        { href: "#habilidades", label: "Habilidades" },
        { href: "#experiencia", label: "Experiência e formação" },
        { href: "#projetos", label: "Projetos" },
        returnToServices,
      ]}
      footerLinks={[returnToServices]}
    >
      {children}
    </SiteShell>
  );
}

export function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <SiteShell
      brand={professionalBrand}
      headerLinks={[returnToProjects]}
      footerLinks={[returnToProjects]}
    >
      {children}
    </SiteShell>
  );
}
