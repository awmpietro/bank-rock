import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Button } from "reactstrap";

import { EmailInput, validateEmail } from "./inputs/Email";
import { PasswordInput, validatePassword } from "./inputs/Password";
import { TextInput, validateInput } from "./inputs/TextInput";
import Message from "../../components/Message";

const validate = formValues => {
  const { name, email, password } = formValues;
  const nameError = validateInput(name);
  const emailError = validateEmail(email);
  const passwordError = validatePassword(password);
  return {
    name: nameError.input,
    email: emailError.email,
    password: passwordError.password,
  };
};

let RegisterForm = ({
  handleSubmit,
  onSubmit,
  pristine,
  submitting,
  isError,
  isSuccess,
  message,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Message
        error={isError}
        success={isSuccess}
        header={"Error"}
        content={message}
      />
      <Field name="name" component={TextInput} label="Name" />
      <Field
        name="email"
        emailProps={{ placeholder: "Email" }}
        component={EmailInput}
      />
      <Field name="password" component={PasswordInput} />
      <Button color="primary" type="submit" disabled={pristine || submitting}>
        Login
      </Button>{" "}
    </form>
  );
};

RegisterForm = reduxForm({
  form: "register-form",
  validate,
})(RegisterForm);

const mapStateToProps = state => {
  const { message, isError, isSuccess } = state.alert;
  return { message, isError, isSuccess };
};

export default connect(mapStateToProps, {})(RegisterForm);
