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
import { SiJavascript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

const Semifooter = () => {
  return (
    <>
      <div className="dark:bg-black lg:h-[20dvh] pb-5 bg-gray-200">
        <Marquee className="flex justify-between items-center" speed={100}>
          <div className="text-4xl lg:text-[80px] mx-5 lg:mx-8 text-center">
            <TiHtml5 />
            <span className="hidden lg:block text-xl font-semibold">HTML5</span>
          </div>
          <div className="text-4xl lg:text-[80px] mx-5 lg:mx-8 text-center">
            <IoLogoCss3 />
            <span className="hidden lg:block text-xl font-semibold">CSS3</span>
          </div>
          <div className="text-4xl lg:text-[80px] mx-5 lg:mx-8 text-center">
            <SiJavascript />
            <span className="hidden lg:block text-xl font-semibold">
              JavaScript
            </span>
          </div>
          <div className="text-4xl lg:text-[80px] mx-5 lg:mx-8 text-center">
            <FaBootstrap />
            <span className="hidden lg:block text-xl font-semibold">
              Bootstrap
            </span>
          </div>
          <div className="text-4xl lg:text-[80px] mx-5 lg:mx-8 text-center">
            <RiTailwindCssFill />
            <span className="hidden lg:block text-xl font-semibold">
              Tailwind CSS
            </span>
          </div>
          <div className="text-4xl lg:text-[80px] mx-5 lg:mx-8 text-center">
            <FaReact />
            <span className="hidden lg:block text-xl font-semibold">React</span>
          </div>
          <div className="text-4xl lg:text-[80px] mx-5 lg:mx-8 text-center">
            <RiNextjsFill />
            <span className="hidden lg:block text-xl font-semibold">
              Next.js
            </span>
          </div>
          <div className="text-4xl lg:text-[80px] mx-5 lg:mx-8 text-center">
            <FaGithub />
            <span className="hidden lg:block text-xl font-semibold">
              GitHub
            </span>
          </div>
          <div className="text-4xl lg:text-[80px] mx-5 lg:mx-8 text-center">
            <FaShopify />

            <span className="hidden lg:block text-xl font-semibold">
              Shopify
            </span>
          </div>
          <div className="text-4xl lg:text-[80px] mx-5 lg:mx-8 text-center">
            <FaOpencart />

            <span className="hidden lg:block text-xl font-semibold">
              Opencart
            </span>
          </div>

          <div className="text-4xl lg:text-[80px] mx-5 lg:mx-8 text-center">
            <FaWordpress />

            <span className="hidden lg:block text-xl font-semibold">
              Wordpress
            </span>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Semifooter;
