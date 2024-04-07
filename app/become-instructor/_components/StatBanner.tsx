"use client";
import React, { FC } from "react";
import Image from "next/image";
import CountUp from "react-countup";
interface StatBannerProps {}
const StatBanner: FC<StatBannerProps> = (): JSX.Element => {
  return (
    <div className="w-[95vw] drop-shadow-lg mx-auto h-[180px] bg-white  rounded-md py-2 flex items-center justify-between ">
      <div className="w-1/4 h-full border-r-2 flex items-center justify-center flex-col ">
        <div className="w-8 h-8 relative ">
          <Image src={"/icon1.svg"} fill objectFit="cover" alt="logo" />
        </div>
        <div className="mt-3 text-2xl font-bold">6460</div>
        <div className="mt-1 text-lg">Teachers Enrolled</div>
      </div>
      <div className="w-1/4 h-full border-r-2 flex items-center justify-center flex-col ">
        <div className="w-8 h-8 relative ">
          <Image src={"/icon2.svg"} fill objectFit="cover" alt="logo" />
        </div>
        <div className="mt-3 text-2xl font-bold">31260</div>
        <div className="mt-1 text-lg">Complete Courses</div>
      </div>
      <div className="w-1/4 h-full border-r-2 flex items-center justify-center flex-col ">
        <div className="w-8 h-8 relative ">
          <Image src={"/icon3.svg"} fill objectFit="cover" alt="logo" />
        </div>
        <div className="mt-3 text-2xl font-bold">3450</div>
        <div className="mt-1 text-lg">Job Placement</div>
      </div>
      <div className="w-1/4 h-full  flex items-center justify-center flex-col ">
        <div className="w-8 h-8 relative ">
          <Image src={"/icon4.svg"} fill objectFit="cover" alt="logo" />
        </div>
        <div className="mt-3 text-2xl font-bold">34</div>
        <div className="mt-1 text-lg">Country</div>
      </div>
    </div>
  );
};

export default StatBanner;
