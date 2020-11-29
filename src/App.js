import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import ToDo from "./components/to-do/ToDo";
import Targets from "./components/targets/Targets";
import Notes from "./components/notes/Notes";
import Calendar from "./components/calendar/Calenar";

export default function App() {
  return (
    <div className="main-container">
      <Router>
        <Nav />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/todo">
            <ToDo />
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
        </Switch>
      </Router>
    </div>
  );
}
