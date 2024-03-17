"use client";
import React, { FC, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import HomeBanner from "./HomeBanner";
import { ChevronDown, ChevronUp } from "lucide-react";
import BuisnessBanner from "./BuissnessBanner";

interface BuisnessMenuProps {}
const BuisnessMenu: FC<BuisnessMenuProps> = (): JSX.Element => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  return (
    <HoverCard>
      <HoverCardTrigger
        className="flex items-center gap-x-2 cursor-pointer"
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
      >
        <span>Gurukul Buisness</span>
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
        <BuisnessBanner />
      </HoverCardContent>
    </HoverCard>
  );
};

export default BuisnessMenu;
