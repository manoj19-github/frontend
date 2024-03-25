import React, { FC } from "react";
import CourseItem from "./CourseItem";

interface CourseContainerProps {}
const CourseContainer: FC<CourseContainerProps> = (): JSX.Element => {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
        {[...new Array(8)].map((self, index) => (
          <CourseItem key={index} courseId={index} />
        ))}
      </div>
    </div>
  );
};

export default CourseContainer;
