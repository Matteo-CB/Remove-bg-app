import { nav } from "@/lib/data";
import React from "react";
import SocialMedia from "./SocialMedia";
import Link from "next/link";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header className="px-4 py-4 lg:px-6 lg:py-6 select-none flex items-center justify-between">
      <div className="relative">
        <Link href="/">
          {/* <Logo width="150" className="md:block hidden" /> */}
        <h1 className="lg:text-xl font-bold text-lg  ">Remove Background.</h1>
        <p className="text-[0.6rem] -mt-2 tracking-wider">
          By DLK Digital Agency
          </p>
        </Link>
      </div>

      <nav>
        <ul className=" gap-6 items-center hidden md:flex">
          {nav.map((item, index) => (
            <Link href={item.link}>
              <li
                key={index}
                className="hover-neutral-to-sky text-sm lg:text-md"
              >
                {item.name}
              </li>
            </Link>
          ))}
          <SocialMedia />
        </ul>
        <Hamburger links={nav} />
      </nav>
    </header>
  );
};

export default Header;
