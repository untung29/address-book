import React from "react";

const Field = ({ label, id, type, placeholder }) => {
  return (
    <div class="form-group mt-3">
      <label for={id}>{label}</label>
      <input type={type} class="form-control" for={id} placeholder={placeholder} />
    </div>
  );
};

export default Field;
