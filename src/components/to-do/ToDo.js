import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import MainContainer from "../includes/mainContainer/MainContainer";
import SideBar from "../includes/sideBar/SideBar";
import TodoDone from "./todoDone/TodoDone";
import TodoInbox from "./todoInbox/TodoInbox";

function ToDo() {
  return (
    <>
      <SideBar>
        <ul>
          <li>
            <Link to="/todo/inbox">Inbox Tasks</Link>
          </li>
          <li>
            <Link to="/todo/done">Done Tasks</Link>
          </li>
        </ul>
      </SideBar>
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
    </>
  );
}

export default ToDo;
