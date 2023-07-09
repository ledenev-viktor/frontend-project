import { FC, useState } from "react";
import { classnames } from "shared/libs/classNames/classNames";
import cls from "./style.module.scss";
import { ThemeSwitcher } from "widgets/themeSwitcher";
import { LangSwitcher } from "widgets/langSwitcher";
import { Button, ButtonSize, ThemeButton } from "shared/ui/button/button";
import { AppLink, AppLinkTheme } from "shared/ui/appLink/appLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about.svg";
import HomeIcon from "shared/assets/icons/home.svg";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prev) => !prev);

  const { t } = useTranslation("common");

  return (
    <div
      data-testid="sidebar"
      className={classnames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <nav className={classnames(cls.links)}>
        <AppLink to={RoutePath.main}>
          {collapsed ? <HomeIcon /> : t("Главная")}
        </AppLink>
        <AppLink to={RoutePath.about}>
          {collapsed ? <AboutIcon /> : t("О сайте")}
        </AppLink>
      </nav>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
