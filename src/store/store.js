import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";

export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    preloadedState: initialState,
  });
};
