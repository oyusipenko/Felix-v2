import React, { Component } from "react";
const AppContext = React.createContext();

class AppContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = this.getDefaultState();
  }

  getDefaultState = () => {
    return {
      viewNav: true,
      toggleNav: this.toggleNav,
    };
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
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContextProvider, AppContext };
