"use client";
import React from "react";
import { useTasks } from "@/context/TasksContext";
import { TaskCard } from "@/components/taskCard";

function Page() {
  const { tasks } = useTasks();
  return (
    <div className="flex justify-center">
      <div className="w-7/12">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Page;
