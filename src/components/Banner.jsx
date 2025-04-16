import React from "react";

const Banner = () => {
  return (
    <div className="block text-center p-10 mb-8 bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-800 dark:border-gray-700 ">
      <h5 className="mb-2 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Make a Cyber Security Team
      </h5>
      <p className="text-xl font-normal text-gray-700 dark:text-gray-400 my-4">
        Our server is under attack. So we need to hire a special security team.
      </p>
      <h5 className="mb-2 text-3xl font-normal tracking-tight text-gray-900 dark:text-white">
        Total Budget: <span className="font-bold">$10 Million</span>
      </h5>
    </div>
  );
};

export default Banner;
