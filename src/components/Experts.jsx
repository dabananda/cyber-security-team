import axios from "axios";
import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

const Experts = ({ addToListHandler }) => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    axios.get("../../experts.json").then((data) => setExperts(data.data));
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {experts.map((expert) => (
        <div
          key={expert.id}
          className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="flex flex-col items-center py-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={expert.img}
              alt={expert.name}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {expert.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {expert.designation}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-bold">Age:</span> {expert.age}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-bold">Salary:</span> ${expert.salary}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-bold">Address:</span> {expert.address}
            </span>
            <div className="flex mt-4 md:mt-6">
              <button
                onClick={() => addToListHandler(expert)}
                className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <ShoppingCart />
                &nbsp; Add to list
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experts;
