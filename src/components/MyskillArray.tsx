import CountUp from "react-countup";

const MyskillArray = () => {
  return (
    <>
      <div className="bg-white  dark:bg-[#111934] poppins pt-8 pb-8">
        <div className=" pt-5 flex justify-center items-center text-4xl font-semibold">
          Journey So Far
        </div>
        <div className=" grid  lg:grid-cols-4 lg:h-[20dvh] justify-center items-center px-5 lg:px-16 space-y-8 py-8 md:py-0">
          <div className="flex gap-5 items-center lg:pt-5">
            <div className="text-6xl font-bold text-gray-900 dark:bg-gradient-to-tr from-gray-400 to-gray-100 dark:bg-clip-text w-fit dark:text-transparent ">
              <CountUp start={0} end={1}></CountUp>+
            </div>
            <div className="">
              <div className="text-gray-500">Years Of </div>
              <div className="text-gray-500">Experience </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-6xl font-bold text-gray-900 dark:bg-gradient-to-tr from-gray-400 to-gray-100 dark:bg-clip-text w-fit dark:text-transparent ">
              <CountUp start={0} end={10} duration={5} suffix="+"></CountUp>
            </div>
            <div className="">
              <div className="text-gray-500">Technologies </div>
              <div className="text-gray-500">Mastered </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-6xl font-bold text-gray-900 dark:bg-gradient-to-tr from-gray-400 to-gray-100 dark:bg-clip-text w-fit dark:text-transparent ">
              <CountUp start={0} end={5} duration={2} suffix=""></CountUp>
            </div>
            <div className="">
              <div className="text-gray-500">projects</div>
              <div className="text-gray-500">Contribution </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-6xl font-bold text-gray-900 dark:bg-gradient-to-tr from-gray-400 to-gray-100 dark:bg-clip-text w-fit dark:text-transparent ">
              <CountUp start={0} end={100} duration={2} suffix="%"></CountUp>
            </div>
            <div className="">
              <div className="text-gray-500">Client </div>
              <div className="text-gray-500">Satisfaction </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyskillArray;
