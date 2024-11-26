import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {

  const { user, loading } = useAuth();


    const { user, loading } = UserAuth();
    const location = useLocation();
    console.log(location);

    if (loading) {
        return (
            <div className="justify-center mx-auto text-center min-h-min">
                <span className="loading loading-dots loading-sm"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }

    // Pass the full location object in state to preserve the intended destination
    return <Navigate to={'/register'} state={{ from: location }} />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};


  const { user, loading } = UserAuth();

  const location = useLocation();

  if (loading) {
    <div className="justify-center mx-auto text-center min-h-min">
      <span className="loading loading-dots loading-sm"></span>
    </div>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
