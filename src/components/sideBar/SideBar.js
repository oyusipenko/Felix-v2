import React from "react";

export default function SideBar({ viewNav, children }) {
  return viewNav ? <div className="side-bar">{children}</div> : null;
}
