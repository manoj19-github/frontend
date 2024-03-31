import React, { FC } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  MdDateRange,
  MdOutlineAccessTime,
  MdOutlineTopic,
  MdPlayLesson,
} from "react-icons/md";
import { FaUniversity, FaUsers } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IoMdCart } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import StarRatingPicker from "@/components/StarRatingPicker";
import { GiTeacher } from "react-icons/gi";

interface CourseItemProps {
  isInstitute?: boolean;
}
const CourseItem: FC<CourseItemProps> = ({ isInstitute }) => {
  return (
    <div className="flex justify-between group border border-gray-200 p-3 rounded-md  ">
      <div className="w-[38%] relative h-[300px] rounded-md">
        <Image
          src="/courseItem.jpg"
          alt="logo"
          fill
          className=""
          objectFit="cover rounded-md"
        />
      </div>
      <div className="h-full w-[60%] ">
        <Badge className="bg-banner px-6 py-1">Buisness & Marketing</Badge>
        <div className="flex items-center justify-between mt-4 ">
          <div className="w-1/3 flex items-center gap-x-2 dark:text-gray-500 dark:text-slate-700 text-sm text-banner">
            <MdPlayLesson size={26} />
            210 Chapters
          </div>
          <div className="w-1/3 flex items-center gap-x-2 dark:text-gray-500 dark:text-slate-700 text-sm text-banner">
            <FaUsers size={26} />
            2450 Students
          </div>
          <div className="w-1/3 flex items-center gap-x-2 dark:text-gray-500 dark:text-slate-700 text-sm text-banner">
            <MdOutlineTopic size={26} />
            Software Engineering
          </div>
        </div>
        <div className="mt-3 font-bold text-2xl flex-wrap flex group-hover:text-banner">
          The Complete Web Developer in 2023: Zero to Mastery
        </div>
        <div className="mt-1 text-gray-400 text-md">
          Discover a world of knowledge and learning opportunities Discover a
          world of knowledge and learning opportunities
        </div>
        <div className="mt-2 w-full flex flex-wrap items-center space-x-2 text-gray-400 text-sm">
          {isInstitute ? (
            <>
              <FaUniversity />
            </>
          ) : (
            <>
              <GiTeacher />
            </>
          )}
          <p className="text-sm text-gray-400">Gurukul University</p>
        </div>
        <div className="flex items-center gap-x-3 mt-2">
          <p className="text-xs text-gray-400">3.5</p>
          <StarRatingPicker
            count={5}
            size={15}
            isEditable={false}
            value={3.5}
          />
          <p className="text-xs text-gray-400">(44000)</p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className=" flex items-center gap-x-3">
            <div className="flex items-center text-gray-500">
              <FaIndianRupeeSign size={17} />
              <p className="text-md font-bold">500</p>
            </div>
            <div
              className="flex items-center text-gray-400 "
              style={{ textDecoration: "line-through" }}
            >
              <FaIndianRupeeSign
                size={12}
                style={{ textDecoration: "line-through" }}
              />
              <p className="text-xs">2300</p>
            </div>

            <div>
              <Badge variant={"outline"} className="text-banner bg-btnColor">
                45% off
              </Badge>
            </div>
          </div>
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <IoMdCart size={40} className="ml-2 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent className="bg-btnColor rounded-lg text-banner px-2">
                  <p className="text-xs">Add to Cart</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
