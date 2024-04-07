"use client";
import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CourseDetailsTabs from "./CourseDetailsTabs";
import useMounted from "@/_hooks/useMounted";
import { motion, AnimatePresence, Variants } from "framer-motion";
import CourseInfoSection from "./CourseInfoSection";
import CourseContent from "./CourseContent";
import CourseInstructors from "./CourseInstructors";
import CourseReviewWrapper from "./CourseReviewWrapper";
import OtherCourseOfInstructor from "./OtherCourseOfInstructor";
import RelatedCourseSection from "./RelatedCourseSection";

const CourseDetailsWrapper = () => {
  const isMounted = useMounted();
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const tabContentVariants: Variants = {
    initial: {
      y: 40,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -50,
      opacity: 0,
    },
  };
  const onChangeHandler = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <div className="w-full">
      <CourseDetailsTabs
        selectedSubject={selectedTab}
        onChangeHandler={onChangeHandler}
      />
      <div className="w-[90%] mx-auto  h-[0.5px] bg-gray-200 mt-10" />
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab || "empty"}
          variants={tabContentVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={{
            duration: 0.8,
          }}
        >
          <div className="lg:px-5 w-full">
            {selectedTab === 0 ? (
              <CourseInfoSection />
            ) : selectedTab === 1 ? (
              <CourseContent />
            ) : selectedTab === 2 ? (
              <CourseInstructors />
            ) : selectedTab === 3 ? (
              <CourseReviewWrapper />
            ) : (
              <></>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="my-3 ">
        <h1 className="mt-24 mb-5 text-2xl font-bold lg:ml-8 underline underline-offset-2">
          More Course by Manoj Santra
        </h1>
        <OtherCourseOfInstructor />
      </div>
    </div>
  );
};

export default CourseDetailsWrapper;
