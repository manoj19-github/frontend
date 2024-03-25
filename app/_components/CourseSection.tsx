"use client";
import SectionTitle from "@/components/SectionTitle";
import React, { FC, useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import useMounted from "@/_hooks/useMounted";
import CourseList from "./CourseContainer";

interface CourseSectionProps {}
const CourseSection: FC<CourseSectionProps> = () => {
  const [selectedCategory, seSelectedCategory] = useState<number>(0);
  const isMounted = useMounted();

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

  if (!isMounted) return <></>;

  return (
    <div className="w-full lg:px-10 lg:mb-20 mt-10 ">
      <SectionTitle title="Top Category" />
      <div className="flex w-full justify-between items-center">
        <div className="w-1/2">
          <div className="flex  mt-1 text-[40px] mt-4 ">
            <h1 className="font-bold">Explore Featured Courses</h1>
          </div>
          <div className="flex mt-1">
            <h1 className="text-lg text-gray-400 ">
              You'll find something to spark your curiosity and enhance{" "}
            </h1>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end">
          <div className="flex items-center space-x-3">
            {["All", "Buisness", "IT", "Marketing", "Music", "Cooking"].map(
              (self, index) => (
                <motion.div
                  onClick={() => seSelectedCategory(index)}
                  className={`${
                    index === selectedCategory
                      ? `text-white bg-banner px-6 rounded-sm`
                      : `text-banner bg-btnColor px-6 rounded-sm`
                  } cursor-pointer `}
                  key={index}
                >
                  {self}
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="mt-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory || "empty"}
            variants={tabContentVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{
              duration: 0.3,
            }}
          >
            <div className="mt-8">
              <CourseList />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CourseSection;
