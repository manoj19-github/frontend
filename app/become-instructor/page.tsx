import React, { FC } from "react";
import BannerSection from "./_components/BannerSection";
import StatBanner from "./_components/StatBanner";
import HowToBecomeInstructor from "./_components/HowToBecomeInstructor";
import InstructorRegistration from "./_components/InstructorRegistration";

interface BecomeInstructorProps {}
const BecomeInstructor: FC<BecomeInstructorProps> = (): JSX.Element => {
  return (
    <div className="p-0 m-0 pb-[40px] relative">
      <BannerSection />
      <div className="lg:mt-[120px] px-8">
        <HowToBecomeInstructor />
      </div>
      <div className="mt-[50px] px-8">
        <InstructorRegistration />
      </div>
    </div>
  );
};

export default BecomeInstructor;
