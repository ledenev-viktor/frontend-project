import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "pages/aboutPage";
import { MainPage } from "pages/mainPage";
import { Link } from "react-router-dom";
import { classnames } from "shared/libs/classNames/classNames";
import { useTheme } from "./providers/themeProviders";
import "./styles/index.scss";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classnames("app", {}, [theme])}>
      <button onClick={toggleTheme}>{theme}</button>
      <nav>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О сайте</Link>
      </nav>
      <AppRouter />
    </div>
  );
};

export default App;
