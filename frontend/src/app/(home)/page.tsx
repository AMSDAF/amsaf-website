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

const textLinkClass =
  "inline-flex min-h-6 items-center rounded-control font-medium underline decoration-content-subtle underline-offset-4 hover:text-accent-text hover:decoration-accent-text active:text-accent-text active:decoration-accent-text";

export default function Home() {
  return (
    <>
      <Hero
        content={{
          title: (
            <>
              Um site para apresentar{" "}
              <span className="text-accent">seu trabalho</span>
            </>
          ),
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
        <figure>
          <div className="overflow-hidden rounded-card border border-border bg-surface">
            <div
              aria-hidden="true"
              className="flex items-center gap-3 border-b border-rule px-3 py-2"
            >
              <div className="flex gap-1">
                <span className="size-1.5 rounded-full bg-content-subtle" />
                <span className="size-1.5 rounded-full bg-content-subtle" />
                <span className="size-1.5 rounded-full bg-content-subtle" />
              </div>
              <span className="flex-1 rounded-control bg-canvas px-3 py-1 font-mono text-label-sm text-content-muted">
                estudio.example
              </span>
            </div>
            <div className="space-y-3 bg-[#f1ece6] p-5 text-[#282119] sm:p-6">
              <p className="text-body-sm font-semibold">
                Estúdio de fotografia
              </p>
              <p className="text-body-sm text-[#655a4e]">
                Portfólio de ensaios
              </p>
              <p className="font-display text-title">Retratos em luz natural</p>
              <div aria-hidden="true" className="mt-5 grid grid-cols-3 gap-2">
                <div className="aspect-[3/2] rounded-tag bg-[#d8cec0]" />
                <div className="aspect-[3/2] rounded-tag bg-[#e2d8cb]" />
                <div className="aspect-[3/2] rounded-tag bg-[#d8cec0]" />
              </div>
            </div>
          </div>
          <figcaption className="mt-3 text-body-sm text-content-muted">
            Exemplo ilustrativo de site
          </figcaption>
        </figure>
      </Hero>

      <ContentSection
        content={{
          id: "presenca-digital",
          title: "Sua presença digital em um endereço próprio",
          description:
            "Um site complementa suas redes sociais e reúne o que você faz, seus serviços e seus canais de contato.",
        }}
        headingLayout="beside-content"
      >
        <h3
          className="max-w-[18ch] font-display text-title"
          id="checklist-title"
        >
          O que vale conferir no seu site
        </h3>
        <ul
          aria-labelledby="checklist-title"
          className="mt-3 space-y-2 text-content-muted"
          role="list"
        >
          {presenceChecklist.map((item) => (
            <li
              className="rounded-card border border-border bg-surface px-4 py-3"
              key={item}
            >
              {item}
            </li>
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
        <ul
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:gap-5 xl:grid-cols-4"
          role="list"
        >
          {services.map((service) => (
            <li
              className="flex flex-col rounded-card border border-border bg-surface p-5 sm:p-6"
              key={service.route}
            >
              <h3 className="max-w-[18ch] font-display text-title">
                {service.label}
              </h3>
              <p className="mt-3 text-body text-content-muted">
                {service.summary}
              </p>
              <ol className="my-4" role="list">
                {service.baseScope.map((item, index) => (
                  <li
                    className="flex items-baseline gap-3 border-t border-rule py-3 text-body text-content"
                    key={item}
                  >
                    <span
                      aria-hidden="true"
                      className="shrink-0 font-mono text-label text-content-subtle"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
              {service.scopeNote && (
                <p className="mb-4 text-body-sm text-content-muted">
                  {service.scopeNote}
                </p>
              )}
              <div className="mt-auto border-t border-dashed border-rule pt-4">
                <p className="text-body-sm text-content-muted">A partir de</p>
                <p className="mt-2 font-display text-price wrap-anywhere proportional-nums xl:[font-size:2.625rem]">
                  {formatBrl(service.startingPriceInCentavos)}
                </p>
                <p className="mt-2 text-body-sm text-content-muted">
                  Manutenção opcional de{" "}
                  {formatBrl(service.monthlyMaintenanceInCentavos)} por mês
                </p>
                <div className="mt-4 flex flex-wrap gap-3 *:grow">
                  <ActionLink
                    aria-label={`Ver detalhes de ${service.label}`}
                    href={service.route}
                    label="Ver detalhes"
                    variant="secondary"
                  />
                  <ActionLink {...service.contact} variant="contact" />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-card border border-border bg-surface p-5 sm:p-6 lg:mt-5 lg:grid lg:grid-cols-12 lg:items-baseline">
          <h3 className="max-w-[18ch] font-display text-title lg:col-span-5">
            Depois da publicação
          </h3>
          <p className="mt-3 max-w-[65ch] text-body-sm text-content-muted lg:col-span-7 lg:mt-0">
            {serviceMaintenanceNote}
          </p>
        </div>
      </ContentSection>

      <ContentSection
        content={{ id: "trabalhos", title: "Trabalhos selecionados" }}
      >
        <ul className="mt-10 space-y-4 lg:mt-14" role="list">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 rounded-card border border-border bg-surface p-5 transition-[color,background-color,border-color] duration-150 ease-[ease] hover:border-border-strong hover:bg-surface-muted active:bg-surface-muted sm:p-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)_auto] lg:gap-x-6"
                href={projectDetailPath(project.slug)}
              >
                <h3 className="max-w-[18ch] font-display text-title group-hover:text-accent-text group-active:text-accent-text">
                  {project.title}
                </h3>
                <p className="col-start-1 row-start-2 text-content-muted lg:col-start-2 lg:row-start-1">
                  {project.summary}
                </p>
                <svg
                  aria-hidden="true"
                  className="col-start-2 row-span-2 row-start-1 size-5 text-accent lg:col-start-3 lg:row-span-1"
                  fill="none"
                  focusable="false"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 12h15m-6-6 6 6-6 6" />
                </svg>
              </Link>
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
        <ol
          className="mt-10 grid gap-x-5 border-b border-rule sm:grid-cols-2 lg:mt-14 lg:grid-cols-5 lg:gap-0"
          role="list"
        >
          {processSteps.map(({ title, description }, index) => (
            <li
              className="border-t border-rule py-5 lg:px-4 lg:not-first:border-l lg:first:pl-0 lg:last:pr-0"
              key={title}
            >
              <span
                aria-hidden="true"
                className="font-display text-numeral text-content-subtle"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-body font-semibold">{title}</h3>
              <p className="mt-2 text-body text-content-muted">{description}</p>
            </li>
          ))}
        </ol>
      </ContentSection>

      <ContentSection
        content={{
          id: "sobre",
          title: `Sobre ${professionalProfile.name}`,
        }}
        headingLayout="beside-content"
      >
        <p className="max-w-[38ch] text-lede text-content-muted">
          {professionalProfile.introduction}
        </p>
        <div className="mt-8">
          <ActionLink
            href="/portfolio"
            label="Ver portfólio profissional"
            variant="secondary"
          />
        </div>
      </ContentSection>

      <ContentSection
        content={{
          id: "contato",
          title: "Vamos conversar sobre seu site?",
          description:
            "Me conte sobre seu negócio e o que você precisa apresentar no site.",
        }}
        headingLayout="centered"
        headingSize="display-xl"
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-center">
          <ActionLink {...commercialContact} variant="contact" />
          <Link className={textLinkClass} href="/contato">
            Veja como iniciar a conversa
          </Link>
        </div>
      </ContentSection>
    </>
  );
}
