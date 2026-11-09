import type { ReactNode } from "react";
import Link from "next/link";
import type { LinkContent } from "@/types/content";
import { HeaderDisclosure } from "./header-disclosure";

type SiteShellProps = {
  brand: LinkContent;
  footerLinks: readonly LinkContent[];
  children: ReactNode;
} & (
  | {
      headerLinks: readonly LinkContent[];
      headerAction?: LinkContent;
      returnLink?: never;
    }
  | { returnLink: LinkContent; headerLinks?: never; headerAction?: never }
);

function FooterNavigation({ links }: { links: readonly LinkContent[] }) {
  return (
    <nav aria-label="Navegação do rodapé">
      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-nav text-content-muted md:justify-end">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              className="inline-flex min-h-6 items-center rounded-control underline-offset-4 transition-colors duration-150 ease-[ease] hover:text-content hover:underline active:text-content active:underline"
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SiteShell({
  brand,
  headerLinks,
  headerAction,
  returnLink,
  footerLinks,
  children,
}: SiteShellProps) {
  const wordmark = (
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

  return (
    <div className="flex min-h-screen flex-col">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-10 focus:rounded-control focus:bg-accent focus:px-4 focus:py-3 focus:text-on-accent"
        href="#main-content"
      >
        Ir para o conteúdo
      </a>

      <header className="border-b border-border bg-canvas">
        {returnLink ? (
          <div className="site-container flex min-h-[calc(4rem-1px)] items-center justify-between gap-4 lg:min-h-[calc(4.5rem-1px)]">
            {wordmark}
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
            {wordmark}
          </HeaderDisclosure>
        )}
      </header>

      <main className="flex-1" id="main-content" tabIndex={-1}>
        {children}
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="site-container flex flex-col items-start gap-4 py-8 md:flex-row md:items-center md:justify-between">
          {wordmark}
          <FooterNavigation links={footerLinks} />
        </div>
      </footer>
    </div>
  );
}
