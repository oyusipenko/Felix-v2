import React, { useState } from "react";
import { Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import ToDo from "./components/to-do/ToDo";
import Targets from "./components/targets/Targets";
import Notes from "./components/notes/Notes";
import Calendar from "./components/calendar/Calenar";

export default function App() {
  const [viewNav, setViewNav] = useState(true);

  const toogleSideBar = (viewNav) => {
    viewNav ? setViewNav(false) : setViewNav(true);
  };
  return (
    <div className="app">
      <Nav toogleSideBar={toogleSideBar} viewNav={viewNav} />
      <div className="main-container">
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/todo">
          <ToDo viewNav={viewNav} />
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
      </div>
    </div>
  );
}
