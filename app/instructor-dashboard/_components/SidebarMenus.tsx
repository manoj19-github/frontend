"use client";
import { INSTRUCTORSIDEBARMENUS } from "@/environment";
import { usePathname } from "next/navigation";
import React, { Dispatch, FC, SetStateAction } from "react";
import { FaHome } from "react-icons/fa";
interface SidebarMenusProps {
  isMinimize: boolean;
}
const SidebarMenus: FC<SidebarMenusProps> = ({ isMinimize }) => {
  const pathname = usePathname();
  const activePathname = pathname.split("/instructor-dashboard")?.[1];
  console.log("activePathname: ", activePathname);
  return (
    <div className="mt-1 flex flex-col gap-y-1">
      {INSTRUCTORSIDEBARMENUS.map(({ navigateUrl, Icon, label }, index) => (
        <div
          key={index}
          className={`flex py-4 cursor-pointer  items-center ${
            isMinimize ? `justify-center` : `gap-x-5 px-3`
          } ${
            activePathname === navigateUrl ? ` bg-[#B5ADE7]  ` : `text-white`
          } `}
        >
          <Icon
            className={`${
              activePathname === navigateUrl ? `text-white` : `text-gray-400`
            }  `}
            size={25}
          />
          {!isMinimize ? (
            <p
              className={`text-semibold ${
                activePathname === navigateUrl ? `text-white` : `text-gray-600`
              }  capitalize`}
            >
              {label}
            </p>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarMenus;
