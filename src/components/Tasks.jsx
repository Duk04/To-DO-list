import React from "react";
import taskuu from "@/styles/Result.module.css";

export const Tasks = ({ filteredTasks, tasks, setTasks }) => {
  const togleTask = (taskID) => {
    const updateTask = tasks.map((task) =>
      taskID === task.id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTasks(updateTask);
  };
  const deleteTask = (taskID) => {
    const isConfirm = window.confirm("Are you sure??");
    if (isConfirm) {
      setTasks((tasks) => tasks.filter((task) => task.id !== taskID));
    }
  };
  return (
    <div>
      {tasks.length === 0 ? (
        <p className={taskuu.noTask}>No tasks yet. Add one above!</p>
      ) : (
        <div className={taskuu.pad}>
          {filteredTasks.map((task, index) => (
            <div key={index} className={taskuu.body}>
              <div className={taskuu.check}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={task.isCompleted}
                  onChange={() => togleTask(task.id)}
                />
                <p>{task.text}</p>
              </div>
              <div>
                <button
                  className={taskuu.delete}
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
