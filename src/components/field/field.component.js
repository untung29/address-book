import React from "react";

const Field = ({ id, type, placeholder, onChange, disabled }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        required
        disabled={disabled}
      />
    </div>
  );
};

export default Field;
