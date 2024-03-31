import React, { FC } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { IoMdTime } from "react-icons/io";
import { FaShoppingCart, FaRegFileVideo, FaEdit } from "react-icons/fa";
import { FaChartGantt, FaRegCircleCheck } from "react-icons/fa6";

interface CourseSidebarProps {
  isDiscount?: boolean;
}
const CourseSidebar: FC<CourseSidebarProps> = ({ isDiscount }): JSX.Element => {
  return (
    <div className="w-[35%] p-5 bg-transparent flex flex-col justify-center lg:-mt-[200px]">
      <div className=" h-auto lg:py-3 px-4  border border-gray-300 bg-white">
        <div className="w-full h-[300px] relative">
          <Image src={"/courseimagepreview.jpg"} fill alt="logo" />
          <div className="bg-white p-4 absolute z-[5] rounded-full top-[40%] left-[45%]">
            <FaPlay className="text-banner" />
          </div>
        </div>
        <div className="flex gap-x-4 items-center mt-5">
          <div className="flex items-center text-gray-500">
            <FaIndianRupeeSign size={30} />
            <p className="text-3xl font-bold">500</p>
          </div>
          <div
            className="flex items-center text-gray-400 "
            style={{ textDecoration: "line-through" }}
          >
            <FaIndianRupeeSign
              size={20}
              style={{ textDecoration: "line-through" }}
            />
            <p className="text-xl">2300</p>
          </div>
          <div>
            <Badge
              variant={"outline"}
              className="bg-banner text-white text-base"
            >
              45% off
            </Badge>
          </div>
        </div>
        {!isDiscount ? (
          <div className="w-full text-rose-500 gap-x-2 flex items-center mt-3 px-2">
            <IoMdTime />
            <p>2 Day left at this price!</p>
          </div>
        ) : (
          <></>
        )}
        <div className="mt-2">
          <button className="w-full px-3 py-3 bg-banner text-white gap-x-3 flex justify-center rounded-md">
            <FaShoppingCart size={25} />
            <p className="font-bold">Add To Cart</p>
          </button>
          <button className="w-full px-3 py-3 bg-white border border-banner text-banner gap-x-3 flex justify-center mt-3 rounded-md">
            <p className="font-bold">Buy Now</p>
          </button>
        </div>
        <div className="mt-2 text-center mb-1 text-gray-400">
          30-Day Money-Back Guarantee
        </div>
        <div className="mt-2 w-full px-2">
          <h1 className="font-bold text-2xl text-gray-600">
            This course includes:
          </h1>
          <div className="mt-4">
            <div className="mt-2 flex items-center justify-between text-gray-500 border-b border-b-1 border-b-gray-300 pt-1 pb-2">
              <div className="gap-x-3 flex items-center gap-x-3">
                <FaChartGantt size={20} />
                <p>Level</p>
              </div>

              <p>Beginner</p>
            </div>
            <div className="mt-2 flex items-center justify-between text-gray-500 border-b border-b-1 border-b-gray-300 pt-1 pb-2">
              <div className="gap-x-3 flex items-center gap-x-3">
                <IoMdTime size={20} />
                <p>Duration</p>
              </div>

              <p>93 hours</p>
            </div>
            <div className="mt-2 flex items-center justify-between text-gray-500 border-b border-b-1 border-b-gray-300 pt-1 pb-2">
              <div className="gap-x-3 flex items-center gap-x-3">
                <FaRegFileVideo size={20} />
                <p>Subject</p>
              </div>

              <p>Web Development</p>
            </div>
            <div className="mt-2 flex items-center justify-between text-gray-500  py-1">
              <div className="gap-x-3 flex items-center gap-x-3">
                <FaEdit size={20} />
                <p> Last Update</p>
              </div>

              <p>24 Sep , 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-auto lg:py-3 px-4  border border-gray-300 bg-white lg:mt-5 lg:pt-5">
        <div className="mt-4 pb-4 border-b border-gray-300">
          <h1 className="font-bold text-2xl text-gray-600">
            Course Instructor
          </h1>
          <div className="flex items-center gap-x-4 mt-2 ">
            <div className="w-[50px] h-[50px] relative overflow-hidden gap-x-8">
              <Image
                alt="logo"
                src={`https://lh3.googleusercontent.com/ogw/AF2bZygGDKM0T1O1PvWeSy4E1kVLERgBxR40uEnyTmdn=s32-c-mo`}
                fill
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="text-lg text-gray-800 font-semibold">
              Manoj Santra
            </div>
          </div>
        </div>
        <div className="mt-4 pb-1 border-b border-gray-300">
          <h1 className="font-bold text-2xl text-gray-600">
            Material Includes
          </h1>
          <div className="mt-4">
            <div className="flex items-center gap-x-3 my-3">
              <FaRegCircleCheck className="text-banner" />
              <p className="text-gray-400">Hours of live- demo</p>
            </div>
            <div className="flex items-center gap-x-3 my-3">
              <FaRegCircleCheck className="text-banner" />
              <p className="text-gray-400">Hours of live- demo</p>
            </div>
            <div className="flex items-center gap-x-3 my-3">
              <FaRegCircleCheck className="text-banner" />
              <p className="text-gray-400">Hours of live- demo</p>
            </div>
            <div className="flex items-center gap-x-3 my-3">
              <FaRegCircleCheck className="text-banner" />
              <p className="text-gray-400">Hours of live- demo</p>
            </div>
            <div className="flex items-center gap-x-3 my-3">
              <FaRegCircleCheck className="text-banner" />
              <p className="text-gray-400">Hours of live- demo</p>
            </div>
          </div>
        </div>
        <div className="mt-4 pb-1 border-b border-gray-300">
          <h1 className="font-bold text-2xl text-gray-600">Requirements</h1>
          <div className="mt-4">
            <div className="flex items-center gap-x-3 my-3">
              <FaRegCircleCheck className="text-banner" />
              <p className="text-gray-400">
                Familiarity with computers and other devices
              </p>
            </div>
            <div className="flex items-center gap-x-3 my-3">
              <FaRegCircleCheck className="text-banner" />
              <p className="text-gray-400">Access to Adobe Premiere Pro</p>
            </div>
          </div>
        </div>
        <div className="mt-4 pb-1 border-b border-gray-300">
          <h1 className="font-bold text-2xl text-gray-600">Tags</h1>
          <div className="mt-4">
            <div className="flex items-center gap-x-3 gap-y-2 flex-wrap my-3">
              {["UI/UX Design", "Web Development", "Software Programming"].map(
                (self, index) => (
                  <div
                    className="px-3 py-1 border border-banner rounded-md text-gray-700"
                    key={index}
                  >
                    {self}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 pb-1 border-b border-gray-300">
          <h1 className="font-bold text-2xl text-gray-600">Audience</h1>
          <div className="mt-4">
            <div className="flex items-center gap-x-3 my-3">
              <FaRegCircleCheck className="text-banner" />
              <p className="text-gray-400">
                Suitable for beginners and intermediates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;
