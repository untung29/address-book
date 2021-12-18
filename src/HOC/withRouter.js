import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const withRouter = WrappedComponent => {
  const ComponentRouterProps = props => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    return <WrappedComponent params={params} location={location} navigate={navigate} {...props} />;
  };

  return ComponentRouterProps;
};

export default withRouter;
