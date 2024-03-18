"use client";
import React, { FC, useRef } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

interface CourseListProps {}
const CourseList: FC<CourseListProps> = (): JSX.Element => {
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
      <div className="absolute top-[50%] left-[2%] cursor-pointer">
        <MdOutlineArrowBackIos size={30} onClick={() => handleClick("left")} />
      </div>
      <div
        className="relative lg:w-[95%] flex flex-row w-full ml-[3%] h-auto space-x-2  overflow-x-scroll mx-auto md:space-x-8 scrollbar_hide mt-4"
        ref={containerRef}
      >
        {[...new Array(20)].map((self, index) => (
          <div
            key={index}
            className="h-[250px] min-w-[250px] border border-red-500"
          ></div>
        ))}
      </div>
      <div
        className="absolute top-[50%] right-[0%] cursor-pointer"
        onClick={() => handleClick("right")}
      >
        <MdOutlineArrowForwardIos size={30} />
      </div>
    </div>
  );
};

export default CourseList;
