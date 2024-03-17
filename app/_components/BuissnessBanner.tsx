import Image from "next/image";
import React, { FC } from "react";

interface BuisnessBannerProps {}
const BuisnessBanner: FC<BuisnessBannerProps> = (): JSX.Element => {
  return (
    <div className="w-[96.6vw] h-[300px] grid grid-cols-3">
      <div className="col-span-1 p-5 flex flex-col gap-y-1 ">
        <Item imageURL={"/instructors.png"} title={"Become an Instructor"} />
        <Item imageURL={"/membership.png"} title={"Gurukul Membership"} />
        <Item imageURL={"/institution.png"} title={"Gurukul Institutions"} />
      </div>
      <div className="col-span-1 p-5 flex flex-col gap-y-1 ">
        <Item imageURL={"/learning.png"} title={"Books & Learning Tools"} />
        <Item imageURL={"/seminar.png"} title={"Gurukul Seminar & Events"} />
      </div>
      <div className="col-span-1  bg-banner flex  p-3  rounded-sm space-x-2">
        <div className="w-1/3 flex flex-col  justify-between ">
          <div className="w-full flex items-center space-x-2 ">
            <div className="w-8 h-8 relative">
              <Image
                src={"/newCourse.svg"}
                alt="logo"
                fill
                className="absolute"
              />
            </div>
            <p className="text-white">Gurukul Buisness</p>
          </div>
          <div className="w-full flex ">
            <p className="text-yellow-300 px-1">
              We provide the bridge between 45,00,000 students and 12000
              Teachers
            </p>
          </div>
          <div className="w-full flex mt-5 ">
            <button className="bg-yellow-300 hover:bg-transparent hover:text-yellow-300 transition-all ease-in-out duration-200  border border-transparent hover:border-yellow-300  text-banner text-sm w-full py-1 mx-auto rounded-md ">
              Join us
            </button>
          </div>
        </div>
        <div className="w-2/3 relative">
          <Image
            src={"/edtech3.png"}
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

export default BuisnessBanner;
