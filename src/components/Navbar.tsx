import { themeAtom } from "@/utils/atom";
import { useAtom } from "jotai";
import { Cross, Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
// import Link from "next/link";
import { Link } from "react-scroll";

import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [dark, setDark] = useAtom(themeAtom);
  const [toggle, setToggle] = useState(false);

  const themeBtn = () => {
    setDark(!dark);
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
      <div className="grid grid-cols-4 md:grid-cols-4 px-4 md:px-8 py-5 items-center bg-blue-500 dark:bg-[#0e1630] border-b-2 border-gray-400 dark:border-[#0e1630] poppins">
        <div className="col-span-2 md:col-span-1">
          <div className="text-lg md:text-4xl font-normal">
            <span className="text-orange-500">P</span>
            <span>urbayan</span> <span className="text-green-500"> G</span>
            <span>hosh</span>
          </div>
          <div className="ms-auto">
            <p className="md:text-xl">Web Developer</p>
          </div>
        </div>
        <div className="hidden md:col-span-2 lg:grid grid-cols-5 text-md font-normal mx-auto gap-8">
          <div className="cursor-pointer">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              About
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Projects
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link
              to="academics"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Academics
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link
              to="worke"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Experience
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}>
              Contact
            </Link>
          </div>
        </div>

        <div
          className="flex items-center gap-2 justify-end border-2 border-solid border-black ms-auto px-5 py-3 rounded-[4rem] select-none cursor-pointer"
          onClick={themeBtn}>
          {dark ? <Sun /> : <Moon />}
          {dark ? <div>Day</div> : <div>Dark</div>}
        </div>

        <div className="lg:hidden ms-auto" onClick={() => setToggle(!toggle)}>
          {toggle ? <X /> : <Menu />}
        </div>
      </div>
      {toggle && (
        <div
          ref={menuRef}
          className="w-full bg-gray-300 dark:bg-white text-black space-y-4 px-2 py-2 text-xl font-normal poppins absolute z-10">
          <div className="cursor-pointer hover:bg-gray-300 hover:py-2 hover:rounded-md  hover:px-2">
            <Link
              onClick={() => {
                setToggle(false);
              }}
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              About
            </Link>
          </div>
          <div className="cursor-pointer hover:bg-gray-300 hover:py-2 hover:rounded-md  hover:px-2">
            <Link
              onClick={() => {
                setToggle(false);
              }}
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Projects
            </Link>
          </div>
          <div className="cursor-pointer hover:bg-gray-300 hover:py-2 hover:rounded-md  hover:px-2">
            <Link
              onClick={() => {
                setToggle(false);
              }}
              to="academics"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Academics
            </Link>
          </div>
          <div className="cursor-pointer hover:bg-gray-300 hover:py-2 hover:rounded-md  hover:px-2">
            <Link
              onClick={() => {
                setToggle(false);
              }}
              to="worke"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Experience
            </Link>
          </div>
          <div className="cursor-pointer hover:bg-gray-300 hover:py-2 hover:px-2 hover:rounded-md">
            <Link
              onClick={() => {
                setToggle(false);
              }}
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
