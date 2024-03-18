import React, { FC } from "react";
import Image from "next/image";
interface SectionTitleProps {
  title: string;
}
const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="flex items-center space-x-4 ">
      <div className="relative h-8 w-8">
        <Image src={"/bulb_image.png"} fill alt="logo" />
      </div>
      <p className="text-banner text-lg">{title}</p>
    </div>
  );
};

export default SectionTitle;
