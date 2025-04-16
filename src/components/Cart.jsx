import React from "react";

const Cart = ({ teamList, totalCost }) => {
  return (
    <div className="text-center block w-full mt-6 md:mt-0 p-6 bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        TEAM SUMMARY
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Total Expert Added: {teamList.length}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Total Cost: {totalCost}
      </p>
      {teamList.length > 0 && (
        <div className="mt-4">
          <h6 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
            Selected Experts
          </h6>
          <ul className="text-left">
            {teamList.map((expert) => (
              <li
                key={expert.id}
                className="text-sm text-gray-700 dark:text-gray-400"
              >
                <a
                  href="#"
                  class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 "
                >
                  <img
                    class="object-cover rounded-t-lg md:h-auto w-full md:w-20 md:rounded-none md:rounded-s-lg"
                    src={expert.img}
                    alt={expert.name}
                  />
                  <div class="flex flex-col justify-between p-4 leading-normal">
                    {expert.name} <br />
                    Salary: ${expert.salary}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
