import React from "react";
import Nav from "./components/nav/Nav";
import SideBar from "./components/sideBar/SideBar";
import MainWindow from "./components/mainWindow/MainWindow";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <div className="wrapper">
        <SideBar />
        <MainWindow />
      </div>
    </div>
  );
}
