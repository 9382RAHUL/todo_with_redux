import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../feature/todo/todoSlice";
import "./tasklist.css"
const TaskList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className=" active">
        <ul className="list-none ">
          {todos.map((todo) => (
            <li
              className="todo"
              key={todo.id}
            >
              <div className="text">{todo.text}</div>
              
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="inline-block rounded border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
