import { nanoid } from "nanoid";
import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import "./Todo.css";

export const Todo = () => {
  const [completedTodo, setCompletedTodo] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const getTodo = (todo) => {
    const payload = {
      title: todo,
      id: nanoid(6),
    };
    setTodoList([payload, ...todoList]);
  };
  const completed = (id) => {
    setCompletedTodo([
      ...todoList.filter((e) => e.id === id),
      ...completedTodo,
    ]);
    setTodoList(todoList.filter((e) => e.id !== id));
  };

  const notcompleted = (id) => {
    setTodoList([...completedTodo.filter((e) => e.id === id), ...todoList]);
    setCompletedTodo(completedTodo.filter((e) => e.id !== id));
  };

  return (
    <div>
      <TodoInput getTodo={getTodo} />
      {todoList.map((e) => {
        return <TodoItem todo={e} completed={completed} />;
      })}
      <h3>Completed</h3>
      {completedTodo.map((e) => {
        return (
          <div className="completed">
            <button onClick={() => notcompleted(e.id)}>✔️</button>
            {e.title}
          </div>
        );
      })}
    </div>
  );
};
