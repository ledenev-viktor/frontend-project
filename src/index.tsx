import { render } from "react-dom";
import App from "./app";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme/themeProvider";

const root = document.querySelector("#root");

render(
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>,
  root
);
