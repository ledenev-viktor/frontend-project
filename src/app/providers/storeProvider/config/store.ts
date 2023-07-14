import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateScheme } from "./stateScheme";
import { counterReducer } from "entities/counter";
import { userReducer } from "entities/user";

export function createReduxStore(initialState?: StateScheme) {
  const RootReducers: ReducersMapObject<StateScheme> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateScheme>({
    reducer: RootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
