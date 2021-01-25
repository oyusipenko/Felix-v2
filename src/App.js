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

export default function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <main>
          <Switch>
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
          </Switch>
        </main>
      </Router>
    </div>
  );
}
