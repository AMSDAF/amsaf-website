import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteShell } from "@/components/site-shell";
import { commercialContact } from "@/config/contact";

const commercialBrand = { href: "/", label: "AMSAF" };
const professionalBrand = {
  href: "/portfolio",
  label: "amsaf — Portfólio profissional",
};
const services = { href: "/#servicos", label: "Serviços" };
const work = { href: "/#trabalhos", label: "Trabalhos" };
const portfolio = { href: "/portfolio", label: "Portfólio profissional" };
const returnToServices = { href: services.href, label: "Voltar aos serviços" };
const returnToProjects = {
  href: "/portfolio#projetos",
  label: "Voltar aos projetos",
};

const commercialHeader = {
  brand: commercialBrand,
  headerLinks: [
    services,
    work,
    { href: "/#como-funciona", label: "Como funciona" },
    { href: "/#sobre", label: "Sobre" },
    portfolio,
  ],
  headerAction: commercialContact,
};

export function CommercialHeader() {
  return <SiteHeader {...commercialHeader} />;
}

export function CommercialLayout({ children }: { children: ReactNode }) {
  return (
    <SiteShell {...commercialHeader} footerLinks={[services, work, portfolio]}>
      {children}
    </SiteShell>
  );
}

export function ServiceLayout({ children }: { children: ReactNode }) {
  return (
    <SiteShell
      brand={commercialBrand}
      returnLink={returnToServices}
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
      returnLink={returnToProjects}
      footerLinks={[returnToProjects]}
    >
      {children}
    </SiteShell>
  );
}
