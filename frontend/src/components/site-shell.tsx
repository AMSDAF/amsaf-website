import type { ReactNode } from "react";
import Link from "next/link";
import type { LinkContent } from "@/types/content";

interface SiteShellProps {
  brand: LinkContent;
  headerLinks: readonly LinkContent[];
  headerAction?: LinkContent;
  footerLinks: readonly LinkContent[];
  children: ReactNode;
}

function Navigation({
  label,
  links,
}: {
  label: string;
  links: readonly LinkContent[];
}) {
  return (
    <nav aria-label={label}>
      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-nav text-content-muted">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              className="inline-flex min-h-6 items-center rounded-control underline-offset-4 hover:text-content hover:underline active:underline"
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
  footerLinks,
  children,
}: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-10 focus:rounded-control focus:bg-accent focus:px-4 focus:py-3 focus:text-on-accent"
        href="#main-content"
      >
        Ir para o conteúdo
      </a>

      <header className="border-b border-border bg-canvas">
        <div className="site-container flex flex-col gap-4 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6 sm:py-5">
          <Link
            className="inline-flex min-h-6 min-w-0 items-center font-semibold tracking-tight text-content"
            href={brand.href}
          >
            {brand.label}
          </Link>

          <Navigation label="Navegação principal" links={headerLinks} />

          {headerAction && (
            <Link
              className="w-fit action-target border border-inverse bg-inverse px-4 text-on-inverse hover:bg-inverse-hover active:bg-inverse-active"
              href={headerAction.href}
            >
              {headerAction.label}
            </Link>
          )}
        </div>
      </header>

      <main className="flex-1" id="main-content" tabIndex={-1}>
        {children}
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="site-container py-8">
          <Navigation label="Navegação do rodapé" links={footerLinks} />
        </div>
      </footer>
    </div>
  );
}
