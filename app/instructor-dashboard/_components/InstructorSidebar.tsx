"use client";
import LogoText from "@/app/_components/LogoText";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { FC, useState } from "react";
import { Sidebar } from "lucide-react";
import SidebarMenus from "./SidebarMenus";

interface InstructorSidebarProps {}
const InstructorSidebar: FC<InstructorSidebarProps> = (): JSX.Element => {
  const [isMinimize, setIsminimize] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  return (
    <div
      className={`h-screen transition-all ease-in-out duration-700  ${
        isMinimize ? `lg:w-[5vw]` : `lg:w-[20vw]`
      }  border  overflow-x-hidden overflow-y-auto`}
    >
      <div className="w-full h-auto ">
        <div
          className={`lg:px-3 lg:py-4 flex ${
            isMinimize ? `justify-center` : `justify-between`
          }   items-center`}
        >
          {!isMinimize ? (
            <LogoText logoImageStyle="w-[50px] h-[35px] transition-all ease-in duration-1000" />
          ) : (
            <></>
          )}
          {isMinimize ? (
            <IoIosArrowForward
              size={24}
              className="text-gray-500 cursor-pointer "
              onClick={() => setIsminimize((prev) => !prev)}
            />
          ) : (
            <IoIosArrowBack
              size={24}
              className="text-gray-500 cursor-pointer"
              onClick={() => setIsminimize((prev) => !prev)}
            />
          )}
        </div>
        <div className="mt-2">
          <SidebarMenus isMinimize={isMinimize} />
        </div>
      </div>
    </div>
  );
};

export default InstructorSidebar;
