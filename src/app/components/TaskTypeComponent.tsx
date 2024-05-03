"use client";

import React, { useState } from "react";
import plus from "@/assets/tasksprintplus.png";
import Image from "next/image";
import TaskCardComponent from "./TaskCardComponent";
import { getExampleBoardData } from "@/services/DataServices";

const TaskTypeComponent = (prop: {
  color: string;
  type: string;
  isShown: boolean;
  setIsViewTask: (isViewTask: boolean) => void;
  setisCreateTask: (isCreateTask: boolean) => void;
}) => {
  const BoardData = getExampleBoardData();
  let tasks: {
    name: string;
    description: string;
    priority: number;
    "assigned-to": {
      name: string;
      color: string;
    };
  }[];

  switch (prop.type) {
    case "To-Do":
      tasks = BoardData["To-Do-Tasks"];
      break;
    case "In Progress":
      tasks = BoardData["In-Progress-Tasks"];
      break;
    case "Completed":
      tasks = BoardData["Completed-Tasks"];
      break;
    default:
      console.log("error in loading tasks");
      tasks = BoardData["To-Do-Tasks"];
      break;
  }

  const [widgets, setWidgets] = useState<any[]>([]);

  const handleOnDrag = (e: React.DragEvent, widgetType: any) => {
    e.dataTransfer.setData("widgetType", widgetType);
  };

  const handleOnDrop = (e: React.DragEvent) => {
    const widgetType = e.dataTransfer.getData("widgetType") as string;
    setWidgets([...widgets, widgetType]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className={`h-[252px] w-full ${prop.color} rounded-[5px]`}>
      <div className="flex ms-[20px]">
        <h1 className="HammersmithOne text-[28px] mt-[7px]">{prop.type}</h1>
        <Image
          onClick={() => {
            prop.setisCreateTask(true);
          }}
          className={
            prop.isShown
              ? "cursor-pointer h-[20px] w-[20px] mt-[16px] ms-[10px]"
              : "hidden"
          }
          src={plus}
          alt="plus icon"
        />
      </div>
      <div
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
        className="ms-[10px] lg:ms-[51px] flex overflow-x-auto mt-[10px]"
      >
        {widgets.map((widget, idx) => {
          return (
            <div key={idx} className="me-[35px]">
            <div
              onClick={() => {
                prop.setIsViewTask(true);
              }}
              className="w-[269px] h-[168px] bg-white rounded-[10px] cursor-pointer"
            >
              <h1 className="HammersmithOne text-[24px] truncate ps-[20px] pe-[41px] pt-[9px]">
                Login
              </h1>
              <p className="HammersmithOne text-[16px] px-[20px] mt-[10px] line-clamp-2">
                A short description of the task you are viewing...
              </p>
              <div className="flex justify-between mx-[20px]">
                <h1 className="my-auto text-[20px] HammersmithOne">
                  Priority - 2
                </h1>
                <div
                  className="bg-blue h-[49.25px] w-[50px] rounded-full border-[1px] border-black"
                  style={{ background: "#FF6E6E" }}
                ></div>
              </div>
            </div>

            </div>
          );
        })}

        {tasks.map((task, idx) => {
          return (
            <div
              draggable
              onDragStart={(e) => {
                handleOnDrag(e, task);
              }}
              key={idx}
              className="me-[35px]"
            >
              <TaskCardComponent
                setIsViewTask={prop.setIsViewTask}
                task={task}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskTypeComponent;
