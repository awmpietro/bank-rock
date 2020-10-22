import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";

export const validatePassword = password => {
  const errors = {};
  if (!password || password === "") {
    errors.password = {
      content: "Please enter your Password",
    };
  }
  return errors;
};

export const PasswordInput = ({ input, meta }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <FormGroup>
      <Label for="form-input-password">Email</Label>
      <Input
        {...input}
        autoComplete="off"
        type={passwordShown ? "text" : "password"}
        placeholder="Password"
        id="form-input-password"
      />
      <i className="black eye link icon" onClick={togglePasswordVisiblity}></i>
    </FormGroup>
  );
};
