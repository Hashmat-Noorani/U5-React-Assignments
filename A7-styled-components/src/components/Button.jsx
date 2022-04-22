import styled from "styled-components";
const Button = styled.button`
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: ${({ variant }) => (variant === "primary" ? "#574edd" : "black")};
  /* border: 5px solid red; */
  border: ${({ border }) =>
    border === "5px" ? "5px solid red" : "5px solid black"};
  color: ${({ variant }) => (variant === "primary" ? "black" : "white")};
`;

const Div = styled.div`
  background: ${({ mode }) => (mode === "night" ? "black" : "white")};
  color: ${({ mode }) => (mode === "night" ? "white" : "black")};
`;
export { Button, Div };
