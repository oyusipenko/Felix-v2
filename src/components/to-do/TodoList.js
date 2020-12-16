import React from "react";

const TodoItem = ({ todos, completeTodo, view }) => {
  return todos.map((todo) => {
    if (todo.status === view) {
      return (
        <li key={todo.index} className="task-container">
          <div className="task">{todo.value}</div>
          <div className="buttons">
            <button onClick={() => completeTodo(todo.index)}>Done!</button>
          </div>
        </li>
      );
    }
  });
};

export default function TodoList({ todos, completeTodo, view }) {
  return (
    <ul className="todo__task-list">
      <TodoItem view={view} todos={todos} completeTodo={completeTodo} />
    </ul>
  );
}
