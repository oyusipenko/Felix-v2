import React from "react";
import TodoList from "../includes/TodoList";
import NoTodoBlock from "../includes/NoTodoBlock";
import { Typography } from "@material-ui/core";

export default function TodoDone() {
  return (
    <>
      <Typography variant="h4">Done todos</Typography>
      <NoTodoBlock>There is no completed todos...</NoTodoBlock>
      <TodoList />
    </>
  );
}
