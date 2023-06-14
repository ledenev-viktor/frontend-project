import { render } from "react-dom";
import App from "./app/app";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/themeProviders";
import "./shared/config/i18n/i18n";

const root = document.querySelector("#root");

render(
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>,
  root
);
