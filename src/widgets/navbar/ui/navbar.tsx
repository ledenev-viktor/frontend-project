import { FC } from "react";
import { classnames } from "shared/libs/classNames/classNames";
import cls from "./navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/appLink/appLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = () => {
  const { t } = useTranslation("common");
  return (
    <div className={classnames(cls.navbar)}>
      <nav className={classnames(cls.links)}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
          {t("Главная")}
        </AppLink>
        <AppLink to={"/about"}>{t("О сайте")}</AppLink>
      </nav>
    </div>
  );
};
