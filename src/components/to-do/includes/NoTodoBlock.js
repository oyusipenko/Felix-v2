import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

export default function NoTodoBlock(props) {
  const { isTodoCategoryEmpty } = useContext(TodoContext);
  return (
    <h3 className="todo__no-todo">
      {!isTodoCategoryEmpty(props.todoCategory) && props.children}
    </h3>
  );
}
