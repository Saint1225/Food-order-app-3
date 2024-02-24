import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import CartModal from "../components/CartModal";

const MainNavigation = () => {
  const cartRef = useRef<{ openModal: () => void }>(null);

  const cartModalHandler = () => {
    cartRef.current?.openModal();
  };

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
        <button
          className="ml-auto mr-8 rounded-xl text-3xl border-solid border-orange-400 border-2 px-4 hover:bg-blueGray-800"
          onClick={cartModalHandler}
        >
          Orders
        </button>
      </div>
      <CartModal ref={cartRef} />
    </div>
  );
};

export default MainNavigation;
