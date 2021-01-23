import React from "react";

function MainContainer(props) {
  return (
    <div className="main-container">
      <div className="wrapper">{props.children}</div>
    </div>
  );
}

export default MainContainer;
