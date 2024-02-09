import axios from "axios";

type mealItemType = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
};

export const fetchMealItems = (): Promise<mealItemType[]> => {
  const meals = axios
    .get("http://localhost:3000/meals/mealItems")
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => console.log(error));
  return meals;
};
