import { nav } from "@/lib/data";
import React from "react";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

const Header = () => {
  return (
    <header className="px-6 py-6 select-none flex items-center justify-between">
      <div className="relative">
        <h1 className="text-xl font-bold  ">Remove Background.</h1>
        <p className="text-[0.6rem] -mt-2 tracking-wider">
          By DLK Digital Agency
        </p>
      </div>

      <nav>
        <ul className="flex gap-6 items-center">
          {nav.map((item, index) => (
            <a href={item.link}>
              <li key={index} className="hover-neutral-to-sky">
                {item.name}
              </li>
            </a>
          ))}
          <SocialMedia />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
