import React from "react";
import NewTodo from "./NewTodo";
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
      <h1 className="todo__title">Todo List</h1>
      <h2 className="todo__description">Inbox todos</h2>
      <NewTodo addTodo={addTodo} inputRef={inputRef} />
      {checkTodosLength(view) ? null : <NoTodoBlock view={view} />}
      <TodoList view={view} todos={todos} completeTodo={completeTodo} />
    </>
  );
}
