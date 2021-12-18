import React from "react";

const Field = ({ label, id, type, placeholder, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} className="form-control" id={id} placeholder={placeholder} onChange={onChange} required />
    </div>
  );
};

export default Field;
