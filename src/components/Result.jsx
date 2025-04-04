import React from "react";
import style from "@/styles/Result.module.css";
export const Result = ({ tasks, setTasks }) => {
  const summury = tasks.filter((task) => task.isCompleted).length;

  const clearTask = (taskId) => {
    const isConfirm = window.confirm("Are you sure");
    if (isConfirm) {
      setTasks((clearTask) =>
        clearTask.filter((task) => task.isCompleted === false)
      );
    }
  };
  return (
    <div className={style.main}>
      <div className={style.completed}>
        {summury} of {tasks.length} tasks completed
      </div>
      <button onClick={clearTask} className={style.clearCompleted}>
        Clear completed
      </button>
    </div>
  );
};
