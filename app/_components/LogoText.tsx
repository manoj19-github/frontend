import React, { FC } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface LogoProps {
  logoImageStyle?: string;
  logoTextStyle?: string;
  noText?: boolean;
}
const Logo: FC<LogoProps> = ({
  logoImageStyle,
  logoTextStyle,
  noText,
}): JSX.Element => {
  return (
    <div className=" relative flex items-center space-x-2 py-1  ">
      <div
        className={twMerge(
          `relative  h-[65px]
           w-[80px]`,
          logoImageStyle
        )}
      >
        <Image
          fill
          alt="logo"
          src={"/logo2.jpg"}
          className="w-full h-full absolute"
        />
      </div>
      {!noText ? (
        <>
          <p
            className={twMerge(
              ` lg:text-[25px] protest-riot-regular protest-riot-regular heading_fonts text-banner`,
              logoTextStyle
            )}
          >
            Gurukul
          </p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Logo;
