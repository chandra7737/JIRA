import { useState } from "react";
import "./App.css";
import Status from "./Status";
import { TASKS } from "./data";

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const STATUSES = [
    { status: "To Do", tasks: [] },
    { status: "In Progress", tasks: [] },
    { status: "Done", tasks: [] },
  ];

  const handleDropTask = (status, draggedTask) => {
    draggedTask = JSON.parse(draggedTask);
    draggedTask.status = status;
    setTasks((tasks) => [
      ...tasks.filter((task) => task.id !== draggedTask.id),
      draggedTask,
    ]);
  };

  tasks.forEach((task) => {
    switch (task.status) {
      case "To Do": {
        STATUSES[0].tasks.push(task);
        break;
      }
      case "In Progress": {
        STATUSES[1].tasks.push(task);
        break;
      }
      case "Done": {
        STATUSES[2].tasks.push(task);
        break;
      }
      default:
        break;
    }
  });
  return (
    <div className="App">
      {STATUSES.map((status) => (
        <Status
          status={status}
          key={status.status}
          handleDropTask={handleDropTask}
        />
      ))}
    </div>
  );
}

export default App;
