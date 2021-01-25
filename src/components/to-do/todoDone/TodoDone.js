import React from "react";
import TodoList from "../includes/TodoList";
import NoTodoBlock from "../includes/NoTodoBlock";

export default function TodoDone() {
  return (
    <>
      <h2 className="todo__description">Done todos</h2>
      <NoTodoBlock>There is no completed todos...</NoTodoBlock>
      <TodoList />
    </>
  );
}
