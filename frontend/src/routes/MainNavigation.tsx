import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className="h-12 w-full text-yellow-400 bg-blueGray-900 text-center">
      <div className="flex flex-row justify-center gap-36 text-4xl h-full overflow-hidden">
        <img src="../../public/logo.jpg" className="w-14 h-14 mr-auto ml-1" />
        <NavLink
          to="/"
          className="hover:bg-blueGray-800 rounded-lg px-3 my-1 ml-[5%]"
        >
          Home
        </NavLink>
        <NavLink
          to="meals"
          className="hover:bg-blueGray-800 rounded-lg px-3 my-1"
        >
          Menu
        </NavLink>
        <button className="ml-auto mr-8 rounded-xl text-3xl border-solid border-orange-400 border-2 px-4 hover:bg-blueGray-800">
          Orders
        </button>
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
