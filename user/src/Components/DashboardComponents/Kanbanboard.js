import React from "react";
import KanbanboardItem from "./KanbanboardItem";

const Kanbanboard = () => {
  const kanbanboardArray = [
    {
      status: "Open",
      tasks: [
        {
          title: "Task1",
          description: "Task1 Description",
          assignee: "Samarth Ikkalaki",
          creator: "Me",
          priority: "P1",
          status: "Open",
          creationDate: "2023-10-23",
          dueDate: "2023-10-26",
        },
        {
          title: "Task2",
          description: "Task2 Description",
          assignee: "Suraj Kumbhar",
          creator: "Me",
          priority: "P1",
          status: "Open",
          creationDate: "2023-10-23",
          dueDate: "2023-10-26",
        },
      ],
    },
    {
      status: "In Progress",
      tasks: [
        {
          title: "Task2",
          description: "Task2 Description",
          assignee: "Admin",
          creator: "Me",
          priority: "P2",
          status: "In Progress",
          creationDate: "2023-10-23",
          dueDate: "2023-10-26",
        },
      ],
    },
    {
      status: "Completed",
      tasks: [
        {
          title: "Task3",
          description: "Task3 Description",
          assignee: "Admin",
          creator: "Me",
          priority: "P3",
          status: "Completed",
          creationDate: "2023-10-23",
          dueDate: "2023-10-26",
        },
      ],
    },
  ];

  const kanbanboardList = kanbanboardArray.map((kanbanItem) => {
    return <KanbanboardItem key={kanbanItem.status} kanbanItem={kanbanItem} />;
  });
  return (
    <div className="flex flex-row flex-wrap justify-evenly items-start p-4">
      {kanbanboardList}
    </div>
  );
};

export default Kanbanboard;
