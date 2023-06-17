import { FC } from "react";
import { classnames } from "shared/libs/classNames/classNames";
import cls from "./style.module.scss";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
  className?: "";
}

const NotFoundPage: FC<NotFoundPageProps> = () => {
  const { t } = useTranslation("common");
  return (
    <div className={classnames(cls.NotFoundPage)}>
      {t("Страница не найдена")}
    </div>
  );
};

export default NotFoundPage;
