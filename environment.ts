import { InstructorSideBarTypes } from "./_interfaces/utils.interface";
import {
  FaStar,
  FaHome,
  FaUserAlt,
  FaWallet,
  FaCalendarAlt,
} from "react-icons/fa";
import { PiStudentBold, PiCertificateFill } from "react-icons/pi";
import { MdFavorite, MdQuiz, MdAssignment } from "react-icons/md";
import { BsFillBagFill } from "react-icons/bs";
import { LuMailQuestion } from "react-icons/lu";
import { IoBookSharp, IoSettings } from "react-icons/io5";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoMdLogOut } from "react-icons/io";
export const TOPICS = [
  "/svg3.svg",
  "/music.svg",
  "/marketing.svg",
  "/fdfd.svg",
  "/frdfd.svg",
  "/buisness.svg",
  "/buisness44.svg",
];

export const ADVERTISEMENT_TOPICS = [
  {
    image: "/advertise1.png",
    title: "Expert Instructors",
  },
  {
    image: "/advertise4.png",
    title: "Live Video Classes",
  },
  {
    image: "/advertise5.png",
    title: "Advanced study Notes",
  },
  {
    image: "/advertise2.png",
    title: "Interactive Learning",
  },

  {
    image: "/advertise3.png",
    title: "24*7 connected students-teachers community",
  },

  {
    image: "/advertise6.png",
    title: "Collaborative Platform for job placement",
  },
];

export const INSTRUCTORSIDEBARMENUS: Array<InstructorSideBarTypes> = [
  {
    label: "Database",
    Icon: FaHome,
    navigateUrl: "",
  },
  {
    label: "My Profile",
    Icon: FaUserAlt,
    navigateUrl: "/my-profile",
  },
  {
    label: "Enrolled Course",
    Icon: PiStudentBold,
    navigateUrl: "/enrolled-course",
  },
  {
    label: "Wishlist",
    Icon: MdFavorite,
    navigateUrl: "/wishlist",
  },
  {
    label: "Reviews",
    Icon: FaStar,
    navigateUrl: "/reviews",
  },
  {
    label: "Reviews",
    Icon: FaStar,
    navigateUrl: "/reviews",
  },
  {
    label: "My Quiz Contest",
    Icon: MdQuiz,
    navigateUrl: "/my-quiz-contest",
  },
  {
    label: "Order History",
    Icon: BsFillBagFill,
    navigateUrl: "/order-history",
  },
  {
    label: "Question & Answer",
    Icon: LuMailQuestion,
    navigateUrl: "/question-answer",
  },
  {
    label: "Calendar",
    Icon: FaCalendarAlt,
    navigateUrl: "/my-calendar",
  },
];

export const INSTRUCTORSIDEBARMENUS2: Array<InstructorSideBarTypes> = [
  {
    label: "My Courses",
    Icon: IoBookSharp,
    navigateUrl: "/my-courses",
  },
  {
    label: "My Announcements",
    Icon: TfiAnnouncement,
    navigateUrl: "/my-announcements",
  },
  {
    label: "My wallet",
    Icon: FaWallet,
    navigateUrl: "/my-wallet",
  },
  {
    label: "Assignments",
    Icon: MdAssignment,
    navigateUrl: "/assignments",
  },
  {
    label: "Certificates",
    Icon: PiCertificateFill,
    navigateUrl: "/certificates",
  },
];

export const INSTRUCTORSIDEBARMENUS3: Array<InstructorSideBarTypes> = [
  {
    label: "Settings",
    Icon: IoSettings,
    navigateUrl: "/settings",
  },
  {
    label: "Logout",
    Icon: IoMdLogOut,
    navigateUrl: "/logout",
  },
];

export const BASEURL = `http://localhost:5000`;
export const urlsConfig = {
  version: "1.0",
  urls: {
    getAllUserRole: `/master/get-all-role`,
    userLogin: `/user/login`,
    checkToken: `/user/checktoken`,
    userLoginByGoogle: `/user/login-google`,
  },
};

// ************************

/***
 * An array of routes that are accessible to the public
 * these routes do not require authentication
 * @type {string[]}
 *
 * ***/

export const publicRoutes: string[] = ["/"];

/****
 * An array of routes thatr are used for authentication
 *@type {string[]}
 *
 * ****/

export const authRoutes = ["/login", "/register", "/error"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purpose
 * @type {string}
 *  **/
export const apiAuthPrefix = "/api/auth";
/***
 * Ther default redirect path after user logged in
 * @type {string}
 * ***/
export const DEFAULT_LOGIN_REDIRECT = "/";
