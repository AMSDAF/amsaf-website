import type { ReactNode } from "react";
import Link from "next/link";
import { siteContent, siteFooter, siteNavigation } from "@/config/site";

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border bg-canvas">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-5">
          <Link
            className="min-w-0 font-semibold tracking-tight text-content focus-visible:outline"
            href="/"
          >
            {siteContent.title}
          </Link>

          <nav aria-label="Navegação principal" className="w-full sm:w-auto">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-content-muted sm:justify-end">
              {siteNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="rounded-sm underline-offset-4 hover:text-content hover:underline active:underline"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1" id="main-content">
        {children}
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div>
              <p className="font-semibold text-content">{siteContent.title}</p>
              <nav aria-label="Navegação secundária" className="mt-2">
                <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-content-muted">
                  {siteFooter.navigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        className="rounded-sm underline-offset-4 hover:text-content hover:underline active:underline"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <Link
              className="inline-flex w-fit rounded-sm border border-content bg-content px-4 py-2 text-sm font-medium text-canvas transition-transform hover:bg-content-muted focus-visible:outline active:translate-y-px"
              href={siteFooter.cta.href}
            >
              {siteFooter.cta.label}
            </Link>
          </div>

          <p className="text-sm text-content-muted">
            {siteContent.description}
          </p>
        </div>
      </footer>
    </div>
  );
}
