import React, { useState, useEffect } from "react";

// components
import TableContainer from "../../components/table-container/table-container.component";
import TableItem from "../../components/table-item/table-item.component";
import Button from "../../components/button/button.component";
import CustomDropdown from "../../components/custom-dropdown/custom-dropdown.component";
import Field from "../../components/field/field.component";

// redux
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee, sortStaffSurname } from "../../redux/employee/employee.action";

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

  // Set the search keyword
  const [searchKeyword, setSearchKeyword] = useState("");
  const filterEmployees = event => {
    // Get the keyword and lower case it
    let keyword = event.target.value.toLowerCase();
    setSearchKeyword(keyword);
  };

  // Render list employees
  const renderListEmployees = () => {
    let filteredEmployees = listEmployees;
    if (filterBy === "Department") {
      filteredEmployees = filteredEmployees.filter(employee =>
        employee.department.toLowerCase().includes(searchKeyword),
      );
    } else if (filterBy === "Name") {
      filteredEmployees = filteredEmployees.filter(employee =>
        employee.firstName.toLowerCase().includes(searchKeyword),
      );
    }

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

  const sortEmployeeSurname = ({ value }) => {
    dispatch(sortStaffSurname(value));
  };

  return (
    <div>
      <h1>Employee List!</h1>
      <CustomDropdown
        list={["Descending", "Ascending"]}
        onChange={sortEmployeeSurname}
        placeholder="Sort Staff Surname"
      />

      <div className="row mt-3 mb-3">
        <div className="col-sm">
          <CustomDropdown list={["Department", "Name"]} onChange={selectFilterBy} placeholder="Select to filter by" />
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
