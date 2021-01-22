import React from "react";
import NewTodo from "./NewTodo";
import NoTodoBlock from "./NoTodoBlock";
import TodoList from "./TodoList";

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
      <NewTodo addTodo={addTodo} inputRef={inputRef} />
      {checkTodosLength(view) ? null : <NoTodoBlock view={view} />}
      <TodoList view={view} todos={todos} completeTodo={completeTodo} />
    </>
  );
}
