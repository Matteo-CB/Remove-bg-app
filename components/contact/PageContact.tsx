import React from "react";
import Contact from "./Contact";
import SectionAnimation from "../home/SectionAnimation";
import { nav } from "@/lib/data";

const PageContact = () => {
  return (
    <SectionAnimation whileInView={true} id={nav[2].id}>
      <h2 className="titleSection">Contactez-nous !</h2>
      <Contact />
    </SectionAnimation>
  );
};

export default PageContact;
