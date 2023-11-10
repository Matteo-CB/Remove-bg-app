import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const SocialMedia = ({ className }: any) => {
  return (
    <div className={"flex  items-center gap-2 sm:gap-3 " + className}>
      <a href="mailto:dlkdigitalagency@gmail.com" target="_blank">
        <FiMail className="w-[18px] hover-neutral-to-sky sm:w-[20px] hover:scale-105 transition-all hover-icon" />
      </a>
      <a href="https://www.instagram.com/dlkdigitalagency/" target="_blank">
        <BsInstagram className="hover:scale-110 w-[18px] hover-neutral-to-sky sm:w-[20px] hover-icon" />
      </a>
      <a href="https://www.linkedin.com/dlkdigitalagency/" target="_blank">
        <BsLinkedin className="hover:scale-110 w-[18px] hover-neutral-to-sky sm:w-[20px] hover-icon" />
      </a>
    </div>
  );
};

export default SocialMedia;
