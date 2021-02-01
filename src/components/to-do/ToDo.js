import React from "react";
import { Switch, Route } from "react-router-dom";
import MainContainer from "../includes/mainContainer/MainContainer";
import TodoDone from "./todoDone/TodoDone";
import TodoInbox from "./todoInbox/TodoInbox";

import Typography from "@material-ui/core/Typography";

function ToDo() {
  return (
    <MainContainer>
      <Typography variant="h3">TO-DO</Typography>
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
