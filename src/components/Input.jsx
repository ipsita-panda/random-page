import React from "react";

const Input = (props) => {
  return (
    <input
      className="input"
      name={props.name}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
