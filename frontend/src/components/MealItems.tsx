import { ReactNode } from "react";
import { mealItemType } from "../types";

const MealItems = ({ meal }: { meal: mealItemType }): ReactNode => {
  return (
    <div className="felx flex-col bg-gray-950 rounded-md overflow-hidden text-center shadow-md">
      <h3>{meal.name}</h3>
      <img src={`../../public/${meal.image}`} className="h-80 object-cover" />
      <p>{meal.description}</p>
      <p>{meal.price}</p>
    </div>
  );
};

export default MealItems;
