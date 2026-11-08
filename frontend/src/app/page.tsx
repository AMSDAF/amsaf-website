import { ContentSection } from "@/components/content-section";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { siteGallery, siteHero, siteSections } from "@/config/site";

export default function Home() {
  return (
    <>
      <Hero content={siteHero} />
      {siteSections.map((section) => (
        <ContentSection content={section} key={section.id} />
      ))}
      <Gallery items={siteGallery} />
    </>
  );
}
