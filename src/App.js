import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const saveTasksToStorage = (tasksToSave) => {
    localStorage.setItem("tasks", JSON.stringify(tasksToSave));
  };

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);
  };

  return (
    <div className="App">
      <h2 style={{ paddingLeft: "1rem", marginBottom: "1rem" }}>Task Tracker</h2>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
