import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.colors.secondary};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    margin-top: 0;
  }
`;
