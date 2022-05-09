import React from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
export const TodoList = () => {
  const obj = useSelector((state) => state.todo);
  const display = obj.map((e) => {
    return (
      <div>
        <TodoItem todotask={e} key={e.id} />
      </div>
    );
  });
  return <div>{display}</div>;
};
