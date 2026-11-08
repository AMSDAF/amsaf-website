import type { ReactNode } from "react";
import type { ContentSection as ContentSectionContent } from "@/types/content";

interface ContentSectionProps {
  content: ContentSectionContent;
  children?: ReactNode;
  headingSize?: "heading" | "display-xl";
}

export function ContentSection({
  content,
  children,
  headingSize = "heading",
}: ContentSectionProps) {
  return (
    <section
      aria-labelledby={`${content.id}-title`}
      className="border-b border-border bg-canvas last:border-b-0"
      id={content.id}
    >
      <div className="site-container py-section">
        <div>
          <h2
            className={`max-w-[18ch] font-display ${headingSize === "heading" ? "text-heading" : "text-display-xl"}`}
            id={`${content.id}-title`}
          >
            {content.title}
          </h2>
          {content.description && (
            <p className="mt-4 max-w-[38ch] text-lede text-content-muted lg:mt-6">
              {content.description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
