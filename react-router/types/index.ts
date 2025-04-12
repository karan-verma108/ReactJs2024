export interface NavDataType {
  name: string;
  path: string;
}

export interface FooterLinksType {
  name: string;
  href: string;
}

export interface FooterDataType {
  title: string;
  links: FooterLinksType[];
}
