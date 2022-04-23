import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState("Login");
  const handleUserStatus = () => {
    setIsAuth(isAuth === "Login" ? "Logout" : "Login");
  };
  return (
    <AuthContext.Provider value={{ isAuth, handleUserStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
