import { EmployeeActionTypes } from "./employee.types";

const INITIAL_STATE = {
  listEmployees: [],
};

const employeeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EmployeeActionTypes.ADD_EMPLOYEE:
      return { ...state, listEmployees: [...state.listEmployees, action.payload] };
    default:
      return state;
  }
};

export default employeeReducer;
