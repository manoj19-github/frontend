import React, { FC } from "react";
import CourseMenuAccordianContainer from "./CourseMenuAccordianContainer";
import { FaFilter } from "react-icons/fa6";

interface CourseMenuBarProps {}
const CourseMenuBar: FC<CourseMenuBarProps> = () => {
  return (
    <div className="bg-white w-[20.5%] h-auto rounded-md py-3 px-2">
      <h1 className="text-center text-xl font-semibold text-gray-500">
        Filter By
      </h1>
      <div className="my-4 flex items-center justify-center">
        <button className="bg-gray-500 w-3/4 px-8 text-white py-2 flex justify-center gap-x-5 items-center rounded-md">
          <FaFilter />
          <p>Filter</p>
        </button>
      </div>
      <div className="mt-10">
        <CourseMenuAccordianContainer />
      </div>
    </div>
  );
};

export default CourseMenuBar;
