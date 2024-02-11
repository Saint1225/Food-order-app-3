import axios from "axios";
import { mealItemType } from "../types";

export const fetchMealItems = (): Promise<mealItemType[]> => {
  const meals = axios
    .get("http://localhost:8010/proxy/meals/mealItems")
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => console.log(error));
  return meals;
};
