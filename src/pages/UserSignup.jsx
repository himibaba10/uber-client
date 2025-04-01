import { Navigate } from "react-router";
import Signup from "../components/shared/Signup";
import useUserProvider from "../hooks/useUserProvider";

const UserSignup = () => {
  const { user } = useUserProvider();

  if (user && user.email) {
    return <Navigate to="/home" />;
  }
  return <Signup userType="user" />;
};

export default UserSignup;
