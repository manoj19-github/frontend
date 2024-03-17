import React, { FC } from "react";
import LogoText from "./LogoText";
import NavItem from "./NavMenu";
import MainCategory from "./MainCategory";
import HomeMenu from "@/app/_components/HomeMenu";
import BuisnessMenu from "./BuisnessMenu";

interface MainNavbarProps {}
const MainNavbar: FC<MainNavbarProps> = (): JSX.Element => {
  return (
    <div className="w-full lg:px-3 py-0 flex items-center border-b  space-x-3">
      <LogoText />

      <MainCategory />
      <HomeMenu />
      <BuisnessMenu />
      <div className="flex items-center xl:space-x-5 xl:px-3 space-x-2">
        <p className="hover:underline transition-all ease-in-out duration-200 cursor-pointer underline-offset-2">
          Our Courses
        </p>
        <p className="hover:underline transition-all ease-in-out duration-200 cursor-pointer underline-offset-2">
          Gurukul University
        </p>
        <p className="hover:underline transition-all ease-in-out duration-200 cursor-pointer underline-offset-2">
          Gurukul Shop
        </p>
        <p className="hover:underline transition-all ease-in-out duration-200 cursor-pointer underline-offset-2">
          Events & Seminar
        </p>
        <p className="hover:underline transition-all ease-in-out duration-200 cursor-pointer underline-offset-2">
          Find your Job
        </p>
        <p className="hover:underline transition-all ease-in-out duration-200 cursor-pointer underline-offset-2">
          For Instructor
        </p>
      </div>
    </div>
  );
};

export default MainNavbar;
