import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { useTranslation } from "react-i18next";

interface CounterProps {
  className?: "";
}

export const Counter: FC<CounterProps> = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="value-title">{`${t("Значение")}: ${counterValue}`}</h1>
      <button data-testid="increment-button" onClick={increment}>
        {t("Увеличить")}
      </button>
      <button data-testid="decrement-button" onClick={decrement}>
        {t("Уменьшить")}
      </button>
    </div>
  );
};
