import { FC } from "react";
import { classnames } from "shared/libs/classNames/classNames";
import cls from "./style.module.scss";

interface LoaderProps {
  className?: "";
}

export const Loader: FC<LoaderProps> = () => {
  return (
    <div className={classnames(cls.Loader)}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
