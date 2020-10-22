import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { RegisterForm } from "../components/forms";
import { register } from "../store/actions";

const Register = props => {
  const onSubmit = values => {
    const { name, email, password } = values;
    return props.register({ name, email, password });
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
                      <h1 className="h4 text-gray-900 mb-4">Register</h1>
                    </div>
                    <RegisterForm onSubmit={onSubmit} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="p-4">
                    <div className="text-center">
                      <span>Already have an account? </span>
                      <Link to="/login">Login here</Link>
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
  register,
})(Register);
