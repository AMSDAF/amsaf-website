import type { ContentSection as ContentSectionContent } from "@/types/content";

interface ContentSectionProps {
  content: ContentSectionContent;
}

export function ContentSection({ content }: ContentSectionProps) {
  return (
    <section
      aria-labelledby={`${content.id}-title`}
      className="border-b border-border bg-surface last:border-b-0"
      id={content.id}
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="max-w-2xl">
          <h2
            className="text-2xl font-semibold tracking-tight text-content sm:text-3xl"
            id={`${content.id}-title`}
          >
            {content.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-content-muted">
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
}
