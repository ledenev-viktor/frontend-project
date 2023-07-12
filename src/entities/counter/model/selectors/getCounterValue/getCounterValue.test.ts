import { DeepPartial } from "@reduxjs/toolkit";
import { getCounterValue } from "./getCounterValue";
import { StateScheme } from "app/providers/storeProvider";

describe("getCounterValue", () => {
  test("should return counter value", () => {
    const state: DeepPartial<StateScheme> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateScheme)).toEqual(10);
  });
});
