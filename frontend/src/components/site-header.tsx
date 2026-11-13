import Link from "next/link";
import type { LinkContent } from "@/types/content";
import { HeaderDisclosure } from "./header-disclosure";

export type SiteHeaderProps = {
  brand: LinkContent;
} & (
  | {
      headerLinks: readonly LinkContent[];
      headerAction?: LinkContent;
      returnLink?: never;
    }
  | { returnLink: LinkContent; headerLinks?: never; headerAction?: never }
);

export function SiteWordmark({ brand }: { brand: LinkContent }) {
  return (
    <Link
      aria-label={brand.label}
      className="inline-flex min-h-11 min-w-11 items-center rounded-control font-display text-wordmark text-content"
      href={brand.href}
    >
      <span>
        amsaf<span className="text-accent">.</span>
      </span>
    </Link>
  );
}

export function SiteHeader({
  brand,
  headerLinks,
  headerAction,
  returnLink,
}: SiteHeaderProps) {
  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-10 focus:rounded-control focus:bg-accent focus:px-4 focus:py-3 focus:text-on-accent"
        href="#main-content"
      >
        Ir para o conteúdo
      </a>
      <header className="border-b border-border bg-canvas">
        {returnLink ? (
          <div className="site-container flex min-h-[calc(4rem-1px)] items-center justify-between gap-4 lg:min-h-[calc(4.5rem-1px)]">
            <SiteWordmark brand={brand} />
            <nav aria-label="Navegação principal">
              <Link
                className="inline-flex min-h-11 items-center gap-2 rounded-control text-nav text-content-muted underline-offset-4 hover:text-content hover:underline active:text-content"
                href={returnLink.href}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="size-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5m7 7-7-7 7-7" />
                </svg>
                {returnLink.label}
              </Link>
            </nav>
          </div>
        ) : (
          <HeaderDisclosure links={headerLinks} action={headerAction}>
            <SiteWordmark brand={brand} />
          </HeaderDisclosure>
        )}
      </header>
    </>
  );
}
