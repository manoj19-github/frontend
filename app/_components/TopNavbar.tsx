import React, { FC } from "react";
import DarkModeController from "./DarkModeController";
import { MdMailOutline } from "react-icons/md";
interface TopNavbarProps {}

const TopNavbar: FC<TopNavbarProps> = (): JSX.Element => {
  return (
    <div className="bg-banner h-auto w-full flex  lg:px-4 lg:py-1 dark:bg-gray-700 items-center justify-between py-5">
      <div>
        <div className="flex items-center space-x-2">
          <MdMailOutline className="cursor-pointer text-white " />
          <p className="text-sm  text-white">gurukul@info.gmail.com</p>
        </div>
      </div>
      <div>{/* <DarkModeController /> */}</div>
    </div>
  );
};

export default TopNavbar;
