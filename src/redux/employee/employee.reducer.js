import { EmployeeActionTypes } from "./employee.types";

const INITIAL_STATE = {
  listEmployees: [],
};

const employeeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EmployeeActionTypes.ADD_EMPLOYEE:
      return { ...state, listEmployees: [...state.listEmployees, action.payload] };
    case EmployeeActionTypes.DELETE_EMPLOYEE:
      let filteredEmployees = state.listEmployees.filter(employee => employee.id !== action.payload);

      return { ...state, listEmployees: filteredEmployees };
    default:
      return state;
  }
};

export default employeeReducer;
