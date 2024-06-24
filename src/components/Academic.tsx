import { useState } from "react";
import { FaCode, FaSchool } from "react-icons/fa";
import { FaSchoolFlag } from "react-icons/fa6";
import { GoHistory } from "react-icons/go";
import { IoSchoolSharp } from "react-icons/io5";
import { TbBrandStorytel } from "react-icons/tb";

const Academic = () => {
  const [isHovered, setHovered] = useState(false);
  const hoverHandler = () => {
    setHovered(true);
  };
  return (
    <>
      <div className="dark:bg-black bg-slate-200">
        <div
          className="poppins text-4xl text-center font-semibold pt-16 mb-12 "
          id="academics">
          Academics
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-10  mt-5 mx-10 poppins pb-10 ">
          <div className="text-md md:text-lg poppins text-gray-400 bg-slate-800 px-4 py-6 rounded-lg ">
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
            <div className="bg-[rgba(113,103,252,0.16)] text-black px-5 pt-5 space-y-4 rounded-md pb-5 hover:bg-green-400 transition hover:translate-y-3">
              <div className="">
                <div className="text-xl text-indigo-700 font-bold">
                  X -2014 (86.42%)
                </div>
                <div className="text-2xl dark:text-white flex gap-5 items-center">
                  <FaSchool />

                  <p> Hili Ramanath High School </p>
                </div>
              </div>
              <div className="">
                <div className="text-xl text-indigo-700 font-bold">
                  XII -2016 (Science- 83.8%)
                </div>
                <div className="text-2xl dark:text-white flex gap-5 items-center">
                  <FaSchoolFlag />

                  <p> Balurghat LMAU Vidyalaya </p>
                </div>
              </div>
            </div>

            <div className="bg-[rgba(113,103,252,0.16)] px-5 space-y-4 pt-5 rounded-md pb-5 lg:mt-20 hover:bg-green-400 transition hover:translate-y-[-1rem]">
              <div className="">
                <div className="text-xl text-indigo-700 font-bold">
                  Graduation -2019 (English Hons- 54.5%)
                </div>
                <div className="text-2xl dark:text-white flex items-center gap-5">
                  <IoSchoolSharp />

                  <p> Asutosh College, Kolkata</p>
                </div>
              </div>
              <div className="">
                <div className="text-xl text-indigo-700 font-bold ">
                  Web Development -2023 (Ongoing)
                </div>
                <div className="text-2xl dark:text-white flex items-center gap-5">
                  <FaCode />
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
