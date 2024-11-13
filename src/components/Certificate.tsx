import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";

const Certificate = () => {
  return (
    <>
      <div className="dark:bg-slate-900">
        <div className=" poppins text-white font-semibold text-4xl flex justify-center py-9 px-5 text-center">
          Certified Frontend Developer
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-10  mt-5 mx-10 poppins pb-10 ">
          <div className="">
            <Image
              src="/certificate.png"
              alt="certificate"
              height={300}
              width={300}
              className="h-[30rem] w-[25rem]"
            />
            <Link
              href="https://citindia.online/office/wp-content/uploads/participants-database/uqjrva3purbayan_ghoshgaria_09.pdf"
              target="_blank"
              legacyBehavior>
              <a download>
                <div className=" relative flex justify-center  items-center mt-8 mb-5 mx-5 lg:ml-14 md:w-52 hover:lg:scale-125 hover:scale-110 duration-400">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-yellow-300 to-purple-400 blur-md rounded-lg animate-pulse"></div>
                  <button className="flex justify-center items-center gap-2 px-3 relative bg-blue-200 dark:bg-gray-800 w-full rounded-2xl py-3 ">
                    <span className="font-bold">Download </span>
                    <span>
                      <FiDownload />
                    </span>
                  </button>
                </div>
              </a>
            </Link>
          </div>
          <div className="text-md md:text-lg poppins dark:text-gray-400 text-gray-800 font-semibold border-gray-400 border-2 border-solid px-4 py-6 rounded-lg bg-gradient-to-bl from-transparent via-transparent to-blue-500/40 space-y-6">
            <h3 className="text-xl font-bold">
              <p className="italic text-md dark:text-white">
                {" "}
                Frontend Developer Certification
              </p>
              <div className="flex items-center">
                <IoIosStar color="yellow" />
                <IoIosStar color="yellow" />
                <IoIosStar color="yellow" />
                <IoIosStar color="yellow" />
                <IoIosStar color="yellow" />
              </div>
            </h3>
            <h4 className="italic text-md dark:text-white">
              <p> Central Institute of Technology</p>
            </h4>
            <h5>
              Duration :{" "}
              <span className="italic dark:text-white">18 months</span>
            </h5>
            <p className="italic font-bold ">
              Completed a comprehensive program in frontend development,
              mastering core technologies including:{" "}
            </p>

            <ul className="space-y-3 pl-4">
              <li className="list-disc dark:text-white">
                HTML, CSS, JavaScript: Building interactive and responsive web
                pages.
              </li>
              <li className="list-disc dark:text-white">
                Bootstrap, Tailwind CSS: Rapid, responsive design using
                pre-built components and utility-first CSS.
              </li>
              <li className="list-disc dark:text-white">
                Next.js: Advanced, server-side rendering and API integration for
                high-performance applications.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
