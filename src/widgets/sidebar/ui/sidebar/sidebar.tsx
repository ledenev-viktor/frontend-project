import { FC, useState } from "react";
import { classnames } from "shared/libs/classNames/classNames";
import cls from "./style.module.scss";
import { ThemeSwitcher } from "widgets/themeSwitcher";
import { LangSwitcher } from "widgets/langSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={classnames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>{collapsed ? ">" : "<"}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
