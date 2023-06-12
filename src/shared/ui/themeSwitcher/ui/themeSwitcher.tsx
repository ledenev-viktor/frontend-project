import { FC } from "react";
import { classnames } from "shared/libs/classNames/classNames";
import cls from "./style.module.scss";
import { useTheme } from "app/providers/themeProviders";
import { Theme } from "app/providers/themeProviders";

import IconLight from "shared/assets/icons/theme_light.svg";
import IconDark from "shared/assets/icons/theme_dark.svg";
import { Button, ThemeButton } from "shared/ui/button/button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button theme={ThemeButton.CLEAR} onClick={toggleTheme}>
      {theme == Theme.LIGHT ? <IconLight /> : <IconDark />}
    </Button>
  );
};
