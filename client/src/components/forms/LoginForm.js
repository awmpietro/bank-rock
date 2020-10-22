import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Button, FormGroup } from "reactstrap";

import { EmailInput, validateEmail } from "./inputs/Email";
import { PasswordInput, validatePassword } from "./inputs/Password";
import Message from "../../components/Message";

const validate = formValues => {
  const { email, password } = formValues;
  const emailError = validateEmail(email);
  const passwordError = validatePassword(password);
  return { email: emailError.email, password: passwordError.password };
};

let LoginForm = ({
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
      <Field
        name="email"
        emailProps={{ type: "email", placeholder: "Email" }}
        component={EmailInput}
      />
      <Field name="password" component={PasswordInput} />
      <FormGroup>
        <Button color="primary" type="submit" disabled={pristine || submitting}>
          Login
        </Button>
      </FormGroup>
    </form>
  );
};

LoginForm = reduxForm({
  form: "login-form",
  validate,
})(LoginForm);

const mapStateToProps = state => {
  const { message, isError, isSuccess } = state.alert;
  return { message, isError, isSuccess };
};

export default connect(mapStateToProps, {})(LoginForm);
