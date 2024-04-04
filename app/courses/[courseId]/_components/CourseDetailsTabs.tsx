"use client";
import { useMeasure } from "@/_hooks/useMeasures";
import useMounted from "@/_hooks/useMounted";
import { motion } from "framer-motion";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

interface CourseDetailsTabsProps {
  selectedSubject: number;
  onChangeHandler: (indexNum: number) => void;
}
const CourseDetailsTabs: FC<CourseDetailsTabsProps> = ({
  selectedSubject,
  onChangeHandler,
}) => {
  const isMounted = useMounted();

  if (!isMounted) return <></>;

  return (
    <div>
      <div className="lg:mt-10 lg:mx-20 flex items-center gap-x-4">
        {["Course Information", "Course content", "Instructor", "Review"].map(
          (self, index) => (
            <div
              className={`px-4 rounded-md   cursor-pointer border py-2  ${
                selectedSubject === index
                  ? `border-transparent bg-banner text-white`
                  : ``
              }`}
              key={index}
              onClick={() => onChangeHandler(index)}
            >
              {self}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CourseDetailsTabs;
