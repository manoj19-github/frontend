import React, { FC, ReactNode } from "react";
import CourseNavbar from "../_components/CourseNavbar";
import MainNavbar from "../_components/MainNavbar";
import TopNavbar from "../_components/TopNavbar";

interface CourseLayoutProps {
  children: ReactNode;
}
const CourseLayout: FC<CourseLayoutProps> = ({ children }) => {
  return (
    <div>
      <TopNavbar />
      <MainNavbar />
      <CourseNavbar />
      {children}
    </div>
  );
};

export default CourseLayout;
