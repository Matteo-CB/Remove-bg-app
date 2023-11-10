import { navTypes, tutorialTypes, whyUsTypes } from "./type";

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

export const textHome: string = `Bienvenue sur notre site spécialisé dans la suppression gratuite et
          efficace de fond d'image ! Vous en avez marre des arrière-plans
          indésirables qui gâchent vos photos ? Ne vous inquiétez plus, nous
          sommes là pour vous aider !`;

export const titleHome: string = `Supprimez rapidement le fond de vos images !`;
