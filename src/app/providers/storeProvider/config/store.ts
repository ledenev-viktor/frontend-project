import { configureStore } from "@reduxjs/toolkit";
import { StateScheme } from "./stateScheme";
import { counterReducer } from "entities/counter";

export function createReduxStore(initialState?: StateScheme) {
  return configureStore<StateScheme>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
