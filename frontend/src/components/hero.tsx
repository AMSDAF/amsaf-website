import type { ReactNode } from "react";
import type { HeroContent, LinkContent } from "@/types/content";
import { ActionLink, type ActionVariant } from "./action-link";

const titleStyles = {
  default: "max-w-[12ch] text-display-xl",
  contact: "max-w-[18ch] text-display-xl",
  name: "max-w-[8ch] text-display-name",
  detail: "max-w-[18ch] text-display-lg",
};

interface HeroProps {
  content: Omit<HeroContent, "actions" | "title"> & {
    title: ReactNode;
    actions?: readonly (LinkContent & { variant?: ActionVariant })[];
  };
  children?: ReactNode;
  titleStyle?: keyof typeof titleStyles;
}

export function Hero({ content, children, titleStyle = "default" }: HeroProps) {
  const centered = titleStyle === "contact";
  const splitIntroduction = titleStyle === "name" || titleStyle === "detail";

  return (
    <section
      aria-labelledby="hero-title"
      className={centered ? "bg-canvas" : "border-b border-border bg-canvas"}
    >
      <div className="site-container flex flex-col gap-10 py-hero lg:flex-row lg:items-center lg:[&>*]:min-w-0 lg:[&>*]:flex-1">
        <div
          className={
            centered
              ? "text-center"
              : splitIntroduction
                ? "lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-end lg:gap-x-12"
                : "max-w-3xl"
          }
        >
          <h1
            className={`font-display ${titleStyles[titleStyle]}${centered ? " mx-auto" : ""}`}
            id="hero-title"
          >
            {content.title}
          </h1>
          <p
            className={`mt-4 max-w-[38ch] text-lede text-content-muted ${splitIntroduction ? "lg:mt-0" : "lg:mt-6"}${centered ? " mx-auto" : ""}`}
          >
            {content.description}
          </p>

          {content.actions && content.actions.length > 0 ? (
            <div
              className={`mt-8 flex flex-wrap gap-3${centered ? " justify-center" : ""}`}
            >
              {content.actions.map((action) => (
                <ActionLink key={action.href} {...action} />
              ))}
            </div>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
