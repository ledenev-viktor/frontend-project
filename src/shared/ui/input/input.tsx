import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  ReactEventHandler,
  SyntheticEvent,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { classnames } from "shared/libs/classNames/classNames";
import cls from "./style.module.scss";
import { useTranslation } from "react-i18next";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "onChange" | "value"> {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo(
  ({
    className,
    type = "text",
    value,
    onChange,
    placeholder,
    autoFocus,
    ...otherProps
  }: InputProps) => {
    const { t } = useTranslation("common");

    const inputRef = useRef<HTMLInputElement>();

    useEffect(() => {
      if (autoFocus) {
        setIsFocused(true);
        inputRef.current?.focus();
      }
    }, [autoFocus]);

    const mods: Record<string, boolean> = {};

    const [caretPosition, setCaretPosition] = useState(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
      setCaretPosition(e.target.value.length);
    };

    const [isFocused, setIsFocused] = useState(false);

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const onSelect = (event: SyntheticEvent<HTMLInputElement, Event>): void => {
      const target = event.target as HTMLInputElement;
      setCaretPosition(target.selectionStart || 0);
    };

    return (
      <div className={classnames(cls.InputWrapper, mods, [className])}>
        {placeholder && (
          <div className={classnames(cls.placeholder)}>{`${placeholder}>`}</div>
        )}
        <div className={cls.caretWrapper}>
          <input
            ref={inputRef}
            onFocus={onFocus}
            onBlur={onBlur}
            className={classnames(cls.input, mods, [className])}
            value={value}
            type={type}
            onChange={handleChange}
            onSelect={onSelect}
            autoFocus
            {...otherProps}
          />
          {isFocused && (
            <span
              style={{ left: `${caretPosition * 9}px` }}
              className={cls.caret}
            ></span>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
