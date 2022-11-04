import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Spinner from './Spinner'



function TaskList() {
  const { tasks, loadingTwo } = useContext(TaskContext);
  
  if (tasks.length === 0) {
    return <Spinner/>;
  }
  return (
    
      <div className="container">
        { loadingTwo ? <Spinner/> : ""}
        <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
      </div>
   
  );
}

export default TaskList;
