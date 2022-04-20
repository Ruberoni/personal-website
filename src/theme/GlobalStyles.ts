import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: linear-gradient(180deg, #112031 0%, rgba(17, 32, 49, 0.9) 100%);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  h1 {
    margin-top: 0;
  }
`;
