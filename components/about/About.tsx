import React from "react";
import SectionAnimation from "../home/SectionAnimation";
import { nav } from "@/lib/data";
import { Button } from "../ui/button";

const About = () => {
  return (
    <SectionAnimation whileInView={true} id={nav[1].id}>
      <div className="flex items-center gap-10">
        <h2 className="titleSection">À propos de nous</h2>
        <Button className="bg-sky-500 text-neutral-100 hover:bg-sky-600 hover:scale-105 transition rounded">
          <a href="https://dlkdigitalagency.com" target="_blank">
            Visiter notre site
          </a>
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <p>
          La{" "}
          <a
            className="underline text-sky-500"
            href="https://dlkdigitalagency.com"
            target="_blank"
          >
            DLK Digital Agency
          </a>{" "}
          est une agence de création de sites web moderne. Nous nous efforçons de fournir des
          solutions web hautement efficaces et personnalisées.
        </p>
        <p>
          Nous proposons des offres comme site vitrine, e-commerce, blogs, vente
          de formation... Avec nos connaissances en SEO nous nous efforçons de
          rendre les sites de nos clients visibles sur les moteurs de recherche.
          Nous assurons également la maintenance du site web.
        </p>

        <p>
          Chez DLK Digital Agency, nous adoptons les dernières{" "}
          <em>technologies modernes</em> pour optimiser les performances de
          votre site web. Nous restons à la pointe de l'innovation pour
          améliorer l'expérience utilisateur et stimuler votre présence en
          ligne.
        </p>
        <p>
          DLK Digital Agency est votre partenaire de confiance pour une présence
          en ligne réussie. Notre engagement envers l'innovation, l'excellence
          et le service client est notre promesse à vous.
        </p>
      </div>
    </SectionAnimation>
  );
};

export default About;
