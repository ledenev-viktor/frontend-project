import { Suspense, useEffect, useState } from "react";
import { classnames } from "shared/libs/classNames/classNames";
import { useTheme } from "./providers/themeProviders";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar";
import { Modal } from "shared/ui/modal/modal";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classnames("app", {}, [theme])}>
      <Suspense fallback="">
        {/** для переводов useTranslate */}
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
