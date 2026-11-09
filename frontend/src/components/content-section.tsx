import type { ReactNode } from "react";
import type { ContentSection as ContentSectionContent } from "@/types/content";

interface ContentSectionProps {
  content: ContentSectionContent;
  children?: ReactNode;
  headingSize?: "heading" | "display-xl";
  headingLayout?: "stacked" | "split";
  label?: string;
}

export function ContentSection({
  content,
  children,
  headingSize = "heading",
  headingLayout = "stacked",
  label,
}: ContentSectionProps) {
  const split = headingLayout === "split" && content.description;

  return (
    <section
      aria-labelledby={`${content.id}-title`}
      className="border-b border-border bg-canvas last:border-b-0"
      id={content.id}
    >
      <div className="site-container py-section">
        <div
          className={
            split ? "lg:grid lg:grid-cols-12 lg:items-start" : undefined
          }
        >
          <div className={split ? "lg:col-span-5 lg:pr-6" : undefined}>
            {label && (
              <p className="mb-3 font-mono text-label text-content-muted">
                {label}
              </p>
            )}
            <h2
              className={`max-w-[18ch] font-display ${headingSize === "heading" ? "text-heading" : "text-display-xl"}`}
              id={`${content.id}-title`}
            >
              {content.title}
            </h2>
          </div>
          {content.description && (
            <p
              className={`mt-4 max-w-[38ch] text-lede text-content-muted ${split ? "lg:col-span-7 lg:mt-0" : "lg:mt-6"}`}
            >
              {content.description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
