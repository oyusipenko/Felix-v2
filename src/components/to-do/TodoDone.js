import React from "react";
import TodoList from "./TodoList";
import NoTodoBlock from "./NoTodoBlock";

export default function TodoDone({
  view,
  todos,
  completeTodo,
  checkTodosLength,
}) {
  return (
    <>
      <h2 className="todo__description">Done todos</h2>
      {checkTodosLength(view) ? null : <NoTodoBlock view={view} />}
      <TodoList view={view} todos={todos} completeTodo={completeTodo} />
    </>
  );
}
