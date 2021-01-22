import React, { Component } from "react";
const AppContext = React.createContext();

class AppContextProvider extends Component {
  state = {
    viewNav: true,
  };

  toggleNav = () => {
    this.setState((prevState) => {
      return {
        viewNav: !prevState.viewNav,
      };
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          viewNav: this.state.viewNav,
          toggleNav: this.toggleNav,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContextProvider, AppContext };
