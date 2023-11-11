"use client";
import React from "react";
import { motion } from "framer-motion";

const SectionAnimation = ({ children, whileInView, id }: any) => {
  return (
    <>
      {!whileInView ? (
        <motion.section
          id={id}
          className="flex flex-col items-start text-start md:w-[70%] px-4  md:m-auto"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.25 }}
        >
          {children}
        </motion.section>
      ) : (
        <motion.section
          id={id}
          className="flex flex-col items-start text-start px-4 md:w-[70%] m-auto"
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.25, delay: 0.2 }}
        >
          {children}
        </motion.section>
      )}
    </>
  );
};

export default SectionAnimation;
