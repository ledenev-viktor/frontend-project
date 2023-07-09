import { FC } from "react";
import { classnames } from "shared/libs/classNames/classNames";
import cls from "./navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = () => {
  return <div className={classnames(cls.navbar)}></div>;
};
