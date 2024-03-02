import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mealItemType } from "../types";
import { orderAction } from "../store/orderSlice";
import { RootState } from "../store";

const MealItems = ({ meal }: { meal: mealItemType }): ReactNode => {
  const orderedMeals = useSelector((state: RootState) => state.orders.meals);
  const mealItem = orderedMeals.find(
    (orderedMeal) => orderedMeal.id === meal.id
  );

  const dispatch = useDispatch();

  const addHandler = (meal: mealItemType) => {
    dispatch(
      orderAction.addItem({ id: meal.id, name: meal.name, price: meal.price })
    );
  };

  const removeHandler = (meal: mealItemType) => {
    dispatch(orderAction.removeItem({ id: meal.id }));
  };

  return (
    <div className="felx flex-col max-w-80 h-full bg-gray-950 rounded-md text-center shadow-md">
      <h3 className="text-yellow-400 font-bold text-lg">{meal.name}</h3>
      <img src={`../../public/${meal.image}`} className="h-80 object-cover" />
      <p className="text-zinc-300 m-4 h-20">{meal.description}</p>
      <p className="text-orange-400 font-bold py-4 px-2">{meal.price}</p>
      <div className="flex flex-row justify-center text-2xl text-orange-400 mb-5">
        <button
          onClick={() => removeHandler(meal)}
          className="border-solid border-2 border-orange-400 rounded-xl w-10 hover:border-orange-200 hover:text-orange-300"
        >
          -
        </button>
        <p className="mx-6 text-gray-300">{mealItem ? mealItem.quantity : 0}</p>
        <button
          onClick={() => addHandler(meal)}
          className="border-solid border-2 border-orange-400 rounded-xl w-10 hover:border-orange-200 hover:text-orange-300"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default MealItems;
