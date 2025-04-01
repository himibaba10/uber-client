import { Navigate } from "react-router";
import { useEffect, useState } from "react";
import useUserProvider from "../hooks/useUserProvider";
import securedApi from "../services/securedApi";

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const { user, setUser } = useUserProvider();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      const fetchUserData = async () => {
        try {
          const response = await securedApi.get("/users/profile");
          if (response.data.success) {
            setUser(response.data.data);
            setLoading(false);
          } else {
            console.error("Failed to fetch user data");
          }
        } catch (error) {
          console.error("Error fetching user data:");
          console.log(error);
          setLoading(false);
        }
      };
      fetchUserData();
    } else {
      setLoading(false);
    }
  }, [setUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.email) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default PrivateRoute;
