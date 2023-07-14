import { FC } from "react";
import { classnames } from "shared/libs/classNames/classNames";
import cls from "./style.module.scss";
import { Modal } from "shared/ui/modal/modal";
import { LoginForm } from "../loginForm/loginForm";

export interface LoginModalProps {
  className?: string;
  onClose: () => void;
  isOpend: boolean;
}

export const LoginModal: FC<LoginModalProps> = ({
  className,
  isOpend,
  onClose,
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {};

  return (
    <Modal
      onClose={onClose}
      isOpend={isOpend}
      lazy
      className={classnames(cls.LoginModal, mods, [className])}
    >
      <LoginForm />
    </Modal>
  );
};
