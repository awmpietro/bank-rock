import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logout } from "../store/actions";

const Logout = props => {
  useEffect(() => {
    props.logout();
  });

  return <></>;
};

export default connect(null, {
  logout,
})(Logout);
