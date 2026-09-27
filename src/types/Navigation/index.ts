export interface NavItem {
  label: string;
  href: string;
}

export interface NavData {
  name: string;
  position: string;
  homeHref: string;
  items: NavItem[];
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterData {
  name: string;
  tagline: string;
  routes: FooterLink[];
  socials: FooterLink[];
  year: number;
  note: string;
}
