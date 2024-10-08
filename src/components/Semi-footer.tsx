import Marquee from "react-fast-marquee";
import {
  FaBootstrap,
  FaGithub,
  FaOpencart,
  FaReact,
  FaShopify,
  FaWordpress,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiJavascript, SiMongodb } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

const Semifooter = () => {
  return (
    <>
      <div className="dark:bg-black lg:h-[20dvh] flex items-center bg-gray-200 dark:text-gray-400 text-gray-600 ">
        <Marquee className="flex justify-between items-center" speed={100}>
          <div className="text-4xl lg:text-[60px] mx-5 lg:mx-14 text-center">
            <TiHtml5 />
            <span className="text-sm lg:text-lg font-semibold">HTML5</span>
          </div>
          <div className="text-4xl lg:text-[60px] mx-5 lg:mx-14 text-center">
            <IoLogoCss3 />
            <span className=" text-sm lg:text-lg font-semibold">CSS3</span>
          </div>
          <div className="text-4xl lg:text-[60px] mx-5 lg:mx-14 text-center">
            <SiJavascript />
            <span className=" text-sm lg:text-lg font-semibold">
              JavaScript
            </span>
          </div>
          <div className="text-4xl lg:text-[60px] mx-5 lg:mx-14 text-center">
            <FaBootstrap />
            <span className="text-sm lg:text-lg font-semibold">Bootstrap</span>
          </div>
          <div className="text-4xl lg:text-[60px] mx-5 lg:mx-14 text-center">
            <RiTailwindCssFill />
            <span className=" text-sm lg:text-lg font-semibold">
              Tailwind CSS
            </span>
          </div>
          <div className="text-4xl lg:text-[60px] mx-5 lg:mx-14 text-center">
            <FaReact />
            <span className=" text-sm lg:text-lg font-semibold">React</span>
          </div>
          <div className="text-4xl lg:text-[60px] mx-5 lg:mx-14 text-center">
            <RiNextjsFill />
            <span className=" text-sm lg:text-lg font-semibold">Next.js</span>
          </div>

          <div className="text-4xl lg:text-[60px] mx-5 lg:mx-14 text-center">
            <SiExpress />

            <span className=" text-sm lg:text-lg font-semibold">
              Express js
            </span>
          </div>
          <div className="text-4xl lg:text-[60px] mx-5 lg:mx-14 text-center">
            <SiMongodb />
            <span className=" text-sm lg:text-lg font-semibold">Mongo DB</span>
          </div>
          <div className="text-4xl lg:text-[60px] mx-5 lg:mx-14 text-center">
            <FaGithub />
            <span className=" text-sm lg:text-lg font-semibold">GitHub</span>
          </div>
          <div className="text-4xl lg:text-[60px] mx-5 lg:mx-14 text-center">
            <FaShopify />

            <span className=" text-sm lg:text-lg font-semibold">Shopify</span>
          </div>
          <div className="text-4xl lg:text-[60px] mx-5 lg:mx-14 text-center">
            <FaOpencart />

            <span className=" text-sm lg:text-lg font-semibold">Opencart</span>
          </div>

          <div className="text-4xl lg:text-[60px] mx-5 lg:mx-14 text-center">
            <FaWordpress />

            <span className="text-sm lg:text-lg font-semibold">Wordpress</span>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Semifooter;
