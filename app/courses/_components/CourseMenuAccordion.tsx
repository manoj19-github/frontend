import React, { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

interface CourseMenuAccordionProps {}
const CourseMenuAccordion: FC<CourseMenuAccordionProps> = () => {
  return (
    <div className="px-2">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:underline-none hover:border-none hover:no-underline">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="space-y-5">
            <CourseMenuItem />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

interface CourseMenuItemProps {}
const CourseMenuItem: FC<CourseMenuItemProps> = (): JSX.Element => {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms2" />
      <div className=" leading-none cursor-pointer flex justify-between  w-full">
        <label
          htmlFor="terms3"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex justify-between "
        >
          Accept and get out from this way
        </label>
        <p>(23400)</p>
      </div>
    </div>
  );
};

export default CourseMenuAccordion;
