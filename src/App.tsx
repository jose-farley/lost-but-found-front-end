import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Routes";



export function App() {
  

  return (
    <BrowserRouter>
        <ThemeProvider theme={DefaultTheme}>
          <Router />
          <GlobalStyle />
        </ThemeProvider>
    </BrowserRouter>
  )
}
