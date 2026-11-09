import type { ReactNode } from "react";
import type { ContentSection as ContentSectionContent } from "@/types/content";

interface ContentSectionProps {
  content: ContentSectionContent;
  children?: ReactNode;
  headingSize?: "heading" | "display-xl";
  headingLayout?:
    "stacked" | "split" | "beside-content" | "centered" | "editorial";
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
  const besideContent = headingLayout === "beside-content";
  const centered = headingLayout === "centered";
  const editorial = headingLayout === "editorial";

  return (
    <section
      aria-labelledby={`${content.id}-title`}
      className={`border-b bg-canvas last:border-b-0 ${editorial ? "border-rule" : "border-border"}`}
      id={content.id}
    >
      <div
        className={`site-container ${editorial ? "grid gap-4 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:items-baseline md:gap-6 lg:py-14" : "py-section"} ${besideContent ? "lg:grid lg:grid-cols-12 lg:items-start" : ""}`}
      >
        <div
          className={
            split
              ? "lg:grid lg:grid-cols-12 lg:items-start"
              : besideContent
                ? "lg:col-span-5 lg:pr-6"
                : centered
                  ? "text-center"
                  : undefined
          }
        >
          <div className={split ? "lg:col-span-5 lg:pr-6" : undefined}>
            {label && (
              <p className="mb-3 font-mono text-label text-content-muted">
                {label}
              </p>
            )}
            <h2
              className={
                editorial
                  ? "font-mono text-label text-content-muted"
                  : `max-w-[18ch] font-display ${headingSize === "heading" ? "text-heading" : "text-display-xl"}${centered ? " mx-auto" : ""}`
              }
              id={`${content.id}-title`}
            >
              {content.title}
            </h2>
          </div>
          {content.description && (
            <p
              className={`mt-4 max-w-[38ch] text-lede text-content-muted ${split ? "lg:col-span-7 lg:mt-0" : "lg:mt-6"}${centered ? " mx-auto" : ""}`}
            >
              {content.description}
            </p>
          )}
        </div>
        {besideContent ? (
          <div className="mt-10 lg:col-span-7 lg:mt-0">{children}</div>
        ) : (
          children
        )}
      </div>
    </section>
  );
}
