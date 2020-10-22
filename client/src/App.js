import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import RouteAuthenticated from "./layouts/RouteAuthenticated";
import RouteUnauthenticated from "./layouts/RouteUnauthenticated";

import "./styles/main.css";

import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <RouteAuthenticated path="/" exact={true} component={Home} />
        <RouteAuthenticated path="/logout" exact={true} component={Logout} />
        <RouteUnauthenticated path="/login" exact={true} component={Login} />
        <RouteUnauthenticated
          path="/register"
          exact={true}
          component={Register}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
