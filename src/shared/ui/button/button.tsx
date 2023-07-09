import { ButtonHTMLAttributes, FC } from "react";
import { classnames } from "shared/libs/classNames/classNames";
import cls from "./style.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  theme,
  onClick,
  square,
  size,
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };

  return (
    <button
      className={classnames(cls.Button, mods, [
        className,
        cls[theme],
        cls[size],
      ])}
      {...otherProps}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
