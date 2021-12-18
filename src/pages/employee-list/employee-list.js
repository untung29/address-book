import React, { useState } from "react";

// components
import TableContainer from "../../components/table-container/table-container.component";
import TableItem from "../../components/table-item/table-item.component";
import Button from "../../components/button/button.component";
import CustomDropdown from "../../components/custom-dropdown/custom-dropdown.component";
import Field from "../../components/field/field.component";

// redux
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee } from "../../redux/employee/employee.action";

const EmployeeList = props => {
  const listEmployees = useSelector(state => state.employee.listEmployees);
  const dispatch = useDispatch();

  const removeEmployee = employeeId => {
    dispatch(deleteEmployee(employeeId));
  };

  const [filterBy, setFilterBy] = useState("");

  const selectFilterBy = filterBy => {
    setFilterBy(filterBy.value);
  };

  const filterEmployees = () => {};

  const renderListEmployees = () => {
    return listEmployees.map((employee, index) => {
      return (
        <tr key={employee.id}>
          <TableItem item={index + 1} />
          <TableItem item={employee.firstName} />
          <TableItem item={employee.lastName} />
          <TableItem item={employee.department} />
          <TableItem item={employee.phoneNumber} />
          <td>
            <Button
              style="btn-danger btn-sm"
              onClick={() => {
                removeEmployee(employee.id);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };
  // label, id, type, placeholder, onChange
  return (
    <div>
      <h1>Employee List!</h1>
      <CustomDropdown list={["Department", "Name"]} onChange={selectFilterBy} />
      <div className="mt-3 mb-3">
        <Field
          label="Search"
          id="searchemployee"
          type="text"
          placeholder="Search Employee"
          onChange={filterEmployees}
        />
      </div>
      <TableContainer headings={["#", "First Name", "Last Name", "Department", "Phone Number"]}>
        <tbody>{renderListEmployees()}</tbody>
      </TableContainer>
    </div>
  );
};

export default EmployeeList;
