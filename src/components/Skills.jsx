import React from "react";
import StackIcon from "tech-stack-icons";
import CLogo from "../images/C_logo.svg";

const skill = [
  {
    name: "C",
    icon: <img src={CLogo} alt="C" className="w-16 h-16" />,
  },
  {
    name: "C++",
    icon: <StackIcon name="c++" className="w-16 h-16" />,
  },
  {
    name: "HTML",
    icon: <StackIcon name="html5" className="w-16 h-16" />,
  },
  {
    name: "CSS",
    icon: <StackIcon name="css3" className="w-16 h-16" />,
  },
  {
    name: "Javascript",
    icon: <StackIcon name="js" className="w-16 h-16" />,
  },
  {
    name: "React.js",
    icon: <StackIcon name="reactjs" className="w-16 h-16" />,
  },
  {
    name: "Node.js",
    icon: <StackIcon name="nodejs" className="w-16 h-16" />,
  },
  {
    name: "Express.js",
    icon: <StackIcon name="c++" className="w-16 h-16" />,
  },
  {
    name: "MongoDB",
    icon: (
      <StackIcon name="mongodb" className="w-16 h-16" />
    ),
  },
  {
    name: "Material UI",
    icon: (
      <StackIcon name="materialui" className="w-16 h-16" />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <StackIcon name="tailwindcss" className="w-16 h-16" />
    ),
  },
  {
    name: "MySQL",
    icon: <StackIcon name="mysql" className="w-16 h-16" />,
  },
  {
    name: "Socket.io",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1200px-Socket-io.svg.png"
        alt="socket"
        className="w-16 h-16"
      />
    ),
  },
  {
    name: "GIT",
    icon: <StackIcon name="git" className="w-16 h-16" />,
  },
  {
    name: "Postman",
    icon: (
      <StackIcon name="postman" className="w-16 h-16" />
    ),
  },
  {
    name: "AWS",
    icon: <StackIcon name="aws" className="w-16 h-16" />,
  },
  {
    name: "Firebase",
    icon: (
      <StackIcon name="firebase" className="w-16 h-16" />
    ),
  },
];

const Skills = () => {
  return (
    <section className="w-full bg-gray-950 py-16 md:py-20 2xl:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex item-center justify-center rounded-xl bg-gray-700 px-5 py-1">
              <p className="text-normal text-sm font-medium text-gray-300">
                Skills
              </p>
            </div>
          </div>
          <p className="text-normal text-lg md:text-xl max-w-xl text-center text-gray-300">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
        <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12 ">
          {skill.map((item, index) => {
            return (
              <div key={index} className="flex flex-col items-center gap-2">
                {item.icon}
                <p className="text-normal text-base md:text-lg text-gray-300">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
