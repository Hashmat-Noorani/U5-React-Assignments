import styledComponents from "styled-components";
export const RightDiv = styledComponents.div`height: 100vh;
width: 100%;
display: flex;
padding: 10px;
justify-content: flex-end;
background:${({ theme }) => (theme === "light" ? "#f5f6fa" : "#1f2327")}
`;
