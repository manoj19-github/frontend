"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import useMounted from "@/_hooks/useMounted";

interface CourseDetailsSectionProps {
  selectedTab: number;
}
const CourseDetailsSection: FC<CourseDetailsSectionProps> = ({
  selectedTab,
}) => {
  const isMounted = useMounted();
  if (!isMounted) return <></>;
  return (
    <motion.div
      transition={{
        tension: 190,
        friction: 70,
        mass: 0.4,
      }}
      initial={false}
      animate={{ x: selectedTab * -100 + "%" }}
    >
      {[...new Array(4)].map((self, index) => {
        if (index !== selectedTab) return <></>;
        return (
          <div
            key={index}
            aria-hidden={selectedTab !== index}
            tabIndex={selectedTab === index ? 0 : -1}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            veritatis debitis quisquam, fugit doloribus saepe? Ut, quidem
            assumenda nisi sed labore vel tempora, quam reprehenderit explicabo
            ad praesentium voluptatibus. Ipsum! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Perspiciatis esse excepturi porro
            repudiandae expedita voluptatem tenetur debitis iusto, maiores
            dolorem minus neque rerum voluptas ut ullam magni non nihil officia.
          </div>
        );
      })}
    </motion.div>
  );
};

export default CourseDetailsSection;
