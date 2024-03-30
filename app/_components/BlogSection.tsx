"use client";
import useMounted from "@/_hooks/useMounted";
import SectionTitle from "@/components/SectionTitle";
import { px } from "framer-motion";
import React, { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { FaRegCalendar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
interface BlogSectionProps {
  profileURL: string;
  name: string;
  role: string;
}
const BlogSection: FC<BlogSectionProps> = ({
  profileURL,
  name,
  role,
}): JSX.Element => {
  return (
    <div className="w-full w-[500px] h-[500px]  group   cursor-pointer ">
      <div className="w-full h-[300px] rounded-tl-md overflow-hidden relative">
        <Image src={profileURL} alt="instructor" fill objectFit="fill" />
      </div>
      <div className="flex mt-4 mx-2 items-center justify-around">
        <div className="my-2 flex justify-between items-center space-x-2 text-gray-500">
          <FaRegCalendar />
          <span>Oct 24, 2023</span>
        </div>
        <div className="my-2 flex justify-between items-center space-x-2 text-gray-500">
          <FaUser />
          <span>Manoj Santra</span>
        </div>
      </div>
      <div className="mt-1 w-full">
        <h1 className="text-2xl font-semibold flex flex-wrap mx-2 group-hover:text-banner transition-all duration-500 ease-in-out">
          Azure AI Fundamentals: How to pass the AI-900 Exam
        </h1>
      </div>
      <div className="mt-5 mx-1 w-full">
        <button className="px-6 py-2 group-hover:text-white group-hover:bg-banner text-banner border border-banner group-hover:border-transparent rounded-sm gap-x-2 flex  items-center">
          <span>Read More</span>
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};
interface BlogSectionContainerProps {}
const BlogSectionContainer: FC<BlogSectionContainerProps> = (): JSX.Element => {
  const isMounted = useMounted();
  if (!isMounted) return <></>;
  return (
    <div className="w-full flex  py-10 lg:px-10  flex-col ">
      <div className="flex ">
        <SectionTitle title="News & Article" />
      </div>
      <div className="flex  mt-1 text-[40px] justify-between items-center">
        <h1 className="font-bold">Read Our Latest News</h1>
        <button className="bg-banner text-btnColor px-8 py-2 text-base rounded-md transition-all ease-in-out border border-transparent hover:border-banner hover:bg-transparent hover:text-banner duration-500 flex items-center space-x-2 ">
          <span>View All News </span>
          <HiOutlineArrowSmallRight size={24} />
        </button>
      </div>
      <div className="flex  mt-1">
        <h1 className="text-lg text-gray-400 ">
          You'll find something to spark your curiosity and enhance{" "}
        </h1>
      </div>
      <div className="my-8">
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
            <BlogSection
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

export default BlogSectionContainer;
