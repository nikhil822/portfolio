import React from 'react'
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";

const Contact = () => {
  return (
    <section className="w-full bg-gray-900 py-16 md:py-20 2xl:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex item-center justify-center rounded-xl bg-gray-700 px-5 py-1">
              <p className="text-normal text-sm font-medium text-gray-300">
                Get in touch
              </p>
            </div>
          </div>
          <p className="text-normal text-lg md:text-xl max-w-xl text-center text-gray-300">
            What's next? Feel free to reach out to me if you are looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 md:gap-12">
          <div className="flex flex-col items-center md:gap-4">
            <div className="flex items-center gap-4 md:gap-5">
              <EmailOutlinedIcon className="w-6 h-6 md:w-8 md:h-8 text-gray-300" />
              <h2 className="text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-50">
                nikhilsahu1312@gmail.com
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center md:gap-4">
            <div className="flex items-center gap-4 md:gap-5">
              <LocalPhoneOutlinedIcon
                sx={{ width: "24px", height: "24px", color: "#d1d5db" }}
              />
              <h2 className="text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-50">
                +919556709942
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-normal text-base text-gray-300">
              You may also find me on these platforms!
            </p>
            <div className="flex gap-1">
              <button className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]-stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6">
                <a href="https://github.com/nikhil822">
                  <GitHubIcon sx={{ color: "#d1d5db" }} />
                </a>
              </button>
              <button className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]-stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6">
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
}

export default Contact