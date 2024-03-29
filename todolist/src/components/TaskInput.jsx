import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";
import "./taskinput.css";
const TaskInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <h1 className="header">My Todo App</h1>

      <form onSubmit={addTodoHandler} className="form">
        <div className="wrapper">
          <input
            type="text"
            className="input"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="btn">Add</button>
        </div>
      </form>
    </>
  );
};

export default TaskInput;
