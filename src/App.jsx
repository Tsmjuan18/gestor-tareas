import { useState } from "react";
import { HeaderApp } from "./components/HeaderApp/HeaderApp";
import { TaskForm } from "./components/TaskForm/taskForm";
import { TaskList } from "./components/TaskList/taskList";
import { CompletedTasks } from "./components/CompletedTasks/completedTasks";

import "./App.css";

export const App = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {

    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {

    const newTasks = tasks.filter(
      task => task.id !== id
    );

    setTasks(newTasks);
  };

  const toggleTask = (id) => {

    const newTasks = tasks.map(task => {

      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      }

      return task;
    });

    setTasks(newTasks);
  };

  const activeTasks = tasks.filter(
    task => !task.completed
  );

  const completedTasks = tasks.filter(
    task => task.completed
  );

  return (
    <>
      <HeaderApp />

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={activeTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />

      <CompletedTasks
        tasks={completedTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </>
  );
};