import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { TodoContext } from "./TodoContext";
import MainContainer from "../includes/mainContainer/MainContainer";
import TodoDone from "./todoDone/TodoDone";
import TodoInbox from "./todoInbox/TodoInbox";
import Typography from "@material-ui/core/Typography";

function ToDo() {
  const { todos, getTodos, postTodos } = useContext(TodoContext);

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    postTodos();
  }, [todos]);

  return (
    <MainContainer>
      <Typography variant="h3">To-Do</Typography>
      <Switch>
        <Route path="/todo/inbox">
          <TodoInbox />
        </Route>
        <Route path="/todo/done">
          <TodoDone />
        </Route>
      </Switch>
    </MainContainer>
  );
}

export default ToDo;
