import React from "react";

const Button = ({ type, children, onClick, isDisabled, style }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn ${style ? style : "btn-primary "} ${isDisabled && "disabled"}`}
    >
      {children}
    </button>
  );
};

export default Button;
