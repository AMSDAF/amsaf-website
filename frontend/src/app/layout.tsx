import type { Metadata } from "next";
import localFont from "next/font/local";
import { siteSeo } from "@/config/seo";
import { siteContent } from "@/config/site";
import "./globals.css";

const bricolage = localFont({
  src: "./fonts/bricolage-grotesque-latin-wght.woff2",
  weight: "200 800",
  display: "swap",
  variable: "--font-bricolage",
});

const instrument = localFont({
  src: "./fonts/instrument-sans-latin-wght.woff2",
  weight: "400 700",
  display: "swap",
  variable: "--font-instrument",
});

const jetbrains = localFont({
  src: "./fonts/jetbrains-mono-latin-wght.woff2",
  weight: "100 800",
  display: "swap",
  preload: false,
  variable: "--font-jetbrains",
});

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
    <html
      className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable}`}
      lang="pt-BR"
    >
      <body>{children}</body>
    </html>
  );
}
