import React, { FC } from "react";
import CourseItem from "./CourseItem";
import { FaArrowRightLong } from "react-icons/fa6";
interface CourseContainerProps {}
const CourseContainer: FC<CourseContainerProps> = (): JSX.Element => {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
        {[...new Array(8)].map((self, index) => (
          <CourseItem key={index} courseId={index} />
        ))}
      </div>
      <div className="mt-10 w-full  flex items-center justify-center">
        <button className="bg-banner px-10 py-3 text-white flex gap-x-4 items-center rounded-sm">
          <span>View All Course</span>
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default CourseContainer;
