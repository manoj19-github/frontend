import React, { FC } from "react";
import Image from "next/image";
interface SectionTitleProps {
  title: string;
  iswhite?: boolean;
}
const SectionTitle: FC<SectionTitleProps> = ({ title, iswhite }) => {
  return (
    <div className="flex items-center space-x-4 ">
      <div className="relative h-8 w-8">
        <Image
          src={iswhite ? "/bulbwhite.png" : "/bulb_image.png"}
          fill
          alt="logo"
        />
      </div>
      <p className={` ${iswhite ? `text-white` : `text-banner`}  text-lg`}>
        {title}
      </p>
    </div>
  );
};

export default SectionTitle;
