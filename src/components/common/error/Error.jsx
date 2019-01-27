import React from "react";

const Error = props => {
  console.log("desde error => ", props);
  const { error } = props;
  return (
    <div className="alert  alert-danger mt-5">
      <p>
        <i className="fas fa-exclamation-circle" /> &nbsp;{error}
      </p>
    </div>
  );
};

export default Error;
