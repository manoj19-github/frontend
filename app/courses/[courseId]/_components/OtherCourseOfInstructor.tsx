/* eslint-disable react/jsx-no-undef */
"use client";
import { TOPICS } from "@/environment";
import React, { FC, useRef } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import CourseItem from "@/app/_components/CourseItem";
interface OtherCourseOfInstructorProps {}
const OtherCourseOfInstructor: FC<
  OtherCourseOfInstructorProps
> = (): JSX.Element => {
  const containerRef = useRef<any>();
  const handleClick = (direction: string) => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      containerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <div className="relative  ">
      <div className="absolute top-[50%] left-[2%] cursor-pointer z-[60]">
        <MdOutlineArrowBackIos
          size={20}
          onClick={() => handleClick("left")}
          className="text-banner"
        />
      </div>
      <div
        className="relative lg:w-[95%] flex flex-row w-full ml-[3%] h-auto space-x-2  overflow-x-scroll mx-auto md:space-x-8 scrollbar_hide mt-4"
        ref={containerRef}
      >
        {[...new Array(8)].map((self, index) => (
          <CourseItem key={index} courseId={index} minWidth="min-w-[350px]" />
        ))}
      </div>
      <div
        className="absolute top-[50%] right-[0%] cursor-pointer z-[60]"
        onClick={() => handleClick("right")}
      >
        <MdOutlineArrowForwardIos size={20} className="text-banner" />
      </div>
    </div>
  );
};

export default OtherCourseOfInstructor;
