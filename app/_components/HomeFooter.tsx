import React, { FC } from "react";
import Logo from "./LogoText";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";

interface HomeFooterProps {}
const HomeFooter: FC<HomeFooterProps> = () => {
  return (
    <div className="w-full lg:px-10 relative lg:mb-5">
      <div className="flex flex-row items-center justify-between gap-x-4">
        <div className="w-[20%]">
          <Logo />
        </div>
        <div className="w-[20%]">
          <h1 className="font-bold text-xl">Quick links</h1>
        </div>
        <div className="w-[20%]">
          <h1 className="font-bold text-xl">Explore</h1>
        </div>
        <div className="w-[20%]">
          <h1 className="font-bold text-xl">Newsletter</h1>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mt-4 gap-x-4">
        <div className="w-[20%]">
          <p>
            We are passionate education dedicated to providing high-quality
            resources learners all backgrounds
          </p>
          <div className="flex justify-between items-center mt-5 ">
            <FaFacebook size={25} className="text-banner" />
            <FaInstagramSquare size={25} className="text-banner" />
            <FaLinkedin size={25} className="text-banner" />
          </div>
        </div>
        <div className="w-[20%]">
          <p className="mb-3 text-gray-500 text-gray-500 hover hover:underline underline-offset-2 duration-200 ease-in-out transition-all cursor-pointer">
            Latest Courses
          </p>
          <p className="my-3 text-gray-500 hover hover:underline underline-offset-2 duration-200 ease-in-out transition-all cursor-pointer">
            Mission & Vision
          </p>
          <p className="my-3 text-gray-500 hover hover:underline underline-offset-2 duration-200 ease-in-out transition-all cursor-pointer">
            Gurukul Live Classes
          </p>
          <p className="my-3 text-gray-500 hover hover:underline underline-offset-2 duration-200 ease-in-out transition-all cursor-pointer">
            Pricing Plan
          </p>
        </div>
        <div className="w-[20%]">
          <p className="mb-3 text-gray-500 text-gray-500 hover hover:underline underline-offset-2 duration-200 ease-in-out transition-all cursor-pointer">
            Latest Courses
          </p>
          <p className="my-3 text-gray-500 hover hover:underline underline-offset-2 duration-200 ease-in-out transition-all cursor-pointer">
            Mission & Vision
          </p>
          <p className="my-3 text-gray-500 hover hover:underline underline-offset-2 duration-200 ease-in-out transition-all cursor-pointer">
            Gurukul Live Classes
          </p>
          <p className="my-3 text-gray-500 hover hover:underline underline-offset-2 duration-200 ease-in-out transition-all cursor-pointer">
            Pricing Plan
          </p>
        </div>
        <div className="w-[20%]">
          <p className="mb-3 text-gray-500 text-gray-500 hover hover:underline underline-offset-2 duration-200 ease-in-out transition-all cursor-pointer">
            Subscribe Our Newsletter get updated our new course
          </p>
          <div className="my-2 w-full">
            <input
              type="text"
              className="outline-none focus:outline-none py-1 rounded-md border px-2"
              placeholder="Enter your email"
            />
            <div className="flex items-center space-x-2 mt-3">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-500 leading-5"
              >
                I agree to the terms of use and privacy policy
              </label>
            </div>
            <button className="outline-none py-2 px-4 border border-banner rounded-md text-banner mt-5 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
