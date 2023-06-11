import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/aboutPage";
import { MainPageAsync } from "./pages/mainPage";
import { Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { classnames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classnames('app', {}, [theme])}>
      <button onClick={toggleTheme}>{theme}</button>
      <nav>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О сайте</Link>
      </nav>
      <Suspense fallback={<div>loading..</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
