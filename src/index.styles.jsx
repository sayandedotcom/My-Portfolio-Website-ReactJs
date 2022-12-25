import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body {
  font-family: "Poppins", sans-serif;
}

::-webkit-scrollbar {
  width: 0.6rem;
}
::-webkit-scrollbar-track {
  background:${({ darkMode }) => (darkMode ? "grey" : "#a56fef")} ;
}
::-webkit-scrollbar-thumb {
  background:${({ darkMode }) => (darkMode ? "white" : "#5605a2")} ;
  border: 0.6 solid transparent;
  border-radius: 2rem;
  background-clip: content-box;
  height: 20px;
}
::-webkit-scrollbar-thumb:hover {
  background-color:${({ darkMode }) => (darkMode ? "#fbffff" : "blue")} ;
}
`;

export default GlobalStyles;
