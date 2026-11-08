import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/content-section";
import { Hero } from "@/components/hero";
import { professionalProfile } from "@/config/professional-profile";
import { projectDetailPath, projects } from "@/config/projects";

export const metadata: Metadata = {
  title: `${professionalProfile.name} | Portfólio profissional`,
  description: professionalProfile.introduction,
};

export default function PortfolioPage() {
  const { name, introduction, skills, experience, education } =
    professionalProfile;
  const background = [
    { title: "Experiência profissional", entries: experience },
    { title: "Formação", entries: education },
  ].filter(({ entries }) => entries.length > 0);

  return (
    <>
      <Hero
        content={{ title: name, description: introduction }}
        titleStyle="name"
      />

      <ContentSection
        content={{
          id: "habilidades",
          title: "Habilidades",
          description:
            skills.length === 0 ? "Detalhes em preparação." : undefined,
        }}
      >
        {skills.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                className="rounded-tag border border-rule bg-canvas px-3 py-1 font-mono text-label-sm"
                key={skill}
              >
                {skill}
              </li>
            ))}
          </ul>
        )}
      </ContentSection>

      <ContentSection
        content={{
          id: "experiencia",
          title: "Experiência e formação",
          description:
            background.length === 0 ? "Detalhes em preparação." : undefined,
        }}
      >
        {background.map(({ title, entries }) => (
          <div className="mt-5" key={title}>
            <h3 className="max-w-[18ch] font-display text-title">{title}</h3>
            <ul className="mt-2 divide-y divide-rule border-y border-rule text-content-muted">
              {entries.map((entry) => (
                <li className="py-3" key={entry}>
                  {entry}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ContentSection>

      <ContentSection
        content={{ id: "projetos", title: "Projetos de software" }}
      >
        <ul className="mt-5 divide-y divide-rule border-y border-rule">
          {projects.map(({ slug, title, summary }) => (
            <li className="py-4" key={slug}>
              <h3 className="max-w-[18ch] font-display text-title">
                <Link
                  className="inline-flex min-h-6 items-center rounded-control underline decoration-content-subtle underline-offset-4 hover:text-accent-text hover:decoration-accent-text active:text-accent-text active:decoration-accent-text"
                  href={projectDetailPath(slug)}
                >
                  {title}
                </Link>
              </h3>
              <p className="mt-2 text-content-muted">{summary}</p>
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection
        content={{
          id: "servicos-amsaf",
          title: "Procurando um site para o seu negócio?",
        }}
      >
        <Link
          className="mt-8 action-target border border-inverse bg-inverse px-4 text-on-inverse hover:bg-inverse-hover active:bg-inverse-active"
          href="/#servicos"
        >
          Conhecer os serviços da AMSAF
        </Link>
      </ContentSection>
    </>
  );
}
