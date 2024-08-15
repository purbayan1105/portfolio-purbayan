import { PiStarFourFill } from "react-icons/pi";

const FrontendSkills = () => {
  const techSkillsArray = [
    {
      heading: "Responsive Design",
      text: "Creating layouts that adapt to different screen sizes and devices.",
    },
    {
      heading: "APIs",
      text: "Consuming RESTful APIs and handling data with JavaScript and its frameworks.",
    },
    {
      heading: "JavaScript Fundamentals",
      text: "Strong understanding of JavaScript basics, ES6+ syntax, and asynchronous programming.",
    },
    {
      heading: "CSS Frameworks",
      text: "Familiarity with frameworks like Tailwind CSS, Bootstrap, or Bulma for quicker styling.",
    },
    {
      heading: "Frontend Frameworks",
      text: "Expertise in React and Next.js for building modern web applications.",
    },
    {
      heading: "Version Control",
      text: "Proficiency with Git for version control, including branching, merging, and pull requests.",
    },
    {
      heading: "Cross-Browser Compatibility",
      text: "Ensuring websites work smoothly across various browsers and devices.",
    },
    {
      heading: "Performance Optimization",
      text: "Techniques to optimize load times, such as lazy loading and code splitting.",
    },
    {
      heading: "Testing and Debugging",
      text: "Writing unit tests and using debugging tools to ensure code quality and reliability.",
    },
  ];
  return (
    <>
      <div className="dark:bg-blue-950 lg:px-16 bg-white poppins py-8">
        <div className="text-4xl flex justify-center items-center font-semibold py-8">
          Thing I Do Well
        </div>
        <div className="lg:grid grid-cols-3 items-center lg:h-[80dvh] space-y-6  ">
          {techSkillsArray.map((skill, key) => {
            return (
              <>
                <div
                  className="bg-gradient-to-tr from-transparent via-transparent to-green-300/70 shadow-sm shadow-black border-gray-200/30 dark:border-blue-800/30 rounded-lg border-2 border-solid p-6 mx-5 poppins"
                  key={skill.heading}>
                  <div className="flex items-center gap-3">
                    <PiStarFourFill className="text-yellow-400 shadow-sm" />

                    <div className="text-blue-600 font-bold dark:text-green-500 text-2xl mb-5">
                      {skill.heading}
                    </div>
                  </div>
                  <div className="">{skill.text}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FrontendSkills;
