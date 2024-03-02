import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice";

const store = configureStore({
  reducer: { orders: orderSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
