import StarRatingPicker from "@/components/StarRatingPicker";
import React, { FC } from "react";
import { FaUniversity, FaUsers } from "react-icons/fa";
import { MdEditCalendar } from "react-icons/md";
import Image from "next/image";
interface CourseDetailsBannerProps {}
const CourseDetailsBanner: FC<CourseDetailsBannerProps> = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/courseDetailsBanner.jpg")`,
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-full pt-32"
    >
      <div className=" w-[50%] lg:pl-5 pb-20">
        <h1 className="font-semibold text-4xl">
          The Complete Web Developer in 2024: Zero to Mastery
        </h1>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-x-3">
            <p className="text-sm text-banner">3.5</p>
            <StarRatingPicker
              count={5}
              size={15}
              isEditable={false}
              value={3.5}
            />
            <p className="text-sm text-banner">(44000)</p>
          </div>
          <div className="w-1/3 flex items-center gap-x-2 dark:text-gray-500 dark:text-slate-700 text-sm text-banner">
            <FaUsers size={26} />
            2450 Students
          </div>
          <div className="w-1/3 flex items-center gap-x-2 dark:text-gray-500 dark:text-slate-700 text-sm text-banner">
            <MdEditCalendar size={26} />
            Last updated by 23 Nov 2023
          </div>
        </div>
        <div className="mt-3 w-full flex items-center gap-x-5">
          <div className="w-[50px] h-[50px] relative overflow-hidden gap-x-8">
            <Image
              alt="logo"
              src={`https://lh3.googleusercontent.com/ogw/AF2bZygGDKM0T1O1PvWeSy4E1kVLERgBxR40uEnyTmdn=s32-c-mo`}
              fill
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div>
            <p className="">
              by
              <span className="ml-1 font-bold">Manoj Santra</span>
            </p>
          </div>
          <div>
            <p className="">
              Categories
              <span className="ml-1 font-bold">Web Development</span>
            </p>
          </div>
          <div>
            <p className="">
              chapters
              <span className="ml-1 font-bold">340</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsBanner;
