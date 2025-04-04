import { Header } from "./Header";
import { InputText } from "./InputText";
import { Buttonuud } from "./Buttonuud";
import { Result } from "./Result";
import { Tasks } from "./Tasks";
import { PoweredByPincecone } from "./PoweredByPincecone";
import React, { useState } from "react";
import style from "@/styles/Body.module.css";
export const MainBody = () => {
  const [tasks, setTasks] = useState([]);
  const [filterTasks, setFilterTask] = useState("All");

  const filteredTasks = tasks.filter((ttasks) => {
    if (filterTasks === "active") return !ttasks.isCompleted;
    if (filterTasks === "completed") return ttasks.isCompleted;
    return true;
  });
  return (
    <div className={style.body}>
      <Header />
      <InputText tasks={tasks} setTasks={setTasks} />
      <Buttonuud filterTasks={filterTasks} setFilterTask={setFilterTask} />
      <Tasks filteredTasks={filteredTasks} tasks={tasks} setTasks={setTasks} />
      <Result tasks={tasks} setTasks={setTasks} />
      <PoweredByPincecone />
    </div>
  );
};
