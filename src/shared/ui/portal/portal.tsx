import { FC, Fragment, ReactNode } from "react";
import { classnames } from "shared/libs/classNames/classNames";
import cls from "./style.module.scss";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal: FC<PortalProps> = ({
  element = document.body,
  children,
}) => {
  return createPortal(children, element);
};
