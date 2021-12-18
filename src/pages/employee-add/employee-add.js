import React from "react";

// Components
import Field from "../../components/field/field.component";
import Form from "../../components/form/form.component";
import Button from "../../components/button/button.component";

const EmployeeAdd = () => {
  // label, id, type, placeholder
  return (
    <div>
      <Form>
        <h3>Employee Form</h3>
        <hr />
        <Field label="First Name" id="firstname" type="text" placeholder="First Name" />
        <Field label="Last Name" id="lastname" type="text" placeholder="Last Name" />
        <Field label="Department" id="department" type="text" placeholder="Department" />
        <Field label="Phone Number" id="phonenumber" type="number" placeholder="Phone Number" />
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default EmployeeAdd;
