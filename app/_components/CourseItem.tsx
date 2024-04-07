"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import React, { FC, useState } from "react";
import { RiPlayList2Fill } from "react-icons/ri";
import { MdOutlineAvTimer } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Image from "next/image";
import StarRatingPicker from "@/components/StarRatingPicker";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { IoMdCart } from "react-icons/io";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";

interface CourseItemProps {
  courseId: number;
  isInstitute?: boolean;
  minWidth: string;
}
const CourseItem: FC<CourseItemProps> = ({
  courseId,
  isInstitute,
  minWidth,
}): JSX.Element => {
  const [starRating, setStarRating] = useState<number>(0);
  return (
    <div
      className={`w-full ${
        minWidth ? `${minWidth}` : ``
      } h-full overflow-hidden group cursor-pointer border  rounded-sm hover:border-transparent transition-all duration-300 p-3`}
    >
      <div className="w-full h-48 relative ">
        <Image
          src={"/course1.jpg"}
          alt="logo"
          fill
          objectFit="fill"
          className="group-hover:scale-110 duration-500 ease-in-out transition-all group-hover:rounded-sm"
        />
      </div>
      <div className="mt-3 w-full group-hover:mt-4 transition-all duration-500 ease-in-out">
        <div className="flex flex-wrap gap-2 items-center ">
          {["Web Development", "Finance"].map((self, index) => (
            <div
              className="py-1 px-2 rounded-sm text-xs bg-btnColor text-banner"
              key={index}
            >
              {self}
            </div>
          ))}
        </div>
        <div className="flex my-2 justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-500 text-xs">
            <RiPlayList2Fill />
            <p className="text-xs text-gray-400">245 lectures</p>
          </div>
          <div className="flex items-center space-x-2 text-gray-500 text-xs">
            <FaUsers />
            <p className="text-xs text-gray-400">11490 students</p>
          </div>
          <div className="flex items-center space-x-2 text-gray-500 text-xs">
            <MdOutlineAvTimer size={18} />
            <p className="text-xs text-gray-400">48 hours</p>
          </div>
        </div>
        <div className="mt-2 w-full">
          <h1 className="text-gray-500 font-bold text-xl group-hover:text-banner transition-all duration-500 ease-in-out">
            The Complete Web Developer in 2023: Zero to Mastery The Complete Web
          </h1>
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
                  <IoMdCart size={20} className="ml-2 text-gray-400" />
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
