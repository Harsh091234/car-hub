import { configureStore } from "@reduxjs/toolkit";

import carsReducer from "./slices/carsSlices";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;