import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";



const UserAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default UserAuth;