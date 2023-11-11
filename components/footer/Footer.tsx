import Link from "next/link";
import React from "react";
import SocialMedia from "../header/SocialMedia";
import { navFooter } from "@/lib/data";
import Logo from "./Logo";
import { Newsletter } from "./Newsletter";

const Footer = () => {
  return (
    <footer className="pt-5 mt-8 p-5 border-t-2 bg-neutral-200 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-800 justify-around flex-col sm:flex-row text-center sm:text-left flex gap-10 sm:items-start items-start">
      <div className="flex-col gap-1 hidden lg:flex">
        <p className="font-semibold py-4">S'inscrire à notre newsletter</p>
        <Newsletter />
      </div>
      
      <div className="sm:flex flex-col gap-1 hidden ">
        <p className="font-semibold py-4">Nos Pages</p>
        {navFooter.map((item, index) => {
          return (
            <Link
              key={index}
              className="underline text-sm hover-text"
              href={item.href}
            >
              {item.footer}
            </Link>
          );
        })}
        <Link className="underline text-sm  hover-text" href={"https://dlkdigitalagency.com/devis"}>
          Obtenir un devis
        </Link>
        <SocialMedia className="pt-3" />
      </div>
      <div className="sm:flex flex-col gap-3 hidden justify-start">
        <p className="font-semibold py-4">Legal</p>
        <Link className="underline text-sm  hover-text" href={"/legal"}>
          Mentions légales
        </Link>
        <Link href="/">
          {/* <Logo width="120" className="flex -ml-2  md:block" /> */}
        </Link>
        <small className=" block text-xs">
          &#10148; 2023 DLK Digital Agency.
        </small>
      </div>
      <div className="flex sm:hidden flex-col gap-3  text-xs text-left">
        {/* <Logo width="170" className="-ml-4" /> */}
        {navFooter.map((item, index) => {
          return (
            <Link
              key={index}
              className="underline text-sm hover-text"
              href={item.href}
            >
              {item.footer}
            </Link>
          );
        })}
        <Link className="underline text-sm  hover-text" href={"/devis"}>
          Obtenir un devis
        </Link>
        <Link className="underline text-sm  hover-text" href={"/legal"}>
          Mentions légales
        </Link>
        <SocialMedia className="pt-3" />
        <Link href="/"></Link>
        <small className=" block text-xs">
          &#10148; 2023 DLK Digital Agency.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
