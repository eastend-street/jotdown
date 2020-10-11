import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: #f4f0db;

    a {
    text-decoration: none;
    color: inherit;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
    }
    textarea {
      font-family: sans-serif;
    }
  }
`;

export default GlobalStyle;
