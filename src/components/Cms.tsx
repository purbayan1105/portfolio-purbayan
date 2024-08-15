import { Divider, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import Wordpress from "./Wordpress";
import Shopify from "./Shopify";

const Cms = () => {
  const [selectedComp, setSelectedComp] = useState("wordpress");

  const renderedComp = () => {
    switch (selectedComp) {
      case "wordpress":
        return <Wordpress />;
      case "shopify":
        return <Shopify />;
    }
  };
  return (
    <>
      <div className="poppins bg-gray-100  dark:bg-[#111934]">
        <div className="text-4xl flex justify-center items-center font-semibold pt-8">
          CMS Projects
        </div>
        <div className="mt-8 lg:mx-24 mx-5 text-center mb-6">
          I have contributed to various CMS platforms, utilizing my web
          development skills. Some projects were created solely by me,
          showcasing my individual expertise, while others were completed in
          collaboration with my seniors, highlighting my teamwork abilities.
        </div>
        {/* Tab section- Wordpress and Shopify */}
        <div className="grid grid-cols-2 border-2 border-solid border-blue-500 dark:border-green-500  mx-5 lg:mx-24 mt-14 rounded-xl">
          <div
            className={`flex justify-center items-center text-lg ${
              selectedComp === "wordpress"
                ? "dark:bg-gradient-to-tr dark:from-green-800 dark:to-green-300 bg-blue-300 text-black w-full h-full py-3"
                : ""
            } font-semibold rounded-l-lg select-none cursor-pointer`}
            onClick={() => setSelectedComp("wordpress")}>
            Wordpress Sites
          </div>

          <div
            className={`flex justify-center items-center text-lg ${
              selectedComp === "shopify"
                ? "dark:bg-gradient-to-tl dark:from-green-800 dark:via-green-400 dark:to-green-300 bg-blue-300 text-black w-full h-full py-3"
                : ""
            } font-semibold rounded-r-lg select-none cursor-pointer`}
            onClick={() => {
              setSelectedComp("shopify");
            }}>
            Shopify Sites
          </div>
        </div>
        <div className="">{renderedComp()}</div>
      </div>
    </>
  );
};

export default Cms;
