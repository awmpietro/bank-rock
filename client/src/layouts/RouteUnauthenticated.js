import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const RouteUnauthenticated = ({ component: Component, path, isSignedIn }) => {
  if (isSignedIn) {
    return <Redirect to="/" />;
  }

  return <Route component={Component} path={path} />;
};

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, {})(RouteUnauthenticated);
