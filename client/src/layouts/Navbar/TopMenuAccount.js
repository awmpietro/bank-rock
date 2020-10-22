import React, { useState } from "react";
import { connect } from "react-redux";

import { logout } from "../../store/actions";

const TopMenuAccount = props => {
  const [isShow, setShow] = useState(false);

  return (
    <li className="nav-item dropdown no-arrow">
      <a
        className="nav-link dropdown-toggle"
        onClick={() => {
          setShow(!isShow);
        }}
        href="# "
        id="userDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="mr-2 d-none d-lg-inline small cadet">
          {props.name}
        </span>
      </a>

      <div
        className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${
          isShow ? "show" : ""
        }`}
        aria-labelledby="userDropdown"
      >
        <a className="dropdown-item" onClick={() => props.logout()} href="# ">
          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
          Logout
        </a>
      </div>
    </li>
  );
};

const mapStateToProps = state => {
  return { name: state.auth.name };
};

export default connect(mapStateToProps, { logout })(TopMenuAccount);
