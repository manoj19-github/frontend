"use client";

import React, { FC, useState } from "react";
import CourseAccordionWrapper from "./CourseAccordionWrapper";

interface CourseContentProps {}
const CourseContent: FC<CourseContentProps> = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  return (
    <div>
      <h1 className="font-bold text-2xl text-gray-700 mt-20">
        {" "}
        Course Content
      </h1>
      <div className="mt-8">
        <CourseAccordionWrapper />
      </div>
    </div>
  );
};

export default CourseContent;
