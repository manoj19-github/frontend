"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { FC, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CgMenuGridR } from "react-icons/cg";

interface NavItemProps {}
export const NavItem: FC<NavItemProps> = (): JSX.Element => {
  return (
    <div className=" p-0 ">
      <div className="group inline-block relative h-full">
        <button
          aria-haspopup="true"
          aria-controls="menu"
          className="outline-none focus:outline-none  px-3 py-1 bg-white dark:bg-black rounded-sm flex items-center h-full   space-x-2"
        >
          <CgMenuGridR size={27} className="text-banner dark:text-white" />
          <span className="pr-1 font-semibold flex-1 text-banner dark:text-white">
            Categories
          </span>
          <span>
            <svg
              className="fill-current text-banner h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul
          aria-hidden="true"
          className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out  min-w-[280px] top-[105%] z-[999] min-h-[105vh] py-2 px-1 dark:bg-black space-y-2"
        >
          <li className="cursor-pointer rounded-sm px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 ">
            Programming
          </li>
          <li className="cursor-pointer rounded-sm px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800">
            DevOps
          </li>
          <li className="cursor-pointer rounded-sm  px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800">
            <button
              aria-haspopup="true"
              aria-controls="menu-lang"
              className="w-full text-left flex items-center outline-none focus:outline-none"
            >
              <span className="pr-1 flex-1">Langauges</span>
              <span className="mr-auto">
                <svg
                  className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            <ul
              aria-hidden="true"
              className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-[280px] min-h-[105vh] py-2 px-1 dark:bg-black space-y-2
  "
            >
              <li className="cursor-pointer rounded-sm  px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800">
                Javascript
              </li>
              <li className="cursor-pointer rounded-sm  px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800">
                <button
                  aria-haspopup="true"
                  aria-controls="menu-lang-python"
                  className="w-full text-left flex items-center outline-none focus:outline-none"
                >
                  <span className="pr-1 flex-1">Python</span>
                  <span className="mr-auto">
                    <svg
                      className="fill-current h-4 w-4
                transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  aria-hidden="true"
                  className="bg-white border rounded-sm absolute top-0 right-0 
      transition duration-150 ease-in-out origin-top-left
      min-w-[280px] min-h-[105vh] py-2 px-1 dark:bg-black space-y-2
      "
                >
                  <li className="cursor-pointer rounded-sm  px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800">
                    2.7
                  </li>
                  <li className="cursor-pointer rounded-sm  px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800">
                    3+
                  </li>
                </ul>
              </li>
              <li className="cursor-pointer rounded-sm  px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800">
                Go
              </li>
              <li className="cursor-pointer rounded-sm  px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800">
                Rust
              </li>
            </ul>
          </li>
          <li className="cursor-pointer rounded-sm  px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800">
            Testing
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavItem;
