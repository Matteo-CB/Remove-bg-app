export type navTypes = {
  name: string;
  link: string;
  id: string;
}[];

type NavPagesType = { name: string; href: string }[];

export type NavType = {
  name: string;
  footer: string;
  href: string;
  pages: NavPagesType;
  isCollapsed: boolean;
  id: number;
  inNavbar: boolean;
}[];
export type cardHomeHeaderDataType = {
  title: string;
  text: string;
  icon: string;
  href: string;
}[];

export type tutorialTypes = string[];
export type whyUsTypes = string[];
