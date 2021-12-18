import React from "react";

const Button = ({ type, children, onClick, isDisabled }) => {
  return (
    <button onClick={onClick} type={type} className={`btn btn-primary mt-3 px-5 ${isDisabled && "disabled"}`}>
      {children}
    </button>
  );
};

export default Button;
