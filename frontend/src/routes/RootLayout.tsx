import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { orderAction } from "../store/orderSlice";
import { fetchOrder } from "../api/order";
import MainNavigation from "./MainNavigation";

const RootLayout = () => {
  const dispatch = useDispatch();
  const { data: orderData } = useQuery({
    queryKey: ["order"],
    queryFn: fetchOrder,
  });

  useEffect(() => {
    orderData && dispatch(orderAction.replaceOrder({ meals: orderData }));
  }, [dispatch, orderData]);
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
