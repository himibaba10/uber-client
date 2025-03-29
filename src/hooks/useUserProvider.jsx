import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";

const useUserProvider = () => {
  const user = useContext(UserContext);
  return user;
};

export default useUserProvider;
