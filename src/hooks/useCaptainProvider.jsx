import { useContext } from "react";
import { CaptainContext } from "../contexts/CaptainProvider";

const useCaptainProvider = () => {
  const captain = useContext(CaptainContext);
  return captain;
};

export default useCaptainProvider;
