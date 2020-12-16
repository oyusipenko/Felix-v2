import React from "react";

export default function SideBar({ changeView, viewNav }) {
  return viewNav ? (
    <div className="side-bar ">
      <ul>
        <li onClick={() => changeView("inbox")}>Inbox Tasks</li>
        <li onClick={() => changeView("done")}>Done Tasks</li>
      </ul>
    </div>
  ) : null;
}
