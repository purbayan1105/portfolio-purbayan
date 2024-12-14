import { user } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { FaCode, FaLaptopCode, FaSchool } from "react-icons/fa";
import { FaSchoolFlag } from "react-icons/fa6";
import { GoHistory } from "react-icons/go";
import { IoSchoolSharp } from "react-icons/io5";
import { TbBrandStorytel } from "react-icons/tb";

const Academic = () => {
  const [isHovered, setHovered] = useState(false);
  const hoverHandler = () => {
    setHovered(true);
  };

  const leftboxRef = useRef(null);
  const right1boxRef = useRef(null);
  const right2boxRef = useRef(null);

  useEffect(() => {
    const obserbver = new IntersectionObserver((erntries) => {
      erntries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === (leftboxRef.current as any)) {
            entry.target.classList.add("animate-leftbox");
          }
          if (entry.target === (right1boxRef.current as any)) {
            entry.target.classList.add("animate-right1box");
          }

          if (entry.target === (right2boxRef.current as any)) {
            entry.target.classList.add("animate-right2box");
          }
        } else {
          if (entry.target === (leftboxRef.current as any)) {
            entry.target.classList.remove("animate-leftbox");
          } else if (entry.target === (right1boxRef.current as any)) {
            entry.target.classList.remove("animate-right1box");
          } else if (entry.target === (right2boxRef.current as any)) {
            entry.target.classList.remove("animate-right2box");
          }
        }
      });
    });

    if (leftboxRef.current) {
      obserbver.observe(leftboxRef.current);
    }

    if (right1boxRef.current) {
      obserbver.observe(right1boxRef.current);
    }

    if (right2boxRef.current) {
      obserbver.observe(right2boxRef.current);
    }

    return () => {
      if (leftboxRef.current) {
        obserbver.unobserve(leftboxRef.current);
      }
      if (right1boxRef.current) {
        obserbver.unobserve(right1boxRef.current);
      }

      if (right2boxRef.current) {
        obserbver.unobserve(right2boxRef.current);
      }
    };
  });

  return (
    <>
      <div className="dark:bg-black bg-slate-200 lg:h-[100dvh]">
        <div
          className="poppins text-4xl text-center font-semibold pt-16 mb-12 lg:mb-20 "
          id="academics">
          Academics
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-10  mt-5 mx-10 poppins pb-10 ">
          <div
            className="text-md md:text-lg poppins dark:text-gray-400 text-gray-800 font-semibold border-gray-400 border-2 border-solid px-4 py-6 rounded-lg bg-gradient-to-bl from-transparent via-transparent to-blue-500/40"
            ref={leftboxRef}>
            <p>
              Coming from a place where education was not easily accessible, I
              didn't have a solid plan for my future. I scored well in my 10th
              board exams, especially in Science, which led me to choose Science
              in 11th grade. However, I struggled to keep up after 12th and
              eventually shifted to English honours for my graduation.
              <br />
              <br />
              Even after graduating, I found myself drifting, unable to pinpoint
              my true passion. It wasn't until I started working as a content
              writer for a tech company that I discovered my interest in web
              development. The world of coding and creating websites began to
              captivate me, sparking a newfound enthusiasm and direction in my
              career.
            </p>
          </div>
          <div className="space-y-5">
            <div
              className="bg-[rgba(113,103,252,0.16)] dark:bg-gradient-to-tr dark:from-blue-500 dark:via-blue-900 dark:to-blue-200/50 text-black px-5 pt-5 space-y-4 rounded-md pb-5 hover:bg-green-400"
              ref={right1boxRef}>
              <div className="">
                <div className="text-xl dark:text-purple-300 font-bold">
                  X -2014 (86.42%)
                </div>
                <div className="text-xl lg:text-2xl dark:text-white flex  items-start gap-3">
                  <FaSchool className="w-10 h-10 lg:w-6 lg:h-8" />

                  <p> Hili Ramanath High School </p>
                </div>
              </div>
              <div className="">
                <div className="text-xl dark:text-purple-300 font-bold">
                  XII -2016 (Science- 83.8%)
                </div>
                <div className="text-xl lg:text-2xl dark:text-white flex items-start gap-3">
                  <FaSchoolFlag className="w-10 h-10 lg:w-6 lg:h-8" />

                  <p> Balurghat LMAU Vidyalaya </p>
                </div>
              </div>
            </div>

            <div
              className="bg-[rgba(113,103,252,0.16)] dark:bg-gradient-to-tr dark:from-blue-500 dark:via-blue-900 dark:to-blue-200/50 px-5 space-y-4 pt-5 rounded-md pb-5 lg:mt-20 hover:bg-green-400 transition hover:translate-y-[-1rem]"
              ref={right2boxRef}>
              <div className="">
                <div className="text-xl dark:text-purple-300 font-bold">
                  Graduation -2019 (English Hons- 54.5%)
                </div>
                <div className="text-xl lg:text-2xl dark:text-white flex items-start gap-3">
                  <IoSchoolSharp className="w-10 h-10 lg:w-6 lg:h-8" />

                  <p> Asutosh College, Kolkata</p>
                </div>
              </div>
              <div className="">
                <div className="text-xl dark:text-purple-300 font-bold ">
                  Web Development -2023 (Ongoing)
                </div>
                <div className="text-xl lg:text-2xl dark:text-white flex items-start gap-3">
                  <FaLaptopCode className="w-16 h-16  lg:w-6 lg:h-8" />

                  <p> Central Institute Of Technology (Dumdum) </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Academic;
