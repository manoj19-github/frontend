/* eslint-disable react/jsx-no-undef */
"use client";
import { TOPICS } from "@/environment";
import React, { FC, useRef } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Image from "next/image";
interface CourseCategoryListProps {}
const CourseCategoryList: FC<CourseCategoryListProps> = (): JSX.Element => {
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
        {TOPICS.map((self, index) => (
          <div
            key={index}
            className="h-[220px] min-w-[240px] cursor-pointer border hover:border-banner rounded-lg border-transparent  pt-5 flex flex-col items-center"
          >
            <div className="h-[100px] w-[100px] relative">
              <Image src={self} alt="logo" fill />
            </div>
            <h1 className="mt-5 text-xl font-semibold">Development</h1>
            <p>120+ Courses</p>
          </div>
        ))}
      </div>
      <div
        className="absolute top-[50%] right-[0%] cursor-pointer"
        onClick={() => handleClick("right")}
      >
        <MdOutlineArrowForwardIos size={20} className="text-banner" />
      </div>
    </div>
  );
};

export default CourseCategoryList;
