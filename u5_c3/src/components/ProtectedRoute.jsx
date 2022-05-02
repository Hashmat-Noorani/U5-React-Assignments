import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
export const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  if (isAuth) return children;
  return <Navigate to="/login" />;
};
