import React, { useState } from "react";
import { useParams } from "react-router-dom";

const AppContext = React.createContext();

function AppContextProvider(props) {
  const [viewNav, setViewNav] = useState(true);
  // const { appSection } = useParams();
  // console.log(appSection);
  const state = getDefaultState();

  function getDefaultState() {
    return {
      viewNav: viewNav,
      toggleNav: toggleNav,
      // appSection: appSection,
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
