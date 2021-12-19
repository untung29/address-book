import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const CustomDropdown = ({ list, onChange, placeholder }) => {
  return <Dropdown options={list} onChange={onChange} placeholder={placeholder} />;
};

export default CustomDropdown;
