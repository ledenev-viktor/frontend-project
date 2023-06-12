import { ButtonHTMLAttributes, FC } from "react";
import { classnames } from "shared/libs/classNames/classNames";
import cls from "./style.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  theme,
  onClick,
  ...otherProps
}) => {
  return (
    <button
      className={classnames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
        onClick={onClick}
    >
      {children}
    </button>
  );
};
