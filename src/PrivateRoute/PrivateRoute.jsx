import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();
  

  if (loading) {
    return (
      <div className="justify-center mx-auto text-center min-h-min">
    
      </div>
    );
  }

  if (user) {
    return children;
  }

  // Pass the full location object in state to preserve the intended destination
  return <Navigate to={"/register"} state={{ from: location }} />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
