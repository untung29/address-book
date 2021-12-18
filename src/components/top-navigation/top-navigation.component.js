import React from "react";
import { Link } from "react-router-dom";
import withRouter from "../../HOC/withRouter";

const TopNavigation = props => {
  const { location } = props;
  return (
    <ul className="nav nav-tabs nav-fill">
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname === "/" && "active"}`} to="/">
          Employee List
        </Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname === "/add" && "active"}`} to="/add">
          Add Employee
        </Link>
      </li>
    </ul>
  );
};

export default withRouter(TopNavigation);
