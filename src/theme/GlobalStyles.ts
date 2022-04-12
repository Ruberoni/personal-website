import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.colors.secondary};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  h1 {
    margin-top: 0;
  }
`;
