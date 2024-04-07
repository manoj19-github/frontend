import Image from "next/image";
import HomeCarousal from "./_components/HomeCarousal";
import TopNavbar from "./_components/TopNavbar";
import MainNavbar from "./_components/MainNavbar";
import CourseNavbar from "./_components/CourseNavbar";
import HomeImageBanner from "./_components/HomeImageBanner";
import TrustedCompanies from "./_components/TrustedCompanies";
import CourseCategorySection from "./_components/CourseCategorySection";
import CourseSection from "./_components/CourseSection";
import AdvertisementSection from "./_components/AdvertisementSection";
import EventsContainer from "./_components/EventsContainer";
import AdvertiseStat from "./_components/AdvertiseStat";
import InstructorsProfile from "./_components/InstructorsProfile";
import BlogSectionContainer from "./_components/BlogSection";
import JobPortalAdvertise from "./_components/JobPortalAdvertise";
import ViewCourseAdvertiseSection from "./_components/ViewCourseAdvertiseSection";
import HomeFooter from "./_components/HomeFooter";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <TopNavbar />
      <MainNavbar />
      <CourseNavbar />
      <main className="m-0 p-0">
        <HomeImageBanner />
        <TrustedCompanies />
        <CourseCategorySection />
        <CourseSection />
        <AdvertisementSection />
        <EventsContainer />
        <AdvertiseStat />
        <InstructorsProfile />
        <JobPortalAdvertise />
        <BlogSectionContainer />
        <ViewCourseAdvertiseSection />
        <HomeFooter />
      </main>
    </Fragment>
  );
}
