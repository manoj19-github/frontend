import React, { FC } from "react";
import CourseDetailsBanner from "./_components/CourseDetailsBanner";
import CourseSidebar from "./_components/CourseSidebar";
import CourseDetailsTabs from "./_components/CourseDetailsTabs";
import CourseDetailsWrapper from "./_components/CourseDetailsWrapper";

interface CourseDetailsPageProps {
  params: { courseId: string };
}
const CourseDetailsPage: FC<CourseDetailsPageProps> = ({
  params,
}): JSX.Element => {
  return (
    <div className="p-0 m-0 relative mb-[300px] ">
      <CourseDetailsBanner />
      <div className=" flex justify-between ">
        <div className="w-[65%] h-[500px]">
          <CourseDetailsWrapper />
        </div>
        <CourseSidebar />
      </div>
    </div>
  );
};

export default CourseDetailsPage;
