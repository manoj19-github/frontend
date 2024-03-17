"use client";
import React, { FC } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import useAppTheme from "@/_hooks/useAppTheme";
import useMounted from "@/_hooks/useMounted";

interface LogoProps {}
const Logo: FC<LogoProps> = ({}): JSX.Element => {
  const { currTheme, toggleTheme, getCurrentTheme } = useAppTheme();
  const { setTheme, theme } = useTheme();
  console.log("theme: ", theme);
  console.log("currTheme: ", currTheme);
  const isMounted = useMounted();
  if (!isMounted) return <></>;
  return (
    <div className=" relative flex items-center space-x-2 py-1  ">
      <div
        className={`relative  h-[65px]
           w-[80px]`}
      >
        <Image
          fill
          alt="logo"
          src={
            ["light", null].includes(
              JSON.parse(
                JSON.stringify(window.localStorage.getItem("gurukul-themes"))
              )
            )
              ? "/logo2.jpg"
              : "/logo_dark.png"
          }
          className="w-full h-full absolute"
        />
      </div>
      <p className="  lg:text-[25px] protest-riot-regular protest-riot-regular heading_fonts text-banner">
        Gurukul
      </p>
    </div>
  );
};

export default Logo;
