import { forwardRef, useRef, useImperativeHandle } from "react";

const CartModal = forwardRef((props, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => dialogRef.current && dialogRef.current.showModal(),
    };
  });

  return (
    <dialog
      ref={dialogRef}
      title="Cart"
      className="w-2/5 bg-blueGray-800 text-zinc-300 rounded-xl border-solid border-4 border-orange-400"
    >
      <form method="dialog">
        <h2 className="text-3xl my-6 font-bold">Orders</h2>
        <div className="flex flex-row gap-40 justify-center text-2xl mx-3 my-2">
          <button className="border-solid border-2 text-orange-400 border-orange-400 rounded-md px-2 py-1 hover:border-orange-200 hover:text-orange-300">
            Cancel
          </button>
          <button className="border-solid border-2 text-orange-400 border-orange-400 rounded-md px-2 py-1 hover:border-orange-200 hover:text-orange-300">
            Submit
          </button>
        </div>
      </form>
    </dialog>
  );
});
export default CartModal;
