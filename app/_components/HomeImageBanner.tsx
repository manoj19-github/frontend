import React, { FC } from "react";
import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";
import SectionTitle from "@/components/SectionTitle";
interface HomeImageBannerProps {}
const HomeImageBanner: FC<HomeImageBannerProps> = (): JSX.Element => {
  return (
    <div className="w-full flex items-center justify-between  rea px-2  mt-2">
      <div className="w-1/2 px-4">
        <div>
          <SectionTitle title="Gateway of Lifelong Learning" />
          <div className="leading-1">
            <span className="font-bold text-[60px] mt-4 text-banner leading-1">
              Unlock Your Potential With
            </span>
            <span className="font-light text-[60px] ml-4 text-banner leading-1">
              Online Learning
            </span>
          </div>
        </div>
        <div className="mx-3">
          <p className="text-purple-400 text-lg mt-4 ">
            Discover a world of knowledge and oppertunities with our online
            education platform pursue a new career.
          </p>
          <div className="flex items-center justify-between mt-3 ">
            <button className="bg-banner p-3 px-5 text-white hover:bg-white border border-transparent hover:border-banner rounded-md hover:text-banner flex items-center space-x-3 w-1/3">
              <p> View All Course</p>
              <IoArrowForwardSharp />
            </button>
            <div className="relative  w-1/2">
              <p className="text-2xl text-banner font-semibold">2k Students</p>
              <small className="text-gray-500 text-sm">
                Joint our online Class
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 relative h-[80vh]">
        <Image
          alt="logo"
          fill
          src={"/imagebanner.png"}
          className="absolute w-full "
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default HomeImageBanner;
