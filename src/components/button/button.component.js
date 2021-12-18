import React from "react";

const Button = ({ type, children, onClick }) => {
  return (
    <button onClick={onClick} type={type} class="btn btn-primary mt-3">
      {children}
    </button>
  );
};

export default Button;
