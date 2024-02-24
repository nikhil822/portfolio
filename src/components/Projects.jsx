import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import expense from '../images/expenseease.jpeg'
import chathub from '../images/chathub.jpeg'
import countries from '../images/countries.jpeg'

const Projects = () => {
  return (
    <section className="w-full bg-gray-900 py-16 md:py-20 2xl:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex item-center justify-center rounded-xl bg-gray-700 px-5 py-1">
              <p className="text-normal text-sm font-medium text-gray-300">
                Projects
              </p>
            </div>
          </div>
          <p className="text-normal text-lg md:text-xl max-w-xl text-center text-gray-300">
            Some of the projects I have built:
          </p>
        </div>
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row">
          <div className="flex items-center justify-center border-gray-700 bg-gray-700 p-8 dark:bg-gray-700 max-md:rounded-t-xl md:w-1/2 lg:p-12 md:rounded-l-xl md:border-r">
            <a href="https://chat-hub-frontend.vercel.app/">
              <img
                className="w-1711px h-1141px rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
                src={chathub}
              />
            </a>
          </div>
          <div className="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12 bg-gray-800">
            <p className="text-lg md:text-xl font-semibold text-gray-50">
              ChatHub
            </p>
            <p className="text-normal text-base text-gray-300">
              Developed a real-time chat app with MERN stack and Socket.io,
              ensuring security measures and enabling avatar customization for
              enhanced user engagement.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center justify-center rounded-xl bg-gray-700 px-5 py-1">
                <p className="text-normal text-sm font-medium text-gray-300">
                  React.js
                </p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-700 px-5 py-1">
                <p className="text-normal text-sm font-medium text-gray-300">
                  Styled-components
                </p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-700 px-5 py-1">
                <p className="text-normal text-sm font-medium text-gray-300">
                  Node.js
                </p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-700 px-5 py-1">
                <p className="text-normal text-sm font-medium text-gray-300">
                  Express.js
                </p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-700 px-5 py-1">
                <p className="text-normal text-sm font-medium text-gray-300">
                  MongoDB
                </p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-700 px-5 py-1">
                <p className="text-normal text-sm font-medium text-gray-300">
                  Socket.io
                </p>
              </div>
            </div>
            <a
              className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-"
              href="https://github.com/nikhil822/ChatHub"
            >
              <OpenInNewIcon sx={{ color: "#9ca3af" }} />
            </a>
          </div>
        </div>
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row">
          <div className="flex items-center justify-center border-gray-700 bg-gray-700 p-8 dark:bg-gray-700 max-md:rounded-t-xl md:w-1/2 lg:p-12 md:order-last md:rounded-r-xl md:border-l">
            <a href="https://github.com/nikhil822/ExpenseEase">
              <img
                className="w-1711px h-1141px rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
                src={expense}
                alt="Image"
              />
            </a>
          </div>
          <div className="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12 bg-gray-800">
            <p className="text-lg md:text-xl font-semibold text-gray-50">
              ExpenseEase
            </p>
            <p className="text-normal text-base text-gray-300">
              Built MERN app for income/expense tracking with visual data
              representation and user-friendly functionalities. Integrated
              graphs for clear insights and implemented convenient delete/add
              features for usability.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center justify-center rounded-xl bg-gray-700 px-5 py-1">
                <p className="text-normal text-sm font-medium text-gray-300">
                  React.js
                </p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-700 px-5 py-1">
                <p className="text-normal text-sm font-medium text-gray-300">
                  Bootstrap
                </p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-700 px-5 py-1">
                <p className="text-normal text-sm font-medium text-gray-300">
                  Node.js
                </p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-700 px-5 py-1">
                <p className="text-normal text-sm font-medium text-gray-300">
                  Express.js
                </p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-700 px-5 py-1">
                <p className="text-normal text-sm font-medium text-gray-300">
                  MongoDB
                </p>
              </div>
            </div>
            <a
              className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-"
              href="https://github.com/nikhil822/ExpenseEase"
            >
              <OpenInNewIcon sx={{ color: "#9ca3af" }} />
            </a>
          </div>
        </div>
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row">
          <div className="flex items-center justify-center border-gray-700 bg-gray-700 p-8 dark:bg-gray-700 max-md:rounded-t-xl md:w-1/2 lg:p-12 md:rounded-l-xl md:border-r">
            <a href="https://genuine-melomakarona-d14e23.netlify.app/">
              <img
                className="w-1711px h-1141px rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
                src={countries}
                alt="Image"
              />
            </a>
          </div>
          <div className="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12 bg-gray-800">
            <p className="text-lg md:text-xl font-semibold text-gray-50">
              Rest Countries API
            </p>
            <p className="text-normal text-base text-gray-300">
              A website that provides users with information about the
              countries.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center justify-center rounded-xl bg-gray-700 px-5 py-1">
                <p className="text-normal text-sm font-medium text-gray-300">
                  React.js
                </p>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-700 px-5 py-1">
                <p className="text-normal text-sm font-medium text-gray-300">
                  CSS
                </p>
              </div>
            </div>
            <a
              className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-"
              href="https://github.com/nikhil822/Rest_Countries_API"
            >
              <OpenInNewIcon sx={{ color: "#9ca3af" }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
