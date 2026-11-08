export interface ImageReference {
  alt: string;
  src: string;
}

export interface LinkContent {
  href: string;
  label: string;
  external?: boolean;
}

export interface HeroContent {
  description: string;
  image?: ImageReference;
  title: string;
  actions?: LinkContent[];
}

export interface SiteContent {
  description: string;
  hero?: HeroContent;
  title: string;
}

export interface FooterContent {
  navigation: LinkContent[];
  cta: LinkContent;
}

export interface ContentSection {
  description: string;
  id: string;
  title: string;
}

export interface GalleryItem {
  description?: string;
  image: ImageReference;
  link?: LinkContent;
  title: string;
}
