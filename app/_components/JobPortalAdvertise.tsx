import Image from "next/image";
import React from "react";

const JobPortalAdvertise = () => {
  return (
    <div className="w-full py-10 bg-banner px-10 flex flex-wrap gap-x-5">
      <div className="w-[40%] h-[300px] relative rounded-md overflow-hidden">
        <Image src="/image4.jpg" alt="logo" fill objectFit="fill" />
      </div>
      <div className="w-[58%]  ">
        <h1 className="font-bold text-4xl text-btnColor">
          {" "}
          Find Your Dream Job With Saarthi{" "}
        </h1>
        <p className="mt-10 text-white w-8/12 text-lg font-semibold">
          Saarthi is a online job portal collborated with 2.5 Lakh job seekers
          and 5000 companies with 2300+ jobs
        </p>
        <p className="mt-5 text-white text-xs">
          (1300+ Gurukul students find their jobs by using Saarthi)
        </p>
        <button className="mt-6 px-10 font-bold py-3 text-xl bg-btnColor text-banner rounded-sm uppercase">
          Visit Us
        </button>
      </div>
    </div>
  );
};

export default JobPortalAdvertise;
