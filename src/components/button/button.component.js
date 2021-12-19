import React from "react";

const Button = ({ type, children, onClick, isDisabled, additionalStyle }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn ${additionalStyle ? additionalStyle : "btn-primary "} ${isDisabled && "disabled"}`}
    >
      {children}
    </button>
  );
};

export default Button;
