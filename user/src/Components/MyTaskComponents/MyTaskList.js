import React from "react";
import MyTaskItem from "./MyTaskItem";
import { BsFillEyeFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const MyTaskList = ({ taskListArray }) => {
  // const taskListArray = [
  //   {
  //     title: "Task1",
  //     description: "Task1 Description",
  //     assignee: "Admin",
  //     creator: "Me",
  //     priority: "P1",
  //     status: "Open",
  //     creationDate: "2023-10-23",
  //     dueDate: "2023-10-26",
  //   },
  //   {
  //     title: "Task2",
  //     description: "Task2 Description",
  //     assignee: "Admin",
  //     creator: "Me",
  //     priority: "P2",
  //     status: "Open",
  //     creationDate: "2023-10-25",
  //     dueDate: "2023-10-27",
  //   },
  // ];
  const navigate = useNavigate();

  const TaskList = taskListArray?.map((task) => {
    return <MyTaskItem key={task._id} task={task} />;
  });
  return (
    <div className="flex flex-row flex-wrap justify-center items-center p-8">
      {TaskList}
      <div className="min-[320px]:hidden sm:hidden md:hidden lg:inline-block">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Priority</th>
              <th>View Task</th>
            </tr>
          </thead>
          <tbody>
            {taskListArray?.map((task) => (
              <tr key={task._id}>
                <td>{task.title}</td>
                <td>{new Date(task.dueDate).toDateString()}</td>
                <td>{task.status}</td>
                <td>{task.priority}</td>
                <td>
                  <button onClick={() => navigate(`/task/${task._id}`)}>
                    <BsFillEyeFill
                      className="text-blue-500 mx-2"
                      size={"25px"}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTaskList;
