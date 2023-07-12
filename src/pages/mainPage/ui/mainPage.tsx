import { Counter } from "entities/counter";
import { useTranslation } from "react-i18next";

function MainPage() {
  const { t } = useTranslation("main");
  return (
    <>
      <div>{t("Главная страница")}</div>
      <Counter />
    </>
  );
}

export default MainPage;
