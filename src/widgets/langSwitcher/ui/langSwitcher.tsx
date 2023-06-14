import { FC } from "react";
import { classnames } from "shared/libs/classNames/classNames";
import cls from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/button/button";

interface LangSwitcherProps {
    className: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <div className={classnames(cls.LangSwitcher, {}, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={toggle}>
        {i18n.language}
      </Button>
    </div>
  );
};
