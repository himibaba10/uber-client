import { Navigate } from "react-router";
import { useEffect, useState } from "react";
import securedApi from "../services/securedApi";
import useCaptainProvider from "../hooks/useCaptainProvider";

const CaptainPrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const { captain, setCaptain } = useCaptainProvider();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      const fetchCaptainData = async () => {
        try {
          const response = await securedApi.get("/captains/profile");
          if (response.data.success) {
            setCaptain(response.data.data);
            setLoading(false);
          } else {
            console.error("Failed to fetch captain data");
          }
        } catch (error) {
          console.error("Error fetching captain data:");
          console.log(error);
          setLoading(false);
        }
      };
      fetchCaptainData();
    } else {
      setLoading(false);
    }
  }, [setCaptain]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!captain?.email) {
    return <Navigate to="/auth/captain-login" />;
  }

  return children;
};

export default CaptainPrivateRoute;
