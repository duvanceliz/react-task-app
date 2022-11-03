import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskFormModal from "./TaskFormModal";

function TaskCard({ task }) {
  const { deleteTask , findTaskById} = useContext(TaskContext);

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">

      <h5 className="text-xl font-bold capitalize">{task.title}</h5>

      <p className=" text-gray-500 text-sm">{task.description}</p>
      <h5 className="text-sm">Tecnologia a usar: {task.technology}</h5>
      <button
        className="bg-red-500 p-2 rounded-md mt-4 hover:bg-red-400"
        onClick={handleDelete}
      >
        Eliminar
      </button>
      <TaskFormModal taskId = {task.id} />
      
    </div>
  );
}

export default TaskCard;
