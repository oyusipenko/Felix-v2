import React, { useContext } from "react";
import { AppContext } from "../../AppContext";

export default function SideBar(props) {
  const { viewNav } = useContext(AppContext);
  return viewNav ? <div className="side-bar">{props.children}</div> : null;
}
