import React, { FC } from "react";
import Image from "next/image";
import StarRatingPicker from "@/components/StarRatingPicker";
import { RiPlayList2Fill } from "react-icons/ri";
import { FaUsers, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";

interface InstructorProfileProps {}
const InstructorProfile: FC<InstructorProfileProps> = (): JSX.Element => {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-x-2 ">
      <div className="w-1/4 lg:h-[200px] relative rounded-md">
        <Image
          alt="logo"
          src={`/instrutor.jpg`}
          fill
          objectFit="contain"
          className="absolute"
        />
      </div>
      <div className="h-full w-3/4 flex flex-col gap-y-2">
        <h1 className="font-bold text-2xl text-gray-700 capitalize">
          Manoj Santra
        </h1>
        <p>MERN Stack Developer</p>
        <div className="flex lg:flex-row gap-x-8">
          <div className="flex items-center gap-x-2">
            <h3 className="font-bold">4.5</h3>
            <StarRatingPicker count={5} value={4} />
          </div>
          <div className="flex items-center gap-x-2">
            <FaUsers className="text-gray-500" size={22} />
            <p className="text-gray-500">1323 Students</p>
          </div>
          <div className="flex items-center gap-x-2">
            <RiPlayList2Fill className="text-gray-500" size={22} />
            <p className="text-gray-500">13 Courses</p>
          </div>
        </div>
        <div className="flex lg:flex-row text-base mt-2">
          William U. Peña, MBA, CISSP No. 349867, is a former college professor
          and the lead instructor at Dion Training Solutions.
        </div>
        <div className="flex lg:flex-row text-base mt-2 gap-x-4 items-center">
          <div className="text-gray-500">Follow</div>
          <div className="flex flex-row gap-x-6 items-center">
            <FaYoutube className="text-gray-500" size={21} />
            <FaFacebook className="text-gray-500" size={21} />
            <FaLinkedin className="text-gray-500" size={21} />
          </div>
        </div>
      </div>
    </div>
  );
};
interface CourseInstructorsProps {}
const CourseInstructors: FC<CourseInstructorsProps> = (): JSX.Element => {
  return (
    <div className="mt-10 flex flex-col gap-y-8">
      <div className="lg:p-10 rounded-md border">
        <InstructorProfile />
      </div>
      <div className="lg:p-10 rounded-md border">
        <InstructorProfile />
      </div>
    </div>
  );
};

export default CourseInstructors;
