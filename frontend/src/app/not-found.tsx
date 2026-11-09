import type { Metadata } from "next";
import { CommercialLayout } from "@/app/public-layouts";
import { Hero } from "@/components/hero";

export const metadata: Metadata = {
  title: "Página não encontrada | AMSAF",
  description: "O endereço pode ter mudado ou estar incorreto.",
};

export default function NotFound() {
  return (
    <CommercialLayout>
      <Hero
        content={{
          title: "Página não encontrada",
          description: "O endereço pode ter mudado ou estar incorreto.",
          actions: [{ href: "/", label: "Voltar à página inicial" }],
        }}
      />
    </CommercialLayout>
  );
}
