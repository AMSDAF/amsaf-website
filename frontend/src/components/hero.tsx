import Link from "next/link";
import type { ReactNode } from "react";
import type { HeroContent } from "@/types/content";

interface HeroProps {
  content: HeroContent;
  children?: ReactNode;
}

export function Hero({ content, children }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="border-b border-border bg-canvas"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:flex-row lg:items-center lg:[&>*]:min-w-0 lg:[&>*]:flex-1">
        <div className="max-w-3xl">
          <h1
            className="text-4xl font-semibold tracking-tight text-content sm:text-6xl"
            id="hero-title"
          >
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-content-muted">
            {content.description}
          </p>

          {content.actions && content.actions.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-4">
              {content.actions.map((action) => (
                <Link
                  className="inline-flex rounded-sm border border-content bg-content px-4 py-2 text-sm font-medium text-canvas transition-transform hover:bg-content-muted focus-visible:outline active:translate-y-px"
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
