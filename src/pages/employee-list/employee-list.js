import React, { useState, useEffect } from "react";

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
  // Get the list of employees from redux
  const listEmployees = useSelector(state => state.employee.listEmployees);

  // Set the action to delete the employee from redux
  const dispatch = useDispatch();

  // Function that will delete the employee from redux
  const removeEmployee = employeeId => {
    dispatch(deleteEmployee(employeeId));
  };

  // Handle filtering by department and employee's name
  const [filterBy, setFilterBy] = useState("");
  const selectFilterBy = filterBy => {
    setFilterBy(filterBy.value);
  };
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const filterEmployees = event => {
    // Get the keyword and lower case it
    let keyword = event.target.value.toLowerCase();

    // Check if the filter by department or employee's name
    if (filterBy === "Department") {
      // Filter it only to include the keyword's department
      let filteredEmployees = listEmployees.filter(employee => employee.department.toLowerCase().includes(keyword));
      setFilteredEmployees(filteredEmployees);
    } else {
      // Filter it only to include the keyword's first name
      let filteredEmployees = listEmployees.filter(employee => employee.firstName.toLowerCase().includes(keyword));
      setFilteredEmployees(filteredEmployees);
    }
  };

  const renderListEmployees = () => {
    return filteredEmployees.map((employee, index) => {
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

  useEffect(() => {
    setFilteredEmployees(listEmployees);
  }, []);

  // label, id, type, placeholder, onChange
  return (
    <div>
      <h1>Employee List!</h1>

      <div className="row mt-3 mb-3">
        <div className="col-sm">
          <CustomDropdown list={["Department", "Name"]} onChange={selectFilterBy} />
        </div>
        <div className="col-sm">
          <Field
            disabled={!filterBy}
            id="searchemployee"
            type="text"
            placeholder="Search Employee"
            onChange={filterEmployees}
          />
        </div>
      </div>
      <TableContainer headings={["#", "First Name", "Last Name", "Department", "Phone Number"]}>
        <tbody>{renderListEmployees()}</tbody>
      </TableContainer>
    </div>
  );
};

export default EmployeeList;
