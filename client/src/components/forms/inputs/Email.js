import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import { isValidEmail } from "../../../lib/validateEmail";

export const validateEmail = email => {
  const errors = {};
  if (!email || email === "")
    errors.email = {
      content: "Please enter your email",
    };
  else if (!isValidEmail(email))
    errors.email = {
      content: "Please double check email spelling",
    };
  return errors;
};

export const EmailInput = ({ input, meta, emailProps }) => {
  return (
    <FormGroup>
      <Label for="form-input-email">Email</Label>
      <Input
        {...input}
        {...emailProps}
        autoComplete="off"
        error={meta.touched ? meta.error : null}
        id="form-input-email"
        className={meta.touched && meta.error ? "error" : ""}
      />
    </FormGroup>
  );
};
