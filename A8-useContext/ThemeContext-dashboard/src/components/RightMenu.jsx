import "./RightMenu.css";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { RightDiv } from "./styled-components/RightDiv";
import { Toggle } from "./styled-components/Toggle";

export const RightMenu = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <RightDiv theme={theme}>
      <div className="toggle">
        <Toggle
          onClick={() => {
            toggleTheme(theme === "light" ? "dark" : "light");
          }}
          theme={theme}
        ></Toggle>
      </div>
    </RightDiv>
  );
};
