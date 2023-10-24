import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DonutChart from "../Components/HomeComponents/DonutChart";
import { TasksPriorityWise } from "../Components/HomeComponents/TasksPriorityWise";
import TasksStausWise from "../Components/HomeComponents/TasksStausWise";
import TotalTasks from "../Components/HomeComponents/TotalTasks";

const HomePage = () => {
  const { tasks } = useSelector((state) => {
    return state?.task;
  });

  const openTasksArray = tasks?.filter((task) => {
    return task.status === "Open";
  });

  const inProgressTasksArray = tasks?.filter((task) => {
    return task.status === "In Progress";
  });

  const completedTasksArray = tasks?.filter((task) => {
    return task.status === "Completed";
  });

  const statusWiseTasks = {
    openTasksCount: openTasksArray?.length,
    inProgressTasksCount: inProgressTasksArray?.length,
    completedTasksCount: completedTasksArray?.length,
  };

  let p1PriorityTasks = 0;
  let p2PriorityTasks = 0;
  let p3PriorityTasks = 0;

  tasks?.forEach((task) => {
    if (task?.priority === "P1") {
      p1PriorityTasks++;
    } else if (task?.priority === "P2") {
      p2PriorityTasks++;
    } else {
      p3PriorityTasks++;
    }
  });

  const priorityWiseTasks = {
    p1PriorityTasks,
    p2PriorityTasks,
    p3PriorityTasks,
  };

  const chartData = {
    labels: ["Assignee A", "Assignee B", "Assignee C"],
    datasets: [
      {
        label: "Total Tasks",
        data: [33, 33, 33],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
    hoverOffset: 4,
  };

  return (
    <div className="flex flex-row flex-wrap justify-evenly items-start p-6">
      <div className="flex flex-col flex-no-wrap justify-center items-center">
        <TotalTasks totalTasksCount={tasks?.length} />
        <DonutChart data={chartData} />
      </div>
      <TasksStausWise statusWiseTasks={statusWiseTasks} />
      <TasksPriorityWise priorityWiseTasks={priorityWiseTasks} />
    </div>
  );
};

export default HomePage;
