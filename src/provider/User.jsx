import React, { useContext, useEffect, useState } from "react";
import { useProfileQuery } from "../redux/features/authApi";
// import { useProfileQuery } from "../redux/apiSlices/authSlice"
export const UserContext = React.createContext(null);

export const UserProvider = ({ children }) => {
  const { data: profile } = useProfileQuery({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (profile) {
      setUser(profile);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
