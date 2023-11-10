"use client";
import React from "react";
import { motion } from "framer-motion";

const SectionAnimation = ({ children, whileInView, id }: any) => {
  return (
    <>
      {!whileInView ? (
        <motion.div
          id={id}
          className="flex flex-col items-start text-start w-[70%] m-auto"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.25 }}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          id={id}
          className="flex flex-col items-start text-start w-[70%] m-auto"
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.25, delay: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default SectionAnimation;
