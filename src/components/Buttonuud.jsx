import React from "react";
import { useState } from "react";
import buttons from "@/styles/Button.module.css";
export const Buttonuud = ({ setFilterTask }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const handleFIlter = (filterValue) => () => {
    setFilterTask(filterValue);
    setActiveFilter(filterValue);
  };

  return (
    <div className={buttons.buttonsBody}>
      <button
        className={buttons.all}
        style={{
          backgroundColor: activeFilter === "All" ? "#3c82f6" : "#f0f0f0",
          color: activeFilter === "All" ? "white" : "black",
        }}
        onClick={handleFIlter("All")}
      >
        All
      </button>
      <button
        className={buttons.active}
        style={{
          backgroundColor: activeFilter === "active" ? "#3c82f6" : "#f0f0f0",
          color: activeFilter === "active" ? "white" : "black",
        }}
        onClick={handleFIlter("active")}
      >
        Active
      </button>
      <button
        className={buttons.completed}
        style={{
          backgroundColor: activeFilter === "completed" ? "#3c82f6" : "#f0f0f0",
          color: activeFilter === "completed" ? "white" : "black",
        }}
        onClick={handleFIlter("completed")}
      >
        Completed
      </button>
    </div>
  );
};
