import React from "react";
import { Link } from "react-router-dom";
import withRouter from "../../HOC/withRouter";

const TopNavigation = props => {
  console.log(props.params);
  return (
    <ul className="nav nav-tabs nav-fill">
      <li className="nav-item">
        <Link class="nav-link active" to="/">
          Employee List
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/add">
          Add Employee
        </Link>
      </li>
    </ul>
  );
};

export default withRouter(TopNavigation);
