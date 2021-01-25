import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import NoTodoBlock from "../includes/NoTodoBlock";
import TodoList from "../includes/TodoList";

export default function TodoInbox({ todoCategory, inputRef }) {
  const { addTodo } = useContext(TodoContext);
  return (
    <>
      <h2 className="todo__description">Inbox todos</h2>
      <div className="todo__add-task">
        <form onSubmit={addTodo}>
          <input
            ref={inputRef}
            type="text"
            name="newTodo"
            placeholder="Enter your task..."
          />
          <button>Add Task</button>
        </form>
      </div>
      <NoTodoBlock todoCategory={todoCategory}>
        There is no active todos...
      </NoTodoBlock>
      <TodoList view={todoCategory} />
    </>
  );
}
