"use client";
import useOutsideAlerter from "@/_hooks/useOutsideRenderer";
import React, { FC, Fragment, useRef, useState } from "react";
interface CourseNavbarProps {}
const CourseNavbar: FC<CourseNavbarProps> = (): JSX.Element => {
  const [isMouseOver, setIsMouseOver] = useState<string>("");
  const closeInfo = () => {
    setIsMouseOver("");
  };
  const wrapperRef = useRef<any>(null);
  useOutsideAlerter(wrapperRef, closeInfo);
  return (
    <Fragment>
      <div className="w-full px-5 flex flex-row items-center" ref={wrapperRef}>
        <div
          className={`cursor-pointer ${
            isMouseOver === "Software Development"
              ? `bg-banner dark:bg-white text-white dark:text-black`
              : `text-black  dark:text-white`
          }    w-full text-center p-2 text-sm rounded-t-sm`}
          onMouseOver={() => setIsMouseOver("Software Development")}
        >
          Software Development
        </div>
        <div
          className={`cursor-pointer ${
            isMouseOver === "Buisness Adminstration"
              ? `bg-banner dark:bg-white text-white dark:text-black`
              : `text-black  dark:text-white`
          }    w-full text-center p-2 text-sm rounded-t-sm`}
          onMouseOver={() => setIsMouseOver("Buisness Adminstration")}
        >
          Buisness Adminstration
        </div>
        <div
          className={`cursor-pointer ${
            isMouseOver === "Finance & Accountancy"
              ? `bg-banner dark:bg-white text-white dark:text-black`
              : `text-black  dark:text-white`
          }    w-full text-center p-2 text-sm rounded-t-sm`}
          onMouseOver={() => setIsMouseOver("Finance & Accountancy")}
        >
          Finance & Accountancy
        </div>
        <div
          className={`cursor-pointer ${
            isMouseOver === "Personal Development"
              ? `bg-banner dark:bg-white text-white dark:text-black`
              : `text-black  dark:text-white`
          }    w-full text-center p-2 text-sm rounded-t-sm`}
          onMouseOver={() => setIsMouseOver("Personal Development")}
        >
          Personal Development
        </div>
        <div
          className={`cursor-pointer ${
            isMouseOver === "Sales & Marketing"
              ? `bg-banner dark:bg-white text-white dark:text-black`
              : `text-black  dark:text-white`
          }    w-full text-center p-2 text-sm rounded-t-sm`}
          onMouseOver={() => setIsMouseOver("Sales & Marketing")}
        >
          Sales & Marketing
        </div>
        <div
          className={`cursor-pointer ${
            isMouseOver === "Health & Marketing"
              ? `bg-banner dark:bg-white text-white dark:text-black`
              : `text-black  dark:text-white`
          }    w-full text-center p-2 text-sm rounded-t-sm`}
          onMouseOver={() => setIsMouseOver("Health & Marketing")}
        >
          Health & Marketing
        </div>
        <div
          onMouseOver={() => setIsMouseOver("Music")}
          className={`cursor-pointer ${
            isMouseOver === "Music"
              ? `bg-banner dark:bg-white text-white dark:text-black`
              : `text-black  dark:text-white`
          }    w-full text-center p-2 text-sm rounded-t-sm`}
        >
          Music
        </div>
      </div>
      {isMouseOver.length > 1 ? (
        <div className="w-full px-5 flex flex-row items-center dark:bg-white bg-banner">
          <div className="cursor-pointer dark:text-black   w-full p-2 text-sm text-white hover:underline underline-offset-2 transition-all duration-200">
            IT & Software Development
          </div>
          <div className="cursor-pointer dark:text-black   w-full p-2 text-sm text-white hover:underline underline-offset-2 transition-all duration-200">
            Buisness Adminstration
          </div>
          <div className="cursor-pointer dark:text-black   w-full p-2 text-sm text-white hover:underline underline-offset-2 transition-all duration-200">
            Finance & Accountancy
          </div>
          <div className="cursor-pointer dark:text-black   w-full p-2 text-sm text-white hover:underline underline-offset-2 transition-all duration-200">
            Personal Development
          </div>
          <div className="cursor-pointer dark:text-black   w-full p-2 text-sm text-white hover:underline underline-offset-2 transition-all duration-200">
            Sales & Marketing
          </div>
          <div className="cursor-pointer dark:text-black   w-full p-2 text-sm text-white hover:underline underline-offset-2 transition-all duration-200">
            Health & Marketing
          </div>
          <div className="cursor-pointer dark:text-black   w-full p-2 text-sm text-white hover:underline underline-offset-2 transition-all duration-200">
            Music
          </div>
        </div>
      ) : (
        <></>
      )}
    </Fragment>
  );
};

export default CourseNavbar;
