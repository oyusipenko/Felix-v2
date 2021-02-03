import React, { useState } from "react";

const AppContext = React.createContext();

function AppContextProvider(props) {
  const [viewNav, setViewNav] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const state = getDefaultState();

  function getDefaultState() {
    return {
      viewNav: viewNav,
      toggleNav: toggleNav,
      currentSection: currentSection,
      changeCurrentSection: changeCurrentSection,
    };
  }

  function toggleNav() {
    setViewNav(!viewNav);
  }

  function changeCurrentSection(value) {
    setCurrentSection(value);
  }

  return (
    <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
