import React from "react";
import Image from "next/image";

const AppCategory = () => {
  return (
    <div className=" ">
      <div className="grid grid-cols-12 w-full h-full gap-5">
        {[...new Array(12)].map((self, index) => (
          <div
            className="flex flex-row  col-span-3 space-x-4 items-center shadow-sm  px-3 py-1 w-full"
            key={index}
          >
            <div className="h-10 w-10 relative ">
              <Image src={"/development.svg"} alt="development" fill />
            </div>
            <div className="flex flex-col ">
              <p>Development</p>
              <p className="text-slate-400">130+ courses</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppCategory;
