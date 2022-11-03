import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskList() {
  const { tasks } = useContext(TaskContext);
  
  if (tasks.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }
  return (
    
      <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
   
  );
}

export default TaskList;
