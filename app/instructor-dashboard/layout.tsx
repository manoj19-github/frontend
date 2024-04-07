import React, { FC, ReactNode } from "react";
import InstructorSidebar from "./_components/InstructorSidebar";

interface InstructorDashboardLayoutProps {
  children: ReactNode;
}
const InstructorDashboardLayout: FC<InstructorDashboardLayoutProps> = ({
  children,
}) => {
  return (
    <div className="m-0 p-0 w-screen h-screen overflow-hidden  flex justify-between ">
      <InstructorSidebar />
      <div className="w-full ">{children}</div>
    </div>
  );
};

export default InstructorDashboardLayout;
