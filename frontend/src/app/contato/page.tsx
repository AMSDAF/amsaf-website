import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { commercialContact } from "@/config/contact";

export const metadata: Metadata = {
  title: "Contato | AMSAF",
  description:
    "Converse com a AMSAF pelo WhatsApp sobre o site que você precisa.",
};

export default function ContactPage() {
  return (
    <Hero
      content={{
        title: "Vamos conversar sobre seu site?",
        description:
          "Na sua mensagem, me conte sobre seu negócio, o que você precisa apresentar no site e como gostaria que seus clientes entrassem em contato.",
        actions: [commercialContact],
      }}
    />
  );
}
