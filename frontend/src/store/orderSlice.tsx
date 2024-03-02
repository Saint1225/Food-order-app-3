import { createSlice } from "@reduxjs/toolkit";

type mealType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type orderType = {
  meals: mealType[];
  totalAmount: number;
};

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
  },
});

export const orderAction = orderSlice.actions;

export default orderSlice;
