import type { Metadata } from "next";
import { ActionLink } from "@/components/action-link";
import { CommercialHeader } from "../../public-layouts";
import { HeroHeaderSurface } from "./hero-header-surface";
import { HeroScene } from "./hero-scene";
import "./hero.css";

export const metadata: Metadata = {
  title: "Experimento de abertura | AMSAF",
  description:
    "Sites que apresentam seu negócio com o profissionalismo que ele merece.",
  robots: { index: false, follow: false },
};

export default function HeroExperiment() {
  return (
    <div className="hero-experiment-page">
      <HeroHeaderSurface>
        <CommercialHeader />
      </HeroHeaderSurface>
      <HeroScene>
        <div className="content">
          <h1 className="headline font-display" id="hero-title">
            Seu negócio é único.{" "}
            <span className="block text-accent">
              Seu site também deveria ser.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-[38ch] text-lede text-content-muted">
            Sites que apresentam seu negócio com o profissionalismo que ele
            merece.
          </p>
          <div className="actions mt-7 flex flex-wrap justify-center gap-3">
            <ActionLink href="/#servicos" label="Ver serviços e preços" />
            <ActionLink
              href="/#trabalhos"
              label="Ver trabalhos"
              variant="secondary"
            />
          </div>
        </div>
      </HeroScene>
    </div>
  );
}
