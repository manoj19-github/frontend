"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CgMenuGridR } from "react-icons/cg";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import AppCategory from "./AppCategory";
import useMounted from "@/_hooks/useMounted";

const MainCategory = () => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const isMounted = useMounted();
  if (!isMounted) return <></>;
  return (
    <HoverCard>
      <HoverCardTrigger>
        <button
          aria-haspopup="true"
          onMouseOver={() => setIsMouseOver(true)}
          onMouseOut={() => setIsMouseOver(false)}
          aria-controls="menu"
          className="outline-none focus:outline-none border py-2  px-3  bg-white dark:bg-black rounded-sm flex items-center h-full   space-x-2"
        >
          <CgMenuGridR size={27} className="text-banner dark:text-white" />
          <span className="pr-1 font-semibold flex-1 text-banner dark:text-white">
            Categories
          </span>
          {isMouseOver ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      </HoverCardTrigger>
      <HoverCardContent
        className="lg:w-auto "
        onMouseOut={() => setIsMouseOver(false)}
        onMouseOver={() => setIsMouseOver(true)}
      >
        <AppCategory />
      </HoverCardContent>
    </HoverCard>
  );
};

export default MainCategory;
