"use client";
import { createContext, useContext, useState } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must used within a provider");
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "first task",
      description: "first description",
    },
    {
      id: 2,
      title: "second task",
      description: "second description",
    },
    {
      id: 3,
      title: "third task",
      description: "third description",
    },
  ]);

  const createTask = (title, description) =>
    setTasks([
      ...tasks,
      {
        title,
        description,
        id: 10,
      },
    ]);

  return (
    <TaskContext.Provider value={{ tasks, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};
