import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CaptainContext = createContext();

const CaptainProvider = ({ children }) => {
  const [captain, setCaptain] = useState(null);

  return (
    <CaptainContext.Provider value={{ captain, setCaptain }}>
      {children}
    </CaptainContext.Provider>
  );
};

export default CaptainProvider;
