import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/actions";
import { useDispatch } from "react-redux";

export const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutt = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      {" "}
      <button
        onClick={() => {
          logoutt();
        }}
      >
        Logout
      </button>{" "}
    </>
  );
};
