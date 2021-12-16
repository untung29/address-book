import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
import EmployeeList from "./pages/employee-list/employee-list";
import EmployeeAdd from "./pages/employee-add/employee-add";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EmployeeList />} />
      <Route path="/add" element={<EmployeeAdd />} />
    </Routes>
  );
}

export default App;
