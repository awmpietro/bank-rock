import React, { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

import TopMenu from "./Navbar/TopMenu";
import Footer from "./Footer/Footer";

const RouteAuthenticated = ({
  component: Component,
  path,
  isSignedIn,
  name,
}) => {
  if (!isSignedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <Fragment>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopMenu />
          <div className="container-fluid">
            <Route component={Component} path={path} />
          </div>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn, name: state.auth.name };
};

export default connect(mapStateToProps, null)(RouteAuthenticated);
