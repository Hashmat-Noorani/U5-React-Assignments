import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
export const Logout = () => {
  const { handleAuth } = useContext(AuthContext);
  handleAuth(false);
  // log user out. it's just an inmemory value in context api
  return <div></div>;
};
