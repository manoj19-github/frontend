import React, { FC } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
interface CourseInfoSectionProps {}
const CourseInfoSection: FC<CourseInfoSectionProps> = (): JSX.Element => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl text-gray-700 mt-20">About Course</h1>
        <div className="mt-5 text-gray-500 flex flex-wrap text-justify">
          If filmmaking is your passion but you never went to film school you’ve
          come to the right place. Here, you will get hands-on experience and
          acquire skills that you never would’ve elsewhere like learning how to
          make feature films on your own, making do with any equipment, and
          doing it all faster and better.
        </div>
        <h1 className="font-bold text-2xl text-gray-700 mt-10">Description</h1>
        <div className="mt-5 text-gray-500 flex flex-wrap text-justify">
          If filmmaking is your passion but you never went to film school you’ve
          come to the right place. Here, you will get hands-on experience and
          acquire skills that you never would’ve elsewhere like learning how to
          make feature films on your own, making do with any equipment, and
          doing it all faster and better.
        </div>
        <div className="mt-5 text-gray-500 flex flex-wrap text-justify">
          If filmmaking is your passion but you never went to film school you’ve
          come to the right place. Here, you will get hands-on experience and
          acquire skills that you never would’ve elsewhere like learning how to
          make feature films on your own, making do with any equipment, and
          doing it all faster and better.
        </div>
        <div className="mt-5 text-gray-500 flex flex-wrap text-justify">
          If filmmaking is your passion but you never went to film school you’ve
          come to the right place. Here, you will get hands-on experience and
          acquire skills that you never would’ve elsewhere like learning how to
          make feature films on your own, making do with any equipment, and
          doing it all faster and better.
        </div>
        <div className="mt-5 text-gray-500 flex flex-wrap text-justify">
          If filmmaking is your passion but you never went to film school you’ve
          come to the right place. Here, you will get hands-on experience and
          acquire skills that you never would’ve elsewhere like learning how to
          make feature films on your own, making do with any equipment, and
          doing it all faster and better.
        </div>
        <div className="mt-5 text-gray-500 flex flex-wrap text-justify">
          If filmmaking is your passion but you never went to film school you’ve
          come to the right place. Here, you will get hands-on experience and
          acquire skills that you never would’ve elsewhere like learning how to
          make feature films on your own, making do with any equipment, and
          doing it all faster and better.
        </div>
        <div className="mt-5 text-gray-500 flex flex-wrap text-justify">
          If filmmaking is your passion but you never went to film school you’ve
          come to the right place. Here, you will get hands-on experience and
          acquire skills that you never would’ve elsewhere like learning how to
          make feature films on your own, making do with any equipment, and
          doing it all faster and better.
        </div>
      </div>
      <div className="border border-gray-400 mt-5 p-5 rounded-md">
        <h1 className="font-bold text-2xl text-gray-700  ">
          What will you learn
        </h1>
        <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-4">
          <div className="col-span-1 items-center gap-x-3 flex">
            <IoCheckmarkSharp className="text-gray-400" />
            <p className="text-gray-400">Tools you need for best results</p>
          </div>
          <div className="col-span-1 items-center gap-x-3 flex">
            <IoCheckmarkSharp className="text-gray-400" />
            <p className="text-gray-400">Tools you need for best results</p>
          </div>
          <div className="col-span-1 items-center gap-x-3 flex">
            <IoCheckmarkSharp className="text-gray-400" />
            <p className="text-gray-400">Tools you need for best results</p>
          </div>
          <div className="col-span-1 items-center gap-x-3 flex">
            <IoCheckmarkSharp className="text-gray-400" />
            <p className="text-gray-400">Tools you need for best results</p>
          </div>
          <div className="col-span-1 items-center gap-x-3 flex">
            <IoCheckmarkSharp className="text-gray-400" />
            <p className="text-gray-400">Tools you need for best results</p>
          </div>
          <div className="col-span-1 items-center gap-x-3 flex">
            <IoCheckmarkSharp className="text-gray-400" />
            <p className="text-gray-400">Tools you need for best results</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfoSection;
