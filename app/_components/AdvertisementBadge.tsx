"use client";
import useMounted from "@/_hooks/useMounted";
import React from "react";
import ReactCurvedText from "react-curved-text";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import { IoBookSharp } from "react-icons/io5";
const AdvertisementBadge = () => {
  const isMounted = useMounted();
  if (!isMounted) return <></>;
  return (
    <div className="absolute w-40 h-40 rounded-full   z-[100] top-[45%] left-[25%]  flex items-center justify-center ">
      <IoBookSharp className="absolute left-[42%] text-white" size={24} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlLang="en"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 500 500"
        className="bg-[rgba(0,0,0,0.5)] rounded-full svg_rounded"
      >
        <title>Circular Text Path</title>
        <defs>
          <path
            id="textcircle"
            d="M250,400
                       a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
            transform="rotate(12,250,250)"
          />
        </defs>
        <g className="textcircle">
          <text textLength="940" className="rotateText">
            <textPath
              xlinkHref="#textcircle"
              aria-label="CSS & SVG are awesome"
              textLength="940"
            >
              Educating The Mind • Reaching the Heart •{" "}
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};

export default AdvertisementBadge;
