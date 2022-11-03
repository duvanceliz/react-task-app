import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";

function App() {
  const { success } = useContext(TaskContext);
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto">
        <TaskForm />

        {success ? (
          <h1 className=" bg-green-600 rounded-md text-center p-4 text-xl mb-2">
            {success}
          </h1>
        ) : (
          <></>
        )}
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
