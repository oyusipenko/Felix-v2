import React from "react";
import NoTodoBlock from "../includes/NoTodoBlock";
import TodoList from "../includes/TodoList";

export default function TodoInbox({
  view,
  addTodo,
  todos,
  completeTodo,
  checkTodosLength,
  inputRef,
}) {
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
      {checkTodosLength(view) ? null : <NoTodoBlock view={view} />}
      <TodoList view={view} todos={todos} completeTodo={completeTodo} />
    </>
  );
}
