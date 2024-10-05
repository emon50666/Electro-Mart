import { Navigate, useLocation } from "react-router-dom";
import UserAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {
    const {user,loading} = UserAuth();
    const location = useLocation()
    console.log(location.pathname)

    if(loading){
        <div className="justify-center mx-auto text-center min-h-min">
        <span className="loading loading-dots loading-sm"></span>
    </div>
    }
   if(user) {
    return children
   }
   return <Navigate state={location.pathname} to={'/register'} />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node 
};
export default PrivateRoute;