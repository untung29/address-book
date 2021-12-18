import React, { useState, useCallback } from "react";
import "react-toastify/dist/ReactToastify.css";

// Components
import Field from "../../components/field/field.component";
import Form from "../../components/form/form.component";
import Button from "../../components/button/button.component";
import { ToastContainer, toast } from "react-toastify";

// Redux
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/employee/employee.action";

// Model
import Employee from "../../Model/employee.model";

const EmployeeAdd = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const handleFirstName = useCallback(
    event => {
      setFirstName(event.target.value);
    },
    [firstName],
  );

  const [lastName, setLastName] = useState("");
  const handleLastName = useCallback(
    event => {
      setLastName(event.target.value);
    },
    [lastName],
  );

  const [department, setDepartment] = useState("");
  const handleDepartment = useCallback(
    event => {
      setDepartment(event.target.value);
    },
    [department],
  );

  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumber = useCallback(
    event => {
      setPhoneNumber(event.target.value);
    },
    [phoneNumber],
  );

  const isValid = () => {
    if (!phoneNumber || !department || !firstName || !lastName) {
      return false;
    }
    return true;
  };

  const submitForm = event => {
    // Prevent refresh
    event.preventDefault();

    const newEmployee = new Employee(firstName, lastName, department, phoneNumber);
    dispatch(addEmployee(newEmployee));

    // Reset the form
    event.target.reset();

    // Show the toast
    toast.success("Employee is successfully added");
  };

  return (
    <div>
      <Form onSubmit={submitForm}>
        <h3>Employee Form</h3>
        <hr />
        <Field label="First Name" id="firstname" type="text" placeholder="First Name" onChange={handleFirstName} />
        <Field label="Last Name" id="lastname" type="text" placeholder="Last Name" onChange={handleLastName} />
        <Field label="Department" id="department" type="text" placeholder="Department" onChange={handleDepartment} />
        <Field
          label="Phone Number"
          id="phonenumber"
          type="number"
          placeholder="Phone Number"
          onChange={handlePhoneNumber}
        />
        <div className="mt-3">
          <Button isDisabled={!isValid()}>Submit</Button>
        </div>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default EmployeeAdd;
