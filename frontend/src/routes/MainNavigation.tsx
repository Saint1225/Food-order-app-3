import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className="h-12 w-full text-yellow-400 bg-blueGray-900 text-center">
      <div className="flex flex-row justify-center gap-36 text-4xl h-full">
        <NavLink
          to="/"
          className="hover:bg-blueGray-800 rounded-lg px-3 my-1 ml-[35%]"
        >
          Home
        </NavLink>
        <NavLink
          to="meals"
          className="hover:bg-blueGray-800 rounded-lg px-3 my-1"
        >
          Menu
        </NavLink>
        <button className="ml-auto mr-4">Cart</button>
      </div>
      <dialog title="Cart" className="w-96 h-48">
        <form method="dialog">
          <button className="">Cancel</button>
          <button className="">Submit</button>
        </form>
      </dialog>
    </div>
  );
};

export default MainNavigation;
