import React from "react";
import CourseMenuBar from "./CourseMenuBar";
import CourseListWrapper from "./CourseListWrapper";

const CourseContainer = () => {
  return (
    <div className="bg-slate-200 p-2 w-full flex justify-between">
      <CourseMenuBar />
      <CourseListWrapper />
    </div>
  );
};

export default CourseContainer;
