import React from "react";
import { BiRefresh } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const TasksStausWise = ({ statusWiseTasks }) => {
  return (
    <div className="shadow-md shadow-blue-500/50 border border-gray-300 rounded-md p-4 my-2 flex flex-col flex-no-wrap justify-center items-center min-[320px]:w-[280px] sm:w-[400px]">
      <div className="flex flex-row flex-no-wrap justify-between items-center min-[320px]:w-[260px] sm:w-[360px] min-[320px]:mb-6 sm:mb-8">
        <p className="font-roboto text-lg font-medium">
          All Tasks - Status Wise
        </p>
        <button>
          <BiRefresh size="25px" />
        </button>
      </div>
      <div className="flex flex-col flex-no-wrap">
        <div className="flex flex-row flex-no-wrap justify-between items-center min-[320px]:w-[260px] sm:w-[360px] shadow-md p-2 rounded-md">
          <div className="flex flex-col flex-no-wrap justify-center items-start my-4">
            <p className="font-roboto text-lg font-normal">Status - Open</p>
            <p className="font-roboto text-md font-medium">
              {statusWiseTasks.openTasksCount}
            </p>
          </div>
          <Link to={"/all-tasks/open"}>
            <BsFillEyeFill size="20px" className="text-blue-500" />
          </Link>
        </div>
        <div className="flex flex-row flex-no-wrap justify-between items-center min-[320px]:w-[260px] sm:w-[360px] shadow-md p-2 rounded-md">
          <div className="flex flex-col flex-no-wrap justify-center items-start my-4">
            <p className="font-roboto text-lg font-normal">
              Status - In Progress
            </p>
            <p className="font-roboto text-md font-medium">
              {statusWiseTasks.inProgressTasksCount}
            </p>
          </div>
          <Link to={"/all-tasks/in-progress"}>
            <BsFillEyeFill size="20px" className="text-blue-500" />
          </Link>
        </div>
        <div className="flex flex-row flex-no-wrap justify-between items-center min-[320px]:w-[260px] sm:w-[360px] shadow-md p-2 rounded-md">
          <div className="flex flex-col flex-no-wrap justify-center items-start my-4">
            <p className="font-roboto text-lg font-normal">
              Status - Completed
            </p>
            <p className="font-roboto text-md font-medium">
              {statusWiseTasks.completedTasksCount}
            </p>
          </div>
          <Link to={`/all-tasks/complete`}>
            <BsFillEyeFill size="20px" className="text-blue-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TasksStausWise;
