import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";

const UserDetails = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <div>{isAuth === "Logout" ? "Login successful" : "Logout Successful"}</div>
  );
};
export default UserDetails;
