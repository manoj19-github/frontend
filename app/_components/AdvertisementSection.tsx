import Image from "next/image";
import ReactCurvedText from "react-curved-text";

import React, { FC } from "react";
import AdvertisementBadge from "./AdvertisementBadge";
import SectionTitle from "@/components/SectionTitle";
import AdvertisementDetails from "./AdvertisementDetails";

interface AdvertisementSectionProps {}
const AdvertisementSection: FC<AdvertisementSectionProps> = () => {
  return (
    <div
      className="w-full flex  justify-between  rea px-2 py-10  "
      style={{
        backgroundImage: `url("/choooseus4.jpg")`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-1/2 lg:py-10 lg:px-12 flex gap-x-4 relative">
        <AdvertisementBadge />

        <div className="lg:w-4/12 h-[580px] relative rounded-lg overflow-hidden ">
          <Image src={"/chooseus3.jpg"} alt="chooseus" fill objectFit="cover" />
        </div>
        <div className="lg:w-8/12 h-[580px] relative lg:mt-10 rounded-lg overflow-hidden ">
          <Image src={"/chooseus.jpg"} alt="chooseus" fill objectFit="cover" />
        </div>
      </div>
      <div className="w-1/2 lg:py-16 lg:px-12 flex gap-x-4 relative  flex flex-col ">
        <AdvertisementDetails />
      </div>
    </div>
  );
};

export default AdvertisementSection;
