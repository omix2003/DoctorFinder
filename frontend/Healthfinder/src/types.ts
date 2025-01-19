export interface TeamMember {
  image: string;
  name: string;
  role: string;
  description: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

export interface Testimonial {
  image: string;
  quote: string;
  content: string;
  name: string;
  role: string;
}

export interface Service {
  image: string;
  title: string;
  description: string;
}

export interface Statistic {
  value: string;
  unit: string;
  label: string;
}

export interface Partner {
  image: string;
  alt: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}
