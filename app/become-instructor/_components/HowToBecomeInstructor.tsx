"use client";
import SectionTitle from "@/components/SectionTitle";
import { FaUserTag, FaList } from "react-icons/fa";
import React, { useState } from "react";
import { PiChalkboardTeacher } from "react-icons/pi";
import { AnimatePresence, Variants, motion } from "framer-motion";
import Image from "next/image";
const HowToBecomeInstructor = () => {
  const [selectedTopic, setSelectedTopic] = useState<number>(0);
  const tabContentVariants: Variants = {
    initial: {
      y: 10,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -20,
      opacity: 0,
    },
  };
  return (
    <div>
      <SectionTitle title="Start Teaching From Gurukul" />
      <div className="flex w-full justify-between items-center">
        <div className="w-full">
          <div className="flex  text-[40px]  ">
            <h1 className="font-bold">Become an Instructor</h1>
          </div>
          <div className="flex mt-1">
            <h1 className="text-lg text-gray-400 ">
              You&apos;ll find something to spark your curiosity and enhance{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="lg:px-10 pt-5 pb-10  border mt-5 rounded-md">
        <div className="lg:w-[75%] lg:mt-5 flex items-center justify-center mx-auto relative   ">
          <div className="lg:w-[100px] bg-gray-300 h-[1px] absolute bottom-0 left-[2%]"></div>
          <div
            onClick={() => setSelectedTopic(0)}
            className={`px-10 py-2 flex items-center gap-x-4  z-[5] bg-white    rounded-t-md cursor-pointer ${
              selectedTopic === 0 ? `border-l border-t border-r` : `border-b`
            }`}
          >
            <FaUserTag className={` text-banner `} size={30} />
            <p className={`text-banner`}>Become an instructor</p>
          </div>
          <div
            onClick={() => setSelectedTopic(1)}
            className={`px-10 py-2 flex items-center gap-x-4  z-[5] bg-white    rounded-t-md cursor-pointer ${
              selectedTopic === 1 ? `border-l border-t border-r` : `border-b`
            }`}
          >
            <FaList
              className={`
                text-banner
                `}
              size={30}
            />
            <p
              className={`
                text-banner
              `}
            >
              Instructor Rules
            </p>
          </div>
          <div
            onClick={() => setSelectedTopic(2)}
            className={`px-10 py-2 flex items-center gap-x-4  z-[5] bg-white    rounded-t-md cursor-pointer ${
              selectedTopic === 2 ? `border-l border-t border-r` : `border-b`
            }`}
          >
            <PiChalkboardTeacher className="text-banner" size={30} />
            <p className="text-banner">Start With Courses</p>
          </div>
          <div className="lg:w-[100px] bg-gray-300 h-[1px] absolute bottom-0 right-[2%]"></div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTopic || "empty"}
            variants={tabContentVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{
              duration: 0.8,
            }}
          >
            {selectedTopic === 0 ? (
              <div className="mt-5 w-full border py-5 rounded-md lg:px-4 flex  gap-x-4">
                <div className="w-1/2">
                  <div className="w-full">
                    <h1 className="text-2xl font-semibold">
                      Education and Qualifications:
                    </h1>
                    <p className="text-justify mt-3">
                      Obtain a relevant bachelor&apos;s degree or higher in the
                      subject area you want to teach. For example, if you want
                      to teach mathematics, a degree in mathematics or education
                      with a focus on math would be beneficial.
                    </p>
                    <p className="mt-5 text-justify">
                      Some institutions or programs may require specific
                      certifications or training in teaching methodologies or
                      instructional design.
                    </p>
                  </div>
                  <div className="w-full mt-4">
                    <h1 className="text-2xl font-semibold">
                      Teaching Experience:
                    </h1>
                    <p className="text-justify mt-3">
                      Gain teaching experience through internships, teaching
                      assistant roles, or volunteering opportunities. This
                      practical experience helps you understand classroom
                      dynamics and teaching strategies.
                    </p>
                    <p className="mt-5 text-justify">
                      Consider obtaining a teaching license or certification if
                      required by your region or institution.
                    </p>
                  </div>
                  <div className="w-full mt-4">
                    <h1 className="text-2xl font-semibold">Subject Mastery:</h1>
                    <p className="text-justify mt-3">
                      Create teaching materials such as lesson plans,
                      presentations, and assessments that align with educational
                      standards and best practices.
                    </p>
                    <p className="mt-5 text-justify">
                      Develop a deep understanding of the subject matter you
                      intend to teach. Stay updated with the latest research,
                      trends, and developments in your field.
                    </p>
                  </div>
                </div>
                <div className="w-1/2 flex flex-col gap-y-3">
                  <div className="relative h-[350px]">
                    <Image
                      src={"/6-ways-to-improve-online-teaching.png"}
                      alt="logo"
                      className="absolute rounded-md "
                      fill
                      objectFit="fill"
                    />
                  </div>

                  <div className="w-full mt-4">
                    <h1 className="text-2xl font-semibold">
                      Soft Skills and Communication:
                    </h1>
                    <p className="text-justify mt-3">
                      Practice active listening, empathy, and effective
                      communication techniques to connect with and support your
                      students.
                    </p>
                    <p className="mt-5 text-justify">
                      Cultivate strong communication and interpersonal skills.
                      As an instructor, you&apos;ll interact with students,
                      parents, and colleagues regularly.
                    </p>
                  </div>
                </div>
              </div>
            ) : selectedTopic === 1 ? (
              <div className="mt-5 w-full border py-5 rounded-md lg:px-4 flex  gap-x-4">
                <div className="w-1/2">
                  <div className="w-full">
                    <h1 className="text-2xl font-semibold">
                      Professional Conduct:
                    </h1>
                    <p className="text-justify mt-3">
                      Treat all students with respect, fairness, and dignity
                      regardless of their background, abilities, or beliefs.
                    </p>
                    <p className="mt-3 text-justify">
                      Maintain a professional demeanor in all communications and
                      interactions with students, colleagues, and
                      administrators.
                    </p>
                    <p className="mt-3 text-justify">
                      Adhere to ethical standards and avoid any behavior that
                      could be perceived as discriminatory, harassing, or
                      offensive.
                    </p>
                  </div>
                  <div className="w-full mt-4">
                    <h1 className="text-2xl font-semibold">
                      Classroom Management:
                    </h1>
                    <p className="text-justify mt-3">
                      Manage classroom disruptions promptly and effectively
                      while ensuring that all students have equal opportunities
                      to learn and succeed.
                    </p>
                    <p className="mt-3 text-justify">
                      Set clear expectations for behavior, attendance, and
                      academic performance, and communicate these expectations
                      to students at the beginning of each course.
                    </p>
                  </div>
                  <div className="w-full mt-4">
                    <h1 className="text-2xl font-semibold">
                      Instructional Practices:
                    </h1>
                    <p className="text-justify mt-3">
                      Use a variety of teaching methods, instructional
                      materials, and assessment strategies to accommodate
                      diverse learning styles and abilities.
                    </p>
                    <p className="mt-5 text-justify">
                      Plan and deliver engaging and effective lessons that align
                      with course objectives and educational standards.
                    </p>
                  </div>
                </div>
                <div className="w-1/2 flex flex-col gap-y-3">
                  <div className="relative h-[350px]">
                    <Image
                      src={"/coding-for-educators-upeducators-copy1.png"}
                      alt="logo"
                      className="absolute rounded-md "
                      fill
                      objectFit="fill"
                    />
                  </div>

                  <div className="w-full mt-4">
                    <h1 className="text-2xl font-semibold">
                      Data Privacy and Security:
                    </h1>
                    <p className="text-justify mt-3">
                      Protect student data and confidentiality by adhering to
                      data privacy laws and institutional policies.
                    </p>
                    <p className="mt-5 text-justify">
                      Safeguard sensitive information such as grades, attendance
                      records, and personal details from unauthorized access or
                      disclosure.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-5 w-full border py-5 rounded-md lg:px-4 flex  gap-x-4">
                <div className="w-1/2">
                  <div className="w-full">
                    <h1 className="text-2xl font-semibold">
                      Course Design Guidelines:
                    </h1>
                    <p className="text-justify mt-3">
                      Develop courses that align with the curriculum objectives,
                      learning outcomes, and standards established by the
                      institution or educational authority.
                    </p>
                    <p className="mt-3 text-justify">
                      Follow a structured course design process, including
                      outlining learning goals, organizing content logically,
                      and sequencing activities and assessments effectively.
                    </p>
                  </div>
                  <div className="w-full mt-3">
                    <h1 className="text-2xl font-semibold">
                      Content Quality Standards:
                    </h1>
                    <p className="text-justify mt-3">
                      Create high-quality content that is accurate, relevant,
                      and up-to-date. Use credible sources and verify
                      information before including it in the course materials.
                    </p>
                    <p className="mt-5 text-justify">
                      Provide clear instructions, explanations, and examples to
                      help students understand complex concepts and apply their
                      knowledge effectively.
                    </p>
                  </div>
                  <div className="w-full mt-4">
                    <h1 className="text-2xl font-semibold">
                      Engagement and Interaction:
                    </h1>
                    <p className="text-justify mt-3">
                      Design interactive and engaging activities that promote
                      active learning, critical thinking, and collaboration
                      among students.
                    </p>
                    <p className="mt-3 text-justify">
                      Incorporate opportunities for student-instructor and
                      student-student interaction through discussions, group
                      projects, peer reviews, and virtual classrooms.
                    </p>
                  </div>
                </div>
                <div className="w-1/2 flex flex-col gap-y-3">
                  <div className="relative h-[350px]">
                    <Image
                      src={"/instructor1.png"}
                      alt="logo"
                      className="absolute rounded-md "
                      fill
                      objectFit="fill"
                    />
                  </div>

                  <div className="w-full mt-4">
                    <h1 className="text-2xl font-semibold">
                      Compliance and Copyright:
                    </h1>
                    <p className="text-justify mt-3">
                      Ensure that all course materials, including text, images,
                      videos, and third-party resources, comply with copyright
                      laws and intellectual property rights.
                    </p>
                    <p className="mt-3 text-justify">
                      Obtain necessary permissions or licenses for using
                      copyrighted materials and attribute sources appropriately.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HowToBecomeInstructor;
