import Image from "next/image";
import React, { FC } from "react";
import InstructorSidebar from "./_components/InstructorSidebar";

interface InstructorDashboardMainProps {}
const InstructorDashboardMain: FC<
  InstructorDashboardMainProps
> = (): JSX.Element => {
  return (
    <div className="m-0 p-0  overflow-auto  w-[80vw] h-[600px]">
      page details
      {/* <Image
          src={"/system-solid-46-notification-bell.gif"}
          alt="logo"
          fill
          objectFit="cover"
        /> */}
    </div>
  );
};

export default InstructorDashboardMain;
