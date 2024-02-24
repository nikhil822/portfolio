import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import profilePic from '../images/profilePic.jpg'

const Intro = () => {
  return (
    <section className="w-full bg-gray-950 py-16 md:py-20 2xl:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
            <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
              <img
                src={profilePic}
                alt="PIC"
                className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
              />
              <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
            </div>
          </div>
          <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-50">
                Hi, I'm Nikhil{" "}
                <span className="inline-block animate-waving-hand">👋</span>
              </h1>
              <p className="text-normal text-base text-gray-300">
                I am a MERN-stack web developer with a strong desire to create
                meaningful projects. I am always looking for ways to contribute
                my skills and expertise to new initiatives. Aside from my
                professional endeavors, I actively participate in coding
                competitions, improving my problem-solving skills and staying
                up-to-date with the latest technologies.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <LocationOnOutlinedIcon sx={{ color: "#d1d5db" }} />
                <p className="text-normal text-base text-gray-300">
                  Berhampur, Odisha, India
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center">
                  <FiberManualRecordIcon sx={{ color: "green" }} />
                </div>
                <p className="text-normal text-base text-gray-300">
                  Available for projects
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <button className="relative flex justify-center items-center hover:bg-gray-800 active:bg-gray-800 rounded-lg p-1.5 transition-colors duration-200 [&_svg]-stroke-gray-800 [&_svg]:hover:stroke-gray-800 [&_svg]:w- [&_svg]:h-6">
                <a href="https://github.com/nikhil822">
                  <GitHubIcon sx={{ color: "#d1d5db" }} />
                </a>
              </button>
              <button className="relative flex justify-center items-center hover:bg-gray-800 active:bg-gray-800 rounded-lg p-1.5 transition-colors duration-200 [&_svg]-stroke-gray-800 [&_svg]:hover:stroke-gray-800 [&_svg]:w- [&_svg]:h-6">
                <a href="https://twitter.com/nikhil13sahu">
                  <XIcon sx={{ color: "#d1d5db" }} />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
