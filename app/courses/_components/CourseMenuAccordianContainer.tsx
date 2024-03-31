import React, { FC } from "react";
import CourseMenuAccordion from "./CourseMenuAccordion";

interface CourseMenuAccordianContainerProps {}
const CourseMenuAccordianContainer: FC<
  CourseMenuAccordianContainerProps
> = (): JSX.Element => {
  return (
    <div>
      <CourseMenuAccordion />
    </div>
  );
};

export default CourseMenuAccordianContainer;
