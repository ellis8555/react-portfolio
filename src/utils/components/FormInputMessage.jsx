import React from "react";

function FormInputMessage({ message }) {
  return <div className="text-danger mt-1">{message}</div>;
}

export default React.memo(FormInputMessage);
