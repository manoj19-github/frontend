"use client";
import StarRatingPicker from "@/components/StarRatingPicker";
import React, { FC, useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";

interface CourseReviewWrapperProps {}
const CourseReviewWrapper: FC<CourseReviewWrapperProps> = () => {
  const [progressVal, setProgressVal] = useState<number[]>([]);
  useEffect(() => {
    const timer = setTimeout(() => setProgressVal([100, 78, 60, 35, 82]), 400);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="mt-10">
      <div className=" rounded-md border ">
        <div className="flex items-center justify-between gap-x-8   lg:p-10">
          <div className="h-auto w-1/4 border rounded-md lg:p-10">
            <h1 className="text-3xl font-semibold text-gray-500 lg:text-[80px]  flex justify-center items-center">
              4.5
            </h1>
            <div className="flex items-center justify-center lg:mt-8">
              <StarRatingPicker value={4} size={18} />
            </div>
            <div className="flex items-center justify-center lg:mt-3">
              Out of 5 Rating
            </div>
          </div>
          <div className="h-auto w-3/4 flex flex-col gap-y-6 py-2">
            <div className="w-full flex items-center gap-x-3 ">
              <div className="flex gap-x-2 items-center">
                <FaRegStar size={21} className="text-gray-500" />
                <p>5</p>
              </div>
              <div>
                <Progress
                  value={progressVal.length > 0 ? progressVal[0] : 0}
                  className="lg:w-[470px]"
                />
              </div>
              <div>245 Rating</div>
            </div>
            <div className="w-full flex items-center gap-x-3 ">
              <div className="flex gap-x-2 items-center">
                <FaRegStar size={21} className="text-gray-500" />
                <p>5</p>
              </div>

              <div>
                <Progress
                  value={progressVal.length > 1 ? progressVal[1] : 0}
                  className="lg:w-[470px]"
                />
              </div>

              <div>142 Rating</div>
            </div>
            <div className="w-full flex items-center gap-x-3 ">
              <div className="flex gap-x-2 items-center">
                <FaRegStar size={21} className="text-gray-500" />
                <p>5</p>
              </div>

              <div>
                <Progress
                  value={progressVal.length > 2 ? progressVal[2] : 0}
                  className="lg:w-[470px]"
                />
              </div>

              <div>89 Rating</div>
            </div>
            <div className="w-full flex items-center gap-x-3 ">
              <div className="flex gap-x-2 items-center">
                <FaRegStar size={21} className="text-gray-500" />
                <p>5</p>
              </div>

              <div>
                <Progress
                  value={progressVal.length > 3 ? progressVal[3] : 0}
                  className="lg:w-[470px]"
                />
              </div>

              <div>65 Rating</div>
            </div>
            <div className="w-full flex items-center gap-x-3 ">
              <div className="flex gap-x-2 items-center">
                <FaRegStar size={21} className="text-gray-500" />
                <p>5</p>
              </div>

              <div>
                <Progress
                  value={progressVal.length > 4 ? progressVal[4] : 0}
                  className="lg:w-[470px]"
                />
              </div>

              <div>13 Rating</div>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto h-[1px] bg-gray-300 mb-5" />
        <div className="w-full lg:px-10 lg:pb-5 flex flex-col gap-y-5">
          <CourseReviewBlock />
          <div className="w-11/12 mx-auto h-[1px] bg-gray-300 mb-5" />
          <CourseReviewBlock />
          <div className="w-11/12 mx-auto h-[1px] bg-gray-300 mb-5" />
          <CourseReviewBlock />
        </div>
      </div>
    </div>
  );
};

interface CourseReviewBlockProps {}
export const CourseReviewBlock: FC<
  CourseReviewBlockProps
> = (): JSX.Element => {
  return (
    <div className=" flex flex-col gap-y-6 ">
      <div className="w-full flex gap-x-5">
        <div className="w-[80px] h-[80px] rounded-md relative">
          <Image
            alt="logo"
            src={`/instrutor.jpg`}
            fill
            objectFit="contain"
            className="absolute rounded-md"
          />
        </div>
        <div className="my-2">
          <h1 className="text-xl font-semibold">Manoj Santra</h1>
          <div className="mt-2 gap-x-5 flex">
            <StarRatingPicker value={4} size={24} />
            <p className="font-bold text-lg">a week ago</p>
          </div>
        </div>
      </div>
      <div className="mt-2 text-gray-400">
        I still have a lot of studying to do using this course and the other
        practice exams, but so far it's been great! I have not taken my
        Security+ exam as well, so I'll update this at a later time.
      </div>
      <div className="flex items-center gap-x-10">
        <div className="mt-2 text-gray-400 gap-x-5">
          <AiOutlineLike className="" size={24} />
        </div>
        <div className="mt-2 text-gray-400 gap-x-5">
          <MdFavoriteBorder size={24} />
        </div>
      </div>
    </div>
  );
};

export default CourseReviewWrapper;
