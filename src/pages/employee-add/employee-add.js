import React, { useState, useCallback } from "react";

// Components
import Field from "../../components/field/field.component";
import Form from "../../components/form/form.component";
import Button from "../../components/button/button.component";

const EmployeeAdd = () => {
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

  const submitForm = () => {};

  return (
    <div>
      <Form>
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
        <Button type="submit" onClick={submitForm}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EmployeeAdd;
