import React from "react";
import { BiRefresh } from "react-icons/bi";

const TotalTasks = () => {
  return (
    <div className="shadow-md shadow-blue-500/50 border border-gray-300 rounded-md p-4 my-2 flex flex-col flex-no-wrap justify-center items-center min-[320px]:w-[280px] sm:w-[400px]">
      <div className="flex flex-row flex-no-wrap justify-between items-center min-[320px]:w-[260px] sm:w-[360px] min-[320px]:mb-6 sm:mb-8">
        <p className="font-roboto text-lg font-medium">
          Total Count of Tasks created
        </p>
        <button>
          <BiRefresh size="25px" />
        </button>
      </div>
      <div className="flex flex-row flex-no-wrap justify-between items-center min-[320px]:w-[260px] sm:w-[360px]">
        <div className="flex flex-col flex-no-wrap justify-center items-center my-2">
          <p className="font-roboto text-lg font-normal">Total</p>
          <p className="font-roboto text-md font-medium">300</p>
        </div>
        <button className="bg-blue-300 py-2 px-4 rounded-md my-2">
          <p className="font-roboto font-medium text-sm">View All</p>
        </button>
      </div>
    </div>
  );
};

export default TotalTasks;
