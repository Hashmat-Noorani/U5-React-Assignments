import styledComponents from "styled-components";
export const LeftDiv = styledComponents.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding: 20px;
background:${({ theme }) => (theme === "light" ? "#ffffff" : "#16191c")};
`;
