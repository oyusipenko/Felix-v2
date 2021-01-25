import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

export default function NoTodoBlock(props) {
  const { isTodoCategoryEmpty, todoSection } = useContext(TodoContext);
  return (
    <h3 className="todo__no-todo">
      {!isTodoCategoryEmpty(todoSection) && props.children}
    </h3>
  );
}
