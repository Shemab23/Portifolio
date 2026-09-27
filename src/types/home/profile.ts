export interface CTA {
  text: string;
  link: string;
}

export interface HeroContent {
  title: string;
  headline: string;
  description: string;
  image: string;
  cta: CTA;
}

export interface Card {
  image?: string;
  name: string;
  service: string;
  description: string;
  year: string;
  code?: string;
  preview?: string;
}

export interface MoreLink {
  text: string;
  link: string;
}

export interface CardsSection {
  title: string;
  cards: Card[];
  more: MoreLink;
}

export interface About {
  title: string;
  brief: string;
  cta: CTA;
}

export interface WHatIDO {
  title: string;
  includes: string[];
}

export interface Contact {
  Hook: string;
  state: string;
  cta: CTA;
}
