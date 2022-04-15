import "./TodoItem.css";
export const TodoItem = ({ todo, completed }) => {
  return (
    <div className="todolist">
      <button onClick={() => completed(todo.id)}>✔️</button>
      {todo.title}
    </div>
  );
};
