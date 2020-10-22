import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { LoginForm } from "../components/forms";
import { login } from "../store/actions";

const Login = props => {
  const onSubmit = values => {
    const { email, password } = values;
    return props.login({ email, password });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-12">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Login</h1>
                    </div>
                    <LoginForm onSubmit={onSubmit} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="p-4">
                    <div className="text-center">
                      <span>Still doesn't have an account? </span>
                      <Link to="/register">Register now </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  login,
})(Login);
