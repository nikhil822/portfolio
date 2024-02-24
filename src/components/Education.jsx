import React from 'react'

const Education = () => {
  return (
    <section className="w-full bg-gray-950 py-16 md:py-20 2xl:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="self-center">
              <div className="flex item-center justify-center rounded-xl bg-gray-700 px-5 py-1">
                <p className="text-normal text-sm font-medium text-gray-300">Education</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-800 dark:shadow-2xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
          <div className="max-md:order-1 md:w-1/4">
            <img
              className="max-w-[120px]"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Logo_vssut.svg/800px-Logo_vssut.svg.png"
              alt="VSSUT"
            />
          </div>
          <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
            <p className="text-lg md:text-xl font-semibold text-gray-50">
              Veer Surendra Sai University of Technology
            </p>
            <p className="text-normal text-base text-gray-300">
              Bachelor of Technology in Information Technology
            </p>
          </div>
          <div className="max-md:order-2 md:w-1/4">
            <p className="text-base text-gray-200 md:text-right">
              Dec 2020 - May 2024
            </p>
            <p className="text-base text-gray-200 md:text-right">
              CGPA: 8.35/10
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-800 dark:shadow-2xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
          <div className="max-md:order-1 md:w-1/4">
            <img
              className="max-w-[120px]"
              src="https://4.bp.blogspot.com/-cKfxHZBZKNo/WIQaN1S0CwI/AAAAAAAAFAc/8CVg_TVmG6ES8uVepCpzzYmwKyxvmyR7gCLcB/s1600/kvs-logo-with-bg.png"
              alt="KVGMS"
            />
          </div>
          <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
            <p className="text-lg md:text-xl font-semibold text-gray-50">
              Kendriya Vidyalaya Gopalpur Military Station
            </p>
            <p className="text-normal text-base text-gray-300">CBSE(XII)</p>
          </div>
          <div className="max-md:order-2 md:w-1/4">
            <p className="text-base text-gray-200 md:text-right">
              June 2017 - June 2019
            </p>
            <p className="text-base text-gray-200 md:text-right">
              Percentage: 89.8%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education