import React, { useState } from "react";

const AppContext = React.createContext();

function AppContextProvider(props) {
  const [viewNav, setViewNav] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);

  function toggleNav() {
    setViewNav(!viewNav);
  }

  function changeCurrentSection(value) {
    setCurrentSection(value);
  }

  function getDefaultState() {
    return {
      viewNav,
      toggleNav,
      currentSection,
      changeCurrentSection,
    };
  }
  const state = getDefaultState();

  return (
    <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
