import { EmployeeActionTypes } from "./employee.types";
import Employee from "../../Model/employee.model";
import _ from "underscore";

const INITIAL_STATE = {
  listEmployees: [
    new Employee("1", "Untung", "Untung", "IT Department", "0431636895"),
    new Employee("2", "Derrick", "Jordan", "Marketing & Sales", "0431636895"),
    new Employee("3", "Jonathan", "Christy", "Marketing & Sales", "0431636895"),
    new Employee("4", "Brittney", "Spears", "IT Department", "0431636895"),
    new Employee("5", "Juanda", "Hope", "IT Department", "0431636895"),
  ],
};

const employeeReducer = (state = INITIAL_STATE, action) => {
  let filteredEmployees = [];
  switch (action.type) {
    case EmployeeActionTypes.ADD_EMPLOYEE:
      return { ...state, listEmployees: [...state.listEmployees, action.payload] };
    case EmployeeActionTypes.DELETE_EMPLOYEE:
      filteredEmployees = state.listEmployees.filter(employee => employee.id !== action.payload);
      return { ...state, listEmployees: filteredEmployees };
    case EmployeeActionTypes.SORT_EMPLOYEE:
      let sortedEmployees = [];
      if (action.payload === "Descending") {
        sortedEmployees = _.sortBy(state.listEmployees, employee => {
          return employee.lastName.charCodeAt() * -1;
        });
      } else {
        sortedEmployees = _.sortBy(state.listEmployees, "lastName");
      }

      return { ...state, listEmployees: sortedEmployees };
    default:
      return state;
  }
};

export default employeeReducer;
