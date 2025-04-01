import { Navigate } from "react-router";
import Login from "../components/shared/Login";
import useUserProvider from "../hooks/useUserProvider";

const UserLogin = () => {
  const { user } = useUserProvider();

  if (user && user.email) {
    return <Navigate to="/home" />;
  }

  return <Login userType="user" />;
};

export default UserLogin;
