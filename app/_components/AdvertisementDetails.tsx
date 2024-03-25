import SectionTitle from "@/components/SectionTitle";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import React, { FC, Fragment } from "react";
import Image from "next/image";
import { ADVERTISEMENT_TOPICS } from "@/environment";

interface AdvertiseBannerBtnProps {
  image: string;
  title: string;
}
const AdvertiseBannerBtn: FC<AdvertiseBannerBtnProps> = ({
  image,
  title,
}): JSX.Element => {
  return (
    <div className="col-span-1 border border-white rounded-sm flex items-center space-x-4 px-3 py-2">
      <div className="relative w-10 h-10">
        <Image src={image} alt={image} fill objectFit={"contain"} />
      </div>
      <div className="text-sm text-white">{title}</div>
    </div>
  );
};

interface AdvertisementDetailsProps {}
const AdvertisementDetails: FC<AdvertisementDetailsProps> = (): JSX.Element => {
  return (
    <Fragment>
      <SectionTitle title="Why Choose Us" iswhite />
      <div className="mt-4 w-full">
        <h1 className="font-bold text-4xl text-white">
          Gurukul Your Path to Excellence & Success
        </h1>
      </div>
      <div className="mt-3">
        <p className="text-white text-base">
          We are passionate about education and dedicated to providing high-
          quality learning resources for learners of all backgrounds.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-5">
        {ADVERTISEMENT_TOPICS.map((self, index) => (
          <AdvertiseBannerBtn
            key={index}
            title={self.title}
            image={self.image}
          />
        ))}
      </div>
      <div className="mt-10 w-full flex  items-center">
        <button className=" text-banner bg-btnColor px-4 py-2 font-bold rounded-md hover:bg-transparent border border-transparent hover:border-btnColor hover:text-btnColor transition-all duration-500 ease-linear flex items-center gap-x-3">
          <span>View All Courses</span>
          <HiOutlineArrowSmallRight size={25} />
        </button>
      </div>
    </Fragment>
  );
};

export default AdvertisementDetails;
