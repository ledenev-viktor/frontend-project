/* eslint-disable i18next/no-literal-string */
import { FC, useCallback, useState } from "react";
import { classnames } from "shared/libs/classNames/classNames";
import cls from "./navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/modal/modal";
import { Button, ThemeButton } from "shared/ui/button/button";
import { LoginModal } from "features/authByUsername";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = () => {
  const { t } = useTranslation("common");

  const [isOpendAuth, setIsOpendAuth] = useState(false);

  const onToggleModalAuth = useCallback(() => {
    setIsOpendAuth((prev) => !prev);
  }, []);
  return (
    <div className={classnames(cls.navbar)}>
      <Button theme={ThemeButton.CLEAR_INVERTED} onClick={onToggleModalAuth}>
        {t("Войти")}
      </Button>
      <LoginModal isOpend={isOpendAuth} onClose={onToggleModalAuth} />
    </div>
  );
};
