"use client";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
type HamburgerProps = {
  links: any[];
};

const Hamburger = ({ links }: HamburgerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handler = () => {
    console.log("clicked");
  };
  const handler2 = () => {
    setIsOpen(!isOpen);
    setIsChecked(!isChecked);
  };

  return (
    <div className="relative md:hidden px-2">
      <input
        type="checkbox"
        className="hidden"
        id="hamburgerInput"
        checked={isChecked}
        onClick={handler}
      />
      <label
        onClick={handler2}
        htmlFor="hamburgerInput"
        className="relative max-w-[25px] h-[16px] w-[25px] max-h-[16px] min-w-[25px] min-h-[16px] justify-between z-[454655645656565656588989] flex flex-col toggle"
      >
        <div
          className="w-full bg-neutral-950 dark:bg-white h-[2px] rounded-full transition-all"
          id="l1"
        ></div>
        <div
          className="w-full bg-neutral-950 dark:bg-white h-[2px] rounded-full transition-all"
          id="l2"
        ></div>
        <div
          className="w-full bg-neutral-950 dark:bg-white h-[2px] rounded-full transition-all"
          id="l3"
        ></div>
      </label>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute z-10 top-0 right-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-md overflow-hidden">
            <div className="px-5 pt-1 flex items-center justify-between">
              <div className="-mr-2"></div>
            </div>
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div
                className=" w-[140px]  px-2 pt-1 pb-1 bg-gradient-to-tl bg-neutral-100 dark:bg-neutral-950 shadow-xl rounded border border-neutral-300 dark:border-neutral-800"
                role="none"
              >
                {links.map((link, index) => (
                  <>
                    <Link
                      key={link.link}
                      href={link.link}
                      onClick={handler2}
                      className={
                        links.length != index + 1
                          ? "flex items-center justify-between  py-2 m-0 rounded-md text-xs font-medium  width-full px-1 dark:hover:text-neutral-600 hover:text-sky-600 transition-all"
                          : "flex items-center justify-between  py-2 rounded-md m-0 relative  text-xs font-medium width-full px-1 dark:hover:text-neutral-600 hover:text-sky-600 transition-all"
                      }
                      role="menuitem"
                    >
                      {link.name}
                    </Link>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Hamburger;
