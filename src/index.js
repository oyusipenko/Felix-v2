import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppContextProvider } from "./appContext";
import { BrowserRouter as Router } from "react-router-dom";
import "./style.scss";

ReactDOM.render(
  <AppContextProvider>
    <Router>
      <App />
    </Router>
  </AppContextProvider>,
  document.getElementById("root")
);
