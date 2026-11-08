import Image from "next/image";
import Link from "next/link";
import type { GalleryItem } from "@/types/content";

interface CardProps {
  content: GalleryItem;
}

export function Card({ content }: CardProps) {
  const cardContent = (
    <>
      <Image
        alt={content.image.alt}
        className="aspect-[4/3] w-full object-cover"
        height={360}
        src={content.image.src}
        width={480}
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-content">{content.title}</h3>
        {content.description ? (
          <p className="mt-2 text-sm leading-6 text-content-muted">
            {content.description}
          </p>
        ) : null}
        {content.link ? (
          <span className="mt-4 inline-flex text-sm font-medium text-content underline underline-offset-4">
            {content.link.label}
          </span>
        ) : null}
      </div>
    </>
  );

  return content.link ? (
    <Link
      className="block overflow-hidden rounded-sm border border-border bg-canvas transition-transform hover:border-content-muted focus-visible:outline active:translate-y-px"
      href={content.link.href}
    >
      {cardContent}
    </Link>
  ) : (
    <article className="overflow-hidden rounded-sm border border-border bg-canvas">
      {cardContent}
    </article>
  );
}
