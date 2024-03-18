import SectionTitle from "@/components/SectionTitle";
import React, { FC } from "react";
import CourseList from "./CourseList";

interface CourseSectionProps {}
const CourseSection: FC<CourseSectionProps> = (): JSX.Element => {
  return (
    <div className="w-full mt-20 mb-10 ">
      <div className="flex justify-center">
        <SectionTitle title="Top Category" />
      </div>
      <div className="flex justify-center mt-1 text-[40px]">
        <h1 className="font-bold">Explore 2500+ Free Online Courses </h1>
      </div>
      <div className="flex justify-center mt-1">
        <h1 className="text-lg text-gray-400 ">
          You'll find something to spark your curiosity and enhance{" "}
        </h1>
      </div>
      <div>
        <CourseList />
      </div>
    </div>
  );
};

export default CourseSection;
