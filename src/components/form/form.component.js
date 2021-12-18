import React from "react";
import "./form.styles.css";

const Form = ({ children, onSubmit }) => {
  return (
    <form className="mt-5 mx-5 form-container" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
