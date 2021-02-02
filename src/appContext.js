import React, { useState } from "react";

const AppContext = React.createContext();

function AppContextProvider(props) {
  const [viewNav, setViewNav] = useState(true);
  const state = getDefaultState();

  function getDefaultState() {
    return {
      viewNav: viewNav,
      toggleNav: toggleNav,
    };
  }

  function toggleNav() {
    setViewNav(!viewNav);
  }

  return (
    <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
