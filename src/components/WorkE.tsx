const WorkE = () => {
  return (
    <>
      <div className="poppins grid grid-cols-1 lg:grid-cols-3 mt-16" id="worke">
        <div className="flex items-center gap-2 justify-center pb-10">
          <div className="w-5 h-0.5 bg-green-500"></div>
          <p className="text-2xl text-green-500">Work Experience</p>
        </div>

        <div className="col-span-2 grid lg:grid-cols-2 space-y-6 space-x-6 mx-auto px-10">
          <div className="bg-[#4b4be442] px-3 py-2">
            <div className="">
              <span className="text-green-500 text-xl">Elphill Technology</span>
              <span> (Oct 2021 - June 2022)</span>
            </div>
            <div className="text-gray-400">
              SEO Content Writer, Marketing Writer, Press Release Writer
            </div>
          </div>

          <div className="bg-[#4b4be442] px-3 py-2">
            <div className="">
              <span className="text-green-500 text-xl">Academia Assist</span>
              <span> (Dec 2022 - Mar 2023)</span>
            </div>
            <div className="text-gray-400">
              SEO Content Writer, Marketing Writer
            </div>
          </div>

          <div className="bg-[#4b4be442] px-3 py-2">
            <div className="">
              <span className="text-green-500 text-xl">Oswal Publishers</span>
              <span className=""> (Since 2022)</span>
            </div>
            <div className="text-gray-400">Questions and Answers Maker</div>
          </div>

          <div className="bg-[#4b4be442] px-3 py-2">
            <div className="text-green-500 text-xl">
              <span>Care N Class</span>
              <span> (Oct 2023 - May 2024)</span>
            </div>
            <div className="text-gray-400">
              Freelance Content Writer and Shopify Website Builder
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkE;
