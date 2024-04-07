import React, { FC } from "react";
import CourseDetailsBanner from "./_components/CourseDetailsBanner";
import CourseSidebar from "./_components/CourseSidebar";
import CourseDetailsTabs from "./_components/CourseDetailsTabs";
import CourseDetailsWrapper from "./_components/CourseDetailsWrapper";
import HomeFooter from "@/app/_components/HomeFooter";
import RelatedCourseSection from "./_components/RelatedCourseSection";

interface CourseDetailsPageProps {
  params: { courseId: string };
}
const CourseDetailsPage: FC<CourseDetailsPageProps> = ({
  params,
}): JSX.Element => {
  return (
    <div className="p-0 m-0 relative  ">
      <CourseDetailsBanner />
      <div className=" flex justify-between ">
        <div className="w-[65%] h-auto">
          <CourseDetailsWrapper />
        </div>
        <CourseSidebar />
      </div>

      <HomeFooter />
    </div>
  );
};

export default CourseDetailsPage;
