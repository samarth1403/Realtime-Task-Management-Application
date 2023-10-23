import React from "react";
import DonutChart from "../Components/HomeComponents/DonutChart";
import { TasksPriorityWise } from "../Components/HomeComponents/TasksPriorityWise";
import TasksStausWise from "../Components/HomeComponents/TasksStausWise";
import TotalTasks from "../Components/HomeComponents/TotalTasks";

const HomePage = () => {
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
        <TotalTasks />
        <DonutChart data={chartData} />
      </div>
      <TasksStausWise />
      <TasksPriorityWise />
    </div>
  );
};

export default HomePage;
