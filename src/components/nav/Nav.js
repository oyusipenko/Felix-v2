import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../appContext";
import { faHome, faBars, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
  const { toggleNav } = useContext(AppContext);
  return (
    <div className="nav">
      <div className="left-block">
        <i className="icon">
          <FontAwesomeIcon icon={faBars} onClick={() => toggleNav()} />
        </i>
        <i className="icon">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </i>
      </div>
      <div className="menu-block">
        <ul className="menu-list">
          <div className="menu-button-mobile">Menu</div>
          <li>
            <Link to="/todo">To-Do</Link>
          </li>
          <li>
            <Link to="/targets">Targets</Link>
          </li>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
        </ul>
      </div>
      <div className="right-block">
        <FontAwesomeIcon icon={faCog} />
      </div>
    </div>
  );
}
