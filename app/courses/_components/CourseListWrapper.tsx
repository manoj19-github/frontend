"use client";
import React, { FC, useState } from "react";
import CourseItem from "./CourseItem";
import { AnimatePresence, Variants, motion } from "framer-motion";
import useMounted from "@/_hooks/useMounted";

interface CourseListWrapperProps {}
const CourseListWrapper: FC<CourseListWrapperProps> = (): JSX.Element => {
  const tabContentVariants: Variants = {
    initial: {
      y: 10,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -20,
      opacity: 0,
    },
  };
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  return (
    <div className="w-[79%] bg-white h-auto pb-10 rounded-md">
      <div className="mt-3 flex justify-between items-center px-2">
        {[
          "Popularity",
          "Price - Low To High",
          "Price - High To Low",
          "Newest First",
          "Oldest First",
        ].map((self, index) => (
          <p
            className={`font-semibold cursor-pointer ${
              selectedCategory === self ? `underline underline-offset-4` : ``
            }`}
            key={index}
            onClick={() => setSelectedCategory(self)}
          >
            {self}
          </p>
        ))}
      </div>
      <div className="mt-10 px-5 gap-y-5 flex flex-wrap flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory || "empty"}
            variants={tabContentVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="gap-y-4 flex flex-col flex-wrap"
            transition={{
              duration: 0.3,
            }}
          >
            <CourseItem />
            <CourseItem />
            <CourseItem />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CourseListWrapper;
