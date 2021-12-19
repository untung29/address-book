import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
// import EmployeeList from "./pages/employee-list/employee-list";
// import EmployeeAdd from "./pages/employee-add/employee-add";

// Components
import TopNavigation from "./components/top-navigation/top-navigation.component";

const EmployeeAdd = React.lazy(() => import("./pages/employee-add/employee-add"));
const EmployeeList = React.lazy(() => import("./pages/employee-list/employee-list"));
function App() {
  return (
    <div className="container">
      <TopNavigation />
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<EmployeeAdd />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
