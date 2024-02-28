import { createSlice } from "@reduxjs/toolkit";

const initialOrderState: unknown[] = [];

const orderSlice = createSlice({
  name: "orders",
  initialState: initialOrderState,
  reducers: {
    addItem() {},
  },
});

export const orderAction = orderSlice.actions;

export default orderSlice;
