"use client";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { Dispatch, FC, SetStateAction, useState } from "react";
import useMounted from "@/_hooks/useMounted";
interface StarRatingPickerProps {
  count?: number;
  isEditable?: boolean;
  size?: number;
  value?: number;
  onChange?: Dispatch<SetStateAction<number>>;
  handleClick?: (newVal: number) => void;
  mouseOverHandler?: (newVal: number) => void;
  mouseLeaveHandler?: () => void;
}
const StarRatingPicker: FC<StarRatingPickerProps> = ({
  count = 5,
  isEditable = true,
  size = 25,
  value,
  onChange,
  handleClick,
  mouseLeaveHandler,
  mouseOverHandler,
}): JSX.Element => {
  const isMounted = useMounted();
  const [hoverValue, setHoverValue] = useState<number>(0);
  const clickHandler = (newValue: number) => {
    if (!isEditable) return;
    setHoverValue(newValue);
    onChange?.(newValue);
    handleClick?.(newValue);
  };
  const handleMouseOver = (newValue: number) => {
    if (!isEditable) return;
    setHoverValue(newValue);
    onChange?.(newValue);
    mouseOverHandler?.(newValue);
  };
  const handleMouseLeave = () => {
    if (!isEditable) return;
    setHoverValue(0);
    mouseLeaveHandler?.();
  };

  if (!isMounted) return <></>;

  return (
    <div className="flex items-center ">
      {[...new Array(count)].map((_, index) => {
        const newIndex = index + 1;
        return newIndex <= Number(value) ? (
          <FaStar
            key={index}
            className="text-[#eab308]"
            onClick={() => clickHandler(newIndex)}
            size={size}
            onMouseOver={() => handleMouseOver(newIndex)}
            onMouseLeave={() => handleMouseLeave()}
          />
        ) : newIndex - 0.5 <= hoverValue || newIndex - 0.5 === Number(value) ? (
          <FaStarHalfStroke
            key={index}
            className="text-[#eab308]"
            onClick={() => clickHandler(newIndex - 0.5)}
            size={size}
            onMouseOver={() => handleMouseOver(newIndex - 0.5)}
            onMouseLeave={() => handleMouseLeave()}
          />
        ) : (
          <FaRegStar
            key={index}
            className="text-[#eab308]"
            onClick={() => clickHandler(newIndex)}
            size={size}
            onMouseOver={() => handleMouseOver(newIndex)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
};
export default StarRatingPicker;
