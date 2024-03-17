import Image from "next/image";
import HomeCarousal from "./_components/HomeCarousal";
import TopNavbar from "./_components/TopNavbar";
import MainNavbar from "./_components/MainNavbar";
import CourseNavbar from "./_components/CourseNavbar";

export default function Home() {
  return (
    <main className="m-0 p-0">
      <TopNavbar />
      <MainNavbar />
      <CourseNavbar />
    </main>
  );
}
