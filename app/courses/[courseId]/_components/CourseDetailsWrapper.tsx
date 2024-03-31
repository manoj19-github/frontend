"use client";
import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CourseDetailsTabs from "./CourseDetailsTabs";
import useMounted from "@/_hooks/useMounted";
import { motion, AnimatePresence, Variants } from "framer-motion";
import CourseInfoSection from "./CourseInfoSection";

const CourseDetailsWrapper = () => {
  const isMounted = useMounted();
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const CarousalRef = useRef<any>();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab || "empty"}
          variants={tabContentVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={{
            duration: 1,
          }}
        >
          <div className="lg:px-5 w-full">
            <CourseInfoSection />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CourseDetailsWrapper;
