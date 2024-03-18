import Image from "next/image";
import HomeCarousal from "./_components/HomeCarousal";
import TopNavbar from "./_components/TopNavbar";
import MainNavbar from "./_components/MainNavbar";
import CourseNavbar from "./_components/CourseNavbar";
import HomeImageBanner from "./_components/HomeImageBanner";
import TrustedCompanies from "./_components/TrustedCompanies";
import CourseSection from "./_components/CourseSection";

export default function Home() {
  return (
    <main className="m-0 p-0">
      <TopNavbar />
      <MainNavbar />
      <CourseNavbar />
      <HomeImageBanner />
      <TrustedCompanies />
      <CourseSection />
    </main>
  );
}
