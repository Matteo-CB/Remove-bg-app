import { NavType, cardHomeHeaderDataType, navTypes, tutorialTypes, whyUsTypes } from "./type";

// Header

export const nav: navTypes = [
  {
    name: "Accueil",
    link: "#home",
    id: "home",
  },
  {
    name: "À propos",
    link: "#about",
    id: "about",
  },
  {
    name: "Contact",
    link: "#contact",
    id: "contact",
  },
];

// Home
export const questionTutorial: string = "Comment ça marche ?";

export const tutorial: tutorialTypes = [
  "Choisissez votre image",
  "Attendez quelques secondes",
  "Téléchargez votre image",
];

export const questionWhyUs: string = "Pourquoi nous choisir ?";

export const whyUs: whyUsTypes = [
  "Rapide",
  "Gratuit",
  "Sans inscription",
  "Données sécurisées",
];

export const textHome: string = `Bienvenue sur notre site spécialisé dans la suppression gratuite de fond d'image ! Vous en avez marre des arrière-plans
          indésirables qui gâchent vos photos ? Ne vous inquiétez plus, nous
          sommes là pour vous aider !`;

export const titleHome: string = `Supprimez rapidement le fond de vos images !`;

export const navFooter: NavType = [
  {
    name: "Accueil",
    footer: "Accueil",
    href: "/#home",
    isCollapsed: true,
    pages: [
      { name: "Home", href: "/#home" },
      { name: "Newsletter", href: "/#newsletter" },
      { name: "Nos réseaux", href: "/#social" },
      { name: "Questions", href: "/#questions" },
      { name: "Tarifs", href: "/#pricing" },
      { name: "Contact", href: "/#contact" },
    ],
    id: 0,
    inNavbar: true,
  },
  {
    name: "Services",
    footer: "Nos Services",
    href: "https://dlkdigitalagency.com/services",
    isCollapsed: true,
    pages: [
      { name: "E-commerce", href: "/services#ecommerce" },
      { name: "Site vitrine", href: "/services#vitrine" },
      { name: "Blog", href: "/services#blog" },
      { name: "Référencement", href: "/services#seo" },
      { name: "Refonte", href: "/services#refonte" },
      { name: "Maintenance", href: "/services#maintenance" },
      { name: "App mobile", href: "/services#app" },
    ],
    id: 1,
    inNavbar: true,
  },
  {
    name: "À propos",
    footer: "À propos de nous",
    href: "https://dlkdigitalagency.com/about",
    isCollapsed: false,
    pages: [{ name: "À propos de nous", href: "/about" }],
    id: 2,
    inNavbar: true,
  },

  {
    name: "Blog",
    footer: "Notre Blog",
    href: "https://dlkdigitalagency.com/blogs",
    isCollapsed: false,
    pages: [{ name: "Nos articles", href: "/blogs" }],
    id: 3,
    inNavbar: true,
  },
  
];

export const cardHomeHeaderData: cardHomeHeaderDataType = [
  {
    title: "E-commerce",
    text:
      "Une boutique en ligne pour vendre vos produits et services sur internet et augmenter votre chiffre d'affaires",
    icon: "ecommerce",
    href: "https://dlkdigitalagency.com/services#ecommerce",
  },
  {
    title: "Site vitrine",
    text:
      "Un site internet à votre image pour présenter votre activité et vos services.",
    icon: "vitrine",
    href: "https://dlkdigitalagency.com/services#vitrine",
  },
  {
    title: "Blog",
    text:
      "Un blog pour partager vos articles et augmenter votre visibilité sur internet.",
    icon: "blog",
    href: "https://dlkdigitalagency.com/services#blog",
  },
  {
    title: "Référencement",
    text:
      "Optimiser votre site internet pour qu'il soit visible sur les moteurs de recherche.",
    icon: "seo",
    href: "https://dlkdigitalagency.com/services#seo",
  },

  // {
  //   title: "Refonte",
  //   text:
  //     "Moderniser votre site internet pour le rendre plus performant et plus attractif.",
  //   icon: "refonte",
  //   href: "https://dlkdigitalagency.com/services#refonte",
  // },
  {
    title: "Maintenance",
    text:
      "Assurer la maintenance de votre site internet pour qu'il soit toujours disponible.",
    icon: "maintenance",
    href: "https://dlkdigitalagency.com/services#maintenance",
  },
  // {
  //   title: "App mobile",
  //   text:
  //     "Une application mobile pour améliorer votre visibilité et votre relation client.",
  //   icon: "app",
  //   href: "https://dlkdigitalagency.com/services#app",
  // },
];
