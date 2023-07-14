import { Counter } from "entities/counter";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/input/input";

function MainPage() {
  const { t } = useTranslation("main");

  const [value, setValue] = useState("");

  const handleChange = (val: string) => {
    setValue(val);
  };
  return (
    <>
      <div>{t("Главная страница")}</div>
      <Input
        placeholder="Введите текст"
        value={value}
        onChange={handleChange}
      />
    </>
  );
}

export default MainPage;
