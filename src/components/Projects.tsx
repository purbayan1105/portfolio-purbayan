import { pid } from "process";
import Cards from "./Cards";

type ProjectType = {
  pId: number;
  pImg: string;
  pDes: string;
  pHead: string;
};

const Projects = () => {
  const projectArray = [
    {
      pId: 1,
      pImg: "/2.jpg",
      pHead: "Simple Calcy 2024",
      pDes: "My first project with javascript that intrigued me to learn more about the programming language and boosted me the confidence that I needed initially",
      pBtn: "Click Here",
      pSrc: "https://simple-calcy-2024.netlify.app/",
      pb: [{ pb1: "HTML" }, { pb2: "CSS" }, { pb3: "Javascript" }],
    },
    {
      pId: 2,
      pImg: "/3.jpg",
      pHead: "Uber Interactive Landing Page",
      pDes: "Simple Uber interface is made using next Js. It took around two days to complete the project. A bit of logic is used to create it interactive and responsive",
      pSrc: "https://uberui-project-h346.vercel.app/",
      pBtn: "click here",
      pb: [
        { pb1: "Tailwind" },
        { pb2: "React" },
        { pb3: "Jotai" },
        { pb4: "Next" },
      ],
    },
    {
      pId: 3,
      pImg: "/4.jpg",
      pHead: "Play A Quiz Game",
      pDes: "This one I found a bit difficult as I learned a few things then that was new to me. But later on, making it beacme fun. One of the most memorable projects so far",
      pBtn: "Click Here",
      pSrc: "https://play-a-quiz.netlify.app/",
      pb: [{ pb1: "HTML" }, { pb2: "CSS" }, { pb3: "Javascript" }],
    },
    {
      pId: 4,
      pImg: "/5.jpg",
      pHead: "Free BMI Calculator",
      pDes: "This was one of my first Tools created with Vanilla Javascript, HTML, and CSS. It helped me to understand a lot of things about the languages",
      pBtn: "Click Here",
      pSrc: "https://bmi-checking-tool-free.netlify.app",
      pb: [
        { pb1: "HTML" },
        { pb2: "CSS" },
        { pb3: "Javascript" },
        { pb4: "Bootstrap" },
      ],
    },
    {
      pId: 5,
      pImg: "/1.jpg",
      pHead: "Random Quote 2023",
      pDes: "This was my first project using javascript. It involved just one or two dom manipulation. I created an array of quotes and authors. Using random number, I targeted each index to show the data in the array",
      pBtn: "Click Here",
      pSrc: "https://random-quote-2023.netlify.app/",
      pb: [{ pb1: "HTML" }, { pb2: "CSS" }, { pb3: "Javascript" }],
    },
    {
      pId: 6,
      pImg: "/6.jpg",
      pHead: "To Do List With Storage",
      pDes: "One of the most fascinating things I have made after learning Javascript. This helped me understand the concepts of array and use of local stoprage way better",
      pBtn: "Click Here",
      pSrc: "https://todolist-with-storage.netlify.app",
      pb: [{ pb1: "HTML" }, { pb2: "CSS" }, { pb3: "Javascript" }],
    },

    {
      pId: 7,
      pImg: "/7.jpg",
      pHead: "Weather App 2024",
      pDes: "This weather app is built using react. Initially, I found it difficult to get  an api. But I managed to get one in  the end.",
      pBtn: "Click Here",
      pSrc: "https://weather-app-dun-xi.vercel.app",
      pb: [
        { pb1: "React" },
        { pb2: "Next UI" },
        { pb3: "Axios" },
        { pb4: "Tanstack Query" },
        { pb5: "Jotai" },
      ],
    },
    {
      pId: 8,
      pImg: "/8.jpg",
      pHead: "Form Validation",
      pDes: "This Mock-up form is created using jotai, react hook  and zod resolver mainly, with next ui. Here, the data will be stored in local storage",
      pBtn: "Click Here",
      pSrc: "https://form-validation-sand-sigma.vercel.app/",
      pb: [
        { pb1: "React" },
        { pb2: "Next UI" },
        { pb3: "React Hook Form" },
        { pb4: "Zod" },
        { pb5: "Jotai with Storage" },
      ],
    },
    {
      pId: 9,
      pImg: "/9.jpg",
      pHead: "To Do List With React",
      pDes: "I already added one To Do List to my portfolio, but this one is new and created using React, Next UI, Jotai and Typescript ",
      pBtn: "Click Here",
      pSrc: "https://form-validation-sand-sigma.vercel.app/",
      pb: [
        { pb1: "React" },
        { pb2: "Next UI" },
        { pb3: "Jotai" },
        { pb4: "Local Storage" },
        { pb5: "Typescript" },
      ],
    },
  ];
  return (
    <>
      <Cards project={projectArray} />
    </>
  );
};

export default Projects;
