import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body, textarea, input, button{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }

`