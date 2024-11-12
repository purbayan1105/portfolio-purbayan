const WorkE = () => {
  return (
    <>
      <div className=" dark:bg-black">
        <div
          className="poppins grid grid-cols-1 lg:grid-cols-3 items-center lg:h-[50dvh]"
          id="worke">
          <div className="flex items-center gap-2 justify-center pb-10">
            <div className="w-5 h-0.5 bg-blue-600 dark:bg-green-500"></div>
            <p className="text-2xl text-blue-600 font-bold dark:text-green-500 py-8 lg:py-0">
              Work Experience
            </p>
          </div>

          <div className="col-span-2 grid lg:grid-cols-2 space-y-6 space-x-6 mx-auto px-10">
            <div className="bg-[#4b4be442] px-3 py-2">
              <div className="">
                <span className="text-blue-600 dark:text-green-500 text-xl font-bold">
                  Elphill Technology
                </span>
                <span> (Oct 2021 - June 2022)</span>
              </div>
              <div className="dark:text-gray-400 text-gray-600">
                SEO Content Writer, Marketing Writer, Press Release Writer
              </div>
            </div>

            <div className="bg-[#4b4be442] px-3 py-2">
              <div className="">
                <span className="text-blue-600 dark:text-green-500 text-xl font-bold">
                  Academia Assist
                </span>
                <span> (Dec 2022 - Mar 2023)</span>
              </div>
              <div className="dark:text-gray-400 text-gray-600">
                SEO Content Writer, Marketing Writer
              </div>
            </div>

            <div className="bg-[#4b4be442] px-3 py-2">
              <div className="">
                <span className="text-blue-600 dark:text-green-500 text-xl font-bold">
                  Freelancer
                </span>
                <span className=""> (Since 2023)</span>
              </div>
              <div className="dark:text-gray-400 text-gray-600">
                Wordpress Website Designer
              </div>
            </div>

            <div className="bg-[#4b4be442] px-3 py-2">
              <div className=" text-xl">
                <span className="font-bold text-blue-600 dark:text-green-500">
                  Care N Class
                </span>
                <span> (Oct 2023 - May 2024)</span>
              </div>
              <div className="dark:text-gray-400 text-gray-600">
                Freelance Content Writer and Shopify Website Builder
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkE;
