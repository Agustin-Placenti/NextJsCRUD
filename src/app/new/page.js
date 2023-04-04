"use client";
import React, { useState } from "react";
import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation";

function Page() {
  const [task, setTask] = useState();
  const { createTask } = useTasks();
  const router = useRouter();

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task.title, task.description);
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="write a title"
        onChange={handleChange}
      ></input>
      <textarea
        name="description"
        onChange={handleChange}
        placeholder="write a description"
      ></textarea>
      <button> save </button>
    </form>
  );
}

export default Page;
