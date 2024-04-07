import SectionTitle from "@/components/SectionTitle";
import React from "react";
import RegistrationForm from "./RegistrationForm";

const InstructorRegistration = () => {
  return (
    <div id="registration_instructor">
      <SectionTitle title="Start Teaching From Gurukul" />
      <div className="flex w-full justify-between items-center">
        <div className="w-full">
          <div className="flex  text-[40px]  ">
            <h1 className="font-bold">Register as Instructor</h1>
          </div>
          <div className="flex mt-1">
            <h1 className="text-lg text-gray-400 ">
              Join the world&apos;s largest online learning marketplace. Start
              teaching today
            </h1>
          </div>
        </div>
      </div>
      <div className="py-5  mt-4">
        <div className="my-2 ">
          <h1 className="text-center text-4xl font-semibold">
            Instructor Registration
          </h1>
        </div>
        <div className="my-1 mx-auto w-1/2 flex items-center justify-center text-lg text-center text-gray-400">
          Join a supportive network that empowers you on your journey to
          becoming an effective and successful online educator.
        </div>
        <div className="mt-2 lg:w-3/4 mx-auto py-2">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default InstructorRegistration;
