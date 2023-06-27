import React from "react";
import "../styles/Sidebar.scss";
import { Sidebardata } from "./Sidebardata";
const Sidebar = () => {
  return (
    <div className="sidebar1">
      <ul className="sidebar1-list">
        {Sidebardata.map((val, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname === val.link ? "active" : ""}
              className="sidebar1-list-row"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="sidebar1-list-row-icon">{val.icon}</div>
              <div id="sidebar1-list-row-title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
