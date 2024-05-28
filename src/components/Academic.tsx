import { useState } from "react";

const Academic = () => {
  const [isHovered, setHovered] = useState(false);
  const hoverHandler = () => {
    setHovered(true);
  };
  return (
    <>
      <div
        className="poppins text-4xl text-center font-semibold mt-16 mb-12"
        id="academics">
        Academics
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  items-center mt-5 mx-10 poppins pb-10">
        <div className="bg-[rgba(113,103,252,0.16)] text-black px-5 pt-5 space-y-4 rounded-md pb-5 hover:bg-green-400 transition hover:translate-y-3">
          <div className="">
            <div className="text-xl text-indigo-700 font-bold">
              X -2014 (86.42%)
            </div>
            <div className="text-2xl dark:text-white">
              Hili Ramanath High School
            </div>
          </div>
          <div className="">
            <div className="text-xl text-indigo-700 font-bold">
              XII -2016 (Science- 83.8%)
            </div>
            <div className="text-2xl dark:text-white">
              Balurghat LMAU Vidyalaya
            </div>
          </div>
        </div>

        <div className="bg-[rgba(113,103,252,0.16)] px-5 space-y-4 pt-5 rounded-md pb-5 lg:mt-20 hover:bg-green-400 transition hover:translate-y-[-1rem]">
          <div className="">
            <div className="text-xl text-indigo-700 font-bold">
              Graduation -2019 (English Hons- 54.5%)
            </div>
            <div className="text-2xl dark:text-white">
              Asutosh College, Kolkata
            </div>
          </div>
          <div className="">
            <div className="text-xl text-indigo-700 font-bold">
              Web Development -2023 (Ongoing)
            </div>
            <div className="text-2xl dark:text-white">
              Central Institute Of Technology (Dumdum)
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Academic;
