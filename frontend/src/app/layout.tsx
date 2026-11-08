import type { Metadata } from "next";
import { siteSeo } from "@/config/seo";
import { siteContent } from "@/config/site";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: siteContent.title,
  description: siteContent.description,
  robots: {
    index: siteSeo.indexingEnabled,
    follow: siteSeo.indexingEnabled,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
