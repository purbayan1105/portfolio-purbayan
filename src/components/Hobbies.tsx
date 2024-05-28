import { Check, CircleCheckBig } from "lucide-react";
import { useState } from "react";

const Hobbies = () => {
  const [hoveredItem1, setHoveredItem1] = useState(false);
  const [hoveredItem2, setHoveredItem2] = useState(false);
  const [hoveredItem3, setHoveredItem3] = useState(false);
  const [hoveredItem4, setHoveredItem4] = useState(false);
  const [hoveredItem5, setHoveredItem5] = useState(false);
  const [hoveredItem6, setHoveredItem6] = useState(false);

  return (
    <>
      <div
        className=" mt-16 lg:mt-48 grid  lg:grid-cols-3  mx-8 lg:mx-16 py-5 bg-[rgba(113,103,252,0.16)] lg:px-5 mb-10 rounded-2xl"
        id="hobbies">
        <div className="text-2xl lg:hidden">
          <div className="flex gap-3 items-center justify-center">
            <div className="w-5 h-0.5 bg-green-500"></div>
            <span className="text-green-500 font-semibold">My Hobbies</span>
          </div>
          <div className="mt-4 font-thin text-xl pl-5 pb-3">
            Here are what make me feel happy!
          </div>
        </div>
        {/* for phone  */}

        <div className="space-y-5 lg:col-span-2 grid lg:grid-cols-3 items-center poppins pl-5 lg:pl-0">
          <div
            className="flex items-center gap-2"
            onMouseOver={() => setHoveredItem1(true)}
            onMouseOut={() => setHoveredItem1(false)}>
            <span>
              {hoveredItem1 ? (
                <img src="/soccer-player.png" alt="" className="w-[2rem]" />
              ) : (
                <Check className="bg-green-500 rounded-full" />
              )}
            </span>
            <span className="text-2xl">Football</span>
          </div>
          <div
            className="flex items-center gap-2"
            onMouseOver={() => setHoveredItem2(true)}
            onMouseOut={() => setHoveredItem2(false)}>
            <span>
              {hoveredItem2 ? (
                <img src="/cricket.png" alt="" className="w-[2rem]" />
              ) : (
                <Check className="bg-green-500 rounded-full" />
              )}
            </span>
            <span className="text-2xl">Cricket</span>
          </div>
          <div
            className="flex items-center gap-2"
            onMouseOver={() => setHoveredItem3(true)}
            onMouseOut={() => setHoveredItem3(false)}>
            <span>
              {hoveredItem3 ? (
                <img src="/reading-book.png" alt="" className="w-[2rem]" />
              ) : (
                <Check className="bg-green-500 rounded-full" />
              )}
            </span>
            <span className="text-2xl">Reading</span>
          </div>{" "}
          <div
            className="flex items-center gap-2"
            onMouseOver={() => setHoveredItem4(true)}
            onMouseOut={() => setHoveredItem4(false)}>
            <span>
              {hoveredItem4 ? (
                <img src="/weightlifting.png" alt="" className="w-[2rem]" />
              ) : (
                <Check className="bg-green-500 rounded-full" />
              )}
            </span>
            <span className="text-2xl">Gyming</span>
          </div>
          <div
            className="flex items-center gap-2"
            onMouseOver={() => setHoveredItem5(true)}
            onMouseOut={() => setHoveredItem5(false)}>
            <span>
              {hoveredItem5 ? (
                <img src="/motorcycle.png" alt="" className="w-[2rem]" />
              ) : (
                <Check className="bg-green-500 rounded-full" />
              )}
            </span>
            <span className="text-2xl">Riding</span>
          </div>
          <div
            className="flex items-center gap-2"
            onMouseOver={() => setHoveredItem6(true)}
            onMouseOut={() => setHoveredItem6(false)}>
            <span>
              {hoveredItem6 ? (
                <img src="/guitar-playing.png" alt="" className="w-[2rem]" />
              ) : (
                <Check className="bg-green-500 rounded-full" />
              )}
            </span>
            <span className="text-2xl">Guitar</span>
          </div>
        </div>
        {/* for pc */}
        <div className="text-2xl hidden lg:block">
          <div className="flex gap-3 items-center justify-center">
            <div className="w-5 h-0.5 bg-green-500"></div>
            <span className="text-green-500 font-semibold">My Hobbies</span>
          </div>
          <div className="mt-4 font-thin text-xl">
            Here are what make me feel happy!
          </div>
        </div>
      </div>
    </>
  );
};

export default Hobbies;
