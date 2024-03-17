import Image from "next/image";
import React, { FC } from "react";

interface HomeBannerProps {}
const HomeBanner: FC<HomeBannerProps> = (): JSX.Element => {
  return (
    <div className="w-[96.6vw] h-auto grid grid-cols-3">
      <div className="col-span-1 p-5 flex flex-col gap-y-1 ">
        <Item imageURL={"/online_course.png"} title={"Online Course"} />
        <Item imageURL={"/distance_learning.png"} title={"Distance Learning"} />
        <Item imageURL={"/motivational.png"} title={"Motivational Course"} />
        <Item imageURL={"/language_academy.png"} title={"Language Academy"} />
        <Item imageURL={"/buisness_coach.png"} title={"School Of  Buisness"} />
      </div>
      <div className="col-span-1 p-5 flex flex-col gap-y-1 ">
        <Item imageURL={"/kitchen_course.png"} title={"Kitchen Course"} />
        <Item imageURL={"/gym_course.png"} title={"Gym Instructors"} />
        <Item imageURL={"/gurukul_news.png"} title={"Gurukul News & Blogs"} />
        <Item imageURL={"/daliy_quiz.png"} title={"Daliy Quiz Contest"} />
        <Item imageURL={"/live_classes.png"} title={"Online Live Classes"} />
      </div>
      <div className="col-span-1 h-full bg-banner flex  p-3  rounded-sm space-x-2">
        <div className="w-1/2 flex flex-col space-y-10 mt-16 justify-between mb-10">
          <div className="w-full flex items-center space-x-2 ">
            <div className="w-8 h-8 relative">
              <Image
                src={"/newCourse.svg"}
                alt="logo"
                fill
                className="absolute"
              />
            </div>
            <p className="text-white">Learn Online</p>
          </div>
          <div className="w-full flex mt-10">
            <p className="text-yellow-300 px-1">
              Build your skills & certificates from Gurukul Online course
            </p>
          </div>
          <div className="w-full flex mt-5 ">
            <button className="bg-yellow-300 hover:bg-transparent hover:text-yellow-300 transition-all ease-in-out duration-200  border border-transparent hover:border-yellow-300  text-banner text-sm w-full py-1 mx-auto rounded-md ">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-1/2 relative">
          <Image
            src={"/homemenu.png"}
            alt="logo"
            fill
            className="absolute"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

interface ItempProps {
  imageURL: string;
  title: string;
}
const Item: FC<ItempProps> = ({ imageURL, title }) => {
  return (
    <div className="w-full flex items-center space-x-8 p-1 px-2 rounded-md cursor-pointer group dark:hover:bg-slate-800 hover:bg-gray-300">
      <div className="p-1 dark:bg-white bg-gray-200 flex items-center justify-center rounded-full">
        <div className="relative w-10 h-10">
          <Image
            // src="/online_course.png"
            src={imageURL}
            alt="online"
            fill
            className="absolute"
          />
        </div>
      </div>
      <p className="w-full group-hover:text-banner group-hover:font-bold transition-all duration-200 ease-in-out">
        {title}
      </p>
    </div>
  );
};

export default HomeBanner;
