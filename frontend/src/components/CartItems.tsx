import { useSelector } from "react-redux";
import { RootState } from "../store/index";

const CartItems = () => {
  const orderedMeals = useSelector((state: RootState) => state.orders.meals);
  return (
    <ul className="mb-8">
      {orderedMeals.map((meal) => (
        <li
          key={meal.id}
          className="flex flex-row mx-20 my-2 justify-between text-xl"
        >
          <h3>{meal.name}</h3>
          <p>{meal.quantity}</p>
        </li>
      ))}
    </ul>
  );
};

export default CartItems;
