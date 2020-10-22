import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

export const validateInput = (input, inputName) => {
  const errors = {};
  if (input === "")
    errors.input = {
      content: `Please enter your ${inputName}`,
    };
  return errors;
};

export const TextInput = ({ label, id, input, meta, textProps }) => {
  return (
    <FormGroup>
      <Label for={id}>{label}</Label>
      <Input
        {...input}
        autoComplete="off"
        error={meta.touched ? meta.error : null}
        id={id}
        className={meta.touched && meta.error ? "error" : ""}
      />
    </FormGroup>
  );
};
