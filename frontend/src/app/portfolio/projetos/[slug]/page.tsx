import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ActionLink } from "@/components/action-link";
import { ContentSection } from "@/components/content-section";
import { Hero } from "@/components/hero";
import { findProjectBySlug, projects } from "@/config/projects";

type ProjectPageProps = PageProps<"/portfolio/projetos/[slug]">;

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

async function getProject(params: ProjectPageProps["params"]) {
  const { slug } = await params;
  const project = findProjectBySlug(slug);

  if (!project) notFound();

  return project;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { title, summary } = await getProject(params);
  return { title: `${title} | Portfólio AMSAF`, description: summary };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params);
  const sections = [
    { id: "tecnologias", title: "Tecnologias", items: project.technologies },
    { id: "decisoes", title: "Decisões do projeto", items: project.decisions },
    { id: "resultados", title: "Resultados", items: project.results },
  ].filter(({ items }) => items.length > 0);

  return (
    <>
      <Hero
        content={{ title: project.title, description: project.summary }}
        titleStyle="detail"
      />

      <ContentSection
        content={{
          id: "sobre-o-projeto",
          title: "Sobre o projeto",
        }}
        headingLayout="editorial"
      >
        <div>
          <p className="text-content-muted">{project.detail}</p>
          {project.images.map(({ src, alt }) => (
            <div className="relative mt-6 aspect-video max-w-3xl" key={src}>
              <Image
                alt={alt}
                className="object-contain"
                fill
                src={src}
                unoptimized
              />
            </div>
          ))}
        </div>
      </ContentSection>

      {sections.map(({ id, title, items }) => (
        <ContentSection
          content={{ id, title }}
          headingLayout="editorial"
          key={id}
        >
          <ul className="max-w-[65ch] list-disc divide-y divide-rule border-y border-rule pl-5 text-content-muted">
            {items.map((item) => (
              <li className="py-3" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </ContentSection>
      ))}

      {project.links.length > 0 && (
        <ContentSection
          content={{ id: "links", title: "Links do projeto" }}
          headingLayout="editorial"
        >
          <ul className="divide-y divide-rule border-y border-rule" role="list">
            {project.links.map(({ href, label }) => (
              <li className="py-3" key={href}>
                <Link
                  className="inline-flex min-h-6 items-center rounded-control wrap-anywhere underline decoration-content-subtle underline-offset-4 hover:text-accent-text hover:decoration-accent-text active:text-accent-text active:decoration-accent-text"
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </ContentSection>
      )}

      <section
        aria-labelledby="portfolio-title"
        className="bg-surface"
        id="portfolio"
      >
        <div className="site-container flex flex-col items-start gap-8 py-10 lg:flex-row lg:items-center lg:justify-between lg:py-14">
          <h2
            className="max-w-[18ch] font-display text-heading"
            id="portfolio-title"
          >
            Portfólio profissional
          </h2>
          <ActionLink href="/portfolio#projetos" label="Voltar aos projetos" />
        </div>
      </section>
    </>
  );
}
