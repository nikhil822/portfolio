import React from 'react'

const Experience = () => {
  return (
    <section className="w-full bg-gray-900 py-16 md:py-20 2xl:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="self-center">
              <div className="flex item-center justify-center rounded-xl bg-gray-700 px-5 py-1">
                <p className="text-normal text-sm font-medium text-gray-300">
                  Experience
                </p>
              </div>
            </div>
          </div>
          <p className="text-normal text-lg md:text-xl max-w-xl text-center text-gray-300">
            Here is the quick summary of my most recent experiences:
          </p>
        </div>
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-800 dark:shadow-2xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
          <div className="max-md:order-1 md:w-1/4">
            <img
              className="max-w-[120px]"
              src="https://media.licdn.com/dms/image/D5612AQF2a3w6KSWWdA/article-cover_image-shrink_720_1280/0/1675007152298?e=2147483647&v=beta&t=oOThO7_mupm6DNPgktVlZdbMrOEYFZpnEKyRFL3W2wg"
              alt="Kfintech"
            />
          </div>
          <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
            <p className="text-lg md:text-xl font-semibold text-gray-50">
              Software Engineer Intern
            </p>
            <ul className="flex flex-col list-disc gap-2 md:gap-1 text-gray-300">
              <li className="text-normal text-base">
                Developed a query to efficiently retrieve and convert data from
                an AWS S3 bucket into a compressed zip file
              </li>
              <li className="text-normal text-base">
                Developed a web page using React.js and Material UI to download
                the mentioned zip file
              </li>
            </ul>
          </div>
          <div className="max-md:order-2 md:w-1/4">
            <p className="text-base text-gray-200 md:text-right">
              Dec 2023 - Present
            </p>
            <p className="text-base text-gray-200 md:text-right">
              Bhubaneswar, Odisha
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience