import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from "./features/collectDetails/detailsSlice";

export const store = configureStore({
  reducer: {
    details: detailsReducer,
  },
});

// Infer the type of `store`
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;

// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
