import type { Metadata } from "next";
import { GalaxyLab } from "./galaxy-lab";

export const metadata: Metadata = {
  title: "Laboratório de galáxias | AMSAF",
  description: "Experimento visual de galáxias espirais em Canvas 2D.",
  robots: { index: false, follow: false },
};

export default function GalaxyExperiment() {
  return (
    <main className="site-container py-10 lg:py-14">
      <header className="mb-7 space-y-2">
        <p className="font-mono text-label text-accent-text">
          AMSAF / Experimentos
        </p>
        <h1 className="font-display text-heading">Laboratório de galáxias</h1>
        <p className="text-content-muted">
          Ajuste a espiral e exporte a composição para revisar o fundo da
          abertura.
        </p>
      </header>
      <GalaxyLab />
    </main>
  );
}
