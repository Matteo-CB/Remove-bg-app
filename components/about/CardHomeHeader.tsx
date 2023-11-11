import React from "react";
import { BsNewspaper } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoMdSearch } from "react-icons/io";
import { IoBuildOutline } from "react-icons/io5";
import { RiStore2Line } from "react-icons/ri";
import { MdOutlineHealing } from "react-icons/md";
import { LuSmartphone } from "react-icons/lu";
import Link from "next/link";

const CardHomeHeader = ({
  title,
  text,
  icon,
  href,
}: {
  title: string;
  text: string;
  icon: string;
  href: string;
}) => {
  let iconCard;
  if (icon === "ecommerce") {
    iconCard = <RiStore2Line className="text-sky-600 dark:text-sky-500" />;
  } else if (icon === "vitrine") {
    iconCard = (
      <HiOutlineDesktopComputer className="text-sky-600 dark:text-sky-500" />
    );
  } else if (icon === "refonte") {
    iconCard = <IoBuildOutline className="text-sky-600 dark:text-sky-500" />;
  } else if (icon === "seo") {
    iconCard = <IoMdSearch className="text-sky-600 dark:text-sky-500" />;
  } else if (icon === "blog") {
    iconCard = <BsNewspaper className="text-sky-600 dark:text-sky-500" />;
  } else if (icon === "maintenance") {
    iconCard = <MdOutlineHealing className="text-sky-600 dark:text-sky-500" />;
  } else if (icon === "app") {
    iconCard = <LuSmartphone className="text-sky-600 dark:text-sky-500" />;
  } else {
    iconCard = (
      <HiOutlineDesktopComputer className="text-sky-600 dark:text-sky-500" />
    );
  }
  return (
    <Link href={href} target="_blank">
      <div className="flex-auto flex flex-col gap-2 justify-center items-center bg-neutral-200 rounded dark:bg-neutral-900 max-w-[280px] p-2 border-2 max-h-[200px] min-h-[200px]  border-neutral-300 dark:border-neutral-700 hover:scale-105 hover:shadow-2xl shadow-lg transition-all ease-in-out cursor-pointer">
        <div className="flex items-center justify-center">{iconCard}</div>
        <h3 className="font-semibold text-sm sm:text-md mb-1 sm:mb-2 ">
          {title}
        </h3>
        <p className="text-[0.6rem] sm:text-[0.7rem] mb-1 sm:mb-2">{text}</p>
      </div>
    </Link>
  );
};

export default CardHomeHeader;
