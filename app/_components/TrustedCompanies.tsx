"use client";

import useMounted from "@/_hooks/useMounted";
import { InfiniteMovingCards } from "@/components/MovableCards";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const TrustedComponents = () => {
  const isMounted = useMounted();
  if (!isMounted) return <></>;
  return (
    <div className="h-auto  flex flex-row antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mt-10">
      <div className="w-4/12 flex items-center justify-center ">
        <h1 className="text-[25px] font-bold text-gray-700">Trusted by : </h1>
      </div>
      <InfiniteMovingCards direction="right" speed="slow" elementGap="gap-24">
        {testimonials.map((self, index) => (
          <div
            className="w-24 h-24 border p-4 relative rounded-lg "
            key={index}
          >
            <Image src={self} fill alt="image" objectFit="contain" />
          </div>
        ))}
      </InfiniteMovingCards>
    </div>
  );
};

const testimonials = [
  "/university1.svg",
  "/university2.svg",
  "/university3.svg",
  "/university4.svg",
  "/university5.svg",
];

export default TrustedComponents;
