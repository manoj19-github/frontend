import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionSingleProps } from "@radix-ui/react-accordion";
import { BsDot } from "react-icons/bs";
import { FC, ReactElement } from "react";
import { MdOutlineSlowMotionVideo, MdOndemandVideo } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { twMerge } from "tailwind-merge";

interface CourseAccordionWrapperProps {
  // isContentLock?: boolean;
}

const CourseAccordionWrapper: FC<
  CourseAccordionWrapperProps
> = (): JSX.Element => {
  return (
    <Accordion type={"single"} collapsible className="w-full">
      {[...new Array(10)].map((self, index) => (
        <AccordionItem value={`item-${index}`} className=" " key={index}>
          <AccordionTrigger
            className={
              " !no-underline hover:no-underline pb-5  pt-4  px-4 flex items-center justify-between"
            }
          >
            <div className="flex items-center gap-x-2">
              <MdOutlineSlowMotionVideo />
              <p>Introduction</p>
            </div>
            <div className="flex items-center ">
              <p>89 Lectures</p>
              <BsDot />
              <p>5.24 Hrs</p>
            </div>
          </AccordionTrigger>
          <AccordionContent
            className={"pt-4 pb-4 lg:px-4 border-t flex flex-col gap-y-6"}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-2">
                <MdOndemandVideo />
                <p className="text-banner underline underline-offset-2">
                  Introduction to the course
                </p>
              </div>
              <div className="flex items-center ">
                {index > 0 && index % 3 === 0 ? (
                  <CiLock size={22} className="text-banner" />
                ) : (
                  <p className="text-banner underline underline-offset-1 cursor-pointer">
                    Preview
                  </p>
                )}

                <BsDot />
                <p>5.24 Hrs</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-2">
                <MdOndemandVideo />
                <p className="text-banner underline underline-offset-2">
                  Introduction to the course
                </p>
              </div>
              <div className="flex items-center ">
                {index && index % 3 == 0 ? (
                  <CiLock size={22} className="text-banner" />
                ) : (
                  <p className="text-banner underline underline-offset-1 cursor-pointer">
                    Preview
                  </p>
                )}

                <BsDot />
                <p>5.24 Hrs</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default CourseAccordionWrapper;
