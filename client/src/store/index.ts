import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitReduser from "./toolkitSlice";

const rootReducer = combineReducers({
  toolkitReduser,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
