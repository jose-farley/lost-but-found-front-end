import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Routes";
import { AuthFornecedor } from "./context/authentication";



export function App() {
  

  return (
    <BrowserRouter>
      <AuthFornecedor>
        <ThemeProvider theme={DefaultTheme}>
            <Router />
            <GlobalStyle />
        </ThemeProvider>
      </AuthFornecedor>
    </BrowserRouter>
  )
}
