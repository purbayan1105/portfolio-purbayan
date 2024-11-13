import { themeAtom } from "@/utils/atom";
import { useAtom } from "jotai";
import { Cross, Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
// import Link from "next/link";
import { Link } from "react-scroll";

import { useEffect, useRef, useState } from "react";
import { SiNextdotjs } from "react-icons/si";

const Navbar = () => {
  const [dark, setDark] = useAtom(themeAtom);
  const [toggle, setToggle] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [activeContact, setActiveContact] = useState(false);

  const themeBtn = () => {
    setDark(!dark);
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 300);
  };

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 md:grid-cols-4 px-4 md:px-8 py-5 items-center bg-slate-200 dark:bg-[#0e1630] border-b-1 border-slate-300 dark:border-[#3d2a6988] poppins fixed w-full z-50">
        <div className="col-span-2 md:col-span-1">
          <div className="text-lg md:text-4xl font-normal">
            <span className="bg-gradient-to-tr dark:from-green-500 dark:to-green-300 bg-clip-text w-fit text-transparent font-semibold from-blue-400 to-blue-700">
              Purbayan
            </span>
            <span className="bg-gradient-to-tr dark:from-green-500 dark:to-green-300 bg-clip-text w-fit text-transparent font-semibold from-blue-400 to-blue-700">
              {" "}
              Ghosh
            </span>
          </div>
          <div className="ms-auto flex lg:gap-2 items-center mr-2">
            <p className="md:text-xl text-gray-900 dark:bg-gradient-to-tr from-gray-400 to-gray-100 dark:bg-clip-text w-fit dark:text-transparent font-semibold">
              Full Stack Web Developer
            </p>
            <div className="lg:border-2 border-solid border-[#00800066]  h-fit rounded-full px-2 py-2">
              <SiNextdotjs size={25} />
            </div>
          </div>
        </div>
        <div className="hidden md:col-span-2 lg:grid grid-cols-6 text-md font-normal mx-auto gap-8">
          <div className="cursor-pointer font-semibold">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass=" dark:text-green-300 text-green-500">
              About
            </Link>
          </div>
          <div className="cursor-pointer font-semibold">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass=" dark:text-green-300 text-green-500">
              Projects
            </Link>
          </div>
          <div className="cursor-pointer font-semibold">
            <Link
              to="academics"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass=" dark:text-green-300 text-green-500">
              Academics
            </Link>
          </div>
          <div className="cursor-pointer font-semibold">
            <Link
              to="certificate"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass=" dark:text-green-300 text-green-500 ">
              <p className="text-yellow-400 font-bold text-lg">Certificte</p>
            </Link>
          </div>
          <div className="cursor-pointer font-semibold">
            <Link
              to="worke"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass=" dark:text-green-300 text-green-500">
              Experience
            </Link>
          </div>
          <div className="cursor-pointer font-semibold">
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              activeClass=" dark:text-green-300 text-green-500">
              <p>Contact</p>
            </Link>
          </div>
        </div>

        <div
          className="flex items-center gap-2 justify-end border-2 border-solid border-slate-300 dark:border-black ms-auto px-5 py-3 rounded-[4rem] select-none cursor-pointer"
          onClick={themeBtn}>
          {dark ? (
            <Sun className={`${animate ? "animate-spin  ease-in-out" : ""}`} />
          ) : (
            <Moon
              className={`${
                animate ? "animate-spin  ease-in-out" : ""
              } rotate-5`}
            /> //check global css for reverse-spin, it's not tailwind.
          )}
          {dark ? <div>Day</div> : <div>Dark</div>}
        </div>

        <div className="lg:hidden ms-auto" onClick={() => setToggle(!toggle)}>
          {toggle ? <X /> : <Menu />}
        </div>
      </div>
      {toggle && (
        <div
          ref={menuRef}
          className="w-full bg-gray-300 dark:bg-white text-black space-y-6 px-2 py-2 text-xl font-normal poppins  z-50 fixed mt-[5.5rem] dropdownAnimation">
          <Link
            onClick={() => {
              setToggle(false);
            }}
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <div className="cursor-pointer hover:bg-gray-300 hover:py-2 hover:rounded-md  hover:px-2">
              <p className="py-2">About </p>
            </div>
          </Link>
          <Link
            onClick={() => {
              setToggle(false);
            }}
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <div className="cursor-pointer hover:bg-gray-300 hover:py-2 hover:rounded-md  hover:px-2">
              <p className="py-2">Projects </p>
            </div>
          </Link>
          <Link
            onClick={() => {
              setToggle(false);
            }}
            to="academics"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:bg-gray-300 hover:py-2 hover:rounded-md  hover:px-2">
            <div className="cursor-pointer hover:bg-gray-300 hover:py-2 hover:rounded-md  hover:px-2">
              <p className="py-2">Academic</p>
            </div>
          </Link>
          <Link
            onClick={() => {
              setToggle(false);
            }}
            to="certificate"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:bg-gray-300 hover:py-2 hover:rounded-md  hover:px-2">
            <div className="cursor-pointer hover:bg-gray-300 hover:py-2 hover:rounded-md  hover:px-2">
              <p className="py-2 font-bold dark:text-yellow-400 text-yellow-800">
                Certificate
              </p>
            </div>
          </Link>
          <Link
            onClick={() => {
              setToggle(false);
            }}
            to="worke"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <div className="cursor-pointer hover:bg-gray-300 hover:py-2 hover:rounded-md  hover:px-2">
              <p className="py-2">Experience</p>
            </div>
          </Link>
          <Link
            onClick={() => {
              setToggle(false);
            }}
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <div className="cursor-pointer hover:bg-gray-300 hover:py-2 hover:rounded-md  hover:px-2">
              <p className="py-2">Contact</p>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
