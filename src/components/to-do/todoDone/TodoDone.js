import React, { useContext } from "react";
import TodoList from "../includes/TodoList";
import NoTodoBlock from "../includes/NoTodoBlock";

export default function TodoDone({ todoCategory }) {
  return (
    <>
      <h2 className="todo__description">Done todos</h2>
      <NoTodoBlock todoCategory={todoCategory}>
        There is no completed todos...
      </NoTodoBlock>
      <TodoList view={todoCategory} />
    </>
  );
}
