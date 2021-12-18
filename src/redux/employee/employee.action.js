import { EmployeeActionTypes } from "./employee.types";

export const addEmployee = employee => {
  return { type: EmployeeActionTypes.ADD_EMPLOYEE, payload: employee };
};
