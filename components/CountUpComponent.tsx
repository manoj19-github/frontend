"use client";
import useMounted from "@/_hooks/useMounted";
import React, { FC } from "react";
import CountUp from "react-countup";

interface CountUpComponentProps {
  startNumber: number;
  endNumber: number;
  duration: number;
  separator: string;
  decimals: number;
  decimal: string;
}
const CountUpComponent: FC<CountUpComponentProps> = ({
  startNumber,
  endNumber,
  duration,
  separator,
  decimals,
  decimal,
}): JSX.Element => {
  const isMounted = useMounted();
  if (!isMounted) return <></>;
  return (
    <CountUp
      start={startNumber}
      end={endNumber}
      duration={duration}
      separator={separator}
      decimals={decimals}
      decimal={decimal}
    />
  );
};

export default CountUpComponent;
