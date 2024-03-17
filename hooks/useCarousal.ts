import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface CarousalProps {
  slidesLength: number;
  delayTime: number;
}

export interface CarousalReturnType {
  currIndex: number;
  setCurrIndex: SetStateAction<Dispatch<number>>;
  pause: boolean;
  setPause: SetStateAction<Dispatch<boolean>>;
  handlePrev: () => void;
  handleNext: () => void;
  handleCurrPage: (currPage: number) => void;
  handleMouseEvent: () => void;
}
export const useCarousal = ({
  slidesLength,
  delayTime,
}: CarousalProps): CarousalReturnType => {
  const [currIndex, setCurrIndex] = useState<number>(1);
  const [pause, setPause] = useState<boolean>(false);
  const handleNext = (): void =>
    currIndex === slidesLength
      ? setCurrIndex(1)
      : setCurrIndex((prev) => prev + 1);
  const handlePrev = (): void =>
    currIndex === 1
      ? setCurrIndex(slidesLength)
      : setCurrIndex((prev) => prev - 1);
  const handleCurrPage = (_currIndex: number) => setCurrIndex(_currIndex);
  const handleMouseEvent = (): void => setPause((prev) => !prev);

  //  side effect for auto loop using  an infinite loop
  let interval: NodeJS.Timeout | undefined;
  useEffect(() => {
    interval = setInterval(
      () => (pause ? clearInterval(interval) : handleNext()),
      delayTime
    );
    return () => {
      clearInterval(interval as any);
    };
  });

  return {
    currIndex,
    setCurrIndex,
    handleCurrPage,
    handleMouseEvent,
    handleNext,
    handlePrev,
    pause,
    setPause,
  };
};
