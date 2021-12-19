import { EmployeeActionTypes } from "./employee.types";

export const addEmployee = employee => {
  return { type: EmployeeActionTypes.ADD_EMPLOYEE, payload: employee };
};

export const deleteEmployee = employeeId => {
  return { type: EmployeeActionTypes.DELETE_EMPLOYEE, payload: employeeId };
};

// export const filterEmployee = (filterBy, keyword) => {
//   return { type: EmployeeActionTypes.FILTER_EMPLOYEE, payload: { filterBy: filterBy, keyword: keyword } };
// };

export const sortStaffSurname = orderBy => {
  return { type: EmployeeActionTypes.SORT_EMPLOYEE, payload: orderBy };
};
