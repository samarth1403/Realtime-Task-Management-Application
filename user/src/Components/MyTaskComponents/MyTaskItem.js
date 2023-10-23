import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const MyTaskItem = ({ task }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="lg:hidden shadow-md shadow-blue-500/50 border border-gray-300 rounded-md min-[320px]:w-[280px] sm:w-[300px] p-4 my-2 flex flex-col flex-no-wrap justify-center items-center m-4">
        <div className="flex flex-row flex-wrap justify-between items-center">
          <p className="font-roboto text-md font-medium py-2 px-2">
            {task.title}
          </p>
          <p className="font-roboto text-sm font-normal py-2">
            Due date -{" "}
            <span className="font-roboto text-sm font-medium py-2">
              {task.dueDate}
            </span>
          </p>
          <p className="font-roboto text-sm font-normal py-2">
            Status-{" "}
            <span className="font-roboto text-sm font-medium py-2">
              {task.status}
            </span>
          </p>
          <p className="font-roboto text-sm font-normal py-2">
            Priority -{" "}
            <span className="font-roboto text-sm font-medium py-2">
              {task.priority}
            </span>
          </p>
          <Link to={"/my-tasks/task"}>
            <BsFillEyeFill className="text-blue-500 mx-2" size={"25px"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyTaskItem;
