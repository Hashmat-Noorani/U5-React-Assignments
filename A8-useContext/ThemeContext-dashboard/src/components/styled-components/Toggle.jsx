import styledComponents from "styled-components";
export const Toggle = styledComponents.div`position: absolute;
left:${({ theme }) => (theme === "light" ? 0 : null)};
right:${({ theme }) => (theme === "dark" ? 0 : null)};
width: 47px;
height: 47px;
border-radius: 50%;
background: #29cb97;`;
