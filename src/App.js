import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import ToDo from "./components/to-do/ToDo";
import Targets from "./components/targets/Targets";
import Notes from "./components/notes/Notes";
import Calendar from "./components/calendar/Calenar";
import { TodoContextProvider } from "./components/to-do/TodoContext";

import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Nav />
        <main className={classes.content}>
          <Toolbar />

          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/todo/:todoSection">
            <TodoContextProvider>
              <ToDo />
            </TodoContextProvider>
          </Route>
          <Route path="/targets">
            <Targets />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Redirect to={"/"} />
          <Switch>
            <Route path="/:appSection" />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
