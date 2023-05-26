import React, { useState } from "react";
import "./App.css";
import Task from "./Task";

const Status = ({ status, handleDropTask }) => {
  const [isOver, setIsOver] = useState(false);
  const handleDragOver = (event) => {
    event.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsOver(false);
    handleDropTask(status.status, event.dataTransfer.getData("task"));
  };

  return (
    <div
      className={`container ${status.status.replace(/ /g, "_")} ${
        isOver ? "drag-active" : ""
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="header">{status.status}</div>
      <div className="tasks-wraper">
        {status.tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Status;
