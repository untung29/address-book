import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
import EmployeeList from "./pages/employee-list/employee-list";
import EmployeeAdd from "./pages/employee-add/employee-add";

// Components
import TopNavigation from "./components/top-navigation/top-navigation";

function App() {
  return (
    <div class="container">
      <TopNavigation />
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/add" element={<EmployeeAdd />} />
      </Routes>
    </div>
  );
}

export default App;
