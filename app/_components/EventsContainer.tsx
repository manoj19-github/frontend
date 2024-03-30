import SectionTitle from "@/components/SectionTitle";
import React, { FC } from "react";
import EventsList from "./EventsList";

interface EventsContainerProps {}
const EventsContainer: FC<EventsContainerProps> = (): JSX.Element => {
  return (
    <div
      className="w-full flex  py-10 lg:px-10  flex-col "
      style={{
        backgroundImage: `url("/backgroundImage2.jpg")`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex ">
        <SectionTitle title="Our Events" />
      </div>
      <div className="flex  mt-1 text-[40px] justify-between items-center">
        <h1 className="font-bold">Upcoming Events </h1>
        <button className="bg-banner text-btnColor px-8 py-2 text-base rounded-md transition-all ease-in-out border border-transparent hover:border-banner hover:bg-transparent hover:text-banner duration-500 ">
          View All Events
        </button>
      </div>
      <div className="flex  mt-1">
        <h1 className="text-lg text-gray-400 ">
          You'll find something to spark your curiosity and enhance{" "}
        </h1>
      </div>
      <div>
        <EventsList />
      </div>
    </div>
  );
};

export default EventsContainer;
