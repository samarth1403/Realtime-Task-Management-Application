import React from "react";
import { BiRefresh } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";

const KanbanboardItem = ({ kanbanItem }) => {
  const taskList = kanbanItem.tasks.map((task, index) => {
    return (
      <div
        key={task.title}
        className="flex flex-row flex-no-wrap justify-between items-center min-[320px]:w-[260px] sm:w-[360px] shadow-md p-2 rounded-md px-4"
      >
        <div className="flex flex-col flex-no-wrap justify-center items-start my-2">
          <p className="font-roboto text-md font-normal py-2">{task.title}</p>
          <p className="font-roboto text-sm font-normal py-2">
            Assigned to -{" "}
            <span className="font-roboto text-sm font-medium py-2">
              {task.assignee}
            </span>
          </p>
          <p className="font-roboto text-sm font-normal py-2">
            Due date -{" "}
            <span className="font-roboto text-sm font-medium py-2">
              {task.dueDate}
            </span>
          </p>
        </div>
        <button>
          <BsFillEyeFill size="20px" className="text-blue-500" />
        </button>
      </div>
    );
  });
  return (
    <div className="shadow-md shadow-blue-500/50 border border-gray-300 rounded-md p-4 my-2 flex flex-col flex-no-wrap justify-center items-center min-[320px]:w-[280px] sm:w-[400px]">
      <div className="flex flex-row flex-no-wrap justify-between items-center min-[320px]:w-[260px] sm:w-[360px]">
        <p className="font-roboto text-lg font-medium mb-4">
          {kanbanItem.status}
        </p>
        <button>
          <BiRefresh size="25px" />
        </button>
      </div>
      <div className="flex flex-col flex-no-wrap">{taskList}</div>
    </div>
  );
};

export default KanbanboardItem;
