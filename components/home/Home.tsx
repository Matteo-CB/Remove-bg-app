import {
  nav,
  questionTutorial,
  questionWhyUs,
  textHome,
  titleHome,
  tutorial,
  whyUs,
} from "@/lib/data";
import React from "react";
import { BiCheckDouble } from "react-icons/bi";
import RemoveBackground from "./RemoveBackground";
import SectionAnimation from "./SectionAnimation";
const HomePage: any = () => {
  return (
    <SectionAnimation id={nav[0].id} whileInView={false}>
      <h2 className="titleSection">
        {titleHome}
      </h2>
      <div className="flex justify-between">
        <div className="w-[60%]">
          <p className="text-xl text-gray-600 ">{textHome}</p>
          <RemoveBackground />
        </div>
        <div className="text-xl  text-gray-900 text-start">
          <span className="mb-3 block font-semibold">{questionTutorial}</span>

          <ol className="mb-3">
            {tutorial.map((item, index) => (
              <li key={index} className=" text-gray-600 py-1">
                <span className="text-sky-500">{index + 1 + ". "}</span> {item}
              </li>
            ))}
          </ol>

          <span className="text-gray-900 mb-3 block font-semibold">
            {questionWhyUs}
          </span>

          <ul className="">
            {whyUs.map((item, index) => (
              <li
                key={index}
                className="text-gray-600 py-1 flex items-center gap-2"
              >
                <BiCheckDouble className={"text-sky-500"} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionAnimation>
  );
};
export default HomePage;
