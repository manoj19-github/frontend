import React from "react";
import Image from "next/image";
const ViewCourseAdvertiseSection = () => {
  return (
    <div className="w-full py-4 px-8 bg-banner flex gap-x-10">
      <div className="w-1/4 h-[280px] relative">
        <Image src={"/image4.png"} alt="logo" fill />
      </div>
      <div className="w-3/4 ">
        <h1 className="text-6xl text-btnColor mt-32 font-bold ">
          Skills Certificate From the Gurukul
        </h1>
        <button className="px-10 py-2 bg-btnColor text-banner lg:mt-5 rounded-sm text-xl">
          View All Course
        </button>
      </div>
    </div>
  );
};

export default ViewCourseAdvertiseSection;
