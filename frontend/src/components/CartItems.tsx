import { useSelector, useDispatch } from "react-redux";
import { mealType } from "../types";
import { RootState } from "../store/index";
import { orderAction } from "../store/orderSlice";

const CartItems = () => {
  const orderedMeals = useSelector((state: RootState) => state.orders.meals);

  const dispatch = useDispatch();

  const addHandler = (e: React.MouseEvent, meal: mealType) => {
    e.preventDefault();
    dispatch(
      orderAction.addItem({ id: meal.id, name: meal.name, price: meal.price })
    );
  };

  const removeHandler = (e: React.MouseEvent, meal: mealType) => {
    e.preventDefault();
    dispatch(orderAction.removeItem({ id: meal.id }));
  };

  return (
    <ul className="mb-4">
      {orderedMeals.map((meal) => (
        <li
          key={meal.id}
          className="flex flex-row mx-12 my-4 justify-between text-xl"
        >
          <h3 className="w-60">{meal.name}</h3>
          {/* <p className="mr-8">{meal.quantity}</p>
           */}
          <div className="flex flex-row justify-center items-center text-xl text-orange-400">
            <button
              onClick={(e) => removeHandler(e, meal)}
              className="border-solid border-2 border-orange-400 rounded-md w-6 hover:border-orange-200 hover:text-orange-300"
            >
              -
            </button>
            <p className="mx-6 text-gray-300">{meal.quantity}</p>
            <button
              onClick={(e) => addHandler(e, meal)}
              className="border-solid border-2 border-orange-400 rounded-md w-6 hover:border-orange-200 hover:text-orange-300"
            >
              +
            </button>
          </div>

          <p className="w-24 text-right">{meal.quantity * meal.price}</p>
        </li>
      ))}
    </ul>
  );
};

export default CartItems;
