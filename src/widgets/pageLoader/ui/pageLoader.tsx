import { FC } from "react";
import { classnames } from "shared/libs/classNames/classNames";
import cls from "./style.module.scss";
import { Loader } from "shared/ui/loader/loader";

interface PageLoaderProps {
  className?: "";
}

export const PageLoader: FC<PageLoaderProps> = () => {
  return (
    <div className={classnames(cls.PageLoader)}>
      <Loader />
    </div>
  );
};
