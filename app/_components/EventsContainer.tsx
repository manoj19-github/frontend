import React, { FC } from "react";

interface EventsContainerProps {}
const EventsContainer: FC<EventsContainerProps> = (): JSX.Element => {
  return (
    <div
      className="w-full flex items-center justify-between  py-20 px-2  "
      style={{
        backgroundImage: `url("/backgroundImage2.jpg")`,
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default EventsContainer;
