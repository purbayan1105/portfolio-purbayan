import { Button } from "@nextui-org/react";
import { ArrowBigDown } from "lucide-react";
// import { tree } from "next/dist/build/templates/app-page";
import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { ReactTyped } from "react-typed";
//  import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 justify-around pl-4 lg:pl-8 poppins bg-slate-200 dark:bg-[#0e1630] pt-32 lg:pt-48"
        id="hero">
        <div className="lg:hidden flex justify-center items-center mt-5">
          <Image
            width={600}
            height={400}
            alt="profile-img"
            src="/pp3.png"
            className="w-64 rounded-full"
          />
        </div>
        <div className="mt-8 px-2">
          <div className=" dark:text-green-500 gap-3 flex items-center justify-center md:justify-start">
            <span className="w-[2rem] h-0.5 bg-green-500"></span>
            <span className="text-2xl">Hello</span>
          </div>
          <div className=" mt-5 text-md text-center md:text-left dark:text-gray-300">
            I am Purbayan, a versatile website developer transitioning from a
            successful content writing career, bringing a unique perspective to
            web development. My expertise spans{"   "}
            <span>
              <ReactTyped
                className="text-indigo-700 dark:text-indigo-500 text-2xl font-semibold"
                strings={[
                  "HTML",
                  "CSS",
                  "Javascript",
                  "Typescript",
                  "Tailwind",
                  "Bootstrap",
                  "React JS",
                  "Node JS",
                  "Express JS",
                  "Next JS",
                  "ReactQuery",
                  "MongoDB",
                  "Git",
                  "Shopify",
                  "Wordpress",
                  "Opencart",
                ]}
                typeSpeed={80}
                loop
                backSpeed={50}
                cursorChar={"."}
              />
            </span>
            <br />
            <br />
            Versatile Frontend Developer with 2 years of experience in web
            development and expanding more expertise to encompass backend
            development, aspiring to become a Full-stack Developer.
            <br />
            <br />
            Proven ability to adapt quickly to new technologies and concepts
            while delivering high-quality solutions.
          </div>

          <Link
            href="/Purbayan Ghosh Resume .pdf"
            target="__blank"
            legacyBehavior>
            <a download>
              <div className=" relative flex justify-center items-center mt-8 mb-5 mx-5 md:w-52 hover:lg:scale-125 hover:scale-110 duration-400">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-yellow-300 to-purple-400 blur-md rounded-lg animate-pulse"></div>
                <button className="flex justify-center items-center gap-2 px-3 relative bg-blue-200 dark:bg-gray-800 w-full rounded-2xl py-3 ">
                  <span className="font-bold">Download Resume </span>
                  <span>
                    <FiDownload />
                  </span>
                </button>
              </div>
            </a>
          </Link>
        </div>

        <div className="hidden lg:block">
          <Image
            width={800}
            height={500}
            alt="profile-img"
            src="/pp2.png"
            className="w-fit"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
