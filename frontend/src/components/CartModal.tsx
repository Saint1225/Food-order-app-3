import { forwardRef, useRef, useImperativeHandle, useState } from "react";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { submitOrder } from "../api/order";

const CartModal = forwardRef((props, ref) => {
  const [submitted, setSubmitted] = useState(false);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const orderedMeals = useSelector((state: RootState) => state.orders.meals);
  const totalAmount = orderedMeals.reduce((acc, next) => {
    return acc + next.price * next.quantity;
  }, 0);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => dialogRef.current && dialogRef.current.showModal(),
    };
  });

  const handleDialogCancel = () => {
    dialogRef.current && dialogRef.current.close();
  };

  const handleDialogSubmit = () => {
    submitOrder(orderedMeals);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    dialogRef.current?.close();
  };

  return (
    <dialog
      ref={dialogRef}
      className="w-2/5 min-w-fit bg-blueGray-800 text-zinc-300 rounded-xl border-solid border-4 border-orange-400"
    >
      <form method="dialog">
        <h2 className="text-3xl my-6 font-bold">Orders</h2>
        {submitted ? (
          <>
            {" "}
            <h1 className="text-2xl text-orange-400 mb-8">Submitted!</h1>
            <button
              onClick={handleClose}
              className="text-xl mb-5 rounded-md border-solid border-2 border-orange-400 px-2 py-1 hover:bg-slate-700 hover:text-orange-300"
            >
              Close
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-row mx-12 my-2 justify-between text-2xl font-bold text-yellow-400">
              <h3 className="ml-20">Items</h3>
              <h3 className="ml-24">Quantity</h3>
              <h3>Amount</h3>
            </div>
            <CartItems />
            <hr className="w-11/12 h-2 text-gray-300 mx-5" />
            <div className="flex flex-row mx-12 mb-8 justify-between font-bold">
              <h3 className="ml-20 text-2xl ">Total</h3>
              <h3 className="ml-auto text-xl ">{totalAmount.toFixed(2)} SGD</h3>
            </div>
            <div className="flex flex-row gap-40 justify-center text-2xl mx-3 my-2">
              <button
                onClick={handleDialogCancel}
                className="border-solid border-2 text-orange-400 border-orange-400 rounded-md px-2 py-1 hover:bg-slate-700 hover:border-orange-200 hover:text-orange-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDialogSubmit}
                className="border-solid border-2 text-orange-400 border-orange-400 rounded-md px-2 py-1 hover:bg-slate-700 hover:border-orange-200 hover:text-orange-300"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </dialog>
  );
});
export default CartModal;
