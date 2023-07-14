import { FC } from "react";
import { classnames } from "shared/libs/classNames/classNames";
import cls from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/button/button";
import { Input } from "shared/ui/input/input";

export interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className, ...otherProps }) => {
  const { t } = useTranslation("common");
  const mods: Record<string, boolean> = {};

  return (
    <form className={classnames(cls.LoginForm, mods, [className])}>
      <h2>{t("Авторизация")}</h2>
      <Input
        autoFocus
        placeholder={t("Введите имя")}
        type="text"
        className={classnames(cls.input)}
      />
      <Input
        placeholder={t("Введите пароль")}
        type="text"
        className={classnames(cls.input)}
      />
      <Button className={classnames(cls.loginBtn)} theme={ThemeButton.OUTLINE}>
        {t("Войти")}
      </Button>
    </form>
  );
};
