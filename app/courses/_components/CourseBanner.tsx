import React from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { CgMenuGridR } from "react-icons/cg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const CourseBanner = () => {
  return (
    <div
      className=" w-full px-2 h-[450px] flex items-center justify-between pt-2 mt-1"
      style={{
        backgroundImage: `url("/courseBanner.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[50%] h-full py-4 px-3">
        <SectionTitle title="Gateway to Lifelong Learning" iswhite />;
        <h1 className="text-5xl text-white font-bold">
          Welcome to Your Online
        </h1>
        <h1 className="text-5xl text-white font-[400] mt-3 pl-1">
          Learning Journey
        </h1>
        <p className="text-white text-lg font-bold mt-4">
          We Have 30k+ Online Courses & 300k+ Online Registered Student.
        </p>
        <div className=" bg-white rounded-md mt-8 p-2 flex items-center">
          <CgMenuGridR size={26} className="text-banner mr-1" />
          <Select>
            <SelectTrigger className="w-[180px] border-none focus:border-none focus:outline-none outline-none">
              <SelectValue
                placeholder="All Category"
                className="placeholder:text-banner text-banner"
              />
            </SelectTrigger>
            <SelectContent className="text-banner">
              <SelectItem className="text-banner" value="light">
                All Category
              </SelectItem>
              <SelectItem className="text-banner" value="dark">
                Dark
              </SelectItem>
              <SelectItem className="text-banner" value="system">
                System
              </SelectItem>
            </SelectContent>
          </Select>

          <input
            type="text"
            placeholder="Find Your Course"
            className="border-none outline-none placeholder:text-gray-400 ml-2 w-full mr-2"
          />
          <button className="bg-[#553cde] rounded-md text-white py-2 px-4">
            Search
          </button>
        </div>
        <div className="mt-5 flex flex-wrap gap-x-3 items-center gap-y-3">
          {[
            "UI/UX Design",
            "Marketing",
            "Buisness",
            "Finance",
            "Cooking",
            "SEO",
            "Software Development",
            "Digital Marketing",
            "Lifestyle",
            "Music",
            "Dancing",
            "Language",
          ].map((self, index) => (
            <div
              className="p-2 text-white rounded-md border border-white"
              key={index}
            >
              {self}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[50%] h-full relative">
        <Image
          src={"/image5.png"}
          alt="logo"
          fill
          objectFit="contain"
          className="absolute"
        />
      </div>
    </div>
  );
};

export default CourseBanner;
