import type { GalleryItem } from "@/types/content";
import { Card } from "@/components/card";

interface GalleryProps {
  items: GalleryItem[];
}

export function Gallery({ items }: GalleryProps) {
  return (
    <section aria-labelledby="gallery-title" className="bg-canvas" id="gallery">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="max-w-2xl">
          <h2
            className="text-2xl font-semibold tracking-tight text-content sm:text-3xl"
            id="gallery-title"
          >
            Exemplos de composição
          </h2>
          <p className="mt-4 text-base leading-7 text-content-muted">
            Itens neutros demonstram como mídia, descrição e ação podem ser
            apresentados sem depender de conteúdo de marca.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card content={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
