import Link from "next/link";
import type { ReactNode } from "react";
import type { HeroContent } from "@/types/content";

const titleStyles = {
  default: "max-w-[12ch] text-display-xl",
  contact: "max-w-[18ch] text-display-xl",
  name: "max-w-[12ch] text-display-name",
  detail: "max-w-[18ch] text-display-lg",
};

interface HeroProps {
  content: HeroContent;
  children?: ReactNode;
  titleStyle?: keyof typeof titleStyles;
}

export function Hero({ content, children, titleStyle = "default" }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="border-b border-border bg-canvas"
    >
      <div className="site-container flex flex-col gap-10 py-hero lg:flex-row lg:items-center lg:[&>*]:min-w-0 lg:[&>*]:flex-1">
        <div className="max-w-3xl">
          <h1
            className={`font-display ${titleStyles[titleStyle]}`}
            id="hero-title"
          >
            {content.title}
          </h1>
          <p className="mt-4 max-w-[38ch] text-lede text-content-muted lg:mt-6">
            {content.description}
          </p>

          {content.actions && content.actions.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {content.actions.map((action) => (
                <Link
                  className="action-target border border-inverse bg-inverse px-4 text-on-inverse hover:bg-inverse-hover active:bg-inverse-active"
                  href={action.href}
                  key={action.href}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
