import React from "react";
import { Switch, Route } from "react-router-dom";
import MainContainer from "../includes/mainContainer/MainContainer";
import TodoDone from "./todoDone/TodoDone";
import TodoInbox from "./todoInbox/TodoInbox";

function ToDo() {
  return (
    <MainContainer>
      <h1 className="todo__title">TO-DO</h1>
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
