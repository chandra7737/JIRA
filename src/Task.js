import React from "react";
import "./App.css";

const Task = ({ task }) => {
  const handleDragEnd = (e) => {
    e.dataTransfer.clearData();
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
  };

  return (
    <div
      className="task-wrapper"
      id="draggable-element"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="title">
        {task.id} - {task.title}
      </div>
      <div className="description">{task.description}</div>
    </div>
  );
};

export default Task;
