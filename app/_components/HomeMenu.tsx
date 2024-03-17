"use client";
import React, { FC, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import HomeBanner from "./HomeBanner";
import { ChevronDown, ChevronUp } from "lucide-react";

interface HomeMenuProps {}
const HomeMenu: FC<HomeMenuProps> = (): JSX.Element => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  return (
    <HoverCard>
      <HoverCardTrigger
        className="flex items-center gap-x-2 cursor-pointer"
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
      >
        <span>Home</span>
        {isMouseOver ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </HoverCardTrigger>
      <HoverCardContent
        className="w-auto"
        onMouseOut={() => setIsMouseOver(false)}
        onMouseOver={() => setIsMouseOver(true)}
      >
        <HomeBanner />
      </HoverCardContent>
    </HoverCard>
  );
};

export default HomeMenu;
