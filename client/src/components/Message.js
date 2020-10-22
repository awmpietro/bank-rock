import React from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";

import { dismissAlert } from "../store/actions";

const Message = props => {
  const { content, error = false, success = false } = props;
  return (
    <Alert
      color={error ? "danger" : "success"}
      isOpen={success && error}
      toggle={() => props.dismissAlert()}
    >
      {content}
    </Alert>
  );
};

export default connect(null, { dismissAlert })(Message);
