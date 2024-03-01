export interface Contact {
  label: string;
  url: string;
  image: string;
  isGmail?: boolean;
}

export interface SectionLink {
  label: string;
  reference: string;
}

export interface Profile {
  name: string;
  role: string;
  description: string;
}
