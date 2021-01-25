import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

export default function TodoList() {
  const { todos, completeTodo, todoSection } = useContext(TodoContext);
  return (
    <ul className="todo__task-list">
      {todos.map((todo) => {
        if (todo.status === todoSection) {
          return (
            <li key={todo.index} className="task-container">
              <div className="task">{todo.value}</div>
              <div className="buttons">
                <button onClick={() => completeTodo(todo.index)}>Done!</button>
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
}
