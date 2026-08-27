export interface BrandConfig {
  name: string;
  href?: string;
}

export interface SectionConfig {
  id: string;
  label: string;
  still: string;
  stillMobile?: string;
  clip?: string;
  clipMobile?: string;
  accent?: string;
  scroll?: number;
  linger?: number;
  eyebrow?: string;
  title?: string;
  body?: string;
  tags?: string[];
  cta?: {
    primary?: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
}

export interface LetsScrollConfig {
  brand?: BrandConfig;
  diveScroll?: number;
  connScroll?: number;
  hint?: string;
  nav?: boolean;
  atmosphere?: boolean;
  sections: SectionConfig[];
  connectors?: (string | null)[];
  connectorsMobile?: (string | null)[];
  crossfade?: number;
}

export function mountLetsScroll(container: HTMLElement, config: LetsScrollConfig): void;
