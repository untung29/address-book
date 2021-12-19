import { EmployeeActionTypes } from "./employee.types";
import Employee from "../../Model/employee.model";

const INITIAL_STATE = {
  listEmployees: [
    new Employee("1", "Untung", "Untung", "IT Department", "0431636895"),
    new Employee("2", "Derrick", "Jordan", "Marketing & Sales", "0431636895"),
    new Employee("3", "Jonathan", "Christy", "Marketing & Sales", "0431636895"),
    new Employee("4", "Brittney", "Spears", "IT Department", "0431636895"),
    new Employee("5", "Juanda", "Hope", "IT Department", "0431636895"),
  ],
  filteredEmployees: [],
};

const employeeReducer = (state = INITIAL_STATE, action) => {
  let filteredEmployees = [];
  switch (action.type) {
    case EmployeeActionTypes.ADD_EMPLOYEE:
      return { ...state, listEmployees: [...state.listEmployees, action.payload] };
    case EmployeeActionTypes.DELETE_EMPLOYEE:
      filteredEmployees = state.listEmployees.filter(employee => employee.id !== action.payload);
      return { ...state, listEmployees: filteredEmployees };
    // case EmployeeActionTypes.FILTER_EMPLOYEE:
    //   let { filterBy, keyword } = action.payload;
    //   if (filterBy === "Department") {
    //     filteredEmployees = state.listEmployees.filter(employee => employee.department.toLowerCase().includes(keyword));
    //   } else if (filterBy === "Name") {
    //     filteredEmployees = state.listEmployees.filter(employee => employee.firstName.toLowerCase().includes(keyword));
    //   }
    //   return { ...state, filteredEmployees: filteredEmployees };
    default:
      return { ...state, filteredEmployees: state.listEmployees };
  }
};

export default employeeReducer;
