import styled from "styled-components";

const GoTopButton = styled.button`
  background-color: ${({ darkMode }) => (darkMode ? "white" : "#421bea")};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 6.5px 9px;
  box-shadow: ${({ darkMode }) =>
    darkMode
      ? "0px 5px 10px rgb(250, 250, 250)"
      : "0px 5px 10px rgb(48 68 247 / 60%)"};
  z-index: 1000;
  top: calc(100% - 6rem);
  position: fixed;
  right: 1rem;
  transition: 1s, linear;
`;

export default GoTopButton;
