import React from "react";
import { faHome, faBars, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
  return (
    <div className="nav">
      <div className="left-block">
        <FontAwesomeIcon icon={faBars} />
        <FontAwesomeIcon icon={faHome} />
      </div>
      <div className="center-block">
        <ul>
          <li>Задачи</li>
          <li>Цели</li>
          <li>Заметки</li>
          <li>Календарь</li>
        </ul>
      </div>
      <div className="right-block">
        <FontAwesomeIcon icon={faCog} />
      </div>
    </div>
  );
}
