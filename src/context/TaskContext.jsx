import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";
import axios from 'axios'




export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const url = "http://127.0.0.1:8000/api/projects/";
  // const [todos, setTodos] = useState();
  // const fetchApi = async () => {
  //    const response = await fetch(url);
  //    console.log(response.statusText);
  //    const responseJSON = await response.json();
  //    setTasks(responseJSON)
  //  };
  async function getProject() {
    try {
      const response = await axios.get(url);
      //console.log(response);
      setTasks(response.data)
    } catch (error) {
      console.error(error);
    }
  }  


  const [tasks, setTasks] = useState([]);

  const [success, setSuccess]= useState("");

  const [task, setTask] = useState({});

  async function createTask(taskTitle, taskDescription, taskTechnology) {
    
      const data = {
        title: taskTitle,
        description: taskDescription,
        technology: taskTechnology
      }
    try {
      const response = await axios.post(url,data);
      
      setTasks([...tasks, response.data ])
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteTask(tasktId) {
    try {
      const response = await axios.delete(url+tasktId);
      console.log(response.statusText);
      setTasks(tasks.filter((task) => task.id !== tasktId));
      setSuccess("La acción se ha realizado con éxito")
    } catch (error) {
      console.error(error);
    }
    
  }
  async function taskEdit(taskId, newTask){

    try {
      const response = await axios.patch(url + taskId + '/', newTask);
      console.log(response.statusText);
      const newList = tasks.filter(task => task.id !== taskId )
      setTasks([...newList,newTask])
      setSuccess("La acción se ha realizado con éxito")
    } catch (error) {
      console.error(error);
    }
    
  }

  function findTaskById(taskId){

    const task = tasks.find(task => task.id === taskId)
    setTask(task)

  }

  useEffect(() => {
    // setTasks(data);
    getProject()
    // fetchApi();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
        success,
        taskEdit,
        findTaskById,
        task
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
