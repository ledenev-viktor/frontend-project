import { DeepPartial } from "@reduxjs/toolkit";
import { counterReducer, counterActions } from "./counterSlice";
import { StateScheme } from "app/providers/storeProvider";
import { CounterScheme } from "../types/counterScheme";

describe("counterSlice", () => {
  test("decrement", () => {
    const state: DeepPartial<CounterScheme> = { value: 10 };
    expect(
      counterReducer(state as CounterScheme, counterActions.decrement())
    ).toEqual({ value: 9 });
  });

  test("increment", () => {
    const state: DeepPartial<CounterScheme> = { value: 10 };
    expect(
      counterReducer(state as CounterScheme, counterActions.increment())
    ).toEqual({ value: 11 });
  });

  test("should work with empty state", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
