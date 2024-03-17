"use client";

import { useCarousal } from "@/hooks/useCarousal";
import useMounted from "@/hooks/useMounted";
import React, { FC } from "react";

interface HomeCarousalProps {}
const HomeCarousal: FC<HomeCarousalProps> = (): JSX.Element => {
  const carousalHandler = useCarousal({ slidesLength: 5, delayTime: 3000 });
  const isMounted = useMounted();
  if (!isMounted) return <></>;

  return (
    <div
      className="relative p-0 m-0  w-full h-[80vh]"
      onMouseEnter={carousalHandler.handleMouseEvent}
      onMouseLeave={carousalHandler.handleMouseEvent}
    >
      {[...new Array(5)].map((_, index) => (
        <div
          className={`${
            carousalHandler.currIndex - 1 === index ? `show` : `not-show`
          }`}
          key={index}
        >
          <div className="w-full h-full ">
            <Slides />
          </div>
        </div>
      ))}
    </div>
  );
};

interface SlidesProps {}
const Slides: FC<SlidesProps> = (): JSX.Element => {
  return (
    <div
      className="w-full h-full border border-yellow-500 "
      style={{
        backgroundImage: `url('/banner-bg.jpg')`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default HomeCarousal;
