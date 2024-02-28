import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice";

const store = configureStore({
  reducer: { orderReducer: orderSlice.reducer },
});

export default store;
