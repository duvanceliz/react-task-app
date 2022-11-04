import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Spinner from "./Spinner";



function TaskForm() {

  const { createTask, loading } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technology, setTechnology] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description, technology);
    setTitle("");
    setDescription("");
    setTechnology("");
  };

  
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 rounded-md mb-4'>
      <input
        value={title}
        className="block mb-2 w-full p-4 bg-slate-700 rounded-md text-white"
        placeholder="Titulo de la tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
     
      <textarea
        value={description}
        className="block mb-2 w-full p-4 bg-slate-700 rounded-md text-white"
        placeholder="Breve descripción"
        rows="3"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
       <input
        value={technology}
        className="block mb-2 w-full p-4 bg-slate-700 rounded-md text-white"
        placeholder="Tecnologia a usar"
        onChange={(e) => {
          setTechnology(e.target.value);
        }}
      />
      {loading ? <Spinner/> :""}
      <button className="bg-green-700 p-2 rounded-md hover:bg-teal-400d text-white w-full">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
