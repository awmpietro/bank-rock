import React from "react";
import { Link } from "react-router-dom";

import TopMenuAccount from "./TopMenuAccount";
import "./TopMenu.css";

const TopMenu = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-custom-dark topbar mb-4 static-top shadow">
      <h6>
        <Link className="text-muted" to="/">
          Bank Rock
        </Link>
      </h6>

      <ul className="navbar-nav ml-auto">
        <div className="topbar-divider d-none d-sm-block"></div>
        <TopMenuAccount />
      </ul>
    </nav>
  );
};

export default TopMenu;
