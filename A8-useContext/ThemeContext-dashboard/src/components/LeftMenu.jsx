import "./LeftMenu.css";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LeftDiv } from "./styled-components/LeftDiv";
export const LeftMenu = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <LeftDiv theme={theme}>
      <div className="user">
        <div className="status"></div>
        <div className="avatar">
          <img
            src="https://www.lovesove.com/wp-content/uploads/2021/06/Alone-Attitude-Dp-For-Girl-Lovesove.jpg"
            className="bitmap"
          ></img>
        </div>
      </div>
      <div className="navigation"></div>
      <div className="addNew">➕</div>
    </LeftDiv>
  );
};
