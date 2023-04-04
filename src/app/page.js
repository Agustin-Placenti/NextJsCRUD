"use client";
import React from "react";
import { useTasks } from "@/context/TasksContext";
import { TaskCard } from "@/components/taskCard";

function Page() {
  const { tasks } = useTasks();
  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Page;
