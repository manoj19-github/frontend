"use client";
import useMounted from "@/_hooks/useMounted";
import SectionTitle from "@/components/SectionTitle";
import { px } from "framer-motion";
import React, { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import Image from "next/image";
import { profile } from "console";

interface InstructorItemProps {
  profileURL: string;
  name: string;
  role: string;
}
const InstructorsItem: FC<InstructorItemProps> = ({
  profileURL,
  name,
  role,
}): JSX.Element => {
  return (
    <div className="w-full w-[500px] h-[460px]   ">
      <div className="w-full h-[300px] rounded-tl-md overflow-hidden relative">
        <Image src={profileURL} alt="instructor" fill objectFit="fill" />
      </div>
      <div className="flex flex-col items-center mt-4">
        <h1 className="font-semibold text-2xl ">Manoj Santra</h1>
        <p className="mt-1 text-md text-gray-500 ">Software Developer</p>
        <button className="mt-5 text-btnColor px-16 py-2 bg-banner rounded-md">
          View Profile
        </button>
      </div>
    </div>
  );
};
interface InstructorsProfileProps {}
const InstructorsProfile: FC<InstructorsProfileProps> = (): JSX.Element => {
  const isMounted = useMounted();
  if (!isMounted) return <></>;
  return (
    <div
      className="w-full flex  py-10 lg:px-10  flex-col "
      style={{
        backgroundImage: `url("/backgroundImage2.jpg")`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex ">
        <SectionTitle title="Instructor" />
      </div>
      <div className="flex  mt-1 text-[40px] justify-between items-center">
        <h1 className="font-bold">Our Professional Instructor </h1>
        <button className="bg-banner text-btnColor px-8 py-2 text-base rounded-md transition-all ease-in-out border border-transparent hover:border-banner hover:bg-transparent hover:text-banner duration-500 flex items-center space-x-2 ">
          <span>View All Teacher</span>
          <HiOutlineArrowSmallRight size={24} />
        </button>
      </div>
      <div className="flex  mt-1">
        <h1 className="text-lg text-gray-400 ">
          You'll find something to spark your curiosity and enhance{" "}
        </h1>
      </div>
      <div className="mt-8">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass="p-1"
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass="mx-10"
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {[...new Array(20)].map((self, index) => (
            <InstructorsItem
              key={index}
              profileURL={"/instructors.jpg"}
              name={""}
              role={""}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default InstructorsProfile;
