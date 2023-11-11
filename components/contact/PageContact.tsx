import React from "react";
import Contact from "./Contact";
import SectionAnimation from "../home/SectionAnimation";
import { nav } from "@/lib/data";
import { Newsletter } from "../footer/Newsletter";

const PageContact = () => {
  return (
    <SectionAnimation whileInView={true} id={nav[2].id}>
      <h2 className="titleSection md:m-auto">Contactez-nous !</h2>
      <p className="md:text-center md:w-[80%] py-2 text-sm md:text-md md:m-auto -mt-6 mb-6">Contactez-nous via ce formulaire ou à l'adresse mail : <a className="underline text-sky-500" href="mailto:dlkdigitalagency@gmail.com">dlkdigitalagency@gmail.com</a> si vous avez une remarque ou besoin de nous pour un projet !</p>
      <Contact />
      <div className="flex-col gap-1 flex lg:hidden justify-center items-center mt-4 md:m-auto">
        <p className="font-semibold py-4">S'inscrire à notre newsletter</p>
        <Newsletter />
      </div>
    </SectionAnimation>
  );
};

export default PageContact;
