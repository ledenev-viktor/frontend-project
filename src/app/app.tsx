import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "pages/aboutPage";
import { MainPage } from "pages/mainPage";
import { Link } from "react-router-dom";
import { classnames } from "shared/libs/classNames/classNames";
import { useTheme } from "./providers/themeProviders";
import "./styles/index.scss";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classnames("app", {}, [theme])}>
      <Navbar/>
      <AppRouter />
    </div>
  );
};

export default App;
