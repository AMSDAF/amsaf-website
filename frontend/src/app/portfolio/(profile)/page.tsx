import type { Metadata } from "next";
import Link from "next/link";
import { ActionLink } from "@/components/action-link";
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
        }}
        headingLayout="editorial"
      >
        {skills.length > 0 ? (
          <ul className="flex flex-wrap gap-2" role="list">
            {skills.map((skill) => (
              <li
                className="rounded-tag border border-rule bg-canvas px-3 py-1 font-mono text-label-sm"
                key={skill}
              >
                {skill}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-content-subtle">Detalhes em preparação.</p>
        )}
      </ContentSection>

      <ContentSection
        content={{
          id: "experiencia",
          title: "Experiência e formação",
        }}
        headingLayout="editorial"
      >
        {background.length > 0 ? (
          <div className="space-y-5">
            {background.map(({ title, entries }) => (
              <div key={title}>
                <h3 className="max-w-[18ch] font-display text-title">
                  {title}
                </h3>
                <ul
                  className="mt-2 divide-y divide-rule border-y border-rule text-content-muted"
                  role="list"
                >
                  {entries.map((entry) => (
                    <li className="py-3" key={entry}>
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-content-subtle">Detalhes em preparação.</p>
        )}
      </ContentSection>

      <ContentSection
        content={{ id: "projetos", title: "Projetos de software" }}
        headingLayout="editorial"
      >
        <ul className="divide-y divide-rule border-y border-rule" role="list">
          {projects.map(({ slug, title, summary }) => (
            <li className="py-3" key={slug}>
              <h3 className="font-display text-title">
                <Link
                  className="flex min-h-6 items-center justify-between gap-4 rounded-control underline decoration-content-subtle underline-offset-4 hover:text-accent-text hover:decoration-accent-text active:text-accent-text active:decoration-accent-text"
                  href={projectDetailPath(slug)}
                >
                  <span className="max-w-[18ch]">{title}</span>
                  <svg
                    aria-hidden="true"
                    className="size-5 shrink-0 text-accent"
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
              </h3>
              <p className="mt-2 text-body text-content-muted">{summary}</p>
            </li>
          ))}
        </ul>
      </ContentSection>

      <section
        aria-labelledby="servicos-amsaf-title"
        className="bg-surface"
        id="servicos-amsaf"
      >
        <div className="site-container flex flex-col items-start gap-8 py-10 lg:flex-row lg:items-center lg:justify-between lg:py-14">
          <h2
            className="max-w-[18ch] font-display text-heading"
            id="servicos-amsaf-title"
          >
            Procurando um site para o seu negócio?
          </h2>
          <ActionLink href="/#servicos" label="Conhecer os serviços da AMSAF" />
        </div>
      </section>
    </>
  );
}
