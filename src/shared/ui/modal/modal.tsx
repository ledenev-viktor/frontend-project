import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import { classnames } from "shared/libs/classNames/classNames";
import cls from "./style.module.scss";
import { Portal } from "../portal/portal";
import { useTheme } from "app/providers/themeProviders";

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpend?: boolean;
  lazy?: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpend,
  onClose,
  lazy,
}) => {
  const closeHandler = useCallback((): void => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onContentClick = useCallback(
    (e: { stopPropagation: () => void }) => e.stopPropagation(),
    []
  );

  const onkeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key == "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpend) {
      window.addEventListener("keydown", onkeydown);
    }

    return () => window.removeEventListener("keydown", onkeydown);
  }, [isOpend, onkeydown]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpend) {
      setIsMounted(true);
    }
  }, [isOpend]);

  if (lazy && !isMounted) {
    return null;
  }

  const mods: Record<string, boolean> = {
    [cls.opend]: isOpend,
  };
  return (
    <Portal>
      <div className={classnames(cls.Modal, mods, [className])}>
        <div onClick={closeHandler} className={cls.overlay}>
          <div onClick={onContentClick} className={cls.content}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
