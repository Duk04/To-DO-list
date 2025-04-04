import React from "react";
import { useState } from "react";
import inputStyle from "@/styles/InputText.module.css";
export const InputText = ({ tasks, setTasks }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleTaskInput = (event) => {
    event.preventDefault();
    if (!inputValue) {
      alert("Please enter task!!");
      return;
    }
    const newTask = {
      id: Date.now(),
      text: inputValue,
      isCompleted: false,
    };
    setTasks([newTask, ...tasks]);
    setInputValue("");
  };
  return (
    <form className={inputStyle.body}>
      <input
        type="text"
        className={inputStyle.input}
        placeholder="Add a new  task..."
        onChange={handleChange}
        value={inputValue}
      />
      <button
        className={inputStyle.addButton}
        onClick={handleTaskInput}
        type="submit"
      >
        Add
      </button>
    </form>
  );
};
