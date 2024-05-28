import { Button } from "@nextui-org/react";
import { ArrowBigDown } from "lucide-react";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 justify-around pl-4 lg:pl-8 poppins dark:bg-[#0e1630] lg:pt-12"
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
                  "Tailwind CSS",
                  "Bootstrap",
                  "React JS",
                  "Node JS",
                  "Next JS",
                  "Git",
                  "Shopify",
                  "Wordpress",
                  "Opencart",
                ]}
                typeSpeed={50}
                loop
                backSpeed={20}
                cursorChar={"."}
              />
            </span>
            <br />
            <br />
            Currently, I am looking for a job in Web Development with the
            expertise in frontend development and expanding expertise to
            encompass backend development, aspiring to become a Full-stack
            Developer. Proven ability to adapt quickly to new technologies and
            concepts while delivering high-quality solutions.
          </div>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <div className=" relative flex justify-center items-center mt-8 mb-5 mx-5 md:w-52 hover:lg:scale-125 hover:scale-110 duration-400">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 blur-md rounded-lg"></div>
              <button className="flex justify-center items-center px-3 relative bg-gray-200 dark:bg-gray-800 w-full rounded-2xl py-3 ">
                <span>Explore More</span>
                <span>
                  <ArrowBigDown />
                </span>
              </button>
            </div>
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
