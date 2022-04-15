import { useState } from "react";
import "./TodoInput.css";
export const TodoInput = ({ getTodo }) => {
  const [todo, setTodo] = useState("");
  return (
    <div className="input">
      <input
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="Enter todo"
        type="text"
      />
      <button
        onClick={() => {
          getTodo(todo);
        }}
      >
        +
      </button>
    </div>
  );
};
