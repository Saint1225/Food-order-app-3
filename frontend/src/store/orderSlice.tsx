import { createSlice } from "@reduxjs/toolkit";
import { orderType, mealType } from "../types";

const initialOrderState: orderType = {
  meals: [],
  totalAmount: 0,
};

const orderSlice = createSlice({
  name: "orders",
  initialState: initialOrderState,
  reducers: {
    addItem(state, action) {
      if (!state.meals.some((meal) => meal.id === action.payload.id)) {
        state.meals.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1,
        });
      } else {
        state.meals.forEach((meal) => {
          if (meal.id === action.payload.id) {
            meal.quantity++;
            state.totalAmount += meal.price;
          }
        });
      }
    },
    removeItem(state, action) {
      if (
        state.meals.some(
          (meal) => meal.id === action.payload.id && meal.quantity === 1
        )
      ) {
        state.meals = state.meals.filter(
          (meal) => meal.id !== action.payload.id
        );
      } else {
        state.meals.forEach((meal) => {
          if (meal.id === action.payload.id) {
            meal.quantity--;
            state.totalAmount -= meal.price;
          }
        });
      }
    },
    replaceOrder(state, action) {
      console.log(action.payload.meals);
      state.meals = action.payload.meals;
      state.totalAmount = action.payload.meals.reduce(
        (acc: number, next: mealType) => {
          return acc + next.price * next.quantity;
        },
        0
      );
    },
  },
});

export const orderAction = orderSlice.actions;

export default orderSlice;
