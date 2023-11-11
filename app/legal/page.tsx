import React from "react";

const page = () => {
  return (
    <div className="pt-[90px] mb-[150px] sm:pt-[150px] text-center max-w-[1000px] mx-auto px-1">
      <h3 className="font-semibold text-md sm:text-lg mb-3 sm:mb-4 ">
        Mentions légales
      </h3>
      <h4 className="text-xs sm:text-md mb-3 sm:mb-4">ARTICLE 1 - L'EDITEUR</h4>
      <p className="text-[0.6rem] sm:text-xs mb-3 sm:mb-4">
        L'édition du Site est assurée par DLK Digital Digital, Numéro de
        téléphone: 0641378441, <br />
        Adresse e-mail: dlkdigitalagency@gmail.com.
        <br /> Le Directeur de la publication est Matteo Chanté-Biyikli{" "}
      </p>
      <h4 className="text-xs sm:text-md mb-3 sm:mb-4">
        ARTICLE 2 - L'HEBERGEUR
      </h4>
      <p className="text-[0.6rem] sm:text-xs mb-3 sm:mb-4">
        L'hébergeur du Site est la société Vercel, dont le siège social est
        situé au 340 S Lemon Ave #4133 Walnut, CA 91789.
      </p>
      <h4 className="text-xs sm:text-md mb-3 sm:mb-4">
        ARTICLE 3 - ACCES AU SITE
      </h4>
      <p className="text-[0.6rem] sm:text-xs mb-3 sm:mb-4">
        Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force
        majeure, interruption programmée ou non et pouvant découlant d’une
        nécessité de maintenance. En cas de modification, interruption ou
        suspension du Site, l'Editeur ne saurait être tenu responsable.
      </p>
      <h4 className="text-xs sm:text-md mb-3 sm:mb-4">
        ARTICLE 4 - COLLECTE DES DONNEES
      </h4>
      <p className="text-[0.6rem] sm:text-xs">
        Les informations que vous nous confiés peuvent être collectés en me
        contactant via le formulaire de contact, en s'inscrivant à la newsletter
        et/ou la demande de devis, ces informations ne seront pas utilisés à
        d'autres fins que vous répondre, vous envoyer nos mails (newsletter ou
        autre si vous accepter) ou vous aider dans votre projet dans le cas où
        vous demander un devis ou nous contacter pour nos services. Si vous ne
        souhaitez pas que vos données soient collectées, merci de ne pas nous
        les confiés. Si vous souhaitez que vos données soient supprimées, merci
        de nous contacter via le formulaire de contact afin que vos données soit
        supprimées. Votre préférence entre le mode sombre et clair et aussi
        collecté.
      </p>
    </div>
  );
};

export default page;
