import { ReactNode } from "react";
import { mealItemType } from "../types";

const MealItems = ({ meal }: { meal: mealItemType }): ReactNode => {
  return (
    <div className="felx flex-col max-w-80 h-full bg-gray-950 rounded-md text-center shadow-md">
      <h3 className="text-zinc-300">{meal.name}</h3>
      <img src={`../../public/${meal.image}`} className="h-80 object-cover" />
      <p className="text-zinc-300 m-4">{meal.description}</p>
      <p className="text-orange-400 font-bold py-4 px-2">{meal.price}</p>
    </div>
  );
};

export default MealItems;
