import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   :root{
     --overlayColor: ${({isDarkModeOn}) => isDarkModeOn ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
     --textColor: ${({isDarkModeOn}) => isDarkModeOn ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
   }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Nunito Sans', sans-serif;
    background-color: ${({isDarkModeOn}) => isDarkModeOn ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
    color: var(---textColor);
  }
  img{
    width: 100%;
    object-fit: cover;
  }
`;

export default GlobalStyles;