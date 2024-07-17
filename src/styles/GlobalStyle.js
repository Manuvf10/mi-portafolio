import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  main {
    padding-top: 60px;
  }
`;

export default GlobalStyle;
