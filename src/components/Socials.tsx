const Socials = () => {
  return (
    <>
      <div className="grid grid-cols-2 px-5 lg:px-10  justify-center items-center h-[15vh] lg:h-[10vh] dark:bg-blue-700 bg-blue-300">
        <div className="">
          <div className="text-sm">
            <span className="font-bold dark:text-gray-700">Phone- </span>
            <span>9123309893/8981650473</span>
          </div>
          <div className="text-sm">
            <span className="font-bold dark:text-gray-700">Email- </span>
            <span>purbayan.kol@gmail.com</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 ms-auto">
          <img src="/x.png" alt="" className="w-[1rem] lg:w-[1.5rem]" />
          <img src="/in.png" alt="" className="w-[1rem] lg:w-[1.5rem]" />
          <img src="/git.png" alt="" className="w-[1rem] lg:w-[1.5rem]" />
          <img src="/lt.png" alt="" className="w-[1rem] lg:w-[1.5rem]" />
        </div>
      </div>
    </>
  );
};

export default Socials;
