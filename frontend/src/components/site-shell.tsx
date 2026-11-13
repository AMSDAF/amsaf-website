import type { ReactNode } from "react";
import Link from "next/link";
import type { LinkContent } from "@/types/content";
import { SiteHeader, SiteWordmark, type SiteHeaderProps } from "./site-header";

type SiteShellProps = SiteHeaderProps & {
  footerLinks: readonly LinkContent[];
  children: ReactNode;
};

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
  footerLinks,
  children,
  ...header
}: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader {...header} />

      <main className="flex-1" id="main-content" tabIndex={-1}>
        {children}
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="site-container flex flex-col items-start gap-4 py-8 md:flex-row md:items-center md:justify-between">
          <SiteWordmark brand={header.brand} />
          <FooterNavigation links={footerLinks} />
        </div>
      </footer>
    </div>
  );
}
