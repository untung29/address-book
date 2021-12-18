import { EmployeeActionTypes } from "./employee.types";

export const addEmployee = employee => {
  return { type: EmployeeActionTypes.ADD_EMPLOYEE, payload: employee };
};

export const deleteEmployee = employeeId => {
  return { type: EmployeeActionTypes.DELETE_EMPLOYEE, payload: employeeId };
};
