import { useQuery } from "@tanstack/react-query";
import { fetchMealItems } from "../api/mealItems";
import MealItems from "./MealItems";

const Meals = () => {
  const { data: meals } = useQuery({
    queryKey: ["meals"],
    queryFn: fetchMealItems,
  });

  return (
    <div
      id="meals"
      className="w-11/12 max-w-6xl list-none my-2 mx-auto p-1 grid gap-1"
    >
      {meals
        ? meals.map((meal) => (
            // <p>{meal.name}</p>
            <MealItems meal={meal} />
          ))
        : []}
    </div>
  );
};

export default Meals;
