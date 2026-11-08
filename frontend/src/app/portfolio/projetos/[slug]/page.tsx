import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
      <Hero content={{ title: project.title, description: project.summary }} />

      <ContentSection
        content={{
          id: "sobre-o-projeto",
          title: "Sobre o projeto",
          description: project.detail,
        }}
      >
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
      </ContentSection>

      {sections.map(({ id, title, items }) => (
        <ContentSection content={{ id, title }} key={id}>
          <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-content-muted">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ContentSection>
      ))}

      {project.links.length > 0 && (
        <ContentSection content={{ id: "links", title: "Links do projeto" }}>
          <ul className="mt-4 space-y-2">
            {project.links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  className="rounded-sm underline underline-offset-4"
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </ContentSection>
      )}

      <ContentSection
        content={{ id: "portfolio", title: "Portfólio profissional" }}
      >
        <Link
          className="mt-4 inline-flex rounded-sm border border-content bg-content px-4 py-2 text-sm font-medium text-canvas hover:bg-content-muted"
          href="/portfolio#projetos"
        >
          Voltar aos projetos
        </Link>
      </ContentSection>
    </>
  );
}
