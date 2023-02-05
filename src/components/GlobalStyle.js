import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  ul {
    padding: 0;
    margin: 0;
  }

  ul li::marker {
}

  * {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

/* #root {
  width: 100vw;
} */

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: auto;
 font-family: 'Arial';
 max-width: 1200px;
 min-height: calc(100vh - 160px);
}


.title {
  color: #0a1b25;
  text-shadow: 2px 2px 3px rgba(150, 150, 150, 1);
}

.listEmpty{
margin-top: 15px;
}

/* 
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px #2f5870 inset !important;
}

input:-webkit-autofill{
    -webkit-text-fill-color: #ffffff !important;
}

input[type=search]::-webkit-search-cancel-button {
    -webkit-appearance: searchfield-cancel-button;
} */
`;
