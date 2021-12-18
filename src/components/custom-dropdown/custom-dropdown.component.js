import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const CustomDropdown = ({ list, onChange }) => {
  return <Dropdown options={list} onChange={onChange} placeholder="Select to filter by" />;
};

export default CustomDropdown;
