import { FC } from "react";
import { classnames } from "shared/libs/classNames/classNames";
import cls from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/button/button";

interface PageErrorProps {
  className?: "";
}

export const PageError: FC<PageErrorProps> = () => {
  const { t } = useTranslation("common");

  const reloadPage = () => location.reload();

  return (
    <div className={classnames(cls.PageError)}>
      <div>
        <div>{t("Произошла непредвиденная ошибка")}</div>
        <div className={classnames(cls.button)}>
          <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
        </div>
      </div>
    </div>
  );
};
