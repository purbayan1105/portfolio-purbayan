import {
  autocomplete,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SlidersVertical } from "lucide-react";
import { useAtom } from "jotai";
import { themeAtom } from "@/utils/atom";
import Link from "next/link";

type PB = {
  pb1?: string;
  pb2?: string;
  pb3?: string;
  pb4?: string;
};
type ProjectType = {
  pId: number;
  pImg: string;
  pDes: string;
  pHead: string;
  pBtn: string;
  pSrc: string;
  pb?: PB[];
};
type ArrayType = {
  project: ProjectType[];
};

function SampleNextArrow(props: any) {
  const [dark, setDark] = useAtom(themeAtom);
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: dark ? "red" : "blue",
        borderRadius: "30px",
      }}
      onClick={onClick}
    />
  );
}
function SampleprevArrow(props: any) {
  const [dark, setDark] = useAtom(themeAtom);
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: dark ? "red" : "blue",
        borderRadius: "30px",
      }}
      onClick={onClick}
    />
  );
}

const Cards = ({ project }: ArrayType) => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    autoplay: true,

    autoplaySpeed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleprevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        className=" dark:text-white  bg-[#0e1630] text-black px-8 poppins pb-10 "
        id="projects">
        <div className="text-4xl font-semibold  text-center pt-10 mb-16">
          My Projects
        </div>
        <div className="md:pl-7">
          <Slider {...settings}>
            {project.map((item) => {
              return (
                <>
                  <div className="md:mx-auto">
                    <Card
                      className="w-full md:w-80 shadow-none lg:h-[33rem] bg-blue-950 "
                      key={item.pId}>
                      <CardBody className="space-y-5 ">
                        <Image
                          src="/code1.jpeg"
                          width={300}
                          height={300}
                          alt="card-image"
                          className="rounded-xl"
                        />
                        <div className="text-xl font-medium text-center md:text-left dark:text-indigo-400 text-indigo-700">
                          {item.pHead}
                        </div>
                        <div className="text-center md:text-left text-sm">
                          {item.pDes}
                        </div>
                        <Link href={item.pSrc} passHref legacyBehavior>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full">
                            <Button
                              color="primary"
                              variant="bordered"
                              className="w-full">
                              Click Here
                            </Button>
                          </a>
                        </Link>
                        {item.pb && (
                          <div className="text-center md:text-left text-sm flex flex-wrap justify-center gap-2 ">
                            {item.pb.map((tech, index) => (
                              <div key={index}>
                                {tech.pb1 && (
                                  <button className="bg-gray-200 px-3 py-1.5 rounded-md dark:text-black">
                                    {tech.pb1}
                                  </button>
                                )}
                                {tech.pb2 && (
                                  <button className="bg-gray-200 px-3 py-1.5 rounded-md dark:text-black">
                                    {tech.pb2}
                                  </button>
                                )}
                                {tech.pb3 && (
                                  <button className="bg-gray-200 px-3 py-1.5 rounded-md dark:text-black">
                                    {tech.pb3}
                                  </button>
                                )}
                                {tech.pb4 && (
                                  <button className="bg-gray-200 px-3 py-1.5 rounded-md dark:text-black">
                                    {tech.pb4}
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </CardBody>
                    </Card>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Cards;
