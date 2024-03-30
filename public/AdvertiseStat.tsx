import React, { FC } from "react";
import Image from "next/image";
import CountUpComponent from "@/components/CountUpComponent";

interface AdvertiseStatProps {}
const AdvertiseStat: FC<AdvertiseStatProps> = () => {
  return (
    <div className="w-full bg-banner py-10 flex justify-between items-center ">
      <div className="w-full flex flex-col space-y-3  items-center">
        <div className="w-10 h-10 relative">
          <Image
            src="/advertise.svg"
            alt="advertise"
            fill
            objectFit="contain"
          />
        </div>
        <div className="mt-2 text-white font-bold">
          <CountUpComponent
            startNumber={0}
            endNumber={23500}
            duration={3.5}
            separator={" , "}
            decimals={0}
            decimal={" , "}
          />
        </div>
        <p className="text-white mt-1">Students Enrolled</p>
      </div>
      <div className="w-full flex flex-col space-y-3  items-center">
        <div className="w-10 h-10 relative">
          <Image
            src="/advertiseStat1.svg"
            alt="advertise"
            fill
            objectFit="contain"
          />
        </div>
        <div className="mt-2 text-white font-bold">
          <CountUpComponent
            startNumber={0}
            endNumber={23500}
            duration={3.5}
            separator={" , "}
            decimals={0}
            decimal={" , "}
          />
        </div>
        <p className="text-white mt-1">Students Enrolled</p>
      </div>
      <div className="w-full flex flex-col space-y-3  items-center">
        <div className="w-10 h-10 relative">
          <Image
            src="/advertiseStat2.svg"
            alt="advertise"
            fill
            objectFit="contain"
          />
        </div>
        <div className="mt-2 text-white font-bold">
          <CountUpComponent
            startNumber={0}
            endNumber={23500}
            duration={3.5}
            separator={" , "}
            decimals={0}
            decimal={" , "}
          />
        </div>

        <p className="text-white mt-1">Students Enrolled</p>
      </div>
      <div className="w-full flex flex-col space-y-3  items-center">
        <div className="w-10 h-10 relative">
          <Image
            src="/advertiseStat4.svg"
            alt="advertise"
            fill
            objectFit="contain"
          />
        </div>
        <div className="mt-2 text-white font-bold">
          <CountUpComponent
            startNumber={0}
            endNumber={23500}
            duration={3.5}
            separator={" , "}
            decimals={0}
            decimal={" , "}
          />
        </div>
        <p className="text-white mt-1">Students Enrolled</p>
      </div>
    </div>
  );
};

export default AdvertiseStat;
