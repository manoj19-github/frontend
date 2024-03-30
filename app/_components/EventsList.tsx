import Image from "next/image";
import React, { FC } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  MdDateRange,
  MdOutlineAccessTime,
  MdOutlineTopic,
} from "react-icons/md";

interface EventsListProps {}
const EventsList: FC<EventsListProps> = (): JSX.Element => {
  return (
    <div className=" overflow-hidden">
      {[...new Array(5)].map((self, index) => (
        <div
          className="w-full py-4 px-3 my-10 bg-white flex  gap-x-3 shadow-md -shadow-md dark:bg-slate-400  group rounded-md border-l-8 border-transparent hover:border-banner transition-all ease-in-out duration-1000"
          key={index}
        >
          <div className="w-4/12 h-[200px] relative">
            <Image src="/events1.jpg" alt="events1" fill objectFit="contain" />
          </div>
          <div className="w-6/12 h-full mt-10 px-4">
            <div className="flex items-center justify-between">
              <div className="w-1/3 flex items-center gap-x-2 dark:text-gray-500 dark:text-slate-700 text-sm text-banner">
                <MdDateRange />
                23 Sep, 2024
              </div>
              <div className="w-1/3 flex items-center gap-x-2 dark:text-gray-500 dark:text-slate-700 text-sm text-banner">
                <MdOutlineAccessTime />
                12.00 PM IST
              </div>
              <div className="w-1/3 flex items-center gap-x-2 dark:text-gray-500 dark:text-slate-700 text-sm text-banner">
                <MdOutlineTopic />
                Software Engineering
              </div>
            </div>
            <div className="w-full flex items-center mt-5">
              <h1 className="text-gray-700 font-bold text-2xl group-hover:text-banner">
                EduFest 2023: Igniting Minds, Transforming Lives
              </h1>
            </div>
          </div>
          <div className="w-2/12 h-full mt-10 px-2  py-8 flex justify-end">
            <button className="text-banner border border-banner text-btnColor rounded-sm px-4 py-2 flex space-x-4 items-center">
              <p className="text-banner">Enroll Now</p>
              <FaArrowRightLong className="text-banner" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
