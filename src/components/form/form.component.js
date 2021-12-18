import React from "react";
import "./form.styles.css";

const Form = ({ children }) => {
  return <form className="mt-5 mx-5 form-container">{children}</form>;
};

export default Form;
