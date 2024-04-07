"use client";
import React, { FC } from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { GoDash } from "react-icons/go";
import { CgMenuGridR } from "react-icons/cg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StatBanner from "./StatBanner";
import { register } from "module";

interface BannerSectionProps {}
const BannerSection: FC<BannerSectionProps> = () => {
  const registerClick = () => {
    document
      .getElementById("registration_instructor")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative w-full h-full">
      <div
        className=" w-full px-2 h-screen flex  justify-between pt-2 mt-1"
        style={{
          backgroundImage: `url("/courseBanner.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[65%] h-full lg:pt-16 px-3">
          <SectionTitle title="Gateway to Lifelong Learning" iswhite />;
          <h1 className="text-5xl lg:text-[90px] text-white font-bold">
            Become an Instructor
          </h1>
          <p className="text-white text-lg font-bold mt-4">
            We Have 30k+ Online Courses, 2450+ Qualified Teachers and 300k+
            Online Registered Student.
          </p>
          <div className="mt-10 mb-6">
            <button
              onClick={registerClick}
              className="rounded-md border-white border py-3 px-8 text-white hover:bg-white hover:border-tansparent hover:text-banner transition-all ease-in-out duration-500"
            >
              Register As Instructor
            </button>
          </div>
          <h1 className="text-[#fbbf24] lg:mt-4 pacifico-regular lg:text-[50px]  text-shadow">
            if you have to put someone on a pedestal, put teachers. They are
            society&apos;s heroes.
          </h1>
          <div className="flex justify-end text-white lg:w-[80%] gap-x-2 items-center font-bold">
            <GoDash size={50} />
            <span className="text-lg">Guy Kawasaki</span>
          </div>
        </div>
        <div className="w-[35%] h-[85%] relative">
          <Image
            src={"/becomeinstructor.png"}
            alt="logo"
            fill
            objectFit="contain"
            className="absolute"
          />
        </div>
      </div>
      <div className="absolute w-full top-[85%] ">
        <StatBanner />
      </div>
    </div>
  );
};

export default BannerSection;
