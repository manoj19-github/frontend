import React from "react";
import CourseBanner from "./_components/CourseBanner";
import CourseContainer from "./_components/CourseContainer";
import HomeFooter from "../_components/HomeFooter";

const CoursesPage = () => {
  return (
    <div className="p-0  m-0">
      <CourseBanner />
      <CourseContainer />
      <HomeFooter />
    </div>
  );
};

export default CoursesPage;
