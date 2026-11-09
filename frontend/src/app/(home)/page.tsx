import type { Metadata } from "next";
import Link from "next/link";
import { ActionLink } from "@/components/action-link";
import { ContentSection } from "@/components/content-section";
import { Hero } from "@/components/hero";
import { commercialContact } from "@/config/contact";
import { professionalProfile } from "@/config/professional-profile";
import { projectDetailPath, projects } from "@/config/projects";
import {
  serviceMaintenanceNote,
  serviceProposalNote,
  services,
} from "@/config/services";
import { formatBrl } from "@/lib/format-brl";

export const metadata: Metadata = {
  title: "AMSAF | Desenvolvimento de sites",
  description:
    "Sites para profissionais e empresas, com escopo claro e propostas personalizadas.",
};

const presenceChecklist = [
  "Explicar o que você faz a quem ainda não conhece seu trabalho.",
  "Reunir seus serviços e, quando fizer sentido, seus preços.",
  "Ter um endereço que as pessoas possam buscar pelo seu nome ou pela sua área.",
  "Mostrar como falar com você ou encontrar seu endereço.",
  "Ter um link para compartilhar na bio, no cartão ou no e-mail.",
];

const processSteps = [
  {
    title: "Conversa",
    description: "Você me conta sobre seu negócio e o que espera do site.",
  },
  {
    title: "Proposta",
    description: "Envio uma proposta com as entregas e o valor.",
  },
  {
    title: "Desenvolvimento",
    description: "Desenvolvo o site e compartilho o andamento para revisão.",
  },
  {
    title: "Entrega",
    description: "Publico o site no domínio combinado.",
  },
  {
    title: "Manutenção opcional",
    description: "Se quiser, combinamos hospedagem, monitoramento e suporte.",
  },
];

const actionClass =
  "action-target border border-inverse bg-inverse px-4 text-on-inverse hover:bg-inverse-hover active:bg-inverse-active";
const textLinkClass =
  "inline-flex min-h-6 items-center rounded-control font-medium underline decoration-content-subtle underline-offset-4 hover:text-accent-text hover:decoration-accent-text active:text-accent-text active:decoration-accent-text";

export default function Home() {
  return (
    <>
      <Hero
        content={{
          title: "Um site para apresentar seu trabalho",
          description:
            "Desenvolvo sites sob medida para profissionais, autônomos e pequenos negócios.",
          actions: [
            { href: "#servicos", label: "Ver serviços e preços" },
            {
              href: "#trabalhos",
              label: "Ver trabalhos",
              variant: "secondary",
            },
          ],
        }}
      >
        <figure className="rounded-card border border-border bg-surface p-5 sm:p-6">
          <figcaption className="text-body-sm text-content-muted">
            Exemplo ilustrativo de site
          </figcaption>
          <div className="mt-3 overflow-hidden rounded-lg border border-border bg-canvas">
            <p className="border-b border-border bg-surface-muted px-4 py-3 text-sm">
              Estúdio de fotografia
            </p>
            <div className="space-y-3 px-4 py-6 sm:px-6">
              <p className="text-body-sm text-content-muted">
                Portfólio de ensaios
              </p>
              <p className="font-display text-title">Retratos em luz natural</p>
              <div aria-hidden="true" className="grid grid-cols-3 gap-2">
                <div className="aspect-square rounded-sm bg-surface-muted" />
                <div className="aspect-square rounded-sm bg-surface" />
                <div className="aspect-square rounded-sm bg-surface-muted" />
              </div>
            </div>
          </div>
        </figure>
      </Hero>

      <ContentSection
        content={{
          id: "presenca-digital",
          title: "Sua presença digital em um endereço próprio",
          description:
            "Um site complementa suas redes sociais e reúne o que você faz, seus serviços e seus canais de contato.",
        }}
      >
        <p className="mt-10 max-w-[18ch] font-display text-title lg:mt-14">
          O que vale conferir no seu site
        </p>
        <ul className="mt-3 max-w-2xl list-disc space-y-2 pl-5 text-content-muted">
          {presenceChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection
        content={{
          id: "servicos",
          title: "Serviços e preços",
          description: serviceProposalNote,
        }}
        headingLayout="split"
      >
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:gap-5 xl:grid-cols-4">
          {services.map((service) => (
            <li
              className="flex flex-col rounded-card border border-border bg-surface p-5 sm:p-6"
              key={service.route}
            >
              <h3 className="max-w-[18ch] font-display text-title">
                {service.label}
              </h3>
              <p className="mt-2 text-body-sm text-content-muted">
                {service.summary}
              </p>
              <ul className="my-4 list-disc space-y-2 pl-5 text-body-sm text-content-muted">
                {service.baseScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {service.scopeNote && (
                <p className="mb-4 text-body-sm text-content-muted">
                  {service.scopeNote}
                </p>
              )}
              <div className="mt-auto border-t border-dashed border-rule pt-4">
                <p className="text-body-sm text-content-muted">A partir de</p>
                <p className="font-display text-price proportional-nums">
                  {formatBrl(service.startingPriceInCentavos)}
                </p>
                <p className="mt-2 text-body-sm text-content-muted">
                  Manutenção opcional de{" "}
                  {formatBrl(service.monthlyMaintenanceInCentavos)} por mês
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-body-sm">
                  <Link
                    aria-label={`Ver detalhes de ${service.label}`}
                    className={textLinkClass}
                    href={service.route}
                  >
                    Ver detalhes
                  </Link>
                  <a className={actionClass} href={service.contact.href}>
                    {service.contact.label}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 max-w-2xl">
          <h3 className="max-w-[18ch] font-display text-title">
            Depois da publicação
          </h3>
          <p className="mt-2 text-content-muted">{serviceMaintenanceNote}</p>
        </div>
      </ContentSection>

      <ContentSection
        content={{ id: "trabalhos", title: "Trabalhos selecionados" }}
      >
        <ul className="mt-10 lg:mt-14">
          {projects.map((project) => (
            <li
              className="max-w-2xl rounded-card border border-border bg-surface p-5 sm:p-6"
              key={project.slug}
            >
              <h3 className="max-w-[18ch] font-display text-title">
                <Link
                  className={textLinkClass}
                  href={projectDetailPath(project.slug)}
                >
                  {project.title}
                </Link>
              </h3>
              <p className="mt-2 text-content-muted">{project.summary}</p>
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection
        content={{
          id: "como-funciona",
          title: "Da primeira conversa à publicação",
        }}
      >
        <ol className="mt-10 grid list-decimal lg:mt-14 gap-x-10 gap-y-4 pl-5 marker:font-semibold sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map(({ title, description }) => (
            <li key={title}>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-body-sm text-content-muted">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </ContentSection>

      <ContentSection
        content={{
          id: "sobre",
          title: `Sobre ${professionalProfile.name}`,
          description: professionalProfile.introduction,
        }}
      >
        <Link className={`mt-8 ${textLinkClass}`} href="/portfolio">
          Ver portfólio profissional
        </Link>
      </ContentSection>

      <ContentSection
        content={{
          id: "contato",
          title: "Vamos conversar sobre seu site?",
          description:
            "Me conte sobre seu negócio e o que você precisa apresentar no site.",
        }}
        headingSize="display-xl"
      >
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <ActionLink {...commercialContact} variant="contact" />
          <Link className={textLinkClass} href="/contato">
            Veja como iniciar a conversa
          </Link>
        </div>
      </ContentSection>
    </>
  );
}
