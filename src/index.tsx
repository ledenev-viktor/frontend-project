import { render } from "react-dom";
import App from "./app/app";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/themeProviders";
import "./shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers/erorBoundary";
import { PageError } from "widgets/pageError";
import "./app/styles/index.scss";

const root = document.querySelector("#root");

render(
  <BrowserRouter>
    <ErrorBoundary fallback={<PageError />}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  root
);
