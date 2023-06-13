import { FC } from "react";
import { Link } from "react-router-dom";
import { classnames } from "shared/libs/classNames/classNames";
import cls from "./navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/appLink/appLink";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classnames(cls.navbar)}>
      <nav className={classnames(cls.links)}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
          Главная
        </AppLink>
        <AppLink to={"/about"}>О сайте</AppLink>
      </nav>
    </div>
  );
};
